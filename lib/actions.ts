"use server"

import { Redis } from "@upstash/redis"
import { v4 as uuidv4 } from "uuid"


// Initialize Redis client
const redis = Redis.fromEnv()

export async function createPickupRequest(data: any) {
  try {
    // Generate a unique ID for the request
    const requestId = uuidv4()

    // Add timestamp and status to the data
    const requestData = {
      ...data,
      id: requestId,
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    // Store the request in Redis
    // Using a hash to store the request data
    await redis.hset(`pickup:${requestId}`, requestData)

    // Add to a list of all pickup requests
    await redis.lpush("pickup:requests", requestId)

    // Add to a sorted set by date for easy querying
    await redis.zadd("pickup:requests:by-date", { score: Date.now(), member: requestId })

    // Add to user's pickup requests if email exists
    if (data.email) {
      await redis.lpush(`user:${data.email}:pickups`, requestId)
    }

    return { success: true, requestId }
  } catch (error) {
    console.error("Error creating pickup request:", error)
    throw new Error("Failed to create pickup request")
  }
}

export async function getPickupRequests(page = 1, limit = 10) {
  try {
    const start = (page - 1) * limit
    const end = start + limit - 1

    // Get request IDs from the sorted set
    const requestIds = await redis.zrange("pickup:requests:by-date", start, end, { rev: true })

    if (!requestIds.length) {
      return { requests: [], total: 0 }
    }

    // Get the total count
    const total = await redis.zcard("pickup:requests:by-date")

    // Get the request data for each ID
    const requests = await Promise.all(
      requestIds.map(async (id) => {
        const data = await redis.hgetall(`pickup:${id}`)
        return data
      }),
    )

    return { requests, total }
  } catch (error) {
    console.error("Error fetching pickup requests:", error)
    throw new Error("Failed to fetch pickup requests")
  }
}

export async function getPickupRequestById(id: string) {
  try {
    const request = await redis.hgetall(`pickup:${id}`)

    if (!request || Object.keys(request).length === 0) {
      return null
    }

    return request
  } catch (error) {
    console.error(`Error fetching pickup request ${id}:`, error)
    throw new Error("Failed to fetch pickup request")
  }
}

export async function updatePickupRequestStatus(id: string, status: string) {
  try {
    // Update the status in the hash
    await redis.hset(`pickup:${id}`, { status })

    // Add to status-specific sets for easy filtering
    await redis.sadd(`pickup:status:${status}`, id)

    // Remove from previous status sets (would need to know previous status)
    // This is a simplification - in a real app, you'd track the previous status

    return { success: true }
  } catch (error) {
    console.error(`Error updating pickup request ${id}:`, error)
    throw new Error("Failed to update pickup request")
  }
}

export async function getUserPickupRequests(email: string) {
  try {
    // Get the user's pickup request IDs
    const requestIds = await redis.lrange(`user:${email}:pickups`, 0, -1)

    if (!requestIds.length) {
      return []
    }

    // Get the request data for each ID
    const requests = await Promise.all(
      requestIds.map(async (id) => {
        const data = await redis.hgetall(`pickup:${id}`)
        return data
      }),
    )

    return requests
  } catch (error) {
    console.error(`Error fetching user pickup requests for ${email}:`, error)
    throw new Error("Failed to fetch user pickup requests")
  }
}


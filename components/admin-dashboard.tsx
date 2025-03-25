"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { format } from "date-fns"
import { MoreHorizontal, Truck, CheckCircle, XCircle, Clock, BarChart3, Users, Recycle, Calendar } from "lucide-react"
import { updatePickupRequestStatus } from "@/lib/actions"

interface AdminDashboardProps {
  initialRequests: any[]
  totalRequests: number
}

export function AdminDashboard({ initialRequests, totalRequests }: AdminDashboardProps) {
  const [requests, setRequests] = useState(initialRequests)

  const statusColors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    scheduled: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  }

  const handleStatusUpdate = async (id: string, status: string) => {
    try {
      await updatePickupRequestStatus(id, status)

      // Update the local state
      setRequests(requests.map((request) => (request.id === id ? { ...request, status } : request)))
    } catch (error) {
      console.error("Error updating status:", error)
    }
  }

  return (
    <Tabs defaultValue="requests" className="space-y-6">
      <TabsList>
        <TabsTrigger value="requests">Pickup Requests</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>

      <TabsContent value="requests" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalRequests}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{requests.filter((r) => r.status === "pending").length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{requests.filter((r) => r.status === "scheduled").length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{requests.filter((r) => r.status === "completed").length}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Pickup Requests</CardTitle>
            <CardDescription>Manage and track all e-waste pickup requests.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Item Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests.length > 0 ? (
                  requests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">{request.name}</TableCell>
                      <TableCell>
                        {request.pickupDate ? format(new Date(request.pickupDate), "MMM d, yyyy") : "N/A"}
                      </TableCell>
                      <TableCell>{request.itemType}</TableCell>
                      <TableCell>
                        <Badge className={statusColors[request.status] || ""}>{request.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleStatusUpdate(request.id, "pending")}>
                              <Clock className="mr-2 h-4 w-4" />
                              <span>Mark as Pending</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleStatusUpdate(request.id, "scheduled")}>
                              <Calendar className="mr-2 h-4 w-4" />
                              <span>Mark as Scheduled</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleStatusUpdate(request.id, "completed")}>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              <span>Mark as Completed</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleStatusUpdate(request.id, "cancelled")}>
                              <XCircle className="mr-2 h-4 w-4" />
                              <span>Mark as Cancelled</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-4">
                      No pickup requests found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="analytics" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Items Recycled</CardTitle>
              <Recycle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">573</div>
              <p className="text-xs text-muted-foreground">+5% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pickups Completed</CardTitle>
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">432</div>
              <p className="text-xs text-muted-foreground">+18% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recycling Metrics</CardTitle>
            <CardDescription>Monthly recycling statistics and trends.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <BarChart3 className="h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                Analytics visualization would appear here in a production environment.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}


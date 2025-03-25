"use client"

import { useEffect, useState, type ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface StatsCounterProps {
  value: number
  label: string
  icon?: ReactNode
}

export default function StatsCounter({ value, label, icon }: StatsCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 50
    const stepValue = value / steps
    const stepTime = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [value])

  return (
    <Card>
      <CardContent className="p-6 text-center">
        {icon && <div className="flex justify-center mb-4">{icon}</div>}
        <div className="text-4xl font-bold mb-2">{count.toLocaleString()}</div>
        <div className="text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  )
}


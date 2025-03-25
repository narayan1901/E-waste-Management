import { getPickupRequests } from "@/lib/actions"
import { AdminDashboard } from "@/components/admin-dashboard"

export default async function AdminPage() {
  const { requests, total } = await getPickupRequests(1, 10)

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage e-waste pickup requests and track recycling metrics.</p>
        </div>

        <AdminDashboard initialRequests={requests} totalRequests={total} />
      </div>
    </div>
  )
}


import { Suspense } from "react"
import AdminDashboard from "./AdminDashboard"
import Loading from "./loading"

export default function AdminPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <Suspense fallback={<Loading />}>
        <AdminDashboard />
      </Suspense>
    </div>
  )
}


import DashboardHeader from '../components/DashboardHeader'
import StatCard from '../components/StatCard'
import UserTable from '../components/UserTable'

export default function Dashboard() {
  const users = []

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <DashboardHeader />

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <StatCard label="Total Users" value="..." />
          <StatCard label="Users this month" value="..." />
        </section>

        <UserTable users={users} />
      </div>
    </div>
  )
}
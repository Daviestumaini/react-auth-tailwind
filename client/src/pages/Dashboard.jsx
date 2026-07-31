import { useEffect, useState } from 'react'
import DashboardHeader from '../components/DashboardHeader'
import StatCard from '../components/StatCard'
import UserTable from '../components/UserTable'

const USERS_API = 'http://localhost:5001/api/users'

export default function Dashboard() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(USERS_API)
        const resData = await response.json()

        if (!response.ok || !resData.success) {
          throw new Error(resData.message || 'Failed to load users.')
        }

        setUsers(resData.users)
      } catch (err) {
        setError(err.message || 'Something went wrong loading users.')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <DashboardHeader />

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <StatCard label="Total Users" value={loading ? '...' : users.length} />
          <StatCard
            label="Users this month"
            value={loading ? '...' : users.filter(u => u.joinedAt?.startsWith('2026-07')).length}
          />
        </section>

        {error && <p className="mt-6 text-red-500">{error}</p>}
        {loading ? (
          <p className="mt-6 text-slate-400">Loading users...</p>
        ) : (
          <UserTable users={users} />
        )}
      </div>
    </div>
  )
}
const COLUMNS = [
  'First Name',
  'Last Name',
  'Username',
  'Email',
  'Phone',
  'DOB',
  'Gender',
  'Created At',
]

export default function UserTable({ users = [] }) {
  return (
    <section className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
      <div className="border-b border-slate-800 px-6 py-4">
        <h2 className="text-lg font-semibold">User list</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-800 text-sm">
          <thead className="bg-slate-950/70 text-left text-slate-300">
            <tr>
              {COLUMNS.map((col) => (
                <th key={col} className="px-6 py-3 font-medium">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-200">
            {users.length === 0 ? (
              <tr>
                <td className="px-6 py-4" colSpan={COLUMNS.length}>Loading...</td>
              </tr>
            ) : (
              users.map((user, i) => (
                <tr key={user.id ?? i}>
                  <td className="px-6 py-4">{user.firstName}</td>
                  <td className="px-6 py-4">{user.lastName}</td>
                  <td className="px-6 py-4">{user.username}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4">{user.dob}</td>
                  <td className="px-6 py-4">{user.gender}</td>
                  <td className="px-6 py-4">{user.createdAt}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
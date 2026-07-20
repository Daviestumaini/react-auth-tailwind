export default function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
      <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{label}</p>
      <p className="mt-3 text-4xl font-semibold text-white">{value}</p>
    </div>
  )
}
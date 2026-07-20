export default function AuthCard({ children, className = '' }) {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <div
        className={`mx-auto rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12 ${className}`}
      >
        {children}
      </div>
    </div>
  )
}
export default function AuthCard({ children, className = '' }) {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 flex items-center justify-center">
      <div
        className={`w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30 ${className}`}
      >
        {children}
      </div>
    </div>
  )
}
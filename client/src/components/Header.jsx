import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex items-center justify-between rounded-full border border-slate-800 bg-slate-900/70 px-6 py-4 backdrop-blur">
      <Link to="/" className="text-lg font-semibold tracking-wide">SecureAuth</Link>
      <nav className="flex gap-6 text-sm text-slate-300 items-center">
        <Link to="/login" className="transition hover:text-white">Login</Link>
        <Link to="/register" className="rounded-full bg-cyan-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-400">
          Register
        </Link>
      </nav>
    </header>
  )
}
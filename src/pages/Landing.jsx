import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'

export default function Landing() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-8">
      <Header />

      <section className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
            Modern authentication, made simple
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Build trust with a polished auth experience.
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
            Create an account, sign in securely, and manage users from one elegant dashboard.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/register"><Button>Create account</Button></Link>
            <Link to="/login"><Button variant="outline">Login</Button></Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30">
          <h2 className="text-xl font-semibold">Why teams love it</h2>
          <div className="mt-6 space-y-4 text-sm text-slate-300">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="font-semibold text-white">Fast onboarding</p>
              <p className="mt-2">Collect account details with a streamlined form and clear validation.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="font-semibold text-white">Insightful admin view</p>
              <p className="mt-2">Monitor signups and track user activity from a polished dashboard.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
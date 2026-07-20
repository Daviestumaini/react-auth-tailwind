import { Link } from 'react-router-dom'
import FormInput from '../components/FormInput'
import Button from '../components/Button'

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30 lg:flex-row lg:gap-10 lg:p-12">
        <div className="max-w-md space-y-4 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Welcome back</p>
          <h1 className="text-3xl font-semibold sm:text-4xl">Sign in to your account</h1>
          <p className="text-slate-300">Access your workspace and keep your authentication flow moving.</p>
        </div>

        <form className="mt-8 w-full max-w-md space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
          <p className="text-red-500"></p>

          <FormInput id="email" label="Email" type="email" required placeholder="name@example.com" />
          <FormInput id="password" label="Password" type="password" required placeholder="••••••••" />

          <Button type="submit" className="w-full">Login</Button>

          <p className="text-center text-sm text-slate-400">
            New here?{' '}
            <Link to="/register" className="font-medium text-cyan-400 hover:text-cyan-300">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
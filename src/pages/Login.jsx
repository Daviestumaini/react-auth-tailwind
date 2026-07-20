import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthCard from '../components/AuthCard'
import AuthIntro from '../components/AuthIntro'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import AuthFooter from '../components/AuthFooter'
import { loginUser } from '../utils/auth'

export default function Login() {
  const [form, setForm] = useState({ identifier: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const result = loginUser(form.identifier, form.password)
    if (!result.success) {
      setError(result.error)
      return
    }

    navigate('/dashboard')
  }

  return (
    <AuthCard className="mx-auto flex max-w-6xl flex-col items-center justify-center lg:flex-row lg:gap-10">
      <AuthIntro
        eyebrow="Welcome back"
        heading="Sign in to your account"
        description="Access your workspace and keep your authentication flow moving."
      />

      <form
        onSubmit={handleSubmit}
        className="mt-8 w-full max-w-md space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-6"
      >
        <p className="text-red-500">{error}</p>

        <FormInput
          id="identifier"
          label="Email or Username"
          type="text"
          required
          value={form.identifier}
          onChange={handleChange}
          placeholder="name@example.com"
        />
        <FormInput
          id="password"
          label="Password"
          type="password"
          required
          value={form.password}
          onChange={handleChange}
          placeholder="••••••••"
        />

        <Button type="submit" className="w-full">Login</Button>

        <AuthFooter text="New here?" linkText="Create an account" linkTo="/register" />
      </form>
    </AuthCard>
  )
}
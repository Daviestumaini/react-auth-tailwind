import {useState} from "react"
import { useNavigate } from "react-router-dom"
import FormInput from "../components/FormInput"
import Button from "../components/Button"
import AuthCard from "../components/AuthCard"
import AuthFooter from "../components/AuthFooter"
import { loginUser } from "../utils/auth"
import { loginForm } from "../components/LoginForm"
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
    <AuthCard>
      <AuthIntro
        eyebrow="Welcome back"
        heading="Sign in to your account"
        description="Access your workspace and keep your authentication flow moving."
        align="text-center"
      />

      <form onSubmit={handleSubmit} className="mt-6 w-full space-y-4">
        {error && <p className="text-red-500 text-sm">{error}</p>}

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
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FormInput from "../components/FormInput"
import Button from "../components/Button"
import AuthCard from "../components/AuthCard"
import AuthFooter from "../components/AuthFooter"
import { loginUser } from "../utils/auth"
import AuthIntro from "../components/AuthIntro"
// removed: import { loginForm } from "../components/LoginForm"  (unused)

export default function Login() {
  const [form, setForm] = useState({ identifier: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const result = await loginUser(form.identifier, form.password)
    if (!result.success) {
      setError(result.error)
      return
    }

    navigate('/dashboard')
  }

  // ...rest unchanged
}

export default Login;
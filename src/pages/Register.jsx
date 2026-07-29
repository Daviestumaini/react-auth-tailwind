import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthCard from '../components/AuthCard'
import AuthIntro from '../components/AuthIntro'
import FormInput from '../components/FormInput'
import FormSelect from '../components/FormSelect'
import Button from '../components/Button'
import AuthFooter from '../components/AuthFooter'
import { registerUser } from '../utils/auth'
// removed: import RegisterForm from '../components/RegisterForm'  (unused)

const initialForm = {
  firstName: '', lastName: '', username: '', email: '',
  phone: '', dob: '', gender: '', password: '', confirmPassword: '',
}

export default function Register() {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    const result = await registerUser(form)
    if (!result.success) {
      setError(result.error)
      return
    }

    navigate('/login')
  }

  // ...rest unchanged
}
export default Register;
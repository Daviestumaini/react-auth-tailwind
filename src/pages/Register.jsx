import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthCard from '../components/AuthCard'
import AuthIntro from '../components/AuthIntro'
import FormInput from '../components/FormInput'
import FormSelect from '../components/FormSelect'
import Button from '../components/Button'
import AuthFooter from '../components/AuthFooter'
import { registerUser } from '../utils/auth'

const initialForm = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  phone: '',
  dob: '',
  gender: '',
  password: '',
  confirmPassword: '',
}

export default function Register() {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    const result = registerUser(form)
    if (!result.success) {
      setError(result.error)
      return
    }

    navigate('/login')
  }

  return (
    <AuthCard className="max-w-5xl">
      <div className="mb-8">
        <AuthIntro
          eyebrow="Create account"
          heading="Start your secure journey"
          description="Join the platform by filling out the details below."
        />
      </div>

      <p className="text-red-500">{error}</p>
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <FormInput id="firstName" label="First Name" type="text" value={form.firstName} onChange={handleChange} />
        <FormInput id="lastName" label="Last Name" type="text" required value={form.lastName} onChange={handleChange} />
        <FormInput id="username" label="Username" type="text" required value={form.username} onChange={handleChange} />
        <FormInput id="email" label="Email" type="email" required value={form.email} onChange={handleChange} />
        <FormInput id="phone" label="Phone" type="tel" required value={form.phone} onChange={handleChange} />
        <FormInput id="dob" label="Date of Birth" type="date" required value={form.dob} onChange={handleChange} />

        <FormSelect
          id="gender"
          label="Gender"
          required
          value={form.gender}
          onChange={handleChange}
          options={[
            { value: '', label: 'Select gender' },
            { value: 'female', label: 'Female' },
            { value: 'male', label: 'Male' },
          ]}
        />

        <FormInput id="password" label="Password" type="password" required value={form.password} onChange={handleChange} />
        <div className="md:col-span-2">
          <FormInput
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            required
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit">Create account</Button>
          <AuthFooter text="Already a member?" linkText="Login here" linkTo="/login" />
        </div>
      </form>
    </AuthCard>
  )
}
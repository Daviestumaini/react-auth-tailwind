import { Link } from 'react-router-dom'
import FormInput from '../components/FormInput'
import Button from '../components/Button'

export default function Register() {
  return (
    <div className="bg-slate-950 px-4 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
        <div className="mb-8 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Create account</p>
          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Start your secure journey</h1>
          <p className="mt-3 text-slate-300">Join the platform by filling out the details below.</p>
        </div>

        <p className="text-red-500"></p>
        <form className="grid gap-4 md:grid-cols-2">
          <FormInput id="firstName" label="First Name" type="text" />
          <FormInput id="lastName" label="Last Name" type="text" required />
          <FormInput id="username" label="Username" type="text" required />
          <FormInput id="email" label="Email" type="email" required />
          <FormInput id="phone" label="Phone" type="tel" required />
          <FormInput id="dob" label="Date of Birth" type="date" required />

          <div>
            <label htmlFor="gender" className="mb-2 block text-sm font-medium text-slate-200">Gender</label>
            <select
              id="gender" name="gender" required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            >
              <option value="">Select gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>

          <FormInput id="password" label="Password" type="password" required />
          <div className="md:col-span-2">
            <FormInput id="confirmPassword" label="Confirm Password" type="password" required />
          </div>

          <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit">Create account</Button>
            <p className="text-sm text-slate-400">
              Already a member?{' '}
              <Link to="/login" className="font-medium text-cyan-400 hover:text-cyan-300">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
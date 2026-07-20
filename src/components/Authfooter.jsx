import { Link } from 'react-router-dom'

export default function AuthFooter({ text, linkText, linkTo }) {
  return (
    <p className="text-center text-sm text-slate-400">
      {text}{' '}
      <Link to={linkTo} className="font-medium text-cyan-400 hover:text-cyan-300">
        {linkText}
      </Link>
    </p>
  )
}
export default function Button({ children, variant = 'primary', ...props }) {
  const base = 'rounded-full px-6 py-3 font-semibold transition'
  const variants = {
    primary: 'bg-cyan-500 text-slate-950 hover:bg-cyan-400',
    outline: 'border border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-white',
  }
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  )
}
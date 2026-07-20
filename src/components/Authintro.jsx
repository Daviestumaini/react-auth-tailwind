export default function AuthIntro({ eyebrow, heading, description, align = 'text-center lg:text-left' }) {
  return (
    <div className={`max-w-md space-y-4 ${align}`}>
      <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">{eyebrow}</p>
      <h1 className="text-3xl font-semibold sm:text-4xl">{heading}</h1>
      <p className="text-slate-300">{description}</p>
    </div>
  )
}
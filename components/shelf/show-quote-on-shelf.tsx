export default function ShowQuoteOnShelf() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-[var(--color-surface-border)] bg-[color:color-mix(in_srgb,var(--color-surface)_88%,transparent)] px-6 py-10 shadow-[0_16px_50px_var(--color-shadow)] sm:px-10">
      <div className="absolute inset-y-0 left-0 w-1.5 bg-[linear-gradient(180deg,var(--color-primary),var(--color-secondary))]" />

      <div className="relative space-y-5 pl-4 sm:pl-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
          Quote of the day
        </p>

        <blockquote className="max-w-4xl text-2xl leading-10 font-medium tracking-tight text-[var(--color-primary)] sm:text-3xl">
          &quot;There is some good in this world, and it&apos;s worth fighting
          for.&quot;
        </blockquote>

        <p className="text-sm leading-6 text-[var(--color-muted)] sm:text-base">
          J.R.R. Tolkien, <span className="italic">The Two Towers</span>
        </p>
      </div>
    </section>
  )
}

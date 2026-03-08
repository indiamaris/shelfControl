import LoginForm from "@components/auth/login-form"
import PageShell from "@components/ui/page-shell"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import { authOptions } from "@lib/auth/auth-options"

export default async function LoginPage() {
  const session = await getServerSession(authOptions)

  if (session?.user) {
    redirect("/shelf")
  }

  return (
    <PageShell
      eyebrow="Shelf Control"
      title="Sign in to your shelf"
      description="Use your email and password to access your reading dashboard, categories, and quotes."
    >
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[28px] border border-[var(--color-surface-border)] bg-[color:color-mix(in_srgb,var(--color-primary)_8%,transparent)] p-6 shadow-[0_16px_50px_var(--color-shadow)] sm:p-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
              Dev access
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-primary)]">
              Welcome back
            </h2>
            <p className="max-w-xl text-base leading-7 text-[var(--color-muted)]">
              Start with the seeded admin account to test protected views and the
              shelf dashboard. You can later replace this with OAuth or a full
              registration flow.
            </p>
            <div className="rounded-[24px] border border-[var(--color-surface-border)] bg-[var(--color-surface)] p-5">
              <p className="text-sm font-semibold text-[var(--color-primary)]">
                Suggested seeded account
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Email: <span className="font-medium text-[var(--color-text)]">julian@example.com</span>
              </p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                Password: <span className="font-medium text-[var(--color-text)]">password123</span>
              </p>
            </div>
          </div>
        </div>

        <div>
          <LoginForm />
        </div>
      </section>
    </PageShell>
  )
}

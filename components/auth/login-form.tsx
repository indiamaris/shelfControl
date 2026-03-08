"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")
    setIsLoading(true)

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    setIsLoading(false)

    if (result?.error) {
      setError("Invalid email or password.")
      return
    }

    router.push("/shelf")
    router.refresh()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-[28px] border border-[var(--color-surface-border)] bg-[var(--color-surface)] p-6 shadow-[0_16px_50px_var(--color-shadow)] sm:p-8"
    >
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-[var(--color-primary)]">
          Email
        </label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="julian@example.com"
          className="w-full rounded-2xl border border-[var(--color-surface-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-secondary)]"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-[var(--color-primary)]">
          Password
        </label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Enter your password"
          className="w-full rounded-2xl border border-[var(--color-surface-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-secondary)]"
          required
        />
      </div>

      {error ? (
        <p className="rounded-2xl border border-[color:color-mix(in_srgb,var(--color-accent)_22%,transparent)] bg-[color:color-mix(in_srgb,var(--color-accent)_10%,transparent)] px-4 py-3 text-sm text-[var(--color-text)]">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex items-center justify-center rounded-2xl bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isLoading ? "Signing in..." : "Sign in"}
      </button>
    </form>
  )
}

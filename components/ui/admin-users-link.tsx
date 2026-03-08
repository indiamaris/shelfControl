import Link from "next/link"

import { canViewAdminNavigation } from "@lib/auth/can-view-admin-navigation"

export default async function AdminUsersLink() {
  const shouldShowAdminLink = await canViewAdminNavigation()

  if (!shouldShowAdminLink) {
    return null
  }

  return (
    <Link
      href="/users"
      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-surface-border)] bg-[color:color-mix(in_srgb,var(--color-primary)_16%,transparent)] px-4 py-2 text-sm font-semibold text-[var(--color-primary)] transition hover:border-[var(--color-secondary)] hover:text-[var(--color-accent)]"
    >
      <span aria-hidden="true">✦</span>
      <span>Admin</span>
    </Link>
  )
}

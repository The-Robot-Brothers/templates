'use client'

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const links = [
    { title: 'Login 1', href: '/login1' },
    { title: 'Login 2', href: '/login2' },
  ]

  return (
    <main className="flex items-center justify-center bg-gray-950 min-h-screen gap-4">
      {links.map((link) => (
        <div
          key={link.href}
          className="p-4 border rounded-md hover:opacity-85"
          onClick={() => router.push(link.href)}
        >
          <span>{link.title}</span>
        </div>
      ))}
    </main>
  )
}

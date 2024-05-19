'use client'

import { useRouter } from "next/navigation"
import React from "react"
import { useAuthentication } from "~/hooks/use-authentication"

export default function Home() {
  const { login } = useAuthentication()
  const router = useRouter()

  const [isLoading, setIsLoading] = React.useState(false)
  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)

  async function onSubmitLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    const data = {
      email: emailRef.current?.value as string,
      password: passwordRef.current?.value as string,
    }

    await login(data)
      .finally(() => {
        router.push('/home')
        setIsLoading(false)
      })
  }

  return (
    <main className="flex items-center justify-center bg-gray-950 min-h-screen">
      <div className="border border-gray-800 rounded-md p-4 min-w-80">
        <h1 className="text-center text-2xl mb-4">Welcome</h1>

        <form onSubmit={onSubmitLogin} className="grid gap-2">
          <div className="grid">
            <label htmlFor="email">Email</label>
            <input 
              autoFocus
              id="email" 
              type="email" 
              ref={emailRef} 
              required 
              className="text-gray-950 h-10 rounded-md px-2" 
            />
          </div>

          <div className="grid">
            <label htmlFor="password">Password</label>
            <input 
              id="password" 
              type="password" 
              ref={passwordRef} 
              required 
              minLength={8}
              className="text-gray-950 h-10 rounded-md px-2" 
            />
          </div>

          <button 
            className="
              mt-2 bg-cyan-500 text-black w-full h-10 rounded-md font-semibold transition-all cursor-pointer 
              hover:brightness-125
              disabled:bg-gray-500 disabled:cursor-progress
            " 
            type="submit"
            disabled={isLoading}
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  )
}

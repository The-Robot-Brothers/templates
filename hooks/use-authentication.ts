import React from 'react'
import { Login } from '~/interfaces/login-interface'
import { timeout } from '~/utils/timeout'

type UserAuthtenticated = {
    id: string
    email: string
    isAuthenticated: boolean
}

export function useAuthentication() {
  const [user, setUser] = React.useState<UserAuthtenticated | null>(null)

  async function login (data: Login) {
      await timeout(data, 2000)
  }

  async function logout () {
      await timeout('logout', 2000)
  }

  return { user, setUser, login, logout }
}

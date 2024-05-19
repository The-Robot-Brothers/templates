'use client'

import { useRouter } from "next/navigation"
import React from "react"
import { useAuthentication } from "~/hooks/use-authentication"

export default function Home () {
    const { logout } = useAuthentication()
    const [isLoading, setIsLoading] = React.useState(false)
    const router = useRouter()

    async function handleLogout () {
        setIsLoading(true)

        await logout().finally(() => {
            router.push('/')
            setIsLoading(false)
        }
}

    return (
        <div>
            HOME

            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
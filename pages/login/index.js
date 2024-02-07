import { useRouter } from 'next/router'
import {setSession, getSession} from '@/utils/session'

export default function Login() {
    const router = useRouter()

    async function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('http://localhost:8083/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })

        if (response.ok) {
            const sessionData = await response.json()

            setSession('token', sessionData)

            router.push('/home')
        } else {
            console.error('Login failed')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    )
}
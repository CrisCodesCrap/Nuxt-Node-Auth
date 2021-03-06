import { Router } from "vue-router"

export const logout = (user: any) => {
    const router: Router = useRouter()
    localStorage.removeItem('sessionId')
    user = null
    router.push('/login')
}
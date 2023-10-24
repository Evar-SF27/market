import Head from 'next/head'
import { AuthForm } from '@/components'

const Login = () => {
  return (
    <>
        <Head>
            <title>Market | Sign In</title>
        </Head>
        <div className="h-[100vh] bg-secondary-100 overflow-y-scroll">
            <AuthForm />
        </div>
    </>
  )
}

export default Login

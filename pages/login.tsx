import Head from 'next/head'
import { AuthForm } from '@/components'

const Login = () => {
  return (
    <>
        <Head>
            <title>Market | Sign In</title>
        </Head>
        <div>
            <AuthForm />
        </div>
    </>
  )
}

export default Login

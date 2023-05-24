import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getSession, signOut } from 'next-auth/react'
import { NextPageContext } from 'next'
import useCurrentuser from '@/hooks/useCurrentUser'
import Navbar from '@/components/Navbar'
import BillBoard from '@/components/BillBoard'

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps(context: NextPageContext){
  const session =await getSession(context);

  if(!session){
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
      props: {}
    }
}

export default function Home() {
  const {data: user} = useCurrentuser();
  console.log(user);

  return (
    <>
      <Navbar/>
      <BillBoard/>
    </>
  )
}

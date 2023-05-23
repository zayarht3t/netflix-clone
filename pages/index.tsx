import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getSession, signOut } from 'next-auth/react'
import { NextPageContext } from 'next'

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
  return (
    <div className='text-green-400'>
      Netflix clone
      <div className='bg-white' onClick={()=>signOut()}>logout</div>
    </div>
  )
}

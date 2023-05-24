import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getSession, signOut } from 'next-auth/react'
import { NextPageContext } from 'next'
import useCurrentuser from '@/hooks/useCurrentUser'
import Navbar from '@/components/Navbar'
import BillBoard from '@/components/BillBoard'
import Movielist from '@/components/Movielist'
import useMovielist from '@/hooks/useMovielist'
import useFavorite from '@/hooks/useFavorite'

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
  const {data: movies = []} = useMovielist();
  const {data: favorites = []} = useFavorite();

  return (
    <>
      <Navbar/>
      <BillBoard/>
      <div>
        <Movielist title='Trending Now' data={movies}/>
        <Movielist title='My List' data={favorites}/>
      </div>
    </>
  )
}

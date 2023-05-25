
import { Inter } from 'next/font/google'
import { getSession } from 'next-auth/react'
import { NextPageContext } from 'next'
import Navbar from '@/components/Navbar'
import BillBoard from '@/components/BillBoard'
import Movielist from '@/components/Movielist'
import useMovielist from '@/hooks/useMovielist'
import useFavorite from '@/hooks/useFavorite'
import InfoModal from '@/components/InfoModal'
import useInfoModal from '@/hooks/useInfoModal'

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
  const{isOpen,closeModal}= useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={()=>closeModal()}/>
      <Navbar/>
      <BillBoard/>
      <div>
        <Movielist title='Trending Now' data={movies}/>
        <Movielist title='My List' data={favorites}/>
      </div>
    </>
  )
}

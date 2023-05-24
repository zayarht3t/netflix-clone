import useCurrentuser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react'

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

const Profile = () => {
    const {data: user} = useCurrentuser();
    const router = useRouter();
  return (
    <div className='flex  items-center h-full justify-center'>
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl md:text-6xl text-white'>Who is watching?</h1>
            <div className='flex items-center justify-center gap-8 mt-8'>
                <div onClick={()=>router.push('/')}>
                    <div className='group flex-row w-44 mx-auto'>
                        <div className='w-44 h-44 rounded-md border-2 border-transparent group-hover:border-white group-hover:cursor-pointer'>
                            <img src="/images/default-blue.png" alt="profile" />
                        </div>
                        
                        <div className='items-center flex justify-center mt-3 text-2xl group-hover:text-white text-gray-500'>
                            {user?.currentUser?.name}
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
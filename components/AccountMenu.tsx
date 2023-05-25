import useCurrentuser from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';
import React from 'react'

interface AccountMenuProps {
    visible?: boolean
}

const AccountMenu:React.FC<AccountMenuProps> = ({visible}) => {
    if(!visible){
        return null;
    }
    const {data} = useCurrentuser();
  return (
    <div className='bg-black w-56 absolute top-14 right-0 py-5 border-2 border-gray-800 flex '>
        <div className='flex flex-col'>
            <div className='flex flex-row  px-3 items-center gap-3 group/item w-full'>
                <img src="/images/default-blue.png" className='w-8 rounded-md' alt="" />
                <p className='text-white text-sm group-hover/item:underline'>
                    {data?.currentUser?.name}
                </p>
                
            </div>
            <hr className=' border-0 bg-gray-600 h-px my-4'/>
            <div onClick={()=>signOut()} className='flex flex-row  px-3 items-center gap-3 group/item text-sm hover:underline text-white text-center'>
                Sign out of Netflix
            </div>
        </div>

    </div>
  )
}

export default AccountMenu
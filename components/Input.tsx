
import React, { FC } from 'react'

interface InputProps {
    id: string,
    type: string,
    value: string,
    label: string,
    onChange: any
}

const Input:FC<InputProps> = ({
        id,
        type,
        value,
        label,
        onChange
}) => {
  return (
    <div className='relative '>
        <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className='
        w-full
            px-6
            pt-6
            pb-1
            text-white 
            bg-neutral-700
            rounded-md
            block
            focus:outline-none
            focus:ring-0
            peer
            apperance-none
            text-md
        '
        placeholder=' '
        />
        <label htmlFor={id}
            className='
                absolute
                text-md
                text-zinc-400
                top-4
                left-6
                z-10
                scale-75
                duration-150
                transform
                -translate-y-3
                origin-[0]
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-3
            '
        >{label}</label>        
    </div>

  )
}

export default Input
import Input from '@/components/Input'
import React, { useCallback, useState } from 'react'


const Auth = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [varient,setVarient] = useState("login");

    const toggleVarient = useCallback(()=>{
        setVarient((currentVarient)=>{
            return currentVarient === "login"? "register" : "login";
        })
    },[])
  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-cover bg-fixed bg-no-repeat bg-center'>
        <div className='bg-black w-full h-full lg:bg-opacity-50'>
            <nav className='px-12 py-5'>
                <img src="/images/logo.png" alt="logo" className='h-12' />
            </nav>
            <div className='flex  justify-center'>
                <div className='bg-black bg-opacity-70 px-16 py-16 self-center lg:w-2/5 lg:max-w-md rounded-md w-full'>
                    <h2 className='font-bold text-white text-3xl font-serif my-5'>
                        {varient === 'login' ? 'Login' : 'Register'}
                    </h2>
                    <div className='flex flex-col gap-4'>
                        {
                            varient === 'register' && (
                                <Input
                                    type='text'
                                    value={name}
                                    onChange={(e:any) => setName(e.target.value)}
                                    label='Name'
                                    id='name'
                                />
                            )
                        }
                        
                        <Input
                            type='email'
                            value={email}
                            onChange={(e:any) => setEmail(e.target.value)}
                            label='Email'
                            id='email'
                        />
                        <Input
                            type='password'
                            value={password}
                            onChange={(e:any) => setPassword(e.target.value)}
                            label='Password'
                            id='password'
                        />
                        <button
                        className='
                            w-full
                            bg-red-600
                            rounded
                            text-white
                            hover:bg-red-700
                            transition
                            py-3
                            mt-6
                        '
                        >
                            {varient === 'login' ? "Login" : "Register"}
                        </button>
                        <p className='text-neutral-500 mt-8'>
                            {
                                varient === 'login'? "first time using Netflix?" : "Already have an account?"
                            }
                            <span className='text-white ml-3 hover:underline cursor-pointer' onClick={toggleVarient}>
                                {
                                    varient === 'login' ? "Create account" : 'login'
                                }
                            </span>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth
import React from 'react'
import { useForm } from 'react-hook-form'
import { Signin } from '../../services/apis/auths'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmitLogin = async (data) => {
        try {
            const user = await Signin(data)
            localStorage.setItem('userReact', JSON.stringify(user?.data))
            navigate('/')
        } catch (error) {
            console.log(error);
        }
        
    }
 

  return (
    <div className='w-full flex justify-center'>
        <form action="" onSubmit={handleSubmit(onSubmitLogin)} className='flex flex-col mt-8 bg-gray-300 w-[400px] rounded-[8px] p-4'>
            <div className='flex flex-col gap-4'>
                <label htmlFor="">Email</label>
                <input {...register('email', { required : true, minLength : 3})} type="email" name='email' />
            </div>
            {errors?.email?.type === "required" ? <p className='text-red-600'>Nhập vào giá trị email!</p> : ""}
            <div className='flex flex-col gap-4'>
                <label htmlFor="">Password</label>
                <input {...register('password', { required : true, minLength : 3})} type="password" name='password' />
            </div>
            {errors?.password?.type === "required" ? <p className='text-red-600'>Nhập vào giá trị password!</p> : ""}
            <button className='p-2 rounded bg-blue-400 mt-4'>Login</button>
        </form>
    </div>
  )
}

export default Login
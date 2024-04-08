import { useState } from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import authService from '../appwriteServices/auth.js'
import {login} from '../feature/authSlice.js'
import {useNavigate} from 'react-router-dom'
import {Button, Input} from './index.js'

const Login = () => {
    const [error, setError] = useState("");
    const {handleSubmit, register} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginUser = async(data) => {
        setError("")
        try{
            const session = await authService.loginAccount(data)

            if(session){
                const userData = await authService.getCurrentUser();
                if(userData){
                    dispatch(login({userData}));
                    navigate("/");
                }
            }
        }catch(err){
            setError(err)
        }
    }
  return (
    <>
        <div className="max-w-[550px] px-2 py-10 bg-slate-300 rounded-xl mt-5 mb-5 mx-auto">
            <div className="mt-4 text-center mb-4">
                <p className='mb-1'>Logo</p>
                <h3 className='text-2xl font-bold mb-1'>Sign In to your account</h3>
                <p className='font-semibold text-gray-600'>Don&apos;t have any account? <a href="">Sign Up</a></p>
            </div>
            <form onSubmit={handleSubmit(loginUser)} className='text-center px-14'>
                {error ? <h4>{error}</h4> : null}
                <Input 
                    label="Email"
                    type="email"
                    placeholder="Enter Your Email"
                    {...register("email",{
                        required: true,
                        validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                    })}
                />
                <Input
                    label="password"
                    type="password"
                    placeholder="Enter Your Password"
                    {...register("password", {
                        required: true
                    })}
                />

                <Button type="submit">Login</Button>
            </form>
        </div>
    </>
  )
}

export default Login
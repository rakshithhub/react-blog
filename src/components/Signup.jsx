import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwriteServices/auth";
import { useDispatch } from 'react-redux';
import { login } from "../feature/authSlice";
import { Button, Input } from './index.js'

const Signup = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {handleSubmit, register} = useForm();

  const createUser = async (data) => {
    try{
        const session = await authService.createAccount(data);

        if(session){
            const userData = await authService.getCurrentUser();
            if(userData){
                dispatch(login({userData}));
                navigate('/')
            }
        }
    }catch(error){
        setError(error);
    }
  }

  return (
    <div className="max-w-[550px] px-2 py-10 bg-slate-300 rounded-xl mt-5 mb-5 mx-auto">
      <div className="mt-4 text-center mb-4">
        <p className="mb-1">Logo</p>
        <h3 className="text-2xl font-bold mb-1">Sign Up to your account</h3>
        <p className="font-semibold text-gray-600">
        Already have an account?&nbsp; <Link href="">Sign In</Link>
        </p>
      </div>
      <form onSubmit={handleSubmit(createUser)} action=""  className="text-center px-14">
        {error ? <h3>{error}</h3> : null}
        <Input
            label = "Full Name"
            type = "text"
            placeholder = "Enter Your Full Name"
            {...register('fullName', {
                required: true
            })}
        />

        <Input 
            label = "Eamil"
            type = "email"
            placeholder = "Enter Your Email"
            {...register("email", {
                required: true,
                validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
            })}
        />

        <Input 
            label = "Password"
            type = "password"
            placeholder = "Enter Your Password"
            {...register("password", {
                required: true
            })}
        />

        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};

export default Signup;

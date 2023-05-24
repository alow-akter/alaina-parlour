import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Singup = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { createUser, upDateUser, googleProviderLogin } = useContext(AuthContext)
    const [singupError, setSingupError] = useState('')

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    //const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()

    const handleSingup = (data) => {
        setSingupError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("User Created successfully")
                reset()
                const userInfo = {
                    displayName: data.name
                }
                upDateUser(userInfo)
                    .then(() => {
                        navigate('/')
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => {
                console.error(err)
                setSingupError(err.message)
            })
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSingIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error =>
                console.error(error)
            )
    }


    return (
        <div className=' h-[600px] flex justify-center items-center'>
            <div className='w-96 p-6 bg-slate-200 rounded-lg'>
                <h2 className='text-xl text-center'>Sing Up</h2>
                <form onSubmit={handleSubmit(handleSingup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: 'Name is required'
                        })}
                            className="input input-bordered w-full" />
                        {
                            errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"  {...register("email", {
                            required: "email is required"
                        }
                        )}
                            className="input input-bordered w-full" />
                        {
                            errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"  {...register("password", {
                            required: "Password is required ",
                            minLength: { value: 6, message: 'Password must be 6 character' },
                            pattern: {
                                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                                , message: 'Password must have uppercase lowercase special character '
                            }
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {
                            errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full  mt-6' value="Sing Up" type="submit" />
                    {singupError && <p className='text-red-500'>{singupError}</p>}
                </form>
                <p className='mt-3 text-xs'>Already have an account<Link className='mx-2 text-primary font-medium' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSingIn} className='w-full btn btn-outline rounded-lg'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Singup;
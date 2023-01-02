import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const { singIn } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    // const [token] = useToken(loginUserEmail)
    // const location = useLocation()
    // const navigate = useNavigate()

    const handleLogin = data => {

        setLoginError('')
            //singIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                //  setLoginUserEmail(data.email)

            })
            .catch(error => {
                console.error(error.message)
                setLoginError(error.message)
            })

    }


    return (
        <div className=' h-[600px] flex justify-center items-center'>
            <div className='w-96 p-6 bg-slate-200 rounded-lg'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", {
                                required: 'Email Address is required',
                            })}
                            className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: 'Password is required',
                                    minLength: { value: 6, message: "Password must be 6 character" }
                                })}

                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-500'>{loginError}</p>}
                    </div>
                </form>
                <p className='mt-3 text-xs'>New to Doctors Portal?<Link to="/singUp" className='mx-2 text-primary font-medium' >Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='w-full btn btn-outline rounded-lg'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;
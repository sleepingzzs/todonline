import { FcGoogle as Google } from "react-icons/fc";
import { FaGithub as Github } from "react-icons/fa";

const Login = () => {
	return (
		<div className='flex flex-col justify-center shadow-xl mt-32 p-10 rounded-lg max-w-[550px] mx-auto'>
			<h2 className='text-[26px] font-semibold'>
				Sign up and start posting today!
			</h2>
			<div className='flex flex-col my-10'>
				<h4>Email</h4>
				<input
					className='border-2 h-12 rounded-lg pl-2'
					type='email'
					placeholder='email@example.com'
				/>
				<div className='my-1'></div>
				<h4>Password</h4>
				<input
					className='border-2 h-12 rounded-lg pl-2'
					type='password'
					placeholder='password'
				/>
				<div className='my-2'></div>
				<button
					type='submit'
					className='text-white bg-cyan-500 rounded-lg h-10'
				>
					Login
				</button>
			</div>
			<div className='flex flex-col mx-auto '>
				<h4>Other sign in options</h4>
				<div className='flex flex-row text-[40px] mx-auto mt-2'>
					<button className='border-1 p-1 rounded-lg shadow-md'>
						<Google></Google>
					</button>
					<div className='mx-1'></div>
					<button className='border-1 p-1 rounded-lg shadow-md'>
						<Github></Github>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;

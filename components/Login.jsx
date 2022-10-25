import { NextPage } from "next";
import { FcGoogle as Google } from "react-icons/fc";
import { FaGithub as Github } from "react-icons/fa";
import { ImCross as Cross } from "react-icons/im";

export default function Login() {
	return (
		<div className='flex flex-col justify-center align-baseline p-10 rounded-lg max-w-[550px] mx-auto'>
			<div className='flex justify-end text-red-500 border-x border-t p-2 rounded-t-lg'>
				<button>
					<Cross></Cross>
				</button>
			</div>
			<div className='border-x border-b p-10 rounded-b-lg'>
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
					<h4 className='flex justify-center'>
						Other sign in options
					</h4>
					<div className='flex flex-row text-[40px] mx-auto mt-2'>
						<button className='border p-1 rounded-lg'>
							<Google></Google>
						</button>
						<div className='mx-1'></div>
						<button className='border p-1 rounded-lg '>
							<Github></Github>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

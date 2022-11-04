import Link from "next/link";
import { FcGoogle as Google } from "react-icons/fc";
import { FaGithub as Github } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { IoArrowBackCircle as Back } from "react-icons/io5";
import Router from "next/router";

export default function Login() {
	function githubLogin() {
		signIn("github", { callbackUrl: "http://localhost:3000" });
	}
	function googleLogin() {
		signIn("google", {
			callbackUrl: "http://localhost:3000",
		});
	}
	const { data: session } = useSession();
	if (session) Router.push("/");
	return (
		<div
			className='flex flex-col justify-center mt-0 h-screen align-middle p-10 rounded-lg max-w-[550px] mx-auto'
			id='login'
		>
			<div className='flex border-x border-t py-5 pl-10 rounded-t-lg text-gray-700 bg-white border-slate-300'>
				<Link href={"/"}>
					<button className='flex flex-row text-sm gap-1'>
						<Back className='text-xl'></Back>
						Go back
					</button>
				</Link>
			</div>
			<div className='border-x border-b px-10 pb-10 pt-0 rounded-b-lg bg-white border-slate-300'>
				<h2 className='text-[26px] font-semibold'>
					Sign up and start posting today!
				</h2>
				<form className='flex flex-col my-7'>
					<h4>Email</h4>
					<input
						className='border-2 h-10 rounded-lg pl-2'
						type='email'
						placeholder='email@example.com'
					/>
					<div className='my-1'></div>
					<h4>Password</h4>
					<input
						className='border-2 h-10 rounded-lg pl-2'
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
				</form>
				<div className='flex flex-col mx-auto '>
					<h4 className='flex justify-center'>
						Other sign in options
					</h4>
					<div className='flex flex-row text-[40px] mx-auto mt-2'>
						<button
							onClick={googleLogin}
							className='border p-1 rounded-lg'
						>
							<Google></Google>
						</button>
						<div className='mx-1'></div>
						<button
							onClick={githubLogin}
							className='border p-1 rounded-lg '
						>
							<Github></Github>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

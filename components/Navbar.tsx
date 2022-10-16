import Link from "next/link";

export default function Nav() {
	return (
		<nav className='flex justify-between items-center border-b-2 shadow-sm py-2 px-2 rounded-b-lg'>
			<Link href='/'>
				<button className='font-semibold tracking-wide text-[24px] italic none selection:b-none'>
					TodONline
				</button>
			</Link>
			<ul className='gap-2 '>
				<Link href='/auth/login'>
					<a className='bg-cyan-500 rounded-lg py-2 px-4 text-white'>
						Sign up
					</a>
				</Link>
			</ul>
		</nav>
	);
}

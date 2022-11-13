import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

import { FaBars } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import {
	BsHouseDoor,
	BsHouseDoorFill,
	BsPlusCircle,
	BsPlusCircleFill,
	BsStar,
	BsStarFill,
} from "react-icons/bs";

import Logo from "../public/logotodo.svg";

export default function Nav() {
	const router = useRouter();
	const { data: session } = useSession();

	useEffect(() => {
		if (session) console.log(session.user);
		// signOut();
	}, []);

	return (
		<nav className='bg-white border-slate-200 border'>
			<div className='flex flex-row justify-between max-w-5xl mx-auto py-2 tab:mx-2'>
				<ul className='flex flex-row'>
					<Link href='/'>
						<li>
							<Logo className='h-[50px] w-[175px] cursor-pointer' />
						</li>
					</Link>
				</ul>
				<div className='flex flex-row gap-10 phone:hidden items-center'>
					<ul className='flex flex-row gap-3 text-[24px] items-center'>
						<Link href='/'>
							<li className='cursor-pointer'>
								{router.pathname === "/" ? (
									<BsHouseDoorFill />
								) : (
									<BsHouseDoor />
								)}
							</li>
						</Link>
						<Link href='/submit'>
							<li className='cursor-pointer'>
								{router.pathname === "/submit" ? (
									<BsPlusCircleFill />
								) : (
									<BsPlusCircle />
								)}
							</li>
						</Link>
						<Link href='/u/starred'>
							<li className='cursor-pointer'>
								{router.pathname === "/u/starred" ? (
									<BsStarFill />
								) : (
									<BsStar />
								)}
							</li>
						</Link>
						<li></li>
					</ul>
					{session ? (
						<ul className='cursor-pointer rounded-lg'>
							<li className='flex flex-row  items-center'>
								<img
									src={session.user.image}
									alt='pfp'
									className='h-[40px] w-[40px] bg-slate-100 rounded-full'
								/>
								<h1 className='text-[24px] font-semibold'>
									<BiChevronDown />
								</h1>
							</li>
						</ul>
					) : null}
					{!session ? (
						<ul className='flex flex-row items-center'>
							<li>
								<Link href='/auth/login'>
									<button className='py-2 px-3 w-[85px] bg-cyan-500 text-white rounded-lg '>
										Sign up
									</button>
								</Link>
							</li>
						</ul>
					) : null}
				</div>
				<button className='text-[22px] hidden phone:block'>
					<FaBars />
				</button>
			</div>
		</nav>
	);
}

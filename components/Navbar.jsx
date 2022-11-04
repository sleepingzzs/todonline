import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

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

	return (
		<nav className='bg-white border-slate-200 border'>
			<div className='flex flex-row justify-between max-w-5xl mx-auto py-2 tab:mx-2'>
				<ul className='flex flex-row'>
					<li>
						<Logo className='h-[50px] w-[175px] cursor-pointer' />
					</li>
				</ul>
				<div className='flex flex-row gap-10 phone:hidden'>
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
					</ul>
					{!session ? (
						<ul className='flex flex-row'>
							<li>
								<Link href='/auth/login'>
									<button className='py-2 px-3 bg-cyan-500 text-white rounded-lg '>
										Sign up
									</button>
								</Link>
							</li>
						</ul>
					) : (
						<ul className='flex flex-row items-center gap-2 hover:bg-slate-100 px-3 rounded-lg cursor-pointer'>
							<li>
								<img
									src={session.user.image}
									alt='pfp'
									className='h-8 w-8 bg-slate-100 rounded-full'
								/>
							</li>
							<li className='flex flex-row gap-3 items-center'>
								<h1 className='max-w-3'>{session.user.name}</h1>
								<h1>
									<BiChevronDown />
								</h1>
							</li>
						</ul>
					)}
				</div>
				<button className='text-[22px] hidden phone:block'>
					<FaBars />
				</button>
			</div>
		</nav>
	);
}

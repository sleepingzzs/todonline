import Link from "next/link";
import Home from "../public/Home.svg";
import Home2 from "../public/Home2.svg";
import Post from "../public/Post.svg";
import Logo from "../public/logotodo.svg";
import { AiOutlineStar as Fav, AiFillStar as Fav2 } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Nav() {
	const location = useRouter();
	return (
		<nav className='border-b border-slate-300 py-2 px-2 bg-white z-3 '>
			<div className='flex justify-between lg:justify-between items-center mx-6 md:max-w-5xl md:mx-auto '>
				<Link href='/'>
					<Logo className='h-[50px] w-[175px] cursor-pointer'></Logo>
				</Link>
				<div className='flex gap-2 text-[24px]'>
					<Link href='/'>
						<button>
							{location.pathname === "/" ? <Home2 /> : <Home />}
						</button>
					</Link>
					<button>
						<Post></Post>
					</button>
					<Link href='favorites'>
						<button>
							{location.pathname === "/favorites" ? (
								<Fav2 className='text-[28px]' />
							) : (
								<Fav className='text-[28px]' />
							)}
						</button>
					</Link>
				</div>
				<ul className='gap-2 '>
					<Link href={"auth/login"}>
						<button className='bg-cyan-500 rounded-lg py-2 px-4 text-white'>
							Sign in
						</button>
					</Link>
				</ul>
			</div>
		</nav>
	);
}

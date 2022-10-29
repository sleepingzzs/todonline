import Link from "next/link";
import {
	AiOutlineFire as Trending,
	AiFillFire as TrendingActive,
	AiOutlineHome as Home,
	AiFillHome as HomeActive,
	AiOutlinePlusCircle as Post,
	AiFillPlusCircle as PostActive,
} from "react-icons/ai";

export default function Nav() {
	return (
		<nav className='border-b-2 py-2 px-2'>
			<div className='flex justify-between lg:justify-between items-center mx-6 md:max-w-5xl md:mx-auto'>
				<Link href='/'>
					<button className='font-semibold tracking-wide text-[24px] italic none selection:b-none'>
						TodONline
					</button>
				</Link>
				<div className='flex text-[32px] gap-3'>
					<button>
						<Trending></Trending>
					</button>
					<button>
						<Post></Post>
					</button>
					<button>
						<Home></Home>
					</button>
				</div>
				<ul className='gap-2 '>
					<Link href={"Login"}>
						<button className='bg-cyan-500 rounded-lg py-2 px-4 text-white'>
							Sign in
						</button>
					</Link>
				</ul>
			</div>
		</nav>
	);
}

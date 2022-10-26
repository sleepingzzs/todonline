import Link from "next/link";
import { render } from "react-dom";
import {
	AiOutlineFire as Trending,
	AiFillFire as TrendingActive,
	AiOutlineHome as Home,
	AiFillHome as HomeActive,
	AiOutlinePlusCircle as Post,
	AiFillPlusCircle as PostActive,
} from "react-icons/ai";
import Login from "./Login";

export default function Nav() {
	function renderSignin() {
		render(<Login />, document.getElementById("root"));
	}

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
					<button
						onClick={renderSignin}
						className='bg-cyan-500 rounded-lg py-2 px-4 text-white'
						id='Signin'
					>
						Sign up
					</button>
				</ul>
			</div>
		</nav>
	);
}

import Link from "next/link";
import { IoArrowBackCircle as Back } from "react-icons/io5";
import { AiOutlineFileText as Description } from "react-icons/ai";
import { FaTrash as Delete } from "react-icons/fa";
export default function Submit() {
	return (
		<div className='flex flex-col justify-center h-[92vh] align-middle rounded-lg max-w-[475px] mx-auto'>
			<form className='flex flex-col gap-2 items-center bg-white rounded-lg border-slate-200 border'>
				<div className='flex flex-col gap-2 pb-10'>
					<header className='flex flex-col py-10 w-full'>
						<Link href={"/"}>
							<button className='flex flex-row text-sm gap-1 pb-5 text-gray-700'>
								<Back className='text-xl'></Back>
								Go back
							</button>
						</Link>
						<h1 className='text-[26px] font-semibold'>
							Create your TO-DO!
						</h1>
					</header>
					<div className='flex flex-row'>
						<input
							className='border-y-2 border-l-2 focus:outline-none h-10 rounded-y-lg rounded-l-lg bg-white smPhone:w-[250px] xsmPhone:w-[175px]'
							type='text'
							placeholder='#1 Todo'
						/>
						<button className='border-y-2 border-r-2 rounded-y-lg rounded-r-lg p-2'>
							<Delete></Delete>
						</button>
					</div>
					<div className='flex flex-row '>
						<input
							className='border-y-2 border-l-2 focus:outline-none h-10 rounded-y-lg rounded-l-lg bg-white smPhone:w-[250px] xsmPhone:w-[5px]'
							type='text'
							placeholder='#1 Todo'
						/>
						<button className='border-y-2 border-r-2 rounded-y-lg rounded-r-lg p-2'>
							<Delete></Delete>
						</button>
					</div>
					<div className='flex flex-row'>
						<input
							className='border-y-2 border-l-2 focus:outline-none h-10 rounded-y-lg rounded-l-lg bg-white smPhone:w-[250px] xsmPhone:w-[175px]'
							type='text'
							placeholder='#1 Todo'
						/>
						<button className='border-y-2 border-r-2 rounded-y-lg rounded-r-lg p-2'>
							<Delete></Delete>
						</button>
					</div>
					<ul className='flex flex-row text-sm justify-between w-full py-5'>
						<li className='cursor-pointer hover:underline'>
							Add description
						</li>
						<li className='cursor-pointer hover:underline'>
							Add TODO
						</li>
					</ul>
					<div className='flex justify-end w-full'>
						<button className='py-2 px-3 w-[85px] bg-cyan-500 text-white rounded-lg '>
							Post
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

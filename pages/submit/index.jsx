import Link from "next/link";
import { IoArrowBackCircle as Back } from "react-icons/io5";
import { AiOutlineFileText as Description } from "react-icons/ai";
import { FaTrash as Delete } from "react-icons/fa";
export default function Submit() {
	return (
		<div className='flex flex-col justify-center h-[92vh] align-middle items-center rounded-lg w-30'>
			<form className='flex flex-col gap-2 items-center bg-white max-w-[475px] rounded-lg border-slate-200 border'>
				<header className='flex flex-col justify-start px-10 pt-10 w-full'>
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
				<div className='flex flex-col gap-2 items-center p-10'>
					<div className='flex flex-row'>
						<input
							className='border-2 focus:outline-none h-10 rounded-lg px-2 bg-white'
							type='text'
							placeholder='#1 Todo'
						/>
					</div>
					<div className='flex flex-row '>
						<input
							className='border-2 focus:outline-none h-10 rounded-lg px-2 bg-white'
							type='text'
							placeholder='#2 Todo'
						/>
					</div>
					<div className='flex flex-row'>
						<input
							className='border-2 focus:outline-none h-10 rounded-lg px-2 bg-white'
							type='text'
							placeholder='#3 Todo'
						/>
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

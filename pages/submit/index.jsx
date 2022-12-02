import Link from "next/link";
import { IoArrowBackCircle as Back } from "react-icons/io5";
import {
	AiOutlineFileText as Description,
	AiFillFileText as Description2,
	AiOutlinePlus as Add,
} from "react-icons/ai";
import { FaTrash as Delete } from "react-icons/fa";

import { useForm } from "react-hook-form";

export default function Submit() {
	const { handleSubmit, register, reset } = useForm();
	const submitForm = (values) => {
		console.log(values);
	};
	return (
		<div className='flex flex-col justify-center mt-10 rounded-lg max-w-[800px] mx-auto py-5'>
			<div className='flex flex-col gap-2 items-center bg-white rounded-lg border-slate-200 border'>
				<form
					onSubmit={handleSubmit(submitForm)}
					className='flex flex-col gap-2 pb-10'
				>
					<div className='flex flex-row gap-5 phone:flex-col'>
						<div>
							<header className='flex flex-col py-5 w-full'>
								<Link href={"/"}>
									<button className='flex flex-row text-sm gap-1 pb-5 text-gray-700'>
										<Back className='text-xl'></Back>
										Go back
									</button>
								</Link>
								<h1 className='text-[26px] pb-5 font-semibold'>
									Create your TO-DO!
								</h1>
							</header>
							<div className='flex flex-col'>
								<h1>Name</h1>
								<input
									name='name'
									{...register("name", { required: true })}
									className='border-2 focus:outline-none h-10 w-[352px] rounded-lg bg-white smPhone:w-[285px] xsmPhone:w-[175px]'
									type='text'
									placeholder='Life'
								/>
								<br />
								<h1>Description</h1>
								<textarea
									name='description'
									{...register("description", {
										required: true,
									})}
									maxLength={100}
									rows='4'
									className='border-2 resize-none overflow-hidden focus:outline-none h-[100px] w-[352px] rounded-lg bg-white smPhone:w-[285px] xsmPhone:w-[175px]'
									placeholder='Life is something that is...'
								/>
							</div>
						</div>
						<div className='flex flex-col gap-1'>
							<h1 className='pt-10'>Todo</h1>
							<div className='flex flex-row'>
								<input
									name='todo1'
									{...register("todo1", { required: true })}
									className='border-y-2 border-l-2 focus:outline-none h-10 rounded-y-lg rounded-l-lg bg-white smPhone:w-[250px] xsmPhone:w-[175px]'
									type='text'
									placeholder='#1 Todo'
								/>
								<button className='border-y-2 border-r-2 rounded-y-lg rounded-r-lg p-2'>
									<Delete></Delete>
								</button>
							</div>
							<div className='flex flex-row'>
								<input
									name='todo2'
									{...register("todo2", { required: true })}
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
									name='todo3'
									{...register("todo3", { required: true })}
									className='border-y-2 border-l-2 focus:outline-none h-10 rounded-y-lg rounded-l-lg bg-white smPhone:w-[250px] xsmPhone:w-[175px]'
									type='text'
									placeholder='#1 Todo'
								/>
								<button className='border-y-2 border-r-2 rounded-y-lg rounded-r-lg p-2'>
									<Delete></Delete>
								</button>
							</div>
							<ul className='flex py-5'>
								<li className='flex w-full justify-end gap-2 '>
									<button className='border rounded-lg px-2'>
										<Add className='text-2xl font-bold'></Add>
									</button>
									<button className='py-2 px-3 w-[85px] bg-cyan-500 text-white rounded-lg '>
										Post
									</button>
								</li>
							</ul>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

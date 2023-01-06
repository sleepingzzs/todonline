import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function _404() {
	const router = useRouter();
	let [seconds, setSeconds] = useState(3);
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

	useEffect(async () => {
		for (let i = 0; i < 3; i++) {
			await sleep(1000);
			seconds--;
			setSeconds(seconds);
			if (seconds === 0) {
				await router.push("/");
				break;
			}
		}
	}, []);
	return (
		<div className='flex flex-row items-center h-[90vh] align-middle justify-center'>
			<h1 className='border-r p-5'>404</h1>
			<div className='p-5'>
				<h1>Back to home in... {seconds}s</h1>
			</div>
		</div>
	);
}

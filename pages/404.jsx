import { useState } from "react";
import { useRouter } from "next/router";
export default function _404() {
	const router = useRouter();
	let [seconds, setSeconds] = useState(3);
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

	(async () => {
		for (let i = 0; i < 3; i++) {
			await sleep(1000);
			seconds--;
			setSeconds(seconds);
			if (seconds === 0) {
				router.push("/");
				break;
			}
		}
	})();
	return (
		<div className='flex flex-row items-center h-[90vh] align-middle justify-center'>
			<h1 className='border-r p-5'>404</h1>
			<div className='p-5'>
				<h1>
					Page does not exist! Redirecting to home in... {seconds}{" "}
					seconds
				</h1>
			</div>
		</div>
	);
}

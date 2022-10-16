import { PropsWithChildren } from "react";
import Nav from "./Navbar";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div className='mx-6 md:max-w-5xl md:mx-auto font-poppins'>
			<Nav />
			<main> {children} </main>
		</div>
	);
}

import Head from "next/head";
import Nav from "./Navbar";

export default function Layout({ children }) {
	return (
		<div className='font-poppins'>
			<Head>
				<title>todONline</title>
			</Head>
			<Nav />
			<main className='mx-6 md:max-w-5xl md:mx-auto'> {children} </main>
		</div>
	);
}

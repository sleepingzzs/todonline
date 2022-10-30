import Head from "next/head";
import Nav from "./Navbar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
	const router = useRouter();
	const showNav = router.pathname === "/auth/login" ? true : false;
	return (
		<div className='font-poppins'>
			<Head>
				<title>todONline</title>
			</Head>
			{!showNav && <Nav />}
			<main className='mx-6 md:max-w-5xl md:mx-auto'>{children}</main>
		</div>
	);
}

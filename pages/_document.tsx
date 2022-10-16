import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head />
			<title>TodONline</title>
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link
				rel='preconnect'
				href='https://fonts.gstatic.com'
				crossOrigin='anonymous'
			/>
			<link
				href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,800;1,400;1,600;1,800&display=swap'
				rel='stylesheet'
			></link>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

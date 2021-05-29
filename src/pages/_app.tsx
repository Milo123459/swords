import '../styles/globals.css';
import 'modern-normalize/modern-normalize.css';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta property="og:title" content="Swords" />
				<meta
					property="og:description"
					content="Swords provides widgets for the terminal. Just like shields, but swords!                    "
				/>
				<title>Swords</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

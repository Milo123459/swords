import '../styles/globals.css';
import 'modern-normalize/modern-normalize.css';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta property="og:title" content="Widgeter" />
				<meta
					property="og:description"
					content="Widgeter gives widgets for your terminal containing useful info via curl."
				/>
				<title>Widgeter</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

import Head from 'next/head';
import { type PropsWithChildren } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { Grid } from '@chakra-ui/react';

export function AppLayout({ children }: PropsWithChildren) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Chulakov template next js" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Grid minH={'100vh'} gridTemplateRows={'auto 1fr auto'}>
				<Header />
				<main>{children}</main>
				<Footer />
			</Grid>
		</>
	);
}

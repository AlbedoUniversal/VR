import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import { AppLayout } from '@/config/layout';
import VibeLabTheme from '@/config/theme';
import { ChakraProvider } from '@chakra-ui/react';

const QUERY_OPTIONS = {
	defaultOptions: {
		queries: {
			staleTime: 1 * 60 * 60 * 1000, // 1 hour
			cacheTime: 5 * 60 * 60 * 1000, // 5 hours
			refetchOnmount: false,
			refetchOnReconnect: false,
			retry: 1,
			refetchOnWindowFocus: true,
		},
	},
};

const App = ({ Component, pageProps }: AppProps) => {
	const [queryClient] = useState(
		() => new QueryClient({ defaultOptions: QUERY_OPTIONS.defaultOptions })
	);

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState} options={QUERY_OPTIONS}>
				<ChakraProvider theme={VibeLabTheme}>
					<AppLayout>
						<Component {...pageProps} />
					</AppLayout>
				</ChakraProvider>
			</Hydrate>
		</QueryClientProvider>
	);
};

export default App;

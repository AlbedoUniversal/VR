import { CubeContainer } from './partials/CubeContainer';
import { HomePageMeta } from './Home.meta';
import { useEffect } from 'react';

const HomePage = () => {
	useEffect(() => {
		console.log(navigator, 'dededddddde');
	}, []);

	return (
		<>
			<HomePageMeta />

			<CubeContainer />
		</>
	);
};

export { HomePage };

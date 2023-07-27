import { type GetStaticProps } from 'next';

import { HomePage } from '@/modules/Home';

const Home = () => <HomePage />;

export const getStaticProps: GetStaticProps = async ({}) => ({
	props: {},
});

export default Home;

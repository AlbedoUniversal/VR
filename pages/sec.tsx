import { type GetStaticProps } from 'next';

import SecPage from '@/modules/Second';

const XRSecPage = () => <SecPage />;

export const getStaticProps: GetStaticProps = async ({}) => ({
	props: {},
});

export default XRSecPage;

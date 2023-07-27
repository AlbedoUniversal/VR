import { type GetStaticProps } from 'next';

import { XRPage } from '@/modules/XR-cube';

const XRCubePage = () => <XRPage />;

export const getStaticProps: GetStaticProps = async ({}) => ({
	props: {},
});

export default XRCubePage;

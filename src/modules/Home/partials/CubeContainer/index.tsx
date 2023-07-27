import { Canvas } from '@react-three/fiber';
import { Cube } from './Cube';

export const CubeContainer = () => {
	console.log('me cubeContainer');

	return (
		<Canvas>
			<Cube />
		</Canvas>
	);
};

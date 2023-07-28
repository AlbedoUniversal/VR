import { Canvas } from '@react-three/fiber';
import { XRCube } from './XRCube';
import { ARButton, XR } from '@react-three/xr';

export const XRCubeContainer = () => {
	console.log('me cubeContainer');

	return (
		<>
			<ARButton />

			<Canvas>
				<XR>
					<XRCube />
				</XR>
			</Canvas>
		</>
	);
};

import { Canvas } from '@react-three/fiber';
import { XRCube } from './XRCube';
import { ARButton, XR } from '@react-three/xr';

import { useEffect } from 'react';

let WebXRPolyfill;
if (typeof window !== 'undefined') {
	WebXRPolyfill = require('webxr-polyfill').default;
}

export const XRCubeContainer = () => {
	useEffect(() => {
		console.log(WebXRPolyfill, 'WebXRPolyfill');

		if (WebXRPolyfill) {
			const polyfill = new WebXRPolyfill();
			// Используйте здесь polyfill и связанный с ним код XR
		}
	}, []);

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

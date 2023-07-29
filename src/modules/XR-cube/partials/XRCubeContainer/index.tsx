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
		if (WebXRPolyfill) {
			const polyfill = new WebXRPolyfill();
			// Используйте здесь polyfill и связанный с ним код XR
		}
	}, []);

	return (
		<>
			<ARButton />
			<script src="/js/webxr-polyfill.module.js"></script>

			<Canvas>
				<XR>
					<XRCube />
				</XR>
			</Canvas>
		</>
	);
};

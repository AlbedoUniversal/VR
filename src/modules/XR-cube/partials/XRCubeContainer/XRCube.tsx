import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import WebXRPolyfill from 'webxr-polyfill';

export const XRCube = () => {
	const polyfill = new WebXRPolyfill();

	useFrame((state, delta) => {
		console.log('useFrame');
	});
	return (
		<>
			<OrbitControls />
			<ambientLight />
			<mesh position-z={-5}>
				<boxGeometry args={[2, 2, 2]} />
				<meshStandardMaterial color="tomato" />
			</mesh>
		</>
	);
};

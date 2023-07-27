import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export const XRCube = () => {
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

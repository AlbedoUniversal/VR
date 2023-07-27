import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export const Cube = () => {
	useFrame((state, delta) => {
		console.log('useFrame');
	});
	return (
		<>
			<OrbitControls />
			<ambientLight />
			<mesh>
				<boxGeometry args={[2, 2, 2]} />
				<meshStandardMaterial color="tomato" />
			</mesh>
		</>
	);
};

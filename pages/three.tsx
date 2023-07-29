import { type GetStaticProps } from 'next';
import { useEffect } from 'react';
import * as THREE from 'three';

// import { ARButton } from 'three/addons/webxr/ARButton.js';
import { ARButton } from 'three/addons/webxr/ARButton.js';

const ThreePage = () => {
	useEffect(() => {
		let container, renderer, camera, scene, controller, reticle_line;

		let hitTestSource = null;
		let hitTestSourceRequested = false;

		init();
		animate();

		// navigator.xr.requestSession('immersive-ar', {
		//   requiredFeatures: ['local', 'anchors', 'hit-test'],
		// })

		function init() {
			container = document.createElement('div');
			document.body.appendChild(container);

			scene = new THREE.Scene();

			camera = new THREE.PerspectiveCamera(
				125,
				window.innerWidth / window.innerHeight,
				0.6,
				50000
			);
			// camera.position.set( 0, 0, 40);

			// LIGHTS

			const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 3);
			light.position.set(0.5, 1, 0.25);
			scene.add(light);

			renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.useLegacyLights = false;
			renderer.xr.enabled = true;
			container.appendChild(renderer.domElement);

			document.body.appendChild(
				ARButton.createButton(renderer, { requiredFeatures: ['hit-test'] })
			);

			// DOOR PLANE
			const geometry = new THREE.PlaneGeometry(4, 8.4).translate(0.25, 0, -3.5);

			function onSelect() {
				if (reticle_line.visible) {
					//const texture = new THREE.TextureLoader().load( './sw_door.png' );
					const texture = new THREE.TextureLoader().load('./door-3(Rembg).png');
					texture.colorSpace = THREE.SRGBColorSpace;
					const material = new THREE.MeshBasicMaterial({
						map: texture,
						side: THREE.DoubleSide,
						transparent: true,
					});
					//, opacity:0.2
					const plane = new THREE.Mesh(geometry, material);
					reticle_line.matrix.decompose(
						plane.position,
						plane.quaternion,
						plane.scale
					);
					scene.add(plane);
				}
			}

			controller = renderer.xr.getController(0);
			controller.addEventListener('select', onSelect);
			scene.add(controller);

			//RETCILE LINE
			reticle_line = new THREE.Mesh(
				// new THREE.RingGeometry( 0.15, 0.2, 32 ),
				// new THREE.MeshBasicMaterial()
				new THREE.PlaneGeometry(2.25, 0.1).translate(0, -1.5, 0),
				new THREE.MeshBasicMaterial({ color: 0x4e4feb, side: THREE.DoubleSide })
			);
			reticle_line.matrixAutoUpdate = false;
			reticle_line.visible = false;
			scene.add(reticle_line);

			// window.addEventListener( 'resize', onWindowResize );
		}

		// function onWindowResize() {

		// 	camera.aspect = window.innerWidth / window.innerHeight;
		// 	camera.updateProjectionMatrix();

		// 	renderer.setSize( window.innerWidth, window.innerHeight );

		// }

		//console.log(scene)

		function animate() {
			renderer.setAnimationLoop(render);
		}

		// function render(){
		//   renderer.render(scene, camera);
		// }
		function render(timestamp, frame) {
			if (frame) {
				const referenceSpace = renderer.xr.getReferenceSpace();
				const session = renderer.xr.getSession();

				if (hitTestSourceRequested === false) {
					session
						.requestReferenceSpace('viewer')
						.then(function (referenceSpace) {
							session
								.requestHitTestSource({ space: referenceSpace })
								.then(function (source) {
									hitTestSource = source;
								});
						});

					session.addEventListener('end', function () {
						hitTestSourceRequested = false;
						hitTestSource = null;
					});

					hitTestSourceRequested = true;
				}

				if (hitTestSource) {
					const hitTestResults = frame.getHitTestResults(hitTestSource);

					if (hitTestResults.length) {
						const hit = hitTestResults[0];

						reticle_line.visible = true;
						reticle_line.matrix.fromArray(
							hit.getPose(referenceSpace).transform.matrix
						);
					} else {
						reticle_line.visible = false;
					}
				}
			}

			renderer.render(scene, camera);
		}

		return () => {
			renderer.dispose();
		};
	}, []);

	return null;
};

export const getStaticProps: GetStaticProps = async ({}) => ({
	props: {},
});

export default ThreePage;

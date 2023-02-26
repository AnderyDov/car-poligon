import {
    useBox,
    useSphere,
    useCylinder,
    useHeightfield,
    useParticle,
    useTrimesh,
    useConvexPolyhedron,
    useCompoundBody,
} from '@react-three/cannon';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef } from 'react';

export const Model = (props, ttt) => {
    const gltf = useLoader(GLTFLoader, '/img/Car2.glb');
    const [mesh, api] = useBox(
        () => ({ args: [4, 4, 4], mass: 0.1, ...props }),
        useRef(null),
    );

    useFrame((state, delta) => {
        if (props.keyPressed.ArrowUp && props.keyPressed.ArrowLeft) {
            api.applyForce([-props.power, 0, -props.power], [0, 0, 0]);
            return;
        }
        if (props.keyPressed.ArrowUp && props.keyPressed.ArrowRight) {
            api.applyForce([props.power, 0, -props.power], [0, 0, 0]);
            return;
        }
        if (props.keyPressed.ArrowDown && props.keyPressed.ArrowLeft) {
            api.applyForce([-props.power, 0, props.power], [0, 0, 0]);
            return;
        }
        if (props.keyPressed.ArrowDown && props.keyPressed.ArrowRight) {
            api.applyForce([props.power, 0, props.power], [0, 0, 0]);
            return;
        }

        if (props.keyPressed.ArrowUp) {
            api.applyForce([0, 0, -props.power], [0, 0, 0]);
            return;
        }
        if (props.keyPressed.ArrowLeft) {
            api.applyForce([-props.power, 0, 0], [0, 0, 0]);
            return;
        }
        if (props.keyPressed.ArrowDown) {
            api.applyForce([0, 0, props.power], [0, 0, 0]);
            return;
        }
        if (props.keyPressed.ArrowRight) {
            api.applyForce([props.power, 0, 0], [0, 0, 0]);
            return;
        }
    });

    return (
        <mesh {...props} ref={mesh}>
            <boxGeometry args={[4, 4, 4]} />
            <meshStandardMaterial roughness={1} />
        </mesh>
        // <primitive
        //     // args={[4, 50, 8]}
        //     ref={mesh}
        //     object={gltf.scene}
        //     {...props}
        // />
    );
};

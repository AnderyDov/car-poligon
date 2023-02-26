import { useBox } from '@react-three/cannon';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef, useState } from 'react';

export const Model = (props, ttt) => {
    const gltf = useLoader(GLTFLoader, '/img/Car2.glb');
    const [v, setV] = useState({ x: 0, y: 1, z: 30 });
    const [mesh, api] = useBox(
        () => ({ args: [20, 2, 20], mass: 1, ...props }),
        useRef(null),
    );

    useFrame((state, delta) => {
        if (props.keyPressed.ArrowUp && props.keyPressed.ArrowLeft) {
            setV({ ...v, z: v.z - 1, x: v.x - 1 });
            api.position.set(v.x, v.y, v.z);
            return;
        }
        if (props.keyPressed.ArrowUp && props.keyPressed.ArrowRight) {
            setV({ ...v, z: v.z - 1, x: v.x + 1 });
            api.position.set(v.x, v.y, v.z);
            return;
        }
        if (props.keyPressed.ArrowDown && props.keyPressed.ArrowLeft) {
            setV({ ...v, z: v.z + 1, x: v.x - 1 });
            api.position.set(v.x, v.y, v.z);
            return;
        }
        if (props.keyPressed.ArrowDown && props.keyPressed.ArrowRight) {
            setV({ ...v, z: v.z + 1, x: v.x + 1 });
            api.position.set(v.x, v.y, v.z);
            return;
        }

        if (props.keyPressed.ArrowUp) {
            setV({ ...v, z: v.z - 1.5 });
            api.position.set(v.x, v.y, v.z);
            return;
        }
        if (props.keyPressed.ArrowLeft) {
            setV({ ...v, x: v.x - 1.5 });
            api.position.set(v.x, v.y, v.z);
            return;
        }
        if (props.keyPressed.ArrowDown) {
            setV({ ...v, z: v.z + 1.5 });
            api.position.set(v.x, v.y, v.z);
            return;
        }
        if (props.keyPressed.ArrowRight) {
            setV({ ...v, x: v.x + 1.5 });
            api.position.set(v.x, v.y, v.z);
            return;
        }
    });

    return (
        <primitive
            args={[20, 2, 20]}
            ref={mesh}
            object={gltf.scene}
            {...props}
        />
    );
};

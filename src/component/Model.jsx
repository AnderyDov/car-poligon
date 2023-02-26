import { useBox } from '@react-three/cannon';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef, useState } from 'react';

export const Model = (props, ttt) => {
    const gltf = useLoader(GLTFLoader, '/img/Car2.glb');
    const [v, setV] = useState({ x: 0, y: 1, z: 30 });
    const [r, setR] = useState({ x: 0, y: 0, z: 0 });
    const [mesh, api] = useBox(
        () => ({ args: [20, 2, 20], mass: 1, ...props }),
        useRef(null),
    );

    useFrame((state, delta) => {
        if (props.keyPressed.ArrowUp && props.keyPressed.ArrowLeft) {
            setV({
                ...v,
                z: v.z - 2 * Math.cos(r.y),
                x: v.x + 2 * -Math.sin(r.y),
            });
            api.position.set(v.x, v.y, v.z);
            setR({ ...r, y: r.y + Math.PI / 45 });
            api.rotation.set(0, r.y, 0);
            return;
        }
        if (props.keyPressed.ArrowUp && props.keyPressed.ArrowRight) {
            setV({
                ...v,
                z: v.z - 2 * Math.cos(r.y),
                x: v.x + 2 * -Math.sin(r.y),
            });
            api.position.set(v.x, v.y, v.z);
            setR({ ...r, y: r.y - Math.PI / 45 });
            api.rotation.set(0, r.y, 0);
            return;
        }
        if (props.keyPressed.ArrowDown && props.keyPressed.ArrowLeft) {
            setV({
                ...v,
                z: v.z + 2 * Math.cos(r.y),
                x: v.x - 2 * -Math.sin(r.y),
            });
            api.position.set(v.x, v.y, v.z);
            setR({ ...r, y: r.y - Math.PI / 45 });
            api.rotation.set(0, r.y, 0);
            return;
        }
        if (props.keyPressed.ArrowDown && props.keyPressed.ArrowRight) {
            setV({
                ...v,
                z: v.z + 2 * Math.cos(r.y),
                x: v.x - 2 * -Math.sin(r.y),
            });
            api.position.set(v.x, v.y, v.z);
            setR({ ...r, y: r.y + Math.PI / 45 });
            api.rotation.set(0, r.y, 0);

            return;
        }

        if (props.keyPressed.ArrowUp) {
            setV({
                ...v,
                z: v.z - 2 * Math.cos(r.y),
                x: v.x + 2 * -Math.sin(r.y),
            });
            api.position.set(v.x, v.y, v.z);
            return;
        }
        if (props.keyPressed.ArrowLeft) {
            setR({ ...r, y: r.y + Math.PI / 45 });
            api.rotation.set(0, r.y, 0);
            return;
        }
        if (props.keyPressed.ArrowDown) {
            setV({
                ...v,
                z: v.z + 2 * Math.cos(r.y),
                x: v.x - 2 * -Math.sin(r.y),
            });
            api.position.set(v.x, v.y, v.z);
            return;
        }
        if (props.keyPressed.ArrowRight) {
            setR({ ...r, y: r.y - Math.PI / 45 });
            api.rotation.set(0, r.y, 0);
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

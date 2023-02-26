import { useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';
// import {
//     Sparkles,
//     Shadow,
//     ContactShadows,
//     Billboard,
//     Environment,
//     BakeShadows,
//     OrbitControls,
// } from '@react-three/drei';

export function Box(props) {
    const [box] = useLoader(TextureLoader, ['/img/box.gif']);
    const [mesh] = useBox(
        () => ({ args: [12, 12, 12], mass: 1, ...props }),
        useRef(null),
    );

    return (
        <mesh receiveShadow castShadow {...props} ref={mesh}>
            {/* <Sparkles count={30} scale={10} size={6} speed={0.4} /> */}
            <boxGeometry args={[12, 12, 12]} />
            <meshStandardMaterial map={box} />
        </mesh>
    );
}

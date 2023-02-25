import { useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';

export function Box(props) {
    const [box] = useLoader(TextureLoader, ['/img/box.gif']);
    const [mesh] = useBox(
        () => ({ args: [12, 12, 12], mass: 0.02, ...props }),
        useRef(null),
    );

    return (
        <mesh {...props} ref={mesh}>
            <boxGeometry args={[12, 12, 12]} />
            <meshStandardMaterial map={box} />
        </mesh>
    );
}
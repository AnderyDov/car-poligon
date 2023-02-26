import { useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';
import { useCylinder } from '@react-three/cannon';

export function Wheel(props) {
    const [box] = useLoader(TextureLoader, ['/img/Leather034A_1K_Color.jpg']);
    const [mesh] = useCylinder(
        () => ({
            rotation: [0, -Math.PI / 2, 0],
            args: [6, 5, 18, 12],
            mass: 1,
            ...props,
        }),
        useRef(null),
    );

    return (
        <mesh receiveShadow castShadow {...props} ref={mesh}>
            <torusGeometry args={[6, 5, 15, 12]} />
            <meshStandardMaterial map={box} />
        </mesh>
    );
}

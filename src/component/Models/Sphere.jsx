import { useRef } from 'react';
import { useSphere } from '@react-three/cannon';

export function Sphere(props) {
    const [mesh, api] = useSphere(
        () => ({
            args: [5, 64, 64],
            mass: 2,
            ...props,
        }),
        useRef(null),
    );

    return (
        <mesh receiveShadow castShadow {...props} ref={mesh}>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial roughness={0} />
        </mesh>
    );
}

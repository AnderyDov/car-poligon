import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';
import { usePlane } from '@react-three/cannon';

export function Plane(props) {
    const [plane] = useLoader(TextureLoader, ['/img/Rocks023_1K_Color.jpg']);
    const [mesh] = usePlane(() => ({
        args: [400, 400],
        rotation: [-Math.PI / 2, 0, 0],
        ...props,
    }));

    return (
        <mesh receiveShadow castShadow ref={mesh}>
            <planeGeometry args={[400, 400]} />
            <meshStandardMaterial />
        </mesh>
    );
}

import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';
import { usePlane } from '@react-three/cannon';

export function Plane(props) {
    const [plane] = useLoader(TextureLoader, ['/img/plane.gif']);
    const [mesh] = usePlane(() => ({
        args: [200, 200],
        rotation: [-Math.PI / 2, 0, 0],
        ...props,
    }));

    return (
        <mesh receiveShadow castShadow ref={mesh}>
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial map={plane} />
        </mesh>
    );
}

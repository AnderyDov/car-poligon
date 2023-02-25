import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';
import { usePlane } from '@react-three/cannon';

export function Plane(props) {
    const [plane] = useLoader(TextureLoader, ['/img/plane.gif']);

    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        ...props,
    }));

    return (
        <mesh ref={ref}>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial map={plane} />
        </mesh>
    );
}

import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader, useFrame } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';

export function Box(props) {
    const [box] = useLoader(TextureLoader, ['/img/box.gif']);
    const [ref] = useBox(() => ({
        ...props,
    }));

    useFrame(() => {
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.04;
    });

    return (
        <mesh ref={ref}>
            <boxGeometry />
            <meshStandardMaterial map={box} />
        </mesh>
    );
}

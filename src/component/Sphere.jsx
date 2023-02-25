import { useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader, useFrame } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';

export function Sphere(props) {
    const [box] = useLoader(TextureLoader, ['/img/box.gif']);
    const [mesh, api] = useSphere(
        () => ({ args: [4, 4, 4], mass: 0.1, ...props }),
        useRef(null),
    );

    useFrame((state, delta) => {
        if (props.keyPressed.ArrowUp && props.keyPressed.ArrowLeft) {
            api.applyForce([-props.power, 0, -props.power], [0, 0, 0]);
            return;
        }
        if (props.keyPressed.ArrowUp && props.keyPressed.ArrowRight) {
            api.applyForce([props.power, 0, -props.power], [0, 0, 0]);
            return;
        }
        if (props.keyPressed.ArrowDown && props.keyPressed.ArrowLeft) {
            api.applyForce([-props.power, 0, props.power], [0, 0, 0]);
            return;
        }
        if (props.keyPressed.ArrowDown && props.keyPressed.ArrowRight) {
            api.applyForce([props.power, 0, props.power], [0, 0, 0]);
            return;
        }

        if (props.keyPressed.ArrowUp) {
            api.applyForce([0, 0, -props.power], [0, 0, 0]);
            return;
        }
        if (props.keyPressed.ArrowLeft) {
            api.applyForce([-props.power, 0, 0], [0, 0, 0]);
            return;
        }
        if (props.keyPressed.ArrowDown) {
            api.applyForce([0, 0, props.power], [0, 0, 0]);
            return;
        }
        if (props.keyPressed.ArrowRight) {
            api.applyForce([props.power, 0, 0], [0, 0, 0]);
            return;
        }
    });
    return (
        <mesh {...props} ref={mesh}>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial roughness={1} />
        </mesh>
    );
}

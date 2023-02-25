import { Suspense, useRef, useState } from 'react';
import { useLoader, Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

function Box(props) {
    const mesh = useRef();
    const [box] = useLoader(TextureLoader, ['/img/box.gif']);

    const [active, setActive] = useState(false);
    // const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        mesh.current.rotation.y += delta * 6;

        if (props.keyPressed.ArrowUp && props.keyPressed.ArrowLeft) {
            mesh.current.position.z -= 0.3;
            mesh.current.position.x -= 0.3;
            return;
        }
        if (props.keyPressed.ArrowUp && props.keyPressed.ArrowRight) {
            mesh.current.position.z -= 0.3;
            mesh.current.position.x += 0.3;
            return;
        }
        if (props.keyPressed.ArrowDown && props.keyPressed.ArrowLeft) {
            mesh.current.position.z += 0.3;
            mesh.current.position.x -= 0.3;
            return;
        }
        if (props.keyPressed.ArrowDown && props.keyPressed.ArrowRight) {
            mesh.current.position.z += 0.3;
            mesh.current.position.x += 0.3;
            return;
        }

        if (props.keyPressed.ArrowUp) {
            mesh.current.position.z -= 0.4;
            return;
        }
        if (props.keyPressed.ArrowLeft) {
            mesh.current.position.x -= 0.4;
            return;
        }
        if (props.keyPressed.ArrowDown) {
            mesh.current.position.z += 0.4;
            return;
        }
        if (props.keyPressed.ArrowRight) {
            mesh.current.position.x += 0.4;
            return;
        }
    });
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            // onPointerOver={(event) => setHover(true)}
            // onPointerOut={(event) => setHover(false)}
        >
            <boxGeometry args={[4, 4, 4]} />
            <meshStandardMaterial map={box} />
        </mesh>
    );
}

export function Plane(props) {
    const [plane] = useLoader(TextureLoader, ['/img/plane.gif']);
    const mesh = useRef();

    return (
        <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial map={plane} />
        </mesh>
    );
}

export default function App() {
    const [move, setMove] = useState('stop');
    const [keyPressed, setKeysPressed] = useState({});

    window.onkeydown = (e) => {
        setKeysPressed({ ...keyPressed, [e.code]: true });
        console.log(keyPressed);
    };
    window.onkeyup = (e) => {
        delete keyPressed[e.code];
        console.log(keyPressed);
    };

    return (
        <Suspense fallback={null}>
            <Canvas
                camera={{ position: [0, 15, 35], fov: 25 }}
                id='three-canvas-container'
            >
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls />
                <Box position={[0, 5, -2]} keyPressed={keyPressed} />
                <Plane position={[0, -4, -1]} />
                <color attach='background' args={['green']} />
            </Canvas>
        </Suspense>
    );
}

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Plane, Box, Sphere } from './component';
import {
    AccumulativeShadows,
    RandomizedLight,
    Center,
    Environment,
    OrbitControls,
} from '@react-three/drei';

export default function App() {
    const [keyPressed, setKeysPressed] = useState({});

    window.onkeydown = (e) => {
        setKeysPressed({ ...keyPressed, [e.code]: true });
    };
    window.onkeyup = (e) => {
        delete keyPressed[e.code];
    };

    return (
        <Suspense fallback={null}>
            <Canvas
                camera={{ position: [-20, 45, 35], fov: 135 }}
                id='three-canvas-container'
            >
                <Physics gravity={[0, -10, 0]}>
                    {/* <ambientLight /> */}
                    {/* <pointLight position={[10, 10, 10]} /> */}
                    <AccumulativeShadows
                        temporal
                        frames={200}
                        color='purple'
                        colorBlend={0.5}
                        opacity={1}
                        scale={10}
                        alphaTest={0.85}
                    >
                        <RandomizedLight
                            amount={8}
                            radius={5}
                            ambient={0.5}
                            position={[5, 3, 2]}
                            bias={0.001}
                        />
                    </AccumulativeShadows>
                    <OrbitControls />
                    <Environment preset={'forest'} background />
                    <Sphere
                        castShadow
                        position={[0, 25, -2]}
                        keyPressed={keyPressed}
                        power={6}
                    />
                    <Box position={[-15, 8, 0]} />
                    <Box position={[-30, 8, 0]} />
                    <Box position={[14, 8, 0]} />
                    <Box position={[30, 8, 0]} />
                    <Box position={[0, 8, -15]} />
                    <Box position={[0, 8, -30]} />
                    <Box position={[0, 21, -15]} />
                    <Box position={[0, 21, -30]} />
                    <Plane position={[0, 0, -1]} castShadow />
                </Physics>
            </Canvas>
        </Suspense>
    );
}

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Plane, Box, Sphere, Model } from './component';
import { Environment, OrbitControls } from '@react-three/drei';

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
                shadows
                camera={{ position: [-20, 45, 35], fov: 135 }}
                id='three-canvas-container'
            >
                <Physics gravity={[0, -10, 0]}>
                    <directionalLight
                        color='white'
                        position={[0, 50, 50]}
                        intensity={1}
                        shadow-mapSize={1204}
                        castShadow
                    >
                        {/* <orthographicCamera
                            attach='shadow-camera'
                            args={[-100, 100, -10, 0, 0, 30]}
                        /> */}
                    </directionalLight>
                    <OrbitControls />
                    <Environment preset={'forest'} background />
                    {/* <Sphere
                        position={[0, 50, 50]}
                        keyPressed={keyPressed}
                        power={40}
                    /> */}
                    <Model
                        scale={40}
                        position={[0, 1, 30]}
                        keyPressed={keyPressed}
                        power={40}
                    />
                    <Box position={[-15, 8, 0]} />
                    <Box position={[-30, 8, 0]} />
                    <Box position={[14, 8, 0]} />
                    <Box position={[30, 8, 0]} />
                    <Box position={[0, 8, -15]} />
                    <Box position={[0, 8, -30]} />
                    <Box position={[0, 21, -15]} />
                    <Box position={[0, 21, -30]} />
                    <Plane position={[0, 0, -1]} />
                </Physics>
            </Canvas>
        </Suspense>
    );
}

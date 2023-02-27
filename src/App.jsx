import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Plane, Box, Sphere, Model, Panel } from './component';
import { Environment, OrbitControls, Sky, Stars } from '@react-three/drei';
import { Loader } from './helpers/Loader';

export default function App() {
    const [keyPressed, setKeysPressed] = useState({});

    window.onkeydown = (e) => {
        setKeysPressed({ ...keyPressed, [e.code]: true });
    };
    window.onkeyup = (e) => {
        delete keyPressed[e.code];
    };

    return (
        <Canvas
            shadows
            frameloop='demand'
            camera={{ position: [-20, 45, 35], fov: 135 }}
            id='three-canvas-container'
        >
            <Suspense fallback={<Loader />}>
                <Physics gravity={[0, -10, 0]}>
                    {/* <Panel /> */}
                    <Sky
                        sunPosition={[1000, -36, 100]}
                        inclination={-5}
                        azimuth={0.4}
                    />
                    <Stars
                        radius={200}
                        depth={150}
                        count={5000}
                        factor={4}
                        saturation={4}
                        fade
                        speed={3}
                    />
                    <Sphere position={[50, 50, 10]} />
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
                    <Environment preset={'forest'} background />
                    <OrbitControls makeDefault />
                </Physics>
            </Suspense>
        </Canvas>
    );
}

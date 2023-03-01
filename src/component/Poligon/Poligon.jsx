import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Plane, Box, Sphere, Model } from '../index';
import {
    Environment,
    OrbitControls,
    Sky,
    Stars,
    Grid,
} from '@react-three/drei';
import { Loader } from '../../helpers/Loader';
import { useRecoilValue } from 'recoil';
import { gridState, sunState } from '../../store/atoms';

export function Poligon() {
    const grid = useRecoilValue(gridState);
    const sun = useRecoilValue(sunState);
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
            camera={{ position: [-20, 45, 35] }}
            id='three-canvas-container'
        >
            <Suspense fallback={<Loader />}>
                {/* {sun && <ambientLight intensity={0.3} />} */}

                <directionalLight
                    castShadow
                    position={[500, 500, 500]}
                    shadow-mapSize={[1024, 1024]}
                    intensity={0.4}
                >
                    <orthographicCamera
                        attach='shadow-camera'
                        args={[-100, 100, 100, -100]}
                    />
                </directionalLight>
                <Sky
                    sunPosition={[1000, sun ? 400 : -36, 100]}
                    inclination={-5}
                    azimuth={0.4}
                />
                {!sun && (
                    <Stars
                        radius={200}
                        depth={150}
                        count={5000}
                        factor={4}
                        saturation={4}
                        fade
                        speed={3}
                    />
                )}

                <Physics gravity={[0, -10, 0]}>
                    <Sphere position={[50, 50, 10]} />
                    <Model
                        scale={40}
                        position={[0, 23, 30]}
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
                    <Plane position={[0, 0, 0]} />
                </Physics>
                {grid && (
                    <Grid
                        renderOrder={-1}
                        position={[0, 0.01, 0]}
                        infiniteGrid
                        cellSize={6}
                        cellThickness={0.6}
                        sectionSize={30}
                        sectionThickness={1.5}
                        sectionColor='green'
                        fadeDistance={400}
                    />
                )}
                <OrbitControls makeDefault />
                <Environment preset='night' />
            </Suspense>
        </Canvas>
    );
}

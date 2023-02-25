import { useBox } from '@react-three/cannon';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef, forwardRef, useEffect, useState } from 'react';

export const Model = forwardRef((props, ttt) => {
    const [ref, api] = useBox(
        () => ({
            ...props,
        }),
        useRef(null),
    );
    const [sleeping, setSleeping] = useState(false);

    const func = () => {
        setSleeping(!sleeping);
        api.position.set(0, 5, -2);
        console.log('forward');
    };
    window.document.onkeydown = (e) => {
        console.log('work');
        if (e.code === 'Space') func();
    };

    const gltf = useLoader(GLTFLoader, '/img/Car2.glb');
    return <primitive ref={ref} object={gltf.scene} scale={6} {...props} />;
});

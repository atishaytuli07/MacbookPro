import { useGLTF, useScroll, ScrollControls, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React from 'react'
import * as THREE from 'three';

const MacbookContainer = () => {
    let macbook = useGLTF("./mac.glb");
    let tex = useTexture("./re.jpg");
    let meshes = {};

    macbook.scene.traverse((child) => {
            meshes[child.name] = child;
    });

    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = tex;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;
    let data = useScroll();

    useFrame((state, delta) => {
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
    });

    return (
        <group position={[0, -10, 25]}>
            <primitive object={macbook.scene} />
        </group>

    
        
    );
};

export default MacbookContainer;
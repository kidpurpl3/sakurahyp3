'use client'

// Packages
import '../app/globals.css'
import React, { Suspense } from 'react'
import { Canvas, BoxGeometry, meshStandardMaterial, } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { EffectComposer, Bloom, DotScreen, SSAO } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, Resolution, BlendFunction } from 'postprocessing'

// Mine
import colors from "@/style/colors"

export const Dang = (props) => {
    return (
        <Canvas>
            <mesh>
                <boxGeometry args={[`${props.size}`, `${props.size}`, `${props.size}`]} />
                <meshBasicMaterial toneMapped={false} wireframe={props.wireframe} color={props.color} />
                <OrbitControls autoRotate autoRotateSpeed={props.speedd} enableZoom={false} enablePan={false} />
            </mesh>
        </Canvas>
    )
}

export default Dang
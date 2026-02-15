import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line, Instance, Instances } from '@react-three/drei';
import * as THREE from 'three';

export const InfrastructureTopology = () => {
    const count = 100;
    const radius = 10;

    // Generate nodes (points)
    const particles = useMemo(() => {
        const temp = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);

            const x = radius * Math.sin(theta) * Math.cos(phi);
            const y = radius * Math.sin(theta) * Math.sin(phi);
            const z = radius * Math.cos(phi); // Corrected to use phi for z-axis to create a sphere-like distribution

            temp[i * 3] = x;
            temp[i * 3 + 1] = y;
            temp[i * 3 + 2] = z;
        }
        return temp;
    }, [count, radius]);

    // Generate connections (lines)
    const connections = useMemo(() => {
        const lines = [];
        const threshold = 5; // Distance to connect

        for (let i = 0; i < count; i++) {
            const x1 = particles[i * 3];
            const y1 = particles[i * 3 + 1];
            const z1 = particles[i * 3 + 2];

            for (let j = i + 1; j < count; j++) {
                const x2 = particles[j * 3];
                const y2 = particles[j * 3 + 1];
                const z2 = particles[j * 3 + 2];

                const dist = Math.sqrt(
                    Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2)
                );

                if (dist < threshold) {
                    lines.push(new THREE.Vector3(x1, y1, z1));
                    lines.push(new THREE.Vector3(x2, y2, z2));
                }
            }
        }
        return lines;
    }, [particles, count]);

    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        // Slow, heavy rotation
        groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.1;
    });

    // Convert connection points to geometry for LineSegments
    const lineGeometry = useMemo(() => {
        const geo = new THREE.BufferGeometry().setFromPoints(connections);
        return geo;
    }, [connections]);

    return (
        <group ref={groupRef} scale={[0.8, 0.8, 0.8]}>
            {/* Nodes */}
            <Points positions={particles} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#8b5cf6"
                    size={0.15}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>

            {/* Rails */}
            <lineSegments geometry={lineGeometry}>
                <lineBasicMaterial color="#6d28d9" transparent opacity={0.15} linewidth={1} />
            </lineSegments>
        </group>
    );
};

import { motion } from "framer-motion-3d";
import { MotionConfig } from "framer-motion";
import { useRef, useLayoutEffect } from "react";
import { transition } from "@settings";
import { Canvas, useThree } from "@react-three/fiber";
import { useSmoothTransform } from "@utils/use-smooth-transform";
import { Text } from "@react-three/drei";

export function Shapes({ isHover, isPress, mouseX, mouseY }) {
    const lightRotateX = useSmoothTransform(mouseY, spring, mouseToLightRotation);
    const lightRotateY = useSmoothTransform(mouseX, spring, mouseToLightRotation);
    const wordVariants = {
        hover: {
            scale: isPress ? 1.2 : 1,
            rotateY: isPress ? 180 : 0,
        },
    };

    const html = {
        color: 'red',
        fontSize: '34px'
    }

    const htmlPosition = [3.1, 2.8, -3.5]
    const cssPosition = [-3.8, 2.1, 0]
    const jsPosition = [-2.5, 0, 0]
    const nodePosition = [2.1, 0, -1]

    return (
        <Canvas shadows dpr={[1, 2]} resize={{ scroll: false, offsetSize: true }}>
            <Camera mouseX={mouseX} mouseY={mouseY} />
            <MotionConfig transition={transition}>
                <motion.group
                    center={[0, 0, 0]}
                    rotation={[lightRotateX, lightRotateY, 0]}
                >
                    <Lights />
                </motion.group>
                <motion.group
                    initial={false}
                    animate={isHover ? "hover" : "rest"}
                    dispose={null}
                    variants={{
                        hover: { z: isPress ? -0.9 : 0 }
                    }}
                >
                    {/* <Sphere />
                    <Cone />
                    <Torus />
                    <Icosahedron /> */}

                    <Word text="HTML" variants={wordVariants} pos={htmlPosition} color="#2B3595" fontSize={`${window.screen > 480 ? 2 : 0.6}`} />
                    <Word text="CSS" variants={wordVariants} pos={cssPosition} color="#102C57" fontSize={`${window.screen > 480 ? 1 : 0.6}`} />
                    <Word text="JavaScript" variants={wordVariants} pos={jsPosition} color="#FAC213" fontSize={`${window.screen > 480 ? 1.2 : 0.7}`} />
                    <Word text="Node.js" variants={wordVariants} pos={nodePosition} color="#00541A" fontSize={`${window.screen > 480 ? 1 : 0.6}`} />
                </motion.group>
            </MotionConfig>
        </Canvas>
    );
}

export function Word({ text, variants, pos, color, fontSize }) {

    return (
        <motion.group variants={variants}>
            <Text
                position={pos}
                fontSize={fontSize}
                color={color}
                fontWeight="bold"
                variants={{
                    hover: {
                        x: 1.8,
                        z: 1.4,
                        y: 0.4,
                        rotateZ: -0.5
                    }
                }}
            >
                {text}

            </Text>
            <Material />
        </motion.group>
    );
}


export function Lights() {
    return (
        <>
            <spotLight color="#61dafb" position={[-100, -10, -10]} intensity={0.2} />
            <spotLight color="#61dafb" position={[-10, 0, 15]} intensity={0.8} />
            <spotLight color="#61dafb" position={[-5, 20, 2]} intensity={0.5} />
            <spotLight color="#f2056f" position={[15, 10, -2]} intensity={2} />
            <spotLight color="#f2056f" position={[15, 10, 5]} intensity={1} />
            <spotLight color="#b107db" position={[5, -10, 5]} intensity={0.8} />
        </>
    );
}

export function Material() {
    return <meshPhongMaterial
        fontSize={30} // Set the font size to 30px
        color="black" // Set the color to dark-gold
        specular="black"
        shininess={10}
    />;
}

// Adapted from https://github.com/pmndrs/drei/blob/master/src/core/PerspectiveCamera.tsx
function Camera({ mouseX, mouseY, ...props }) {
    const cameraX = useSmoothTransform(mouseX, spring, (x) => x / 350);
    const cameraY = useSmoothTransform(mouseY, spring, (y) => (-1 * y) / 350);

    const set = useThree(({ set }) => set);
    const camera = useThree(({ camera }) => camera);
    const size = useThree(({ size }) => size);
    const scene = useThree(({ scene }) => scene);
    const cameraRef = useRef();

    useLayoutEffect(() => {
        const { current: cam } = cameraRef;
        if (cam) {
            cam.aspect = size.width / size.height;
            cam.updateProjectionMatrix();
        }
    }, [size, props]);

    useLayoutEffect(() => {
        if (cameraRef.current) {
            const oldCam = camera;
            set(() => ({ camera: cameraRef.current }));
            return () => set(() => ({ camera: oldCam }));
        }
    }, [camera, cameraRef, set]);

    useLayoutEffect(() => {
        return cameraX.onChange(() => camera.lookAt(scene.position));
    }, [cameraX]);

    return (
        <motion.perspectiveCamera
            ref={cameraRef}
            fov={90}
            position={[cameraX, cameraY, 3.8]}
        />
    );
}

const spring = { stiffness: 600, damping: 30 };

const mouseToLightRotation = (v) => (-1 * v) / 140;

import { Stars, ScrollControls, Scroll, Html, Float, Torus, Box, Octahedron } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import EducationCard from "./EducationCard";
import ProjectCard from "./ProjectCard";
import Contact from "../routes/contact.jsx";

const Section = ({ children, position, opacity = 1 }) => {
    return (
        <group position={position}>
            <Html transform>
                <div style={{ opacity: opacity, transition: 'opacity 0.5s', width: '800px' }}>
                    {children}
                </div>
            </Html>
        </group>
    );
};


const JourneyContent = () => {
    return (
        <ScrollControls pages={4} damping={0.2} style={{ top: '0', left: '0', position: 'absolute', width: '100%', height: '100%', zIndex: 10 }}>
            <Scroll>
                <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[2, 0, 0]}>
                    <Torus position={[0, 0, -2]} args={[1, 0.4, 16, 100]}>
                        <meshStandardMaterial color="#61dafb" wireframe />
                    </Torus>
                </Float>

                <Float speed={1.5} rotationIntensity={1} floatIntensity={1} position={[-2, -7, 0]}>
                    <Box args={[1.5, 1.5, 1.5]}>
                        <meshStandardMaterial color="#68a063" wireframe />
                    </Box>
                </Float>

                <Float speed={3} rotationIntensity={2} floatIntensity={1.5} position={[3, -14, 0]}>
                    <Octahedron args={[1.5]}>
                        <meshStandardMaterial color="#e0234e" wireframe />
                    </Octahedron>
                </Float>
            </Scroll>
            <Scroll html>
                <div style={{ width: '100vw', height: '400vh' }}>
                    <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: 'white', textShadow: '0 0 10px rgba(0,0,0,0.5)', background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '10px' }}>Hi, I am Dhruvraj Solanki</h1>
                    </div>

                    <div style={{ position: 'absolute', top: '100vh', left: '0', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ProjectCard />
                    </div>

                    <div style={{ position: 'absolute', top: '200vh', left: '0', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <EducationCard />
                    </div>

                    <div style={{ position: 'absolute', top: '300vh', left: '0', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Contact />
                    </div>
                </div>
            </Scroll>
        </ScrollControls>
    )
}

export const Experience = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <color attach="background" args={['#000010']} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <JourneyContent />
        </Canvas>
    );
};

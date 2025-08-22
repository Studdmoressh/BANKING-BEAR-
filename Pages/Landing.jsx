import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Landing() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-brandGold">Welcome to Banking Bear</h1>
      <p className="mt-4 text-lg text-gray-300">The future of crypto trading</p>

      <div className="w-full h-96">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere visible args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial color="#6C4AB6" attach="material" distort={0.3} speed={2} roughness={0} />
          </Sphere>
        </Canvas>
      </div>
    </div>
  );
}

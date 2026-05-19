import { useParticleCanvas } from "../../hooks/useParticleCanvas";

const ParticleCanvas = () => {
  const canvasRef = useParticleCanvas();
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default ParticleCanvas;

import { useRef } from "react";

const MagneticButton = ({ children }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const reset = () => {
    ref.current.style.transform = "translate(0,0)";
  };

  return (
    <button
      ref={ref}
      className="btn magnetic"
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      {children}
    </button>
  );
};

export default MagneticButton;

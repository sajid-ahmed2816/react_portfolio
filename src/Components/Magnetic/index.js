import { useEffect, useRef } from "react";
import "./style.css";

const Magnetic = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const reset = () => {
      el.style.transform = `translate(0px, 0px)`;
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', reset);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', reset);
    };
  }, []);

  return (
    <div ref={ref} className="magnetic-wrapper">
      {children}
    </div>
  );
};

export default Magnetic;

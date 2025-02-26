import { useEffect, useRef, useState } from "react";
import "./App.css"

const Bai1ReactCanvas = () => {
  const canvasRef = useRef(null);
  const [radius, setRadius] = useState(10);
  const [color, setColor] = useState("blue");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    draw();
  }, [radius, color]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRadius((prevRadius) => {
        if (prevRadius >= 300) {
          setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
          return 10;
        }
        return prevRadius + 10;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} width={600} height={600} className="canvas" />
    </div>
  );
};

export default Bai1ReactCanvas;

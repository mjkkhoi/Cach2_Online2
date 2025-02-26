import { useEffect, useRef, useState } from "react";
import "./bai_2.css";

const Bai2ReactCanvas = () => {
  const canvasRef = useRef(null);
  const [length, setLength] = useState(220);
  const [color, setColor] = useState("red");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();

      ctx.translate(200, 100);
      const angle = (20 * Math.PI) / 180;
      ctx.rotate(angle);
      const gradient = ctx.createLinearGradient(0, 0, length, 0);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, "white");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(60, 0);
      ctx.lineTo(length, -40);
      ctx.lineTo(length + 80, -50);
      ctx.lineTo(length - 70, 70);
      ctx.lineTo(-70, 120);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    draw();
  }, [length, color]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLength((prevLength) => {
        if (prevLength >= window.innerWidth - 140) {
          setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
          return 220;
        }
        return prevLength + 5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} width={1700} height={700} className="canvas" />
    </div>
  );
};

export default Bai2ReactCanvas;

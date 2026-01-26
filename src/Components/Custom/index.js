import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';

const ParticlesCanvas = ({ position = "absolute", zIndex = 0 }) => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const particles = useRef([]);

  const PARTICLE_COUNT = 40;
  const PARTICLE_LINK_DIST = 40;
  const BUBBLE_RADIUS = 90;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles in a circle around cursor
    const initParticles = () => {
      particles.current = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * BUBBLE_RADIUS;
        particles.current.push({
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    // Update particles inside the bubble
    const updateParticles = () => {
      for (let p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off the edge of bubble
        const dist = Math.sqrt(p.x * p.x + p.y * p.y);
        if (dist > BUBBLE_RADIUS) {
          const angle = Math.atan2(p.y, p.x);
          // Reflect velocity
          p.vx = -p.vx;
          p.vy = -p.vy;
          // Push back inside
          p.x = Math.cos(angle) * BUBBLE_RADIUS;
          p.y = Math.sin(angle) * BUBBLE_RADIUS;
        }
      }
    };

    // Draw particles relative to cursor
    const drawParticles = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (mouse.current.x === null || mouse.current.y === null) return;

  ctx.fillStyle = "#404040";
  ctx.strokeStyle = "#808080";

  // Get particles positions relative to cursor
  const visibleParticles = particles.current.map(p => ({
    x: p.x + mouse.current.x,
    y: p.y + mouse.current.y,
    orig: p, // keep reference for further calculations if needed
  }));

  // Draw particles
  for (let p of visibleParticles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  // Draw links between nearby particles
  for (let i = 0; i < visibleParticles.length; i++) {
    for (let j = i + 1; j < visibleParticles.length; j++) {
      const dx = visibleParticles[i].x - visibleParticles[j].x;
      const dy = visibleParticles[i].y - visibleParticles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < PARTICLE_LINK_DIST) {
        ctx.beginPath();
        ctx.moveTo(visibleParticles[i].x, visibleParticles[i].y);
        ctx.lineTo(visibleParticles[j].x, visibleParticles[j].y);
        ctx.stroke();
      }
    }
  }

  // Find nearest particle to cursor
  let nearest = null;
  let minDist = Infinity;
  for (let p of visibleParticles) {
    const dx = p.x - mouse.current.x;
    const dy = p.y - mouse.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < minDist) {
      minDist = dist;
      nearest = p;
    }
  }

  // Draw line from nearest particle to cursor
  if (nearest) {
    ctx.beginPath();
    ctx.moveTo(nearest.x, nearest.y);
    ctx.lineTo(mouse.current.x, mouse.current.y);
    ctx.stroke();
  }
};


    const animate = () => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    initParticles();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <Box
      component="canvas"
      ref={canvasRef}
      sx={{
        display: { xl: "block", lg: "block", md: "block", sm: "none", xs: "none" },
        position: position,
        top: 0,
        left: 0,
        zIndex: zIndex,
        width: '100%',
        height: '100vh',
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticlesCanvas;
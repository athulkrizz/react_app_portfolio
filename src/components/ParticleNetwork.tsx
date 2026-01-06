import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface ParticleNetworkProps {
    particleColor?: string;
    lineColor?: string;
    particleCount?: number;
    interactionRadius?: number;
}

const ParticleNetwork = ({
    particleColor = 'rgba(45, 45, 45, 0.5)',
    lineColor = 'rgba(45, 45, 45, 0.15)',
    particleCount = 60,
    interactionRadius = 150
}: ParticleNetworkProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Array<{ x: number; y: number; vx: number; vy: number; size: number }>>([]);
    const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Initialize particles
        const initParticles = () => {
            particles.current = [];

            // Fixed density based on screen area (optional, using prop count for now but scaling slightly)
            const count = window.innerWidth < 768 ? particleCount / 2 : particleCount;

            for (let i = 0; i < count; i++) {
                particles.current.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    size: Math.random() * 2 + 1
                });
            }
        };

        const onResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        };

        const onMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
        };

        window.addEventListener('resize', onResize);
        window.addEventListener('mousemove', onMouseMove);

        initParticles();

        // Animation Loop
        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Update and draw particles
            particles.current.forEach((p, i) => {
                // Cap speed - mimic air resistance only for high speeds
                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (speed > 0.6) {
                    p.vx *= 0.90;
                    p.vy *= 0.90;
                }

                // Move
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off walls
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Mouse interaction (repel)
                const dxMouse = p.x - mouse.current.x;
                const dyMouse = p.y - mouse.current.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distMouse < 150) {
                    const angle = Math.atan2(dyMouse, dxMouse);
                    // Gentle repulsion force
                    p.vx += Math.cos(angle) * 0.1;
                    p.vy += Math.sin(angle) * 0.1;
                }

                // Draw Particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.fill();

                // Connect to mouse
                if (distMouse < interactionRadius) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.current.x, mouse.current.y);
                    ctx.strokeStyle = lineColor;
                    ctx.globalAlpha = 1 - distMouse / interactionRadius;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }

                // Connect lines between particles
                for (let j = i + 1; j < particles.current.length; j++) {
                    const p2 = particles.current[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < interactionRadius) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        // Opacity based on distance
                        const opacity = 1 - dist / interactionRadius;
                        ctx.strokeStyle = lineColor.replace(')', `, ${opacity})`).replace('rgb', 'rgba');

                        ctx.lineWidth = 1;

                        // Override simpler opacity handling
                        ctx.globalAlpha = opacity;
                        ctx.strokeStyle = lineColor; // Just use base color, rely on globalAlpha
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }
            });
        };

        // Use GSAP ticker for efficient RAF
        gsap.ticker.add(render);

        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener('mousemove', onMouseMove);
            gsap.ticker.remove(render);
        };
    }, [particleColor, lineColor, particleCount, interactionRadius]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0, // Behind content
                pointerEvents: 'none' // Let clicks pass through
            }}
        />
    );
};

export default ParticleNetwork;

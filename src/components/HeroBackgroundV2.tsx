import { useEffect, useRef } from 'react';

const HeroBackgroundV2 = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = container.offsetWidth;
        let height = container.offsetHeight;
        let animationFrameId: number;
        let time = 0;

        // Singularity Configuration
        // Recursive center calculation to match CSS media queries (lg = 1024px)
        const isDesktop = () => width >= 1024;

        const centerX = () => {
            if (!isDesktop()) return width / 2;

            // Align with the right column of the max-w-[1600px] grid
            const containerWidth = Math.min(width, 1600);
            const margin = (width - containerWidth) / 2;

            // Center of right column is at margin + 75% of container width
            return margin + (containerWidth * 0.75);
        };

        const centerY = () => height / 2;
        const eventHorizonRadius = 80;
        const particleCount = 150;

        // Service Particles Configuration
        const services = [
            "Designing", "Web Development", "AI Solutions", "Cloud Architecture",
            "Cybersecurity", "Blockchain", "IoT Systems", "Data Science",
            "DevOps", "Mobile Apps", "System Operations", "Quality Engineering",
            "Consulting", "Strategy", "Automation", "FinTech", "HealthTech",
            "Enterprise"
        ];

        class TextParticle {
            text: string;
            angle: number;
            distance: number;
            speed: number;
            opacity: number;
            size: number;
            initialDistance: number;

            constructor(text: string) {
                this.text = text;
                this.initialDistance = 400 + Math.random() * 400;
                this.reset(true);
            }

            reset(firstRun = false) {
                this.angle = Math.random() * Math.PI * 2;
                this.distance = firstRun ? 400 + Math.random() * 400 : 800 + Math.random() * 200;
                this.speed = 0.2 + Math.random() * 0.3;
                this.opacity = 0;
                this.size = 14 + Math.random() * 6;
            }

            update() {
                // Spiral inward
                this.distance -= this.speed;
                this.speed *= 1.002; // Accelerate slightly as it gets closer

                // Orbit
                this.angle += (100 / (this.distance + 1)) * 0.005;

                // Opacity logic: Fade in then fade out
                if (this.distance > 500) {
                    this.opacity = Math.min(0.8, (800 - this.distance) / 200);
                } else if (this.distance < 200) {
                    this.opacity = Math.max(0, (this.distance - 120) / 80);
                } else {
                    this.opacity = 0.8;
                }

                // Size logic: shrink as it enters event horizon
                if (this.distance < 200) {
                    // this.size = Math.max(1, this.size * 0.99);
                }

                // Reset inside event horizon
                if (this.distance < 120 || this.opacity <= 0) {
                    this.reset();
                }
            }

            draw() {
                if (!ctx) return;

                const x = centerX() + Math.cos(this.angle) * this.distance;
                const y = centerY() + Math.sin(this.angle) * this.distance;

                ctx.save();
                ctx.translate(x, y);

                ctx.font = `500 ${this.size}px "Inter", sans-serif`;
                ctx.fillStyle = `rgba(200, 200, 255, ${this.opacity})`;
                ctx.shadowBlur = 10 * this.opacity;
                ctx.shadowColor = 'rgba(139, 92, 246, 0.3)';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(this.text, 0, 0);

                ctx.restore();
            }
        }

        class Particle {
            angle: number;
            distance: number;
            speed: number;
            size: number;
            color: string;
            orbitSpeed: number;

            constructor() {
                this.angle = Math.random() * Math.PI * 2;
                this.distance = 200 + Math.random() * 300;
                this.speed = 0.5 + Math.random() * 1;
                this.size = 1 + Math.random() * 2;
                this.color = Math.random() > 0.5 ? '#8b5cf6' : '#a78bfa';
                this.orbitSpeed = 0.01 + Math.random() * 0.02;
            }

            update(mouseX: number, mouseY: number) {
                // Spiral inward
                this.distance -= this.speed;

                // Orbit around center
                this.angle += this.orbitSpeed * (1 + (300 - this.distance) / 300);

                // Mouse warps spacetime
                const dx = mouseX - centerX();
                const dy = mouseY - centerY();
                const distToMouse = Math.sqrt(dx * dx + dy * dy);

                if (distToMouse < 200) {
                    const influence = (200 - distToMouse) / 200;
                    const angleToMouse = Math.atan2(dy, dx);
                    this.angle += influence * 0.05 * Math.sin(angleToMouse);
                }

                // Reset if reached event horizon
                if (this.distance < eventHorizonRadius) {
                    this.distance = 200 + Math.random() * 300;
                    this.angle = Math.random() * Math.PI * 2;
                }
            }

            draw() {
                if (!ctx) return;

                const x = centerX() + Math.cos(this.angle) * this.distance;
                const y = centerY() + Math.sin(this.angle) * this.distance;

                // Fade as approaching event horizon
                const opacity = Math.min(1, this.distance / 150);

                // Redshift effect (color shift as approaching)
                const redshift = 1 - (this.distance / 500);
                const r = 139 + redshift * 116;
                const g = 92 - redshift * 50;
                const b = 246;

                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
                ctx.shadowBlur = 5;
                ctx.shadowColor = this.color;
                ctx.beginPath();
                ctx.arc(x, y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        const particles: Particle[] = [];
        const textParticles: TextParticle[] = [];

        const initParticles = () => {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }

            textParticles.length = 0;
            services.forEach(service => {
                textParticles.push(new TextParticle(service));
            });
        };

        const handleResize = () => {
            width = container.offsetWidth;
            height = container.offsetHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        };

        let mouseX = width / 2;
        let mouseY = height / 2;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const drawEventHorizon = () => {
            // Dark core (singularity)
            const gradient = ctx.createRadialGradient(
                centerX(), centerY(), 0,
                centerX(), centerY(), eventHorizonRadius
            );
            gradient.addColorStop(0, '#000000');
            gradient.addColorStop(0.7, '#1a0a2e');
            gradient.addColorStop(1, 'rgba(76, 29, 149, 0.5)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(centerX(), centerY(), eventHorizonRadius, 0, Math.PI * 2);
            ctx.fill();

            // Event horizon ring
            ctx.strokeStyle = '#4c1d95';
            ctx.lineWidth = 2;
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#6d28d9';
            ctx.beginPath();
            ctx.arc(centerX(), centerY(), eventHorizonRadius, 0, Math.PI * 2);
            ctx.stroke();
            ctx.shadowBlur = 0;
        };

        const drawAccretionDisk = () => {
            // Accretion disk (flattened spiral)
            const diskLayers = 8;

            for (let layer = 0; layer < diskLayers; layer++) {
                const radius = eventHorizonRadius + 20 + layer * 15;
                const rotation = time * 0.01 + layer * 0.3;

                ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 - layer * 0.015})`;
                ctx.lineWidth = 3;

                ctx.beginPath();
                for (let i = 0; i <= 100; i++) {
                    const angle = (i / 100) * Math.PI * 2 + rotation;
                    const r = radius + Math.sin(i * 0.5 + time * 0.05) * 5;

                    // Flatten vertically to create disk appearance
                    const x = centerX() + Math.cos(angle) * r;
                    const y = centerY() + Math.sin(angle) * r * 0.3; // Flatten

                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.stroke();
            }
        };

        const drawGravitationalLensing = () => {
            // Photon sphere (light bending)
            const photonRadius = eventHorizonRadius * 1.5;

            for (let i = 0; i < 3; i++) {
                const offset = i * 0.3;
                ctx.strokeStyle = `rgba(167, 139, 250, ${0.2 - i * 0.05})`;
                ctx.lineWidth = 1;
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#a78bfa';

                ctx.beginPath();
                ctx.arc(centerX(), centerY(), photonRadius + offset * 10, 0, Math.PI * 2);
                ctx.stroke();
            }
            ctx.shadowBlur = 0;
        };

        const drawSpacetimeGrid = () => {
            // Warped spacetime grid
            ctx.strokeStyle = 'rgba(76, 29, 149, 0.1)';
            ctx.lineWidth = 1;

            const gridSize = 50;
            const warpStrength = 100;

            // Horizontal lines
            for (let y = 0; y < height; y += gridSize) {
                ctx.beginPath();
                for (let x = 0; x <= width; x += 5) {
                    const dx = x - centerX();
                    const dy = y - centerY();
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    // Warp towards center
                    const warp = Math.max(0, warpStrength / (dist + 50));
                    const warpedY = y - warp * dy / dist;

                    if (x === 0) ctx.moveTo(x, warpedY);
                    else ctx.lineTo(x, warpedY);
                }
                ctx.stroke();
            }

            // Vertical lines
            for (let x = 0; x < width; x += gridSize) {
                ctx.beginPath();
                for (let y = 0; y <= height; y += 5) {
                    const dx = x - centerX();
                    const dy = y - centerY();
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    const warp = Math.max(0, warpStrength / (dist + 50));
                    const warpedX = x - warp * dx / dist;

                    if (y === 0) ctx.moveTo(warpedX, y);
                    else ctx.lineTo(warpedX, y);
                }
                ctx.stroke();
            }
        };

        const animate = () => {
            time++;

            // Deep black background
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, width, height);

            drawSpacetimeGrid();
            drawGravitationalLensing();
            drawAccretionDisk();

            // Update and draw text particles
            textParticles.forEach(p => {
                p.update();
                p.draw();
            });

            // Update and draw particles
            particles.forEach(particle => {
                particle.update(mouseX, mouseY);
                particle.draw();
            });

            drawEventHorizon();

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden bg-black">
            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_90%)] pointer-events-none z-10" />

            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
        </div>
    );
};

export default HeroBackgroundV2;

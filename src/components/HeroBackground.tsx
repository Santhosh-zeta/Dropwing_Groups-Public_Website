import { useEffect, useRef } from 'react';

const HeroBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        let width = container.offsetWidth;
        let height = container.offsetHeight;
        let animationFrameId: number;

        // Optimized Configuration - Reduced density
        const columnWidth = 35; // Increased spacing
        let columns = 0;

        // Smaller glyph set for better performance
        const glyphs = [
            '▢', '△', '○', '◇', '▽', '◁', '▷', '⬡', '⬢', '⬣',
            '◀', '▶', '▲', '▼', '◆', '●', '■', '□',
            '⟨', '⟩', '⊕', '⊗', '⊙', '⌀', '⌃', '⌄'
        ];

        class DataStream {
            x: number;
            y: number;
            speed: number;
            symbols: { char: string; opacity: number }[];
            length: number;
            baseSpeed: number;
            targetX: number;
            vx: number;

            constructor(x: number) {
                this.x = x;
                this.targetX = x;
                this.vx = 0;
                this.y = -Math.random() * height * 2;
                this.baseSpeed = 2 + Math.random() * 2;
                this.speed = this.baseSpeed;
                this.length = 12 + Math.floor(Math.random() * 15); // Shorter streams
                this.symbols = [];

                for (let i = 0; i < this.length; i++) {
                    this.symbols.push({
                        char: glyphs[Math.floor(Math.random() * glyphs.length)],
                        opacity: 1 - (i / this.length)
                    });
                }
            }

            update(mouseX: number, mouseY: number) {
                this.y += this.speed;

                // Optimized mouse interaction
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distSq = dx * dx + dy * dy; // Avoid sqrt
                const forceRadiusSq = 180 * 180;

                if (distSq < forceRadiusSq && distSq > 0) {
                    const dist = Math.sqrt(distSq);
                    const force = (180 - dist) / 180;
                    const pushAngle = Math.atan2(dy, dx);

                    const horizontalForce = Math.cos(pushAngle) * force * 8;
                    this.targetX = this.x - horizontalForce;
                    this.speed = this.baseSpeed * (0.3 + (dist / 180) * 0.7);
                } else {
                    this.targetX = Math.floor(this.x / columnWidth) * columnWidth + columnWidth / 2;
                    this.speed = this.baseSpeed;
                }

                this.vx += (this.targetX - this.x) * 0.1;
                this.vx *= 0.85;
                this.x += this.vx;

                // Reset if off screen
                if (this.y > height + this.length * columnWidth) {
                    this.y = -this.length * columnWidth;
                    this.x = Math.floor(this.x / columnWidth) * columnWidth + columnWidth / 2;
                    this.targetX = this.x;
                    this.vx = 0;

                    // Regenerate symbols
                    this.symbols = [];
                    for (let i = 0; i < this.length; i++) {
                        this.symbols.push({
                            char: glyphs[Math.floor(Math.random() * glyphs.length)],
                            opacity: 1 - (i / this.length)
                        });
                    }
                }
            }

            draw() {
                if (!ctx) return;

                // Batch shadow operations for performance
                let lastShadowBlur = -1;
                let prevY = null;

                this.symbols.forEach((symbol, i) => {
                    const y = this.y - i * columnWidth;

                    if (y < -columnWidth || y > height + columnWidth) return;

                    const isHead = i === 0;
                    const isFront = i < 2;

                    // Draw connecting line to previous box
                    if (prevY !== null && i > 0) {
                        ctx.strokeStyle = `rgba(139, 92, 246, ${symbol.opacity * 0.3})`;
                        ctx.lineWidth = 2;
                        ctx.shadowBlur = 0;
                        ctx.beginPath();
                        ctx.moveTo(this.x, prevY + 9); // Bottom of previous box
                        ctx.lineTo(this.x, y - 9); // Top of current box
                        ctx.stroke();
                    }

                    if (isHead) {
                        // Diagonal cube at the head
                        ctx.fillStyle = `rgba(255, 255, 255, ${symbol.opacity})`;
                        if (lastShadowBlur !== 12) {
                            ctx.shadowBlur = 12;
                            ctx.shadowColor = '#ffffff';
                            lastShadowBlur = 12;
                        }

                        // Draw isometric cube
                        const size = 12;
                        ctx.save();
                        ctx.translate(this.x, y);

                        // Top face
                        ctx.beginPath();
                        ctx.moveTo(0, -size / 2);
                        ctx.lineTo(size, 0);
                        ctx.lineTo(0, size / 2);
                        ctx.lineTo(-size, 0);
                        ctx.closePath();
                        ctx.fill();

                        // Left face (darker)
                        ctx.fillStyle = `rgba(200, 200, 255, ${symbol.opacity * 0.7})`;
                        ctx.beginPath();
                        ctx.moveTo(-size, 0);
                        ctx.lineTo(0, size / 2);
                        ctx.lineTo(0, size);
                        ctx.lineTo(-size, size / 2);
                        ctx.closePath();
                        ctx.fill();

                        // Right face (darker)
                        ctx.fillStyle = `rgba(180, 180, 255, ${symbol.opacity * 0.6})`;
                        ctx.beginPath();
                        ctx.moveTo(size, 0);
                        ctx.lineTo(0, size / 2);
                        ctx.lineTo(0, size);
                        ctx.lineTo(size, size / 2);
                        ctx.closePath();
                        ctx.fill();

                        ctx.restore();

                    } else if (isFront) {
                        // Boxy rectangle for front section
                        ctx.fillStyle = `rgba(220, 200, 255, ${symbol.opacity * 0.8})`;
                        if (lastShadowBlur !== 6) {
                            ctx.shadowBlur = 6;
                            ctx.shadowColor = '#a78bfa';
                            lastShadowBlur = 6;
                        }

                        const width = 10;
                        const height = 18;
                        ctx.fillRect(this.x - width / 2, y - height / 2, width, height);

                        // Simple border
                        ctx.strokeStyle = `rgba(255, 255, 255, ${symbol.opacity * 0.4})`;
                        ctx.lineWidth = 1;
                        ctx.strokeRect(this.x - width / 2, y - height / 2, width, height);

                    } else {
                        // Tail boxes - solid color, no gradient
                        ctx.fillStyle = `rgba(160, 130, 220, ${symbol.opacity * 0.6})`;
                        if (lastShadowBlur !== 3) {
                            ctx.shadowBlur = 3;
                            ctx.shadowColor = '#8b5cf6';
                            lastShadowBlur = 3;
                        }

                        const width = 10;
                        const height = 16;
                        ctx.fillRect(this.x - width / 2, y - height / 2, width, height);
                    }

                    prevY = y;
                });

                ctx.shadowBlur = 0;
            }
        }

        const streams: DataStream[] = [];

        const initStreams = () => {
            columns = Math.ceil(width / columnWidth);
            streams.length = 0;

            // Limit max streams for performance
            const maxStreams = Math.min(columns, 50);
            const step = Math.max(1, Math.floor(columns / maxStreams));

            for (let i = 0; i < columns; i += step) {
                const stream = new DataStream(i * columnWidth + columnWidth / 2);
                stream.y = -Math.random() * height * 1.5;
                streams.push(stream);
            }
        };

        const handleResize = () => {
            width = container.offsetWidth;
            height = container.offsetHeight;
            canvas.width = width;
            canvas.height = height;
            initStreams();
        };

        let mouseX = -1000;
        let mouseY = -1000;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const animate = () => {
            // Optimized fade
            ctx.fillStyle = '#000000';
            ctx.globalAlpha = 0.12;
            ctx.fillRect(0, 0, width, height);
            ctx.globalAlpha = 1;

            // Update and draw streams
            streams.forEach(stream => {
                stream.update(mouseX, mouseY);
                stream.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        handleResize();

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, width, height);

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_85%)] pointer-events-none z-10" />

            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
        </div>
    );
};

export default HeroBackground;

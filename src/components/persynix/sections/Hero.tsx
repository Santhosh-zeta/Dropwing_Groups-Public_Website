import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

/* Sky-blue system topology — colors match logo accent */
const PRIMARY = 'hsl(199, 90%, 40%)';   // deeper sky blue for white bg
const PRIMARY_DIM = 'hsl(199, 90%, 40% / 0.10)';
const PRIMARY_GLOW = 'hsl(199, 90%, 50%)';
const LABEL_COLOR = 'hsl(215, 18%, 45%)';

const SystemTopology = () => {
  const nodes = [
    { id: 'ai', cx: 200, cy: 100, label: 'AI Engine', r: 22 },
    { id: 'data', cx: 80, cy: 55, label: 'Data Layer', r: 16 },
    { id: 'auto', cx: 320, cy: 55, label: 'Automation', r: 16 },
    { id: 'api', cx: 60, cy: 170, label: 'API Gateway', r: 14 },
    { id: 'llm', cx: 340, cy: 170, label: 'LLM', r: 14 },
    { id: 'analytics', cx: 200, cy: 210, label: 'Analytics', r: 14 },
  ];

  const edges: [string, string][] = [
    ['ai', 'data'],
    ['ai', 'auto'],
    ['ai', 'api'],
    ['ai', 'llm'],
    ['ai', 'analytics'],
    ['data', 'api'],
    ['auto', 'llm'],
    ['analytics', 'api'],
  ];

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <svg viewBox="0 0 400 270" className="w-full h-full" aria-hidden="true">
      {/* Edges */}
      {edges.map(([a, b]) => (
        <motion.line
          key={`${a}-${b}`}
          x1={nodeMap[a].cx}
          y1={nodeMap[a].cy}
          x2={nodeMap[b].cx}
          y2={nodeMap[b].cy}
          stroke={PRIMARY}
          strokeWidth={0.6}
          strokeOpacity={0.22}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        />
      ))}

      {/* Animated data particles */}
      {edges.map(([a, b], i) => (
        <motion.circle
          key={`p-${a}-${b}`}
          r={2}
          fill={PRIMARY_GLOW}
          initial={{ x: nodeMap[a].cx, y: nodeMap[a].cy, opacity: 0 }}
          animate={{
            x: [nodeMap[a].cx, nodeMap[b].cx, nodeMap[a].cx],
            y: [nodeMap[a].cy, nodeMap[b].cy, nodeMap[a].cy],
            opacity: [0, 0.85, 0],
          }}
          transition={{ duration: 2.8 + i * 0.3, repeat: Infinity, delay: 1.2 + i * 0.4 }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.g
          key={node.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Glow ring */}
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r + 6}
            fill="none"
            stroke={PRIMARY}
            strokeWidth={0.5}
            opacity={0.18}
          />
          {/* Node fill */}
          <circle cx={node.cx} cy={node.cy} r={node.r} fill={PRIMARY_DIM} stroke={PRIMARY} strokeWidth={1} />
          {/* Label */}
          <text
            x={node.cx}
            y={node.cy + node.r + 11}
            textAnchor="middle"
            fill={LABEL_COLOR}
            fontSize={8}
            fontFamily="Space Grotesk, sans-serif"
          >
            {node.label}
          </text>
        </motion.g>
      ))}

      {/* Pulsing centre ring */}
      <motion.circle
        cx={200}
        cy={100}
        r={22}
        fill="none"
        stroke={PRIMARY}
        strokeWidth={1}
        animate={{ r: [22, 32, 22], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(hsl(199 90% 70%) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient glow orbs — sky blue */}
      <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'hsl(199 90% 60% / 0.10)' }} />
      <div className="absolute bottom-1/4 left-1/5 w-[320px] h-[320px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'hsl(199 90% 60% / 0.07)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
                style={{
                  border: '1px solid hsl(199 90% 40% / 0.30)',
                  background: 'hsl(199 90% 40% / 0.07)',
                  color: 'hsl(199 90% 38%)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                AI · Automation · Engineering
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight mb-6"
            >
              Building intelligent{' '}
              <span className="text-primary">digital systems</span> for modern businesses.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed mb-10"
            >
              We design, engineer and deploy AI systems, automation workflows, and digital products
              that give businesses a meaningful operational edge.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground text-sm font-medium rounded-sm hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                Explore Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — system visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="w-full aspect-[4/3] max-w-lg mx-auto">
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: 'hsl(199 90% 40% / 0.03)',
                  border: '1px solid hsl(199 90% 40% / 0.15)',
                }}
              />
              <div className="relative p-8 h-full">
                <SystemTopology />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/40">
        <span className="text-[10px] tracking-[0.2em] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";

const chips = [
  "Музыкальная дистрибуция",
  "Цифровой договор",
  "Промо-продвижение",
  "Все площадки",
  "Быстрое оформление",
];

export function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[78vh] flex items-center justify-center noise bg-[#06010f]">
      {/* Background orbs — hidden in print via pdf-orb class */}
      <div className="pdf-orb absolute inset-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.08] blur-[120px] animate-pulse-slow" />
        <div className="absolute w-[400px] h-[400px] top-[20%] left-[10%] rounded-full bg-violet-500/[0.06] blur-[80px] animate-float" />
        <div className="absolute w-[300px] h-[300px] bottom-[20%] right-[10%] rounded-full bg-indigo-500/[0.05] blur-[60px] animate-float-delay" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#06010f]" />
      </div>

      {/* pdf-hero-content — this is what gets shown in print */}
      <div className="pdf-hero-content max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-18 lg:py-20 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/[0.06]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span
            className="text-[11px] text-purple-300 font-medium tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            pfvmusic.digital
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] mb-8 tracking-tight"
        >
          PFVMUSIC
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-400 bg-clip-text text-transparent">
            Платформа
          </span>
          <br />
          <span className="text-gray-500 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-normal">
            дистрибуции музыки
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-gray-500 text-base sm:text-lg max-w-xl mb-12 leading-relaxed"
        >
          Профессиональный сервис для артистов — от подачи заявки до выхода
          музыки на всех ключевых площадках
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap gap-2.5"
        >
          {chips.map((chip, i) => (
            <motion.span
              key={chip}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.06 }}
              className="chip-glow text-xs font-medium px-4 py-2 rounded-full"
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

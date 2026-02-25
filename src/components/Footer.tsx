import { motion } from "framer-motion";

const chips = [
  "🎵 Сингл, EP, Альбом",
  "⚡ От 3 дней",
  "💰 От 500 ₽",
  "📋 Без бумажной волокиты",
  "🌍 100+ площадок",
];

export function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-2xl"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-[#0d0618] to-violet-900/20" />
      <div className="absolute inset-0 border border-purple-500/10 rounded-2xl" />
      
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-600/10 blur-[80px] rounded-full" />

      <div className="relative z-10 px-8 py-16 sm:py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight"
        >
          PFVMUSIC — Выпусти релиз сегодня
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-500 text-sm sm:text-base mb-10"
        >
          Быстрое оформление · Цифровой договор · Все площадки
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2.5"
        >
          {chips.map((chip, i) => (
            <motion.span
              key={chip}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}
              className="chip-glow text-xs font-medium px-4 py-2 rounded-full"
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

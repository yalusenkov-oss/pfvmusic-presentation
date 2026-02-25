import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { emoji: "🎵", title: "Артист", subtitle: "выбирает тариф", details: ["Базовый / Продвинутый", "Премиум / Платинум"], gradient: "from-purple-600 to-violet-600" },
  { emoji: "📋", title: "Заполняет", subtitle: "форму (4 шага)", details: ["Данные релиза", "Контакты · Оплата"], gradient: "from-blue-600 to-indigo-600" },
  { emoji: "📧", title: "Получает", subtitle: "договор на email", details: ["Персональная ссылка", "Сразу после оплаты"], gradient: "from-amber-500 to-orange-500" },
  { emoji: "✍️", title: "Подписывает", subtitle: "онлайн", details: ["Читает договор", "PDF с 2 подписями"], gradient: "from-indigo-600 to-violet-600" },
  { emoji: "🌍", title: "Релиз", subtitle: "выходит", details: ["Все площадки", "В срок по тарифу"], gradient: "from-emerald-600 to-teal-600" },
];

export function Journey() {
  return (
    <section>
      <SectionHeader tag="Путь артиста" title="От заявки до выпуска — шаг за шагом" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-2xl p-6 sm:p-8 overflow-x-auto"
      >
        <div className="flex items-stretch gap-0 min-w-[650px]">
          {steps.map((step, i) => (
            <div key={step.title} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex-1 text-center"
              >
                <div className={`bg-gradient-to-br ${step.gradient} rounded-xl p-3.5 text-white mb-2.5`}>
                  <div className="text-xl mb-1">{step.emoji}</div>
                  <div className="text-[10px] font-bold leading-tight">
                    {step.title}<br />{step.subtitle}
                  </div>
                </div>
                <div className="space-y-0.5">
                  {step.details.map((d) => (
                    <div key={d} className="text-[8px] text-gray-500">{d}</div>
                  ))}
                </div>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="flex items-start justify-center px-1 pt-5">
                  <span className="text-purple-500/40 text-lg">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

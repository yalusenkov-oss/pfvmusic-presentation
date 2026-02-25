import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const capabilities = [
  {
    icon: "💿",
    title: "Дистрибуция",
    description:
      "Выберите тариф, заполните данные о релизе и отправьте заявку за несколько минут.",
    accent: "from-purple-500/20 to-purple-500/0",
    border: "hover:border-purple-500/20",
  },
  {
    icon: "📋",
    title: "Цифровой договор",
    description:
      "Договор формируется автоматически и подписывается онлайн — без бумаг и встреч.",
    accent: "from-blue-500/20 to-blue-500/0",
    border: "hover:border-blue-500/20",
  },
  {
    icon: "📣",
    title: "Промо-продвижение",
    description:
      "Отдельная форма для подачи промо-информации по вашему релизу на все площадки.",
    accent: "from-amber-500/20 to-amber-500/0",
    border: "hover:border-amber-500/20",
  },
  {
    icon: "⚡",
    title: "Быстрый старт",
    description:
      "4 простых шага — и ваша музыка в очереди на публикацию. Всё прозрачно.",
    accent: "from-emerald-500/20 to-emerald-500/0",
    border: "hover:border-emerald-500/20",
  },
];

export function Capabilities() {
  const prefersReducedMotion = useReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsTouchDevice(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const disableCardAnimation = prefersReducedMotion || isTouchDevice;

  return (
    <section className="py-12">
      <SectionHeader
        tag="О платформе"
        title="Всё для вашего релиза — в одном месте"
        subtitle="Удобный онлайн-сервис с полным циклом оформления от заявки до подписанного договора"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {capabilities.map((cap, i) => {
          const cardClass = `glass-card rounded-2xl p-6 ${
            disableCardAnimation ? "" : cap.border
          } transition-all duration-300 group relative overflow-hidden`;

          if (disableCardAnimation) {
            return (
              <div key={cap.title} className={cardClass}>
                <div className={`absolute inset-0 bg-gradient-to-b ${cap.accent} opacity-15`} />
                <div className="relative z-10">
                  <div className="text-3xl mb-5">{cap.icon}</div>
                  <h3 className="text-base font-bold text-white mb-2">{cap.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{cap.description}</p>
                </div>
              </div>
            );
          }

          return (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
              className={cardClass}
              style={{ willChange: "transform, opacity" }}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${cap.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className="text-3xl mb-5">{cap.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cap.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

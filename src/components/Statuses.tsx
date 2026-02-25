import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const releaseStatuses = [
  { label: "Новый", sub: "Заявка получена", bg: "bg-blue-500/15", text: "text-blue-400" },
  { label: "В работе", sub: "Проверяется", bg: "bg-amber-500/15", text: "text-amber-400" },
  { label: "Оплачен", sub: "Оплата получена", bg: "bg-emerald-500/15", text: "text-emerald-400" },
  { label: "Подписан", sub: "Договор подписан", bg: "bg-purple-500/15", text: "text-purple-400" },
  { label: "Выпущен", sub: "На площадках", bg: "bg-green-500/15", text: "text-green-400" },
];

const contractStatuses = [
  { label: "Не создан", sub: "", bg: "bg-white/[0.06]", text: "text-gray-500" },
  { label: "Ожидает подписи", sub: "Ссылка отправлена", bg: "bg-amber-500/15", text: "text-amber-400" },
  { label: "Подписан", sub: "PDF готов", bg: "bg-emerald-500/15", text: "text-emerald-400" },
];

export function Statuses() {
  return (
    <section>
      <SectionHeader
        tag="Прозрачность"
        title="Статусы релизов"
        subtitle="На каждом этапе артист знает, где находится его заявка"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-5"
        >
          <div className="text-[11px] font-semibold text-gray-400 mb-4 uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
            Этапы обработки релиза
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {releaseStatuses.map((s, i) => (
              <div key={s.label} className="contents">
                <div className="text-center">
                  <span className={`${s.bg} ${s.text} tag-status`}>{s.label}</span>
                  {s.sub && <div className="text-[7px] text-gray-600 mt-1">{s.sub}</div>}
                </div>
                {i < releaseStatuses.length - 1 && (
                  <span className="text-purple-500/30 text-sm flex-shrink-0">→</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-2xl p-5"
        >
          <div className="text-[11px] font-semibold text-gray-400 mb-4 uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
            Статус договора
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {contractStatuses.map((s, i) => (
              <div key={s.label} className="contents">
                <div className="text-center">
                  <span className={`${s.bg} ${s.text} tag-status`}>{s.label}</span>
                  {s.sub && <div className="text-[7px] text-gray-600 mt-1">{s.sub}</div>}
                </div>
                {i < contractStatuses.length - 1 && (
                  <span className="text-purple-500/30 text-sm flex-shrink-0">→</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

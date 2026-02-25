import { SectionHeader } from "./SectionHeader";
import { ScreenMockup } from "./ScreenMockup";
import { FadeIn } from "./AnimatedSection";

function StepBar({ steps }: { steps: { label: string; state: "done" | "active" | "pending" }[] }) {
  return (
    <div className="flex gap-1 mb-2">
      {steps.map((s) => (
        <div
          key={s.label}
          className={`flex-1 h-6 rounded-md text-[7px] font-bold flex items-center justify-center ${
            s.state === "active"
              ? "bg-purple-600 text-white"
              : s.state === "done"
              ? "bg-emerald-500/15 text-emerald-400"
              : "bg-white/[0.04] text-gray-600"
          }`}
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {s.label}
        </div>
      ))}
    </div>
  );
}

function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="h-0.5 bg-white/[0.06] rounded-full mb-3 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-violet-400"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

function MockInput({ label }: { label: string }) {
  return (
    <div className="border border-white/[0.06] rounded-md px-2.5 py-1.5 text-[9px] text-gray-600 mb-1 bg-white/[0.02]">
      {label}
    </div>
  );
}

function Label({ text }: { text: string }) {
  return (
    <p className="text-[11px] font-semibold text-purple-400 mb-3 uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
      {text}
    </p>
  );
}

export function DistributionForm() {
  return (
    <section>
      <SectionHeader
        tag="Дистрибуция"
        title="4-шаговая форма оформления релиза"
        subtitle="Всё разбито на логичные этапы — артист всегда видит прогресс и что нужно заполнить дальше"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        {/* Step 1 */}
        <FadeIn delay={0}>
          <Label text="Шаг 1 — Данные релиза" />
          <ScreenMockup url="pfvmusic.digital / дистрибуция">
            <StepBar steps={[
              { label: "1 Релиз", state: "active" },
              { label: "2 Договор", state: "pending" },
              { label: "3 Оферта", state: "pending" },
              { label: "4 Оплата", state: "pending" },
            ]} />
            <ProgressBar percent={0} />
            <div className="bg-purple-500/[0.06] border border-purple-500/20 rounded-lg p-2.5 mb-2">
              <div className="text-[8px] font-bold text-gray-400 mb-1.5">Тариф + Тип релиза</div>
              <div className="flex flex-wrap gap-1 mb-1">
                <span className="bg-purple-500/15 text-purple-400 text-[8px] font-semibold px-2 py-0.5 rounded-full">Базовый</span>
                <span className="bg-blue-500/15 text-blue-400 text-[8px] font-semibold px-2 py-0.5 rounded-full">Продвинутый</span>
                <span className="bg-emerald-500/15 text-emerald-400 text-[8px] font-semibold px-2 py-0.5 rounded-full">★ Премиум</span>
                <span className="bg-amber-500/15 text-amber-400 text-[8px] font-semibold px-2 py-0.5 rounded-full">👑 Платинум</span>
              </div>
              <div className="flex gap-1">
                <span className="bg-white/[0.05] text-gray-500 text-[8px] font-semibold px-2 py-0.5 rounded-full">Сингл</span>
                <span className="bg-white/[0.05] text-gray-500 text-[8px] font-semibold px-2 py-0.5 rounded-full">EP</span>
                <span className="bg-white/[0.05] text-gray-500 text-[8px] font-semibold px-2 py-0.5 rounded-full">Альбом</span>
              </div>
            </div>
            <MockInput label="Название релиза *" />
            <MockInput label="Основной артист *" />
            <MockInput label="Ссылка на аудиофайл *" />
            <MockInput label="Ссылка на обложку *" />
            <div className="text-[7px] text-gray-600 mt-1">+ Жанр, дата, язык, площадки, Pre-Save, 18+...</div>
          </ScreenMockup>
          <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
            Калькулятор пересчитывает стоимость при выборе тарифа и типа релиза.
          </p>
        </FadeIn>

        {/* Step 2 */}
        <FadeIn delay={0.08}>
          <Label text="Шаг 2 — Контактные данные" />
          <ScreenMockup url="pfvmusic.digital / дистрибуция">
            <StepBar steps={[
              { label: "✓ Релиз", state: "done" },
              { label: "2 Договор", state: "active" },
              { label: "3 Оферта", state: "pending" },
              { label: "4 Оплата", state: "pending" },
            ]} />
            <ProgressBar percent={33} />
            <div className="glass-card rounded-lg p-2.5">
              <div className="text-[8px] font-bold text-gray-400 mb-2">📄 Данные для оформления договора</div>
              <MockInput label="ФИО *" />
              <MockInput label="Документ, удостоверяющий личность *" />
              <MockInput label="Email *" />
              <MockInput label="Банковские реквизиты (для выплат)" />
            </div>
          </ScreenMockup>
          <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
            Данные необходимы для формирования персонального договора.
          </p>
        </FadeIn>

        {/* Step 3 */}
        <FadeIn delay={0.16}>
          <Label text="Шаг 3 — Согласие с офертой" />
          <ScreenMockup url="pfvmusic.digital / дистрибуция">
            <StepBar steps={[
              { label: "✓ Релиз", state: "done" },
              { label: "✓ Договор", state: "done" },
              { label: "3 Оферта", state: "active" },
              { label: "4 Оплата", state: "pending" },
            ]} />
            <ProgressBar percent={66} />
            <div className="glass-card rounded-lg p-2.5 mb-2 max-h-[75px] overflow-hidden relative">
              <div className="text-[8px] font-bold text-gray-400 mb-1">Публичная оферта и согласие</div>
              <div className="text-[7px] text-gray-600 leading-relaxed">
                Текст договора оферты... Условия лицензионного договора... Обработка персональных данных... Права и обязанности сторон...
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#0d0618] to-transparent" />
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <div className="w-3.5 h-3.5 rounded bg-purple-600 flex items-center justify-center text-white text-[7px] flex-shrink-0">✓</div>
              <span className="text-[8px] text-purple-300 font-medium">Согласен с офертой и обработкой персональных данных</span>
            </div>
            <div className="text-[7px] text-gray-600 mt-2">Без подтверждения — переход к следующему шагу невозможен.</div>
          </ScreenMockup>
          <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
            Обязательный чекбокс для перехода к оплате.
          </p>
        </FadeIn>
      </div>

      {/* Step 4 + info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <FadeIn delay={0}>
          <Label text="Шаг 4 — Оплата" />
          <ScreenMockup url="pfvmusic.digital / дистрибуция">
            <StepBar steps={[
              { label: "✓ Релиз", state: "done" },
              { label: "✓ Договор", state: "done" },
              { label: "✓ Оферта", state: "done" },
              { label: "4 Оплата", state: "active" },
            ]} />
            <ProgressBar percent={99} />
            <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-lg p-3 text-center mb-2">
              <div className="text-[9px] text-gray-500 mb-0.5">Итого к оплате</div>
              <div className="text-xl font-extrabold text-purple-400">1 200 ₽</div>
            </div>
            <div className="glass-card rounded-lg p-2.5 mb-1.5">
              <div className="text-[8px] font-bold text-gray-400 mb-1">🏷️ Промокод</div>
              <MockInput label="Введите промокод..." />
            </div>
            <div className="glass-card rounded-lg p-2.5 mb-1.5">
              <div className="text-[8px] font-bold text-gray-400 mb-0.5">💰 Реквизиты для оплаты</div>
              <div className="text-[8px] text-gray-600">Оплата через СБП.</div>
            </div>
            <MockInput label="Ссылка на подтверждение оплаты *" />
            <MockInput label="Контакты для связи (Telegram/VK) *" />
          </ScreenMockup>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-3 lg:mt-8">
            <InfoBox icon="🎯" title="Итог шага 4" text="После нажатия «Отправить» — данные уходят на проверку. Система автоматически формирует договор и отправляет ссылку для подписания на указанный email." variant="purple" />
            <InfoBox icon="🏷️" title="Как работают промокоды" text="Промокод вводится на последнем шаге. Скидка применяется мгновенно — итоговая сумма обновляется автоматически." variant="amber" />
            <InfoBox icon="⚡" title="Скорость обработки" text="После отправки заявки ссылка для подписания договора формируется автоматически — вы получите её на email сразу." variant="green" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function InfoBox({ icon, title, text, variant }: { icon: string; title: string; text: string; variant: "purple" | "amber" | "green" }) {
  const styles = {
    purple: "border-purple-500/15 bg-purple-500/[0.04]",
    amber: "border-amber-500/15 bg-amber-500/[0.04]",
    green: "border-emerald-500/15 bg-emerald-500/[0.04]",
  };
  return (
    <div className={`${styles[variant]} border rounded-xl p-4`}>
      <div className="font-bold text-white mb-1.5 flex items-center gap-2 text-sm">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed">{text}</p>
    </div>
  );
}

import { SectionHeader } from "./SectionHeader";
import { ScreenMockup } from "./ScreenMockup";
import { FadeIn } from "./AnimatedSection";

function MockInput({ label }: { label: string }) {
  return (
    <div className="border border-white/[0.06] rounded-md px-2.5 py-1.5 text-[9px] text-gray-600 mb-1 bg-white/[0.02]">
      {label}
    </div>
  );
}

export function PromoForm() {
  return (
    <section>
      <SectionHeader
        tag="Промо"
        title="Форма промо-продвижения"
        subtitle="Для артистов PFVMUSIC — быстрая отправка информации для продвижения на площадках"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <FadeIn delay={0}>
          <p className="text-[11px] font-semibold text-amber-400 mb-3 uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
            📣 Форма промо
          </p>
          <ScreenMockup url="pfvmusic.digital / промо">
            <div className="text-center mb-3 pt-1">
              <div className="text-xs font-bold text-white">Отправка информации для промо</div>
              <div className="text-[9px] text-gray-500">Для артистов PFVMUSIC</div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-amber-500/10 border-2 border-amber-500/25 rounded-lg p-2.5">
                <div className="text-[9px] font-bold text-gray-300">📅 Детальное промо</div>
                <div className="text-[7px] text-gray-600 mt-0.5">Все площадки, за 20 дней до UPC</div>
              </div>
              <div className="glass-card rounded-lg p-2.5">
                <div className="text-[9px] font-bold text-gray-300">⚡ Еженедельное</div>
                <div className="text-[7px] text-gray-600 mt-0.5">Быстрый вариант</div>
              </div>
            </div>
            <MockInput label="Ссылка на релиз *" />
            <MockInput label="UPC / Название *" />
            <MockInput label="Дата релиза *" />
            <MockInput label="Жанр *" />
            <div className="text-[7px] text-gray-600 mt-1">+ Описание, фото артиста, соцсети, фокус-трек...</div>
          </ScreenMockup>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-[11px] font-semibold text-amber-400 mb-3 uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
            🎉 Успех
          </p>
          <ScreenMockup url="pfvmusic.digital">
            <div className="flex items-center justify-center min-h-[260px]">
              <div className="text-center">
                <div className="text-4xl mb-3">🎉</div>
                <div className="text-sm font-bold text-white mb-1">Заявка на промо отправлена!</div>
                <div className="text-[9px] text-gray-500 mb-5">Мы свяжемся с вами для согласования</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-amber-500 text-white rounded-md py-2 text-[9px] font-bold text-center">Ещё одно промо</div>
                  <div className="bg-white/[0.04] text-gray-400 border border-white/[0.08] rounded-md py-2 text-[9px] font-bold text-center">На главную</div>
                </div>
              </div>
            </div>
          </ScreenMockup>
          <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
            Два режима: детальное (за 20+ дней) и еженедельное (краткий вариант).
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

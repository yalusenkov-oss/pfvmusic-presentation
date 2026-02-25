import { SectionHeader } from "./SectionHeader";
import { ScreenMockup } from "./ScreenMockup";
import { FadeIn } from "./AnimatedSection";

export function Homepage() {
  return (
    <section>
      <SectionHeader
        tag="Главная страница"
        title="Точка входа для артистов"
        subtitle="Главная страница предлагает два ключевых пути: дистрибуция и промо"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <FadeIn delay={0.1}>
          <Label text="Hero-блок и навигация" />
          <ScreenMockup url="pfvmusic.digital">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-3 rounded-xl mb-3 flex items-center justify-between">
              <span className="font-extrabold text-sm tracking-wider">PFVMUSIC</span>
              <span className="text-[8px] bg-white/15 px-2 py-0.5 rounded-md font-semibold">
                Музыкальное издательство
              </span>
            </div>
            <div className="text-center py-3">
              <div className="text-sm font-bold text-white mb-1.5">
                Твоя музыка — на всех площадках
              </div>
              <div className="text-[10px] text-gray-500 mb-4">
                Профессиональная дистрибуция для артистов
              </div>
              <div className="grid grid-cols-2 gap-2 max-w-[220px] mx-auto">
                <div className="bg-purple-600 text-white rounded-lg py-2 text-[9px] font-bold text-center">
                  💿 Дистрибуция
                </div>
                <div className="bg-white/5 text-gray-400 border border-white/10 rounded-lg py-2 text-[9px] font-bold text-center">
                  📣 Промо
                </div>
              </div>
            </div>
            <div className="mt-3 p-2.5 bg-purple-500/10 border border-purple-500/20 rounded-lg text-center">
              <span className="text-[9px] font-semibold text-purple-400">
                ↓ Раздел тарифов (4 карточки)
              </span>
            </div>
          </ScreenMockup>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Label text="Тарифы на главной" />
          <ScreenMockup url="pfvmusic.digital #tariffs">
            <div className="text-sm font-bold text-white mb-3">
              Выберите тариф
            </div>
            <div className="grid grid-cols-2 gap-2">
              <TariffCard name="🎵 Базовый" price="500 ₽" info="Сингл · 55% · 7+ дн" color="purple" />
              <TariffCard name="📈 Продвин." price="690 ₽" info="Сингл · 70% · 5 дн" color="blue" />
              <TariffCard name="⭐ Премиум" price="1 200 ₽" info="Сингл · 90% · 3 дн" color="emerald" badge="★ Топ" />
              <TariffCard name="👑 Платинум" price="4 990 ₽" info="Сингл · 100% · VIP" color="amber" />
            </div>
          </ScreenMockup>
          <p className="text-xs text-gray-600 mt-3 leading-relaxed">
            Каждая карточка раскрывается — показывает полный список фич и условий монетизации.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function Label({ text }: { text: string }) {
  return (
    <p className="text-[11px] font-semibold text-purple-400 mb-3 uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
      {text}
    </p>
  );
}

function TariffCard({ name, price, info, color, badge }: { name: string; price: string; info: string; color: string; badge?: string }) {
  const colors: Record<string, { border: string; bg: string; priceColor: string }> = {
    purple: { border: "border-purple-500/20", bg: "bg-purple-500/[0.06]", priceColor: "text-purple-400" },
    blue: { border: "border-blue-500/20", bg: "bg-blue-500/[0.06]", priceColor: "text-blue-400" },
    emerald: { border: "border-emerald-500/30 border-2", bg: "bg-emerald-500/[0.06]", priceColor: "text-emerald-400" },
    amber: { border: "border-amber-500/20", bg: "bg-amber-500/[0.06]", priceColor: "text-amber-400" },
  };
  const c = colors[color] || colors.purple;
  return (
    <div className={`rounded-xl p-3 border ${c.border} ${c.bg} relative`}>
      {badge && (
        <span className="absolute -top-1.5 right-2 bg-emerald-500/20 text-emerald-400 text-[7px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
          {badge}
        </span>
      )}
      <div className="text-[10px] font-bold text-gray-300">{name}</div>
      <div className={`text-lg font-extrabold ${c.priceColor} my-0.5`}>{price}</div>
      <div className="text-[8px] text-gray-600">{info}</div>
    </div>
  );
}

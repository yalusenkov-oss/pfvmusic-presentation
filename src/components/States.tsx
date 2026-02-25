import { SectionHeader } from "./SectionHeader";
import { ScreenMockup } from "./ScreenMockup";
import { FadeIn } from "./AnimatedSection";

function Label({ text, color = "text-purple-400" }: { text: string; color?: string }) {
  return (
    <p className={`text-[11px] font-semibold ${color} mb-3 uppercase tracking-wider`} style={{ fontFamily: "var(--font-mono)" }}>
      {text}
    </p>
  );
}

export function States() {
  return (
    <section>
      <SectionHeader
        tag="Опыт пользователя"
        title="Состояния после отправки заявки"
        subtitle="Все сценарии — загрузка, успех и обработка ошибок — визуально понятны артисту"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Loading */}
        <FadeIn delay={0}>
          <Label text="⏳ Загрузка" />
          <ScreenMockup url="pfvmusic.digital">
            <div className="flex items-center justify-center min-h-[200px]">
              <div className="text-center glass-card rounded-2xl p-6 w-full">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-violet-400 mx-auto mb-3 flex items-center justify-center text-lg">
                  🔄
                </div>
                <div className="text-xs font-bold text-white mb-1">Отправляем данные</div>
                <div className="text-[9px] text-gray-500 mb-3">Формируем ваш договор. Не закрывайте страницу.</div>
                <div className="flex gap-1.5 justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-300 animate-pulse" style={{ animationDelay: "0.4s" }} />
                </div>
              </div>
            </div>
          </ScreenMockup>
          <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
            Наглядный индикатор загрузки исключает неопределённость.
          </p>
        </FadeIn>

        {/* Success */}
        <FadeIn delay={0.08}>
          <Label text="✅ Заявка принята" color="text-emerald-400" />
          <ScreenMockup url="pfvmusic.digital">
            <div className="text-center mb-2.5 pt-1">
              <div className="text-2xl mb-1.5">✅</div>
              <div className="text-xs font-bold text-white">Заявка принята!</div>
              <div className="text-[9px] text-gray-500">Для обработки необходимо подписать договор.</div>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-2 mb-1.5">
              <div className="text-[8px] font-semibold text-amber-400">⚠️ Без подписания договора релиз не будет принят в обработку.</div>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-2 mb-1.5">
              <div className="text-[8px] font-semibold text-gray-400 mb-1">Ссылка для подписания:</div>
              <div className="bg-purple-600 text-white rounded-md py-1.5 text-center text-[9px] font-bold">✍️ Подписать договор</div>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-2 text-[8px] text-blue-400 mb-1.5">
              📧 Договор также отправлен вам на почту.
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-purple-600 text-white rounded-md py-1.5 text-[8px] font-bold text-center">Ещё один релиз</div>
              <div className="bg-white/[0.04] text-gray-400 border border-white/[0.08] rounded-md py-1.5 text-[8px] font-bold text-center">На главную</div>
            </div>
          </ScreenMockup>
          <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
            Ссылка для подписания появляется сразу. Дублируется на email.
          </p>
        </FadeIn>

        {/* Error */}
        <FadeIn delay={0.16}>
          <Label text="❌ Ошибка" color="text-red-400" />
          <ScreenMockup url="pfvmusic.digital">
            <div className="flex items-center justify-center min-h-[200px]">
              <div className="text-center w-full">
                <div className="text-3xl mb-2">😔</div>
                <div className="text-xs font-bold text-white mb-1">Произошла ошибка</div>
                <div className="text-[9px] text-gray-500 mb-4">Попробуйте ещё раз или напишите нам.</div>
                <div className="bg-purple-600 text-white rounded-md py-2 text-[9px] font-bold w-full mb-1.5">
                  ↩ Попробовать снова
                </div>
                <div className="bg-white/[0.04] text-gray-400 border border-white/[0.08] rounded-md py-2 text-[9px] font-bold w-full">
                  📞 Написать в поддержку
                </div>
              </div>
            </div>
          </ScreenMockup>
          <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
            Пользователь не теряет данные и знает, что делать дальше.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

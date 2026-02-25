import { SectionHeader } from "./SectionHeader";
import { ScreenMockup } from "./ScreenMockup";
import { FadeIn } from "./AnimatedSection";

function Label({ text }: { text: string }) {
  return (
    <p className="text-[11px] font-semibold text-purple-400 mb-3 uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
      {text}
    </p>
  );
}

export function ContractSigning() {
  return (
    <section>
      <SectionHeader
        tag="Цифровой договор"
        title="Онлайн-подписание договора"
        subtitle="Артист получает персональную ссылку — и подписывает договор прямо в браузере, без бумаг"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <FadeIn delay={0}>
          <Label text="🔄 Открытие ссылки" />
          <ScreenMockup url="pfvmusic.digital / Ваш договор">
            <div className="flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-violet-400 mx-auto mb-3 flex items-center justify-center text-lg animate-pulse">
                  ⏳
                </div>
                <div className="text-[10px] text-gray-500">Загружаем ваш договор...</div>
              </div>
            </div>
          </ScreenMockup>
          <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
            Персональная ссылка открывает только ваш договор.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Label text="📄 Договор и подпись" />
          <ScreenMockup url="pfvmusic.digital / Ваш договор">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2 rounded-lg mb-2 flex items-center justify-between">
              <span className="font-extrabold text-[10px] tracking-wider">PFVMUSIC</span>
              <span className="text-[7px] bg-white/15 px-1.5 py-0.5 rounded font-semibold">Договор готов</span>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-2.5 mb-2">
              <div className="flex justify-between mb-0.5 text-[8px]">
                <span className="text-gray-500">№ Договора</span>
                <span className="font-bold text-purple-400" style={{ fontFamily: "var(--font-mono)" }}>PFV-202602-XXXX</span>
              </div>
              <div className="flex justify-between mb-0.5 text-[8px]">
                <span className="text-gray-500">Произведение</span>
                <span className="font-bold text-gray-300">Название трека</span>
              </div>
              <div className="flex justify-between text-[8px]">
                <span className="text-gray-500">Тип</span>
                <span className="font-bold text-gray-300">Сингл</span>
              </div>
            </div>
            <div className="border border-white/[0.06] rounded-md p-2 h-[44px] overflow-hidden relative text-[6px] text-gray-600 leading-relaxed mb-1.5">
              ЛИЦЕНЗИОННЫЙ ДОГОВОР № PFV-... Настоящий договор заключается между правообладателем и артистом...
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#0d0618] to-transparent" />
            </div>
            <div className="border-2 border-dashed border-purple-500/30 rounded-md h-[40px] flex items-center justify-center text-[9px] text-purple-400/60 bg-purple-500/[0.03] mb-1.5">
              ✍️ Нарисуйте свою подпись здесь
            </div>
            <div className="bg-purple-600 text-white rounded-md py-2 text-center text-[9px] font-bold">
              ✅ Подписать и отправить
            </div>
          </ScreenMockup>
          <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
            Подпись рисуется пальцем или мышью прямо на экране.
          </p>
        </FadeIn>

        <FadeIn delay={0.16}>
          <Label text="🎉 После подписания" />
          <ScreenMockup url="pfvmusic.digital / Ваш договор">
            <div className="glass-card rounded-xl p-4 text-center mb-2.5">
              <div className="text-[10px] font-bold text-white mb-2">🔐 Обрабатываем подпись…</div>
              <div className="h-1 bg-white/[0.06] rounded-full mb-1.5 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-violet-400 w-[70%]" />
              </div>
              <div className="text-[7px] text-gray-500">Создаём PDF-документ с двумя подписями</div>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3.5">
              <div className="text-[10px] font-bold text-emerald-400 mb-1">🎊 Договор подписан!</div>
              <div className="text-[8px] text-emerald-400/70 leading-relaxed">
                Вы можете скачать PDF-копию с двумя подписями прямо на этой странице.
              </div>
            </div>
          </ScreenMockup>
          <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
            PDF с двумя подписями формируется автоматически.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

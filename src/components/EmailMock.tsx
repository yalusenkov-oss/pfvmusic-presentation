import { SectionHeader } from "./SectionHeader";
import { ScreenMockup } from "./ScreenMockup";
import { FadeIn } from "./AnimatedSection";

export function EmailMock() {
  return (
    <section>
      <SectionHeader
        tag="Коммуникации"
        title="Письмо с договором"
        subtitle="Артист получает красиво оформленное письмо с прямой ссылкой на подписание"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FadeIn delay={0}>
          <ScreenMockup url="📧 email артиста" className="max-w-[420px]">
            <div className="rounded-xl overflow-hidden">
              {/* Email header */}
              <div className="bg-gradient-to-r from-purple-700 to-violet-700 p-4 flex justify-between items-center">
                <div>
                  <div className="text-sm font-extrabold text-white tracking-[3px]">PFVMUSIC</div>
                  <div className="text-[7px] text-purple-300 tracking-[2px] mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>ИЗДАТЕЛЬСТВО</div>
                </div>
                <div className="border border-white/20 rounded-full px-2.5 py-0.5 text-[8px] text-purple-200 font-bold" style={{ fontFamily: "var(--font-mono)" }}>
                  DOC
                </div>
              </div>
              {/* Email body */}
              <div className="bg-[#0f0820] px-4 py-4 border-x border-white/[0.06]">
                <div className="text-sm font-bold text-white mb-1.5">Здравствуйте, Артист!</div>
                <div className="text-[10px] text-gray-500 mb-3 leading-relaxed">
                  Ваш договор успешно сформирован и готов к подписанию.
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 mb-3">
                  <div className="flex justify-between border-b border-white/[0.05] pb-1.5 mb-1.5 text-[9px]">
                    <span className="text-gray-500">№ Договора</span>
                    <span className="font-bold text-purple-400" style={{ fontFamily: "var(--font-mono)" }}>PFV-XXXXX</span>
                  </div>
                  <div className="flex justify-between border-b border-white/[0.05] pb-1.5 mb-1.5 text-[9px]">
                    <span className="text-gray-500">Произведение</span>
                    <span className="font-bold text-gray-300">«Название»</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-gray-500">Тип релиза</span>
                    <span className="font-bold text-gray-300">Сингл</span>
                  </div>
                </div>
                <div className="bg-purple-600 text-white rounded-lg py-2.5 text-center text-xs font-bold cursor-pointer hover:bg-purple-700 transition-colors">
                  Подписать договор →
                </div>
              </div>
              {/* Email footer */}
              <div className="bg-gradient-to-r from-purple-700 to-violet-700 py-2.5 text-center text-[8px] text-purple-300" style={{ fontFamily: "var(--font-mono)" }}>
                PFVMUSIC · info@pfvmusic.digital
              </div>
            </div>
          </ScreenMockup>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-4 mt-2">
            <div className="glass-card rounded-xl p-5">
              <div className="font-bold text-white mb-1.5 flex items-center gap-2 text-sm">
                <span>📬</span>
                <span>Что приходит артисту</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Сразу после оформления заявки артист получает письмо с подробностями договора и кнопкой для перехода к подписанию. Ссылка надёжно защищена.
              </p>
            </div>
            <div className="bg-emerald-500/[0.04] border border-emerald-500/15 rounded-xl p-5">
              <div className="font-bold text-white mb-1.5 flex items-center gap-2 text-sm">
                <span>📱</span>
                <span>Работает на мобильном</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Письмо и страница подписания адаптированы для смартфонов. Артист может подписать договор с телефона.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

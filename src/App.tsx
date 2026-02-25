import { Hero } from "./components/Hero";
import { Capabilities } from "./components/Capabilities";
import { Homepage } from "./components/Homepage";
import { DistributionForm } from "./components/DistributionForm";
import { States } from "./components/States";
import { PromoForm } from "./components/PromoForm";
import { ContractSigning } from "./components/ContractSigning";
import { Journey } from "./components/Journey";
import { EmailMock } from "./components/EmailMock";
import { Footer } from "./components/Footer";

function Page({
  children,
  dark = true,
  orb = "center",
}: {
  children: React.ReactNode;
  dark?: boolean;
  orb?: "left" | "right" | "center";
}) {
  const orbPos = {
    left: "top-1/2 left-0 -translate-y-1/2 -translate-x-1/3",
    right: "top-1/2 right-0 -translate-y-1/2 translate-x-1/3",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  }[orb];

  return (
    <div
      className={`w-full flex flex-col relative overflow-hidden ${
        dark ? "bg-[#06010f]" : "bg-[#06000e]"
      }`}
    >
      {/* Background orb — hidden in print */}
      <div className="pdf-orb pointer-events-none absolute inset-0">
        <div
          className={`absolute w-[600px] h-[600px] rounded-full bg-purple-700/[0.04] blur-[120px] ${orbPos}`}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/15 to-transparent" />
      <div className="max-w-[1200px] mx-auto w-full px-5 sm:px-8 lg:px-10 py-12 sm:py-14 lg:py-16 relative z-10">
        {children}
      </div>
    </div>
  );
}

export function App() {
  return (
    <div id="presentation-root">
        {/* ── Page 1: Hero ── */}
        <div className="relative">
          <Hero />
        </div>

        {/* ── Page 2: О платформе ── */}
        <Page orb="right">
          <Capabilities />
        </Page>

        {/* ── Page 3: Главная страница ── */}
        <Page dark={false} orb="left">
          <Homepage />
        </Page>

        {/* ── Page 4: Форма дистрибуции ── */}
        <Page orb="center">
          <DistributionForm />
        </Page>

        {/* ── Page 5: UX-состояния ── */}
        <Page dark={false} orb="right">
          <States />
        </Page>

        {/* ── Page 6: Промо ── */}
        <Page orb="left">
          <PromoForm />
        </Page>

        {/* ── Page 7: Цифровой договор ── */}
        <Page dark={false} orb="center">
          <ContractSigning />
        </Page>

        {/* ── Page 8: Путь артиста ── */}
        <Page orb="right">
          <Journey />
        </Page>

        {/* ── Page 9: Email ── */}
        <Page dark={false} orb="left">
          <EmailMock />
        </Page>

        {/* ── Page 10: Footer / CTA ── */}
        <div className="bg-[#06010f] flex flex-col items-center px-5 sm:px-8 lg:px-10 py-14 sm:py-16 lg:py-20 relative">
          <div className="pdf-orb pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
          </div>
          <div className="w-full max-w-[900px]">
            <Footer />
          </div>
        </div>
      </div>
  );
}

import { AnimatedSection } from "./AnimatedSection";

interface Props {
  tag: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ tag, title, subtitle }: Props) {
  return (
    <AnimatedSection className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px flex-1 max-w-[40px] bg-gradient-to-r from-purple-500/50 to-transparent" />
        <span
          className="text-[10px] font-semibold tracking-[2px] uppercase text-purple-400"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {tag}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-gray-500 mt-3 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}

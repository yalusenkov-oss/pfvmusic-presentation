import type { ReactNode } from "react";

interface Props {
  url: string;
  children: ReactNode;
  className?: string;
}

export function ScreenMockup({ url, children, className = "" }: Props) {
  return (
    <div className={`screen-mock ${className}`}>
      <div className="h-8 flex items-center gap-1.5 px-3 bg-white/[0.03] border-b border-white/[0.06]">
        <div className="w-2 h-2 rounded-full bg-red-400/60" />
        <div className="w-2 h-2 rounded-full bg-amber-400/60" />
        <div className="w-2 h-2 rounded-full bg-green-400/60" />
        <div className="flex-1 mx-2 h-4 bg-white/[0.04] rounded-full px-3 flex items-center">
          <span
            className="text-[8px] text-gray-600 truncate"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {url}
          </span>
        </div>
      </div>
      <div className="p-3.5">{children}</div>
    </div>
  );
}

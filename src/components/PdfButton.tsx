import { useState } from "react";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";

export function PdfButton() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPdf = async () => {
    if (isGenerating) return;

    const content = document.getElementById("pdf-root") ?? document.getElementById("presentation-root");
    if (!content) return;

    const sections = Array.from(content.querySelectorAll<HTMLElement>(".pdf-hero-page, .pdf-page"));
    if (sections.length === 0) return;

    setIsGenerating(true);

    const allElements = Array.from(content.querySelectorAll<HTMLElement>("*"));
    const savedStyles: Array<{ el: HTMLElement; opacity: string; transform: string; visibility: string }> = [];
    const originalScrollY = window.scrollY;

    try {
      document.documentElement.classList.add("pdf-exporting");

      // Animation/transform styles break html2canvas captures, so we normalize them while exporting.
      for (const el of allElements) {
        const computed = window.getComputedStyle(el);
        if (computed.opacity === "0" || el.style.opacity === "0" || el.style.transform) {
          savedStyles.push({
            el,
            opacity: el.style.opacity,
            transform: el.style.transform,
            visibility: el.style.visibility,
          });
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.visibility = "visible";
        }
      }

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
        compress: true,
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Fixed export viewport to avoid responsive layout shifts between devices.
      const exportWidth = 1600;
      const exportHeight = Math.round(exportWidth / Math.sqrt(2)); // A4 landscape ratio

      const exportRoot = document.createElement("div");
      exportRoot.style.position = "fixed";
      exportRoot.style.left = "-100000px";
      exportRoot.style.top = "0";
      exportRoot.style.width = `${exportWidth}px`;
      exportRoot.style.height = `${exportHeight}px`;
      exportRoot.style.overflow = "hidden";
      exportRoot.style.background = "#06010f";
      exportRoot.style.pointerEvents = "none";
      exportRoot.setAttribute("aria-hidden", "true");
      document.body.appendChild(exportRoot);

      try {
        if (document.fonts?.ready) {
          await document.fonts.ready;
        }

        for (let i = 0; i < sections.length; i += 1) {
          const section = sections[i];
          section.scrollIntoView({ behavior: "auto", block: "start" });
          await new Promise((resolve) => window.setTimeout(resolve, 220));

          const slideFrame = document.createElement("div");
          slideFrame.style.position = "relative";
          slideFrame.style.width = `${exportWidth}px`;
          slideFrame.style.height = `${exportHeight}px`;
          slideFrame.style.overflow = "hidden";
          slideFrame.style.background = "#06010f";

          const sectionClone = section.cloneNode(true) as HTMLElement;
          sectionClone.classList.add("pdf-slide-export");
          sectionClone.style.position = "absolute";
          sectionClone.style.top = "0";
          sectionClone.style.left = "0";
          sectionClone.style.width = `${exportWidth}px`;
          sectionClone.style.minWidth = `${exportWidth}px`;
          sectionClone.style.maxWidth = `${exportWidth}px`;
          sectionClone.style.height = "auto";
          sectionClone.style.maxHeight = "none";
          sectionClone.style.margin = "0";
          sectionClone.style.overflow = "visible";
          sectionClone.style.boxSizing = "border-box";
          sectionClone.style.transformOrigin = "top left";

          exportRoot.innerHTML = "";
          slideFrame.appendChild(sectionClone);
          exportRoot.appendChild(slideFrame);

          const cloneElements = Array.from(sectionClone.querySelectorAll<HTMLElement>("*"));
          for (const el of cloneElements) {
            const computed = window.getComputedStyle(el);
            if (computed.opacity !== "1") {
              el.style.opacity = "1";
            }
            if (computed.visibility !== "visible") {
              el.style.visibility = "visible";
            }
            if (el.style.transform) {
              el.style.transform = "none";
            }
          }

          const naturalHeight = Math.max(1, sectionClone.scrollHeight);
          const scale = Math.min(1, exportHeight / naturalHeight);
          const scaledHeight = naturalHeight * scale;
          const scaledWidth = exportWidth * scale;
          const offsetY = Math.max(0, (exportHeight - scaledHeight) / 2);
          const offsetX = Math.max(0, (exportWidth - scaledWidth) / 2);

          sectionClone.style.transform = `scale(${scale})`;
          sectionClone.style.left = `${offsetX}px`;
          sectionClone.style.top = `${offsetY}px`;

          const canvas = await html2canvas(slideFrame, {
            backgroundColor: "#06010f",
            scale: 2,
            useCORS: true,
            logging: false,
            scrollX: 0,
            scrollY: 0,
            width: exportWidth,
            height: exportHeight,
            windowWidth: exportWidth,
            windowHeight: exportHeight,
          });

          const imageData = canvas.toDataURL("image/jpeg", 0.95);

          if (i > 0) {
            pdf.addPage();
          }

          pdf.addImage(imageData, "JPEG", 0, 0, pageWidth, pageHeight, undefined, "FAST");
        }
      } finally {
        exportRoot.remove();
      }

      pdf.save("pfvmusic-presentation.pdf");
    } catch (error) {
      console.error("PDF export failed:", error);
      window.alert("Не удалось сформировать PDF. Проверьте консоль браузера.");
    } finally {
      document.documentElement.classList.remove("pdf-exporting");
      window.scrollTo({ top: originalScrollY, behavior: "auto" });
      for (const { el, opacity, transform, visibility } of savedStyles) {
        el.style.opacity = opacity;
        el.style.transform = transform;
        el.style.visibility = visibility;
      }
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownloadPdf}
      disabled={isGenerating}
      data-no-print="true"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 border border-purple-500/30 shadow-lg shadow-purple-900/40 transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 print:hidden"
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16l-4-4h3V4h2v8h3l-4 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16v2H4z" />
      </svg>
      {isGenerating ? "Генерирую PDF..." : "Скачать PDF"}
    </button>
  );
}

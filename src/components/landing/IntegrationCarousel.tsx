import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface IntegrationApp {
  name: string;
  emoji: string;
  color: string;
}

interface IntegrationCarouselProps {
  buttonText?: string;
  title?: string;
  subtitle?: string;
}

const topRowApps: IntegrationApp[] = [
  { name: "OZON", emoji: "🛒", color: "#005bff" },
  { name: "1С", emoji: "📦", color: "#e11d48" },
  { name: "МойСклад", emoji: "🏭", color: "#f59e0b" },
  { name: "Wildberries", emoji: "🍇", color: "#7c3aed" },
  { name: "Яндекс.Маркет", emoji: "🟡", color: "#fbbf24" },
  { name: "Telegram", emoji: "✈️", color: "#0088cc" },
  { name: "Excel", emoji: "📊", color: "#16a34a" },
  { name: "СДЭК", emoji: "🚚", color: "#00a3ff" },
  { name: "Boxberry", emoji: "📬", color: "#f97316" },
  { name: "Почта РФ", emoji: "📮", color: "#dc2626" },
  { name: "DPD", emoji: "🚀", color: "#1d4ed8" },
  { name: "PickPoint", emoji: "📍", color: "#059669" },
];

const bottomRowApps: IntegrationApp[] = [
  { name: "Битрикс24", emoji: "⚡", color: "#ef4444" },
  { name: "AmoCRM", emoji: "💼", color: "#3b82f6" },
  { name: "Google Sheets", emoji: "📋", color: "#22c55e" },
  { name: "WhatsApp", emoji: "💬", color: "#25d366" },
  { name: "Авито", emoji: "🟢", color: "#00b140" },
  { name: "Lamoda", emoji: "👗", color: "#1a1a1a" },
  { name: "KazanExpress", emoji: "🏪", color: "#f97316" },
  { name: "Озон Банк", emoji: "🏦", color: "#005bff" },
  { name: "СберЛогистика", emoji: "🟢", color: "#21a038" },
  { name: "Маркет Яндекс", emoji: "📱", color: "#fc3f1d" },
  { name: "Leroy Merlin", emoji: "🔧", color: "#78350f" },
  { name: "ВКонтакте", emoji: "💙", color: "#0077ff" },
];

export const IntegrationCarousel = ({
  buttonText = "Все интеграции",
  title = "Работает с вашими инструментами.",
  subtitle = "Подключите OZON Склад к 1С, МойСклад, Wildberries и десяткам других сервисов — данные синхронизируются автоматически.",
}: IntegrationCarouselProps) => {
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let topAnimationId: number;
    let bottomAnimationId: number;
    let topPosition = 0;
    let bottomPosition = 0;

    const animateTopRow = () => {
      if (topRowRef.current) {
        topPosition -= 0.5;
        if (Math.abs(topPosition) >= topRowRef.current.scrollWidth / 2) topPosition = 0;
        topRowRef.current.style.transform = `translateX(${topPosition}px)`;
      }
      topAnimationId = requestAnimationFrame(animateTopRow);
    };

    const animateBottomRow = () => {
      if (bottomRowRef.current) {
        bottomPosition -= 0.65;
        if (Math.abs(bottomPosition) >= bottomRowRef.current.scrollWidth / 2) bottomPosition = 0;
        bottomRowRef.current.style.transform = `translateX(${bottomPosition}px)`;
      }
      bottomAnimationId = requestAnimationFrame(animateBottomRow);
    };

    topAnimationId = requestAnimationFrame(animateTopRow);
    bottomAnimationId = requestAnimationFrame(animateBottomRow);

    return () => {
      cancelAnimationFrame(topAnimationId);
      cancelAnimationFrame(bottomAnimationId);
    };
  }, []);

  return (
    <div className="w-full py-24" style={{ background: "hsl(220, 20%, 8%)" }} id="integrations">
      <div className="max-w-[680px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-20"
        >
          <div className="flex flex-col items-center gap-4">
            <p className="text-xs font-mono uppercase tracking-widest text-[#00a3ff]">Интеграции</p>
            <h2 className="text-[40px] leading-tight font-bold text-white text-center tracking-tight mb-0">
              {title}
            </h2>
            <p className="text-lg leading-7 text-[#8b9ab5] text-center max-w-[600px] mt-2">
              {subtitle}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="flex gap-3 mt-6"
          >
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-block px-6 py-3 rounded-xl bg-[#005bff] text-white text-sm font-semibold text-center whitespace-nowrap transition-all duration-200 hover:bg-[#0049cc] hover:shadow-lg hover:shadow-[#005bff]/25"
            >
              {buttonText}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="h-[268px] -mt-6 mb-0 pb-0 relative overflow-hidden">
        <div
          ref={topRowRef}
          className="flex items-start gap-4 absolute top-6 whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          {[...topRowApps, ...topRowApps].map((app, index) => (
            <div
              key={`top-${index}`}
              className="flex flex-col items-center justify-center w-24 h-24 rounded-2xl flex-shrink-0 gap-2"
              style={{
                background: "linear-gradient(135deg, #0d1f3c, #0a1628)",
                border: "1px solid #1e2d42",
              }}
            >
              <span className="text-2xl">{app.emoji}</span>
              <span className="text-[10px] text-[#8b9ab5] font-medium text-center px-1 leading-tight">{app.name}</span>
            </div>
          ))}
        </div>

        <div
          className="absolute top-0 right-0 bottom-0 w-60 h-[268px] z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0), hsl(220, 20%, 8%))" }}
        />
        <div
          className="absolute top-0 left-0 bottom-0 w-60 h-[268px] z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(90deg, hsl(220, 20%, 8%), rgba(0,0,0,0))" }}
        />

        <div
          ref={bottomRowRef}
          className="flex items-start gap-4 absolute top-[136px] whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          {[...bottomRowApps, ...bottomRowApps].map((app, index) => (
            <div
              key={`bottom-${index}`}
              className="flex flex-col items-center justify-center w-24 h-24 rounded-2xl flex-shrink-0 gap-2"
              style={{
                background: "linear-gradient(135deg, #0d1f3c, #0a1628)",
                border: "1px solid #1e2d42",
              }}
            >
              <span className="text-2xl">{app.emoji}</span>
              <span className="text-[10px] text-[#8b9ab5] font-medium text-center px-1 leading-tight">{app.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

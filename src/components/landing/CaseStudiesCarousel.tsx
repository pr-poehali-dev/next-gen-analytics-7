import { useState, useRef, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CaseStudy {
  id: string;
  company: string;
  logo: ReactNode;
  title: string;
  features: string[];
  quote: string;
  attribution: string;
  accentColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "sizelab",
    company: "SizeLab",
    logo: (
      <div className="w-12 h-12 rounded-xl bg-[#005bff] flex items-center justify-center">
        <span className="text-white font-black text-lg">SL</span>
      </div>
    ),
    title: "SizeLab автоматизировал FBS-сборку и сократил время обработки заказов на 40%.",
    features: ["Автосборка заказов", "Печать этикеток", "Контроль остатков"],
    quote: "С OZON Склад мы перестали пропускать сроки отгрузки — система сама расставляет приоритеты.",
    attribution: "Мария Иванова, Руководитель склада, SizeLab",
    accentColor: "#005bff",
  },
  {
    id: "granula",
    company: "GranulaHealth",
    logo: (
      <div className="w-12 h-12 rounded-xl bg-[#00d4a0] flex items-center justify-center">
        <span className="text-[#0a1628] font-black text-lg">G</span>
      </div>
    ),
    title: "GranulaHealth управляет 3 складами из одного окна без потери заказов.",
    features: ["Мультисклад", "Проверка ФБС остатков", "Командная работа"],
    quote: "Раньше каждое утро начиналось с ручной проверки остатков. Теперь платформа делает это за нас.",
    attribution: "Сергей Петров, CEO, GranulaHealth",
    accentColor: "#00d4a0",
  },
  {
    id: "organicplus",
    company: "OrganicPlus",
    logo: (
      <div className="w-12 h-12 rounded-xl bg-[#7c3aed] flex items-center justify-center">
        <span className="text-white font-black text-lg">OP</span>
      </div>
    ),
    title: "OrganicPlus масштабировал бизнес в 3 раза, не увеличивая команду склада.",
    features: ["Автосборка заказов", "Аналитика заказов", "Контроль остатков"],
    quote: "Система сама распределяет заказы между складами — мы просто отгружаем.",
    attribution: "Анна Смирнова, Операционный директор, OrganicPlus",
    accentColor: "#7c3aed",
  },
  {
    id: "vitamax",
    company: "VitaMax",
    logo: (
      <div className="w-12 h-12 rounded-xl bg-[#f59e0b] flex items-center justify-center">
        <span className="text-[#0a1628] font-black text-lg">VM</span>
      </div>
    ),
    title: "VitaMax снизил процент проблемных остатков с 25% до 3% за первый месяц.",
    features: ["Проверка ФБС остатков", "Аналитика заказов", "Командная работа"],
    quote: "Наконец-то видим в реальном времени, что реально есть на складе и что числится в системе.",
    attribution: "Николай Козлов, Директор по логистике, VitaMax",
    accentColor: "#f59e0b",
  },
];

const FeatureBadge = ({ name }: { name: string }) => (
  <div className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium text-[#c5d3e8] border border-[#1e2d42] bg-[#0d1f3c]">
    {name}
  </div>
);

const StatsCard = ({ delay, zIndex }: { delay: number; zIndex: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay }}
    className="absolute w-[340px] rounded-xl p-5"
    style={{
      backgroundColor: "rgba(13, 31, 60, 0.92)",
      boxShadow: "inset 0 0 0 1px rgba(0, 163, 255, 0.15), 0 8px 32px 0 rgba(0, 0, 0, 0.4)",
      transform: "translate(-180px, -70px)",
      zIndex,
    }}
  >
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-white">Статус сборки</h4>
        <span className="text-xs text-[#00d4a0]">● Онлайн</span>
      </div>
      <div className="space-y-2">
        {[
          { label: "Москва", value: "42 заказа", color: "#005bff", pct: "78%" },
          { label: "СПб", value: "18 заказов", color: "#00a3ff", pct: "55%" },
          { label: "Екатеринбург", value: "9 заказов", color: "#00d4a0", pct: "32%" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3 p-2 rounded-lg bg-[#0a1628]">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
            <span className="text-xs text-[#c5d3e8] flex-1">{item.label}</span>
            <span className="text-xs font-semibold" style={{ color: item.color }}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const OrdersCard = ({ accentColor, delay, zIndex }: { accentColor: string; delay: number; zIndex: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay }}
    className="absolute w-[360px] rounded-xl p-5"
    style={{
      backgroundColor: "rgba(13, 31, 60, 0.92)",
      boxShadow: `inset 0 0 0 1px rgba(0, 163, 255, 0.15), 0 8px 32px 0 rgba(0, 0, 0, 0.4)`,
      transform: "translate(60px, 20px)",
      zIndex,
    }}
  >
    <div className="flex flex-col space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-white">Новые заказы</h4>
        <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: accentColor + "33", color: accentColor }}>98</span>
      </div>
      {[
        { id: "83922156-8204", product: "L-Теанин, хлорофилл 60 кап.", qty: 2 },
        { id: "72332381-0234", product: "Omega-3, EPA+DHA 60 кап.", qty: 1 },
        { id: "24025767-8126", product: "L-Карнозин 500 мг 60 кап.", qty: 3 },
      ].map((order) => (
        <div key={order.id} className="flex items-center gap-3 p-2 rounded-lg bg-[#0a1628]">
          <span className="text-xs font-mono text-[#00a3ff] truncate">{order.id}</span>
          <span className="text-xs text-[#c5d3e8] flex-1 truncate">{order.product}</span>
          <span className="px-1.5 py-0.5 rounded text-xs font-bold bg-[#1a3a2a] text-[#00d4a0]">{order.qty}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export const CaseStudiesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeCase = caseStudies[activeIndex];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    }, 5000);
  };

  return (
    <section className="w-full py-24 px-8" style={{ background: "hsl(220, 20%, 10%)" }} id="features">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#00a3ff] mb-4">Кейсы клиентов</p>
            <h2 className="text-[40px] font-bold leading-tight text-white mb-6">
              Лидеры рынка выбирают OZON Склад
            </h2>

            <div className="flex gap-2 mb-8 flex-wrap">
              {caseStudies.map((cs, i) => (
                <button
                  key={cs.id}
                  onClick={() => handleSelect(i)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeIndex === i
                      ? "text-white border border-[#00a3ff] bg-[#00a3ff]/10"
                      : "text-[#8b9ab5] border border-[#1e2d42] hover:border-[#00a3ff]/50"
                  }`}
                >
                  {cs.company}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-4">{activeCase.logo}</div>
                <h3 className="text-xl font-semibold text-white mb-4 leading-snug">{activeCase.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeCase.features.map((f) => <FeatureBadge key={f} name={f} />)}
                </div>
                <blockquote className="border-l-2 pl-4 mb-2" style={{ borderColor: activeCase.accentColor }}>
                  <p className="text-[#c5d3e8] text-base italic">"{activeCase.quote}"</p>
                </blockquote>
                <p className="text-xs text-[#8b9ab5] ml-4">{activeCase.attribution}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative h-[420px] hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at center, ${activeCase.accentColor}15 0%, transparent 70%)`,
                    border: `1px solid ${activeCase.accentColor}22`,
                  }}
                />
                <StatsCard delay={0.1} zIndex={2} />
                <OrdersCard accentColor={activeCase.accentColor} delay={0.2} zIndex={1} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

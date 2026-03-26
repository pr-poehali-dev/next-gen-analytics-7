import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface StatItem {
  value: string;
  description: string;
  delay: number;
}

interface DataPoint {
  id: number;
  left: number;
  top: number;
  height: number;
  direction: "up" | "down";
  delay: number;
}

const stats: StatItem[] = [
  { value: "50 000+", description: "Заказов обработано\nза месяц", delay: 0 },
  { value: "99.8%", description: "Заказов собрано\nвовремя", delay: 0.2 },
  { value: "3 склада", description: "Москва, СПб\nи Екатеринбург", delay: 0.4 },
  { value: "500+", description: "Продавцов работают\nс платформой", delay: 0.6 },
];

const generateDataPoints = (): DataPoint[] => {
  const points: DataPoint[] = [];
  const baseLeft = 1;
  const spacing = 32;
  for (let i = 0; i < 50; i++) {
    const direction = i % 2 === 0 ? "down" : "up";
    const height = Math.floor(Math.random() * 120) + 88;
    const top = direction === "down" ? Math.random() * 150 + 250 : Math.random() * 100 - 80;
    points.push({ id: i, left: baseLeft + i * spacing, top, height, direction, delay: i * 0.035 });
  }
  return points;
};

export const BankingScaleHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dataPoints] = useState<DataPoint[]>(generateDataPoints());
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setTypingComplete(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden" style={{ background: "hsl(220, 20%, 8%)" }}>
      <div className="mx-auto max-w-7xl px-8 py-24 pt-16">
        <div className="grid grid-cols-12 gap-5 gap-y-16">
          <div className="col-span-12 md:col-span-6 relative z-10">
            <div className="relative h-6 inline-flex items-center font-mono uppercase text-xs mb-12 px-2">
              <div className="flex items-center gap-0.5 overflow-hidden">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="block whitespace-nowrap overflow-hidden relative z-10 text-[#00a3ff]"
                >
                  Масштаб и надёжность
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: typingComplete ? [1, 0, 1, 0] : 0 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="block w-1.5 h-3 ml-0.5 relative z-10 rounded-sm bg-[#00a3ff]"
                />
              </div>
            </div>

            <h2 className="text-[40px] font-bold leading-tight tracking-tight text-white mb-6">
              Управляем тысячами заказов ежедневно{" "}
              <span className="text-[#8b9ab5]">
                для продавцов любого масштаба — от ИП до крупных брендов.
              </span>
            </h2>

            <p className="text-lg leading-6 text-[#8b9ab5] mt-0 mb-6">
              OZON Склад — интеллектуальная FBS-платформа, которая автоматизирует сборку, контролирует остатки и синхронизирует вашу команду в режиме реального времени.
            </p>

            <button className="relative inline-flex justify-center items-center leading-4 text-center cursor-pointer whitespace-nowrap outline-none font-medium h-10 text-white border border-[#1e2d42] bg-[#0a1628]/80 backdrop-blur-sm transition-all duration-200 ease-in-out rounded-xl px-5 text-sm group hover:border-[#00a3ff] hover:bg-[#00a3ff]/10">
              <span className="relative z-10 flex items-center gap-2">
                Узнать больше о платформе
                <ArrowRight className="w-4 h-4 -mr-1 transition-transform duration-150 group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="relative w-full h-[416px] -ml-[200px]">
              <div className="absolute top-0 left-[302px] w-[680px] h-[416px] pointer-events-none">
                <div className="relative w-full h-full">
                  {dataPoints.map((point) => (
                    <motion.div
                      key={point.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={isVisible ? { opacity: [0, 1, 1], height: [0, point.height, point.height] } : {}}
                      transition={{ duration: 2, delay: point.delay, ease: [0.5, 0, 0.01, 1] }}
                      className="absolute w-1.5 rounded-[3px]"
                      style={{
                        left: `${point.left}px`,
                        top: `${point.top}px`,
                        background:
                          point.direction === "down"
                            ? "linear-gradient(rgb(0, 91, 255) 0%, rgb(0, 163, 255) 10%, rgba(0, 163, 255, 0.1) 40%, rgba(0, 163, 255, 0) 75%)"
                            : "linear-gradient(to top, rgb(0, 91, 255) 0%, rgb(0, 163, 255) 10%, rgba(0, 163, 255, 0.1) 40%, rgba(0, 163, 255, 0) 75%)",
                        backgroundColor: "rgba(0, 91, 255, 0.01)",
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: [0, 1] } : {}}
                        transition={{ duration: 0.3, delay: point.delay + 1.7 }}
                        className="absolute -left-[1px] w-2 h-2 bg-[#005bff] rounded-full"
                        style={{ top: point.direction === "down" ? "0px" : `${point.height - 8}px` }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12">
            <div className="overflow-visible pb-5">
              <div className="grid grid-cols-12 gap-5 relative z-10">
                {stats.map((stat, index) => (
                  <div key={index} className="col-span-6 md:col-span-3">
                    <motion.div
                      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                      animate={isVisible ? { opacity: [0, 1, 1], y: [20, 0, 0], filter: ["blur(4px)", "blur(0px)", "blur(0px)"] } : {}}
                      transition={{ duration: 1.5, delay: stat.delay, ease: [0.1, 0, 0.1, 1] }}
                      className="flex flex-col gap-2"
                    >
                      <span className="text-2xl font-bold leading-[26.4px] tracking-tight text-[#00a3ff]">
                        {stat.value}
                      </span>
                      <p className="text-xs leading-[13.2px] text-[#8b9ab5] m-0 whitespace-pre-line">
                        {stat.description}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

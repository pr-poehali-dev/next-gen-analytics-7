import { motion } from "framer-motion";
import { ArrowUpRight, Package, CheckCircle2, Clock, AlertTriangle } from "lucide-react";

const mockOrders = [
  { id: "83922156-8204-1", product: "L-Теанин, хлорофилл от стресса, 60 капсул", article: "GRA-87701", qty: 2, warehouse: "Москва", status: "Новый" },
  { id: "72332381-0234-4", product: "Omega-3, EPA+DHA, Масло рыбное 60 капсул SizeLab", article: "GRA-40248", qty: 1, warehouse: "СПб", status: "Новый" },
  { id: "24025767-8126-1", product: "L-Карнозин 500 мг SizeLab, для когнитивных функций, 60 капсул", article: "GRA-38800", qty: 3, warehouse: "Москва", status: "Новый" },
  { id: "99802254-9821-1", product: "МСМ (Метилсульфонилметан) Ноотропи, Антиоксидант, 60 капсул", article: "GRA-97702", qty: 1, warehouse: "Екб", status: "Новый" },
];

interface ProductTeaserCardProps {
  headline?: string;
  subheadline?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export const ProductTeaserCard = (props: ProductTeaserCardProps) => {
  const {
    headline = "Умное управление FBS-сборкой на OZON",
    subheadline = "Единая панель для обработки заказов, печати этикеток, управления остатками и командой склада. Работайте быстрее — отгружайте больше.",
    primaryButtonText = "Начать работу",
    secondaryButtonText = "Смотреть демо",
  } = props;

  return (
    <section className="w-full px-8 pt-32 pb-16" style={{ background: "hsl(220, 20%, 10%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
            className="col-span-12 lg:col-span-6 rounded-[32px] p-10 lg:p-14 flex flex-col justify-end overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)", border: "1px solid #1e2d42" }}
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#00d4a0] animate-pulse" />
              <span className="text-[#00d4a0] text-xs font-mono uppercase tracking-widest">ONLINE — ИП Евгений</span>
            </div>

            <h1 className="text-[48px] leading-[52px] tracking-tight text-white max-w-[520px] mb-6 font-bold">
              {headline}
            </h1>

            <p className="text-lg leading-7 text-[#8b9ab5] max-w-[520px] mb-8">
              {subheadline}
            </p>

            <div className="flex gap-3 flex-wrap">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="block cursor-pointer text-white bg-[#005bff] rounded-xl px-6 py-3.5 text-base font-semibold transition-all duration-150 hover:bg-[#0049cc] hover:shadow-lg hover:shadow-[#005bff]/25"
              >
                {primaryButtonText}
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="block cursor-pointer text-[#8b9ab5] border border-[#1e2d42] rounded-xl px-6 py-3.5 text-base font-semibold transition-all duration-150 hover:border-[#00a3ff] hover:text-white"
              >
                {secondaryButtonText}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-[#1e2d42]">
              {[
                { icon: <Package size={16} />, val: "98", label: "Новых заказов" },
                { icon: <CheckCircle2 size={16} />, val: "5", label: "На сборке" },
                { icon: <AlertTriangle size={16} />, val: "71", label: "Проблем остатков" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[#00a3ff]">{item.icon}</div>
                  <span className="text-2xl font-bold text-white">{item.val}</span>
                  <span className="text-xs text-[#8b9ab5]">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1], delay: 0.2 }}
            className="col-span-12 lg:col-span-6 rounded-[32px] overflow-hidden"
            style={{ background: "#0a1628", border: "1px solid #1e2d42" }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1e2d42]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-[#8b9ab5] text-sm font-mono">FBS Сборка — Новые заказы</span>
              </div>
              <div className="flex items-center gap-1 text-[#8b9ab5] text-xs">
                <Clock size={12} />
                <span>20:49:25</span>
              </div>
            </div>

            <div className="px-6 py-3 border-b border-[#1e2d42]">
              <div className="flex gap-1 overflow-x-auto">
                {[
                  { name: "НОВЫЕ", count: 98, active: true },
                  { name: "НА СБОРКЕ", count: 5, active: false },
                  { name: "ПРОВЕРКА ФБС", count: 38, active: false },
                  { name: "ПРОБЛЕМЫ", count: 71, active: false },
                ].map((tab) => (
                  <button
                    key={tab.name}
                    className={`flex items-center gap-2 px-3 py-2 text-xs font-semibold whitespace-nowrap rounded-md transition-colors ${
                      tab.active
                        ? "text-[#00a3ff] border-b-2 border-[#00a3ff]"
                        : "text-[#8b9ab5] hover:text-white"
                    }`}
                  >
                    {tab.name}
                    <span className={`px-1.5 py-0.5 rounded-full text-xs ${tab.active ? "bg-[#005bff] text-white" : "bg-[#1e2d42] text-[#8b9ab5]"}`}>
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="px-4 py-3 border-b border-[#1e2d42] flex gap-2">
              {["ОБНОВИТЬ", "ПЕЧАТЬ ЭТИКЕТОК", "ЭКСПОРТ"].map((btn) => (
                <button key={btn} className="px-3 py-1.5 text-xs font-semibold text-[#c5d3e8] border border-[#1e2d42] rounded-md hover:border-[#00a3ff] transition-colors">
                  {btn}
                </button>
              ))}
              <button className="px-3 py-1.5 text-xs font-semibold text-white bg-[#005bff] rounded-md hover:bg-[#0049cc] transition-colors ml-auto">
                ФИЛЬТРЫ
              </button>
            </div>

            <div className="overflow-hidden">
              <div className="grid grid-cols-[auto_1fr_auto_auto_auto_auto] gap-x-4 px-4 py-2 text-xs font-semibold text-[#8b9ab5] uppercase tracking-wide border-b border-[#1e2d42]">
                <span>№</span>
                <span>ТОВАР</span>
                <span>АРТИКУЛ</span>
                <span>КОЛ-ВО</span>
                <span>СКЛАД</span>
                <span>СТАТУС</span>
              </div>
              {mockOrders.map((order, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[auto_1fr_auto_auto_auto_auto] gap-x-4 px-4 py-3 text-xs border-b border-[#1e2d42]/50 hover:bg-[#1e2d42]/30 transition-colors items-center"
                >
                  <span className="text-[#00a3ff] font-mono cursor-pointer hover:underline truncate max-w-[90px]">{order.id}</span>
                  <span className="text-[#c5d3e8] truncate pr-2">{order.product}</span>
                  <span className="text-[#00a3ff] font-mono">{order.article}</span>
                  <span className="text-white text-center">{order.qty}</span>
                  <span className="text-[#c5d3e8]">{order.warehouse}</span>
                  <span className="px-2 py-0.5 bg-[#1a3a2a] text-[#00d4a0] text-xs rounded font-semibold border border-[#00d4a0]/30">{order.status}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

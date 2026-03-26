import { useState } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

type PlanLevel = "starter" | "pro" | "enterprise";

interface PricingFeature {
  name: string;
  included: PlanLevel | "all";
}

interface PricingPlan {
  name: string;
  level: PlanLevel;
  price: { monthly: number; yearly: number };
  popular?: boolean;
}

const features: PricingFeature[] = [
  { name: "Управление заказами FBS", included: "starter" },
  { name: "Печать этикеток OZON", included: "starter" },
  { name: "До 500 заказов/месяц", included: "starter" },
  { name: "Email-поддержка", included: "starter" },
  { name: "До 5 000 заказов/месяц", included: "pro" },
  { name: "Управление командой склада", included: "pro" },
  { name: "Проверка остатков ФБС", included: "pro" },
  { name: "Приоритетная поддержка", included: "pro" },
  { name: "Безлимитные заказы", included: "enterprise" },
  { name: "Мультисклад (любое кол-во)", included: "enterprise" },
  { name: "Персональный менеджер", included: "enterprise" },
  { name: "Поддержка 24/7", included: "enterprise" },
  { name: "Экспорт в Excel / 1С", included: "all" },
  { name: "Аналитика и отчёты", included: "all" },
];

const plans: PricingPlan[] = [
  { name: "Старт", price: { monthly: 1900, yearly: 19000 }, level: "starter" },
  { name: "Про", price: { monthly: 4900, yearly: 49000 }, level: "pro", popular: true },
  { name: "Бизнес", price: { monthly: 14900, yearly: 149000 }, level: "enterprise" },
];

function shouldShowCheck(included: PricingFeature["included"], level: PlanLevel): boolean {
  if (included === "all") return true;
  if (included === "enterprise" && level === "enterprise") return true;
  if (included === "pro" && (level === "pro" || level === "enterprise")) return true;
  if (included === "starter") return true;
  return false;
}

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanLevel>("pro");

  return (
    <section className="py-24" style={{ background: "hsl(220, 20%, 10%)" }} id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#00a3ff] mb-4">Тарифы</p>
          <h2 className="text-[40px] font-bold leading-tight mb-4 text-white">Выберите тариф</h2>
          <p className="text-lg text-[#8b9ab5] max-w-2xl mx-auto">
            Начните работу с платформой управления OZON Склад. Все тарифы включают экспорт, аналитику и поддержку.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-xl p-1" style={{ background: "#0a1628", border: "1px solid #1e2d42" }}>
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-6 py-2 rounded-lg text-sm font-semibold transition-all",
                !isYearly ? "bg-[#005bff] text-white shadow-sm" : "text-[#8b9ab5] hover:text-white"
              )}
            >
              Месячная
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-6 py-2 rounded-lg text-sm font-semibold transition-all",
                isYearly ? "bg-[#005bff] text-white shadow-sm" : "text-[#8b9ab5] hover:text-white"
              )}
            >
              Годовая <span className="ml-1 text-[#00d4a0]">-17%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {plans.map((plan) => (
            <button
              key={plan.name}
              type="button"
              onClick={() => setSelectedPlan(plan.level)}
              className={cn(
                "relative p-7 rounded-2xl text-left transition-all border",
                selectedPlan === plan.level
                  ? "border-[#00a3ff] bg-[#00a3ff]/5"
                  : "border-[#1e2d42] hover:border-[#00a3ff]/50"
              )}
              style={{ background: selectedPlan === plan.level ? "rgba(0, 91, 255, 0.05)" : "#0a1628" }}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#005bff] text-white px-4 py-1 rounded-full text-xs font-bold">
                  Популярный
                </span>
              )}
              <div className="mb-5">
                <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">
                    {(isYearly ? plan.price.yearly : plan.price.monthly).toLocaleString("ru-RU")} ₽
                  </span>
                  <span className="text-sm text-[#8b9ab5]">/{isYearly ? "год" : "мес"}</span>
                </div>
              </div>
              <div
                className={cn(
                  "w-full py-2.5 px-5 rounded-xl text-sm font-semibold transition-all text-center",
                  selectedPlan === plan.level ? "bg-[#005bff] text-white" : "bg-[#1e2d42] text-[#c5d3e8]"
                )}
              >
                {selectedPlan === plan.level ? "Выбран" : "Выбрать"}
              </div>
            </button>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #1e2d42", background: "#0a1628" }}>
          <div className="overflow-x-auto">
            <div className="min-w-[768px]">
              <div className="flex items-center p-5 border-b" style={{ borderColor: "#1e2d42", background: "#0d1f3c" }}>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white">Возможности</h3>
                </div>
                <div className="flex items-center gap-8">
                  {plans.map((plan) => (
                    <div key={plan.level} className="w-24 text-center text-sm font-bold text-[#c5d3e8]">
                      {plan.name}
                    </div>
                  ))}
                </div>
              </div>

              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className={cn(
                    "flex items-center p-5 transition-colors",
                    index % 2 === 0 ? "" : "bg-[#0d1f3c]/50",
                    feature.included === selectedPlan && "bg-[#005bff]/5"
                  )}
                  style={{ borderBottom: "1px solid #1e2d42" }}
                >
                  <div className="flex-1">
                    <span className="text-sm text-[#c5d3e8]">{feature.name}</span>
                  </div>
                  <div className="flex items-center gap-8">
                    {plans.map((plan) => (
                      <div key={plan.level} className="w-24 flex justify-center">
                        {shouldShowCheck(feature.included, plan.level) ? (
                          <div className="w-5 h-5 rounded-full bg-[#005bff] flex items-center justify-center">
                            <CheckIcon className="w-3 h-3 text-white" />
                          </div>
                        ) : (
                          <span className="text-[#1e2d42]">—</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="bg-[#005bff] text-white px-8 py-3.5 rounded-xl text-base font-bold hover:bg-[#0049cc] transition-all hover:shadow-lg hover:shadow-[#005bff]/25">
            Начать с тарифа {plans.find((p) => p.level === selectedPlan)?.name}
          </button>
        </div>
      </div>
    </section>
  );
}

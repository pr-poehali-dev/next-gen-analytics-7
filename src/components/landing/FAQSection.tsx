import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: "Что такое OZON Склад и как он работает?",
    answer:
      "OZON Склад — это платформа управления FBS-сборкой, которая объединяет все процессы вашего склада в одном окне. Система автоматически получает заказы с OZON, формирует задания для сотрудников, контролирует сборку и помогает с отгрузкой. Подключение занимает несколько минут — просто введите API-ключи вашего магазина.",
  },
  {
    question: "Работает ли платформа с несколькими магазинами и складами одновременно?",
    answer:
      "Да, на тарифах Про и Бизнес поддерживается неограниченное количество магазинов OZON и физических складов. Все заказы отображаются в единой панели с фильтрацией по магазину и складу. Вы можете легко переключаться между магазинами кнопкой 'Переключить магазин' в шапке интерфейса.",
  },
  {
    question: "Как платформа помогает решать проблемы с остатками ФБС?",
    answer:
      "Платформа автоматически сверяет фактические остатки на складе с данными в системе OZON. Раздел 'Проверка остатков ФБС' показывает расхождения, а 'Проблемы остатков' — заказы, которые нельзя собрать из-за нехватки товара. Это позволяет заранее обновить остатки и избежать отмен заказов.",
  },
  {
    question: "Как начать работу и сколько стоит?",
    answer:
      "Начать просто: выберите тариф, зарегистрируйтесь и введите API-ключи вашего OZON-магазина. Тариф Старт — от 1 900 ₽/месяц для небольших магазинов до 500 заказов. Тариф Про — от 4 900 ₽/месяц для растущего бизнеса до 5 000 заказов. Тариф Бизнес — от 14 900 ₽/месяц для крупных продавцов без ограничений.",
  },
];

interface FAQSectionProps {
  title?: string;
  faqs?: FAQItem[];
}

export const FAQSection = ({ title = "Часто задаваемые вопросы", faqs = defaultFAQs }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 px-8" style={{ background: "hsl(220, 20%, 10%)" }} id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono uppercase tracking-widest text-[#00a3ff] mb-4">FAQ</p>
            <h2 className="text-[40px] leading-tight font-bold text-white tracking-tight sticky top-24">
              {title}
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b" style={{ borderColor: "#1e2d42" }}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-6 text-left group hover:opacity-80 transition-opacity duration-150"
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-base leading-6 text-white pr-8 font-medium">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      className="flex-shrink-0"
                    >
                      <Plus className="w-5 h-5 text-[#00a3ff]" strokeWidth={2} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12">
                          <p className="text-base leading-6 text-[#8b9ab5]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

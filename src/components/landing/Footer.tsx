import { Mail } from "lucide-react";
import { motion } from "framer-motion";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const defaultSections: FooterSection[] = [
  {
    title: "Платформа",
    links: [
      { label: "Управление заказами", href: "#features" },
      { label: "Печать этикеток", href: "#features" },
      { label: "Контроль остатков", href: "#features" },
      { label: "Управление командой", href: "#features" },
      { label: "Аналитика", href: "#features" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "#about" },
      { label: "Блог", href: "#blog" },
      { label: "Карьера", href: "#careers" },
      { label: "Контакты", href: "#contact" },
    ],
  },
  {
    title: "Ресурсы",
    links: [
      { label: "Документация", href: "#docs" },
      { label: "Центр помощи", href: "#help" },
      { label: "API", href: "#api" },
      { label: "Кейсы", href: "#cases" },
    ],
  },
  {
    title: "Юридическое",
    links: [
      { label: "Политика конфиденциальности", href: "#privacy" },
      { label: "Условия использования", href: "#terms" },
      { label: "Безопасность", href: "#security" },
    ],
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full" style={{ background: "hsl(220, 20%, 8%)", borderTop: "1px solid #1e2d42" }}>
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-span-2"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="w-9 h-9 bg-[#005bff] rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">O</span>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white tracking-tight">
                  OZON <span className="text-[#00a3ff]">СКЛАД</span>
                </h3>
                <p className="text-xs text-[#8b9ab5]">FBS-платформа для продавцов</p>
              </div>
            </div>
            <p className="text-sm leading-5 text-[#8b9ab5] max-w-xs">
              Автоматизируйте сборку, управляйте остатками и масштабируйте продажи на OZON без хаоса.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://t.me"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#0d1f3c] border border-[#1e2d42] text-[#8b9ab5] hover:text-white hover:border-[#00a3ff] transition-colors duration-150"
                aria-label="Telegram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a
                href="mailto:hello@ozon-sklad.ru"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#0d1f3c] border border-[#1e2d42] text-[#8b9ab5] hover:text-white hover:border-[#00a3ff] transition-colors duration-150"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00d4a0] animate-pulse" />
              <span className="text-xs text-[#00d4a0] font-mono">Все системы работают</span>
            </div>
          </motion.div>

          {defaultSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="col-span-1"
            >
              <h4 className="text-xs font-semibold text-[#c5d3e8] mb-4 uppercase tracking-widest">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-[#8b9ab5] hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8"
          style={{ borderTop: "1px solid #1e2d42" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#8b9ab5]">
              © {currentYear} OZON Склад. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a href="#status" className="text-sm text-[#8b9ab5] hover:text-white transition-colors duration-150">Статус</a>
              <a href="#sitemap" className="text-sm text-[#8b9ab5] hover:text-white transition-colors duration-150">Карта сайта</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

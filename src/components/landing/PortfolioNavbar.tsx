import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavigationLink {
  name: string;
  href: string;
}

const navigationLinks: NavigationLink[] = [
  { name: "Возможности", href: "#features" },
  { name: "Тарифы", href: "#pricing" },
  { name: "Интеграции", href: "#integrations" },
  { name: "FAQ", href: "#faq" },
];

export const PortfolioNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleLinkClick = (href: string) => {
    closeMobileMenu();
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0f1620]/95 backdrop-blur-md shadow-lg border-b border-[#1e2d42]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-8 h-8 bg-[#005bff] rounded-md flex items-center justify-center">
              <span className="text-white font-black text-sm">O</span>
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              OZON <span className="text-[#00a3ff]">СКЛАД</span>
            </span>
            <span className="hidden sm:block text-xs text-[#8b9ab5] border border-[#1e2d42] rounded px-2 py-0.5 ml-1">
              FBS Сборка
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-[#c5d3e8] hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  <span>{link.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00a3ff] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick("#contact")}
              className="text-[#c5d3e8] hover:text-white px-4 py-2 text-sm font-medium border border-[#1e2d42] rounded-lg hover:border-[#00a3ff] transition-all duration-200"
            >
              Войти
            </button>
            <button
              onClick={() => handleLinkClick("#contact")}
              className="bg-[#005bff] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#0049cc] transition-all duration-200 shadow-md hover:shadow-[#005bff]/30"
            >
              Попробовать бесплатно
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-[#c5d3e8] hover:text-white p-2 rounded-md transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0f1620]/98 backdrop-blur-md border-t border-[#1e2d42]"
          >
            <div className="px-6 py-6 space-y-4">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="block w-full text-left text-[#c5d3e8] hover:text-white py-3 text-base font-medium transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-[#1e2d42]">
                <button
                  onClick={() => handleLinkClick("#contact")}
                  className="w-full bg-[#005bff] text-white px-5 py-3 rounded-lg text-base font-semibold hover:bg-[#0049cc] transition-all duration-200"
                >
                  Попробовать бесплатно
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

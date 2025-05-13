import { useState } from "react";
import { Button } from "@/lib/ui-components";
import { ChevronRight, Wallet, Clock, Users, Smartphone, Zap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import IncomeCalculator from "@/components/IncomeCalculator";

// Полноценный компонент для фоновых элементов
function BackgroundElements() {
  // Полная версия для всех устройств
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute top-10 right-[5%] w-48 h-48 bg-primary/30 rounded-full filter blur-[60px]"></div>
      <div className="absolute top-[30%] left-[10%] w-56 h-56 bg-secondary/30 rounded-full filter blur-[50px]"></div>
      <div className="absolute bottom-[15%] right-[15%] w-64 h-64 bg-pink-500/20 rounded-full filter blur-[70px]"></div>
      <div className="absolute top-[15%] left-[30%] w-40 h-40 bg-indigo-500/15 rounded-full filter blur-[80px]"></div>
    </div>
  );
}

export default function Hero() {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <section className="relative pt-7 pb-7 overflow-hidden">
      <BackgroundElements />

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 z-10 flex flex-col">
            <div className="w-fit px-3 py-1.5 mb-3 rounded-full bg-primary/10 text-sm text-primary font-medium">
              <Zap size={14} className="inline-block mr-1.5 align-text-bottom" />
              <span>Начни зарабатывать быстро и легко</span>
            </div>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight tracking-tight">
              Твой <span className="animated-gradient-text">быстрый старт</span> в доставке
            </h1>
            <p className="text-base text-foreground/70 mb-3 max-w-md">
              Гибкий график и быстрые выплаты. Начни работать курьером уже сейчас!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <a href="#apply">
                <Button size="lg" className="primary-gradient w-full sm:w-auto text-white px-6 py-6 text-base">
                  Начать работу <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Button
                onClick={() => setShowCalculator((v) => !v)}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 px-6 py-6 text-base hover:bg-accent"
              >
                Рассчитать доход
              </Button>
            </div>
            <div className="relative">
              <AnimatePresence>
                {showCalculator && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, scale: 0.95 }}
                    animate={{ opacity: 1, height: 'auto', scale: 1 }}
                    exit={{ opacity: 0, height: 0, scale: 0.95 }}
                    transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 350,
                      opacity: { duration: 0.3 },
                      height: { duration: 0.4 }
                    }}
                    className="absolute top-0 left-0 right-0 z-40 overflow-visible max-w-full mt-2"
                  >
                    <div
                      className="fixed inset-0 bg-black/25 backdrop-blur-sm z-30"
                      onClick={() => setShowCalculator(false)}
                    ></div>
                    <div className="relative bg-white/95 backdrop-blur-2xl rounded-xl border border-primary/10 shadow-2xl p-4 z-40 mx-auto max-w-md">
                      <button
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center transition hover:bg-primary/20"
                        onClick={() => setShowCalculator(false)}
                        aria-label="Закрыть калькулятор"
                        tabIndex={0}
                      >
                        ✕
                      </button>
                      <div className="mt-1">
                        <IncomeCalculator compact />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="mt-2 bg-white/80 p-3 rounded-xl border border-primary/10 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Wallet className="text-primary h-4 w-4" />
                </div>
                <div>
                  <span className="font-medium text-lg">До 5000 BYN/мес</span>
                  <p className="text-xs text-foreground/70">
                    Выполняя заказы по городу. Частые выплаты и честные условия.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative mt-4 lg:mt-0">
            <div className="relative max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-2xl blur-xl transform rotate-3 scale-105"></div>
              <div className="relative z-10 overflow-hidden rounded-2xl">
                <picture>
                  <source srcSet="/man3.webp" type="image/webp" />
                  <source srcSet="/man3.png" type="image/png" />
                  <img
                    src="/man3.png"
                    alt="Счастливый курьер с доставкой"
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

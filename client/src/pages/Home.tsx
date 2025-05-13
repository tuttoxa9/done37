import { motion } from "framer-motion";
import ShaderLogo from "@/components/ShaderLogo";
import Hero from "@/components/Hero";
// import Benefits from "@/components/Benefits";
// import IncomeCalculator from "@/components/IncomeCalculator";
import HowItWorks from "@/components/HowItWorks";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";
import { Link } from "wouter";

// Эффект анимации с размытием - полная версия для всех устройств
const fadeFromBlur = {
  hidden: { opacity: 0, filter: "blur(12px)", scale: 1.01 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

// Однотонный декоративный фон с легкими светлыми элементами
function FullBackground() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-16 bg-amber-50"></div>
      <div className="absolute -bottom-4 right-1/4 w-64 h-64 rounded-full bg-amber-100 blur-3xl"></div>
      <div className="absolute -bottom-4 left-1/3 w-72 h-72 rounded-full bg-amber-100 blur-3xl"></div>
    </div>
  );
}

// Простой логотип вместо полной шапки
function Logo() {
  return (
    <div className="container-custom py-4">
      <Link href="/">
        <div className="text-3xl font-bold flex items-center gap-2 relative">
          <ShaderLogo width="35px" height="35px" />
          <span className="gradient-text font-heading tracking-tighter">ЮНИК</span>
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <motion.div
      className="min-h-screen flex flex-col"
      initial="hidden"
      animate="visible"
      variants={fadeFromBlur}
    >
      <Logo />
      <main className="content-wrapper">
        <Hero />
        {/* <Benefits /> */}
        {/* <IncomeCalculator /> */}
        <HowItWorks />
        <ApplicationForm />
        <FullBackground />
      </main>
      <Footer />
    </motion.div>
  );
}

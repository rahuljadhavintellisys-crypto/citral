"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80",
    caption: "Empowering children and families in Nakivale Refugee Settlement"
  },
  {
    url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1920&q=80",
    caption: "Developing sustainable, climate-smart agriculture systems"
  },
  {
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80",
    caption: "Strengthening community public health and wellbeing"
  },
  {
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=80",
    caption: "Restoring local ecosystems and protecting Uganda's wetlands"
  }
];

export default function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-slate-950 flex items-center">
      {/* Background Images Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[currentIndex].url})` }}
          />
        </AnimatePresence>
        {/* Modern dark overlay with green/blue gradient hints */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-transparent dark:from-slate-950/95 dark:via-slate-900/75 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 text-white relative">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 font-manrope backdrop-blur-md"
          >
            <ShieldCheck className="w-3.5 h-3.5 fill-emerald-500/10" />
            Grassroots Humanitarian Impact Since 2016
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
          >
            Building Healthier Communities and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-emerald-400 bg-300% animate-gradient">
              Sustainable Futures
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-base sm:text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed"
          >
            Empowering refugees, women, youth, and rural communities across Isingiro District, Uganda, through public health, WASH initiatives, and climate-smart development.
          </motion.p>

          {/* Call-to-action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="/get-involved?tab=donate">
              <Button size="lg" className="bg-primary-green hover:bg-emerald-800 text-white font-manrope font-bold text-base rounded-xl px-8 py-6 shadow-xl shadow-emerald-950/20 hover:shadow-emerald-950/40 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                <Heart className="w-5 h-5 fill-white animate-pulse" />
                Support Our Mission
              </Button>
            </Link>

            <Link href="/get-involved?tab=partner">
              <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl px-7 py-6 font-manrope font-bold text-base backdrop-blur-md transition-all flex items-center gap-1.5">
                Become a Partner
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="/programs">
              <Button variant="link" className="text-slate-300 hover:text-white font-manrope font-semibold text-sm underline decoration-sky-400 underline-offset-4 py-2 px-1">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Manual Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 z-20 p-2.5 rounded-xl bg-black/20 hover:bg-black/40 text-white/70 hover:text-white border border-white/10 hover:scale-105 transition-all hidden sm:flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 z-20 p-2.5 rounded-xl bg-black/20 hover:bg-black/40 text-white/70 hover:text-white border border-white/10 hover:scale-105 transition-all hidden sm:flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-slate-950/45 px-3 py-2 rounded-xl backdrop-blur-md border border-white/5">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-emerald-400 w-6" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartPulse,
  ShieldAlert,
  Droplet,
  Sprout,
  Trees,
  TrendingUp,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { programs } from "@/data/mockData";
import { Button } from "@/components/ui/button";

// Helper to render icon by name
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "HeartPulse":
      return <HeartPulse className="w-6 h-6 text-emerald-600" />;
    case "ShieldAlert":
      return <ShieldAlert className="w-6 h-6 text-emerald-600" />;
    case "Droplet":
      return <Droplet className="w-6 h-6 text-emerald-600" />;
    case "Sprout":
      return <Sprout className="w-6 h-6 text-emerald-600" />;
    case "Trees":
      return <Trees className="w-6 h-6 text-emerald-600" />;
    case "TrendingUp":
      return <TrendingUp className="w-6 h-6 text-emerald-600" />;
    default:
      return <Sparkles className="w-6 h-6 text-emerald-600" />;
  }
};

export default function ProgramCards() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 font-manrope">
              What We Do
            </h2>
            <p className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Empowering Communities Through Multi-Sectoral Programs
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mt-4 rounded-full" />
          </div>
          <Link href="/programs">
            <Button className="bg-primary-green hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white rounded-xl px-6 py-5 font-manrope font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-1">
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              className="group bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-slate-100 dark:border-slate-900 overflow-hidden hover:border-emerald-500/30 dark:hover:border-emerald-400/30 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: program.imagePosition || 'center' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-60" />

                {/* Floating Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {getIcon(program.iconName)}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {program.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    {program.shortDesc}
                  </p>
                </div>

                {/* Card footer: Impact stat + CTA */}
                <div className="border-t border-slate-100 dark:border-slate-800/80 pt-5 mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-manrope text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      {program.impactMetric}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider font-manrope">
                      Impacted
                    </span>
                  </div>
                  <Link href={`/programs#${program.id}`} className="text-slate-600 dark:text-slate-300 hover:text-primary-green dark:hover:text-emerald-400 flex items-center gap-1 text-sm font-bold font-manrope transition-colors">
                    Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
export { getIcon };

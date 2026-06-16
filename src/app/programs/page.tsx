"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, HeartPulse } from "lucide-react";
import { programs } from "@/data/mockData";
import { getIcon } from "@/components/sections/ProgramCards";
import { Button } from "@/components/ui/button";

export default function ProgramsPage() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const }
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-white dark:bg-slate-950 font-sans">
      
      {/* Page Header */}
      <section className="relative bg-slate-950 py-24 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-950/40" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center justify-center">
          <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-400 font-manrope">
            Our Portfolio
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            CITRAL Program Areas
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-355 max-w-xl mx-auto leading-relaxed">
            Discover how we address interconnected public health, social justice, and environmental challenges to build community resilience in Uganda.
          </p>
        </div>
      </section>

      {/* Program Details List (Editorial alternating layout) */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-28"
          >
            {programs.map((program, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={program.id}
                  id={program.id}
                  variants={itemVariants}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`}
                >
                  
                  {/* Image side (Grid: 5 cols) */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                        style={{ objectPosition: program.imagePosition || 'center' }}
                      />
                      {/* Float Tag */}
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm flex items-center justify-center shadow-lg border border-slate-200/50">
                        {getIcon(program.iconName)}
                      </div>
                    </div>
                  </div>

                  {/* Text side (Grid: 7 cols) */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex flex-col gap-4">
                      {/* Program Title */}
                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group hover:text-emerald-600 transition-colors">
                        {program.title}
                      </h2>
                      
                      {/* Program Long Desc */}
                      <p className="font-sans text-sm md:text-base text-slate-650 dark:text-slate-400 leading-relaxed">
                        {program.longDesc}
                      </p>

                      {/* Impact Highlight Card */}
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-850 flex items-center gap-3 w-fit mb-2">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                          <HeartPulse className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-manrope text-sm font-bold text-emerald-600 dark:text-emerald-400 block">
                            {program.impactMetric}
                          </span>
                          <span className="text-[10px] text-slate-450 uppercase tracking-wider font-semibold font-manrope">
                            {program.impactLabel}
                          </span>
                        </div>
                      </div>

                      {/* Activities checklist */}
                      <div className="space-y-3">
                        <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-manrope">
                          Key Program Activities
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-450 font-sans">
                          {program.activities.map((act, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTAs */}
                      <div className="flex items-center gap-4 mt-6">
                        <Link href="/get-involved?tab=volunteer">
                          <Button className="bg-primary-green hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white rounded-xl px-5 py-5 font-manrope font-bold text-xs shadow-md">
                            Volunteer for {program.title.split(" ")[0]}
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button variant="outline" className="border-slate-200 hover:bg-slate-50 dark:border-slate-850 dark:hover:bg-slate-900 rounded-xl px-4 py-5 font-manrope text-xs font-semibold text-slate-700 dark:text-slate-300">
                            Inquire Info
                          </Button>
                        </Link>
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Program Summary banner */}
      <section className="bg-slate-950 py-20 border-t border-slate-900">
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          <h2 className="font-heading text-2xl font-bold mb-4">Want to support a specific program?</h2>
          <p className="font-sans text-sm text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            You can specify which program area your donation supports. 100% of designated program funds go directly to local materials, logistics, and beneficiary support on the ground.
          </p>
          <Link href="/get-involved?tab=donate">
            <Button size="lg" className="bg-primary-green hover:bg-emerald-800 text-white rounded-xl px-8 font-manrope font-bold text-sm shadow-lg">
              Donate to Program
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}

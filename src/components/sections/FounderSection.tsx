"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, Sparkles, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FounderSection() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/20 border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image & Signature Column (Grid: 5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img
                src="/images/dr.alex.png"
                alt="Dr. Alex Magomu Alfred"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-102"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-150 dark:border-slate-800 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-sky-400 flex items-center justify-center text-white shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-slate-900 dark:text-white leading-tight">
                    Dr. Alex Magomu Alfred
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider font-manrope">
                    Founder & Executive Director
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Messaging Column (Grid: 7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-manrope flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 fill-emerald-500/10" />
                Leadership Message
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                A Vision of Health, Dignity, and Long-Term Self-Reliance
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mt-2 rounded-full" />
            </div>

            {/* Blockquote quote */}
            <div className="relative pl-8 border-l-4 border-emerald-500/50 mt-4 mb-2">
              <Quote className="absolute left-2 -top-3 w-8 h-8 text-emerald-500/10 rotate-180" />
              <p className="font-sans italic text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                &quot;We believe that health, the environment, and economic development are fundamentally interconnected. Real progress starts when we transition from emergency aid dependency to grassroots, community-driven development.&quot;
              </p>
            </div>

            <p className="font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Founded in 2016 in the Nakivale Refugee Settlement, Uganda, CITRAL was born from a vision to break the cycle of poverty and vulnerability among refugees and rural communities. Under Dr. Alex&apos;s stewardship, CITRAL has grown from simple volunteer health awareness operations to a multi-sector development initiative impacting over 25,000 lives.
            </p>
            <p className="font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              By addressing public health, gender inequality, and ecological restoration together, CITRAL establishes sustainable ecosystems where families don&apos;t just survive—they build independent futures.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link href="/about#founder">
                <Button className="bg-primary-green hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white rounded-xl px-6 py-5 font-manrope font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-1">
                  Read Message from the Founder
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-slate-200 hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-900 rounded-xl px-5 py-5 font-manrope text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Our Mission & Journey
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

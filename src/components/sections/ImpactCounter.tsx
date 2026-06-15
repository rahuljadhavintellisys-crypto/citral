"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Users, Award, Shield, Hourglass } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-8 h-8 text-emerald-500" />,
    value: 25000,
    suffix: "+",
    label: "Beneficiaries Reached",
    description: "Refugees & host community members assisted with critical aid."
  },
  {
    icon: <Award className="w-8 h-8 text-sky-500" />,
    value: 4,
    suffix: "",
    label: "Core Active Programs",
    description: "Sustainable projects in public health, SGBV, WASH & farming."
  },
  {
    icon: <Shield className="w-8 h-8 text-gold-accent" />,
    value: 9,
    suffix: "",
    label: "Field Officers",
    description: "Dedicated full-time officers coordinating grassroots activities."
  },
  {
    icon: <Hourglass className="w-8 h-8 text-emerald-600" />,
    value: 2016,
    suffix: "",
    label: "Est. Year",
    description: "Over a decade of community-led humanitarian transformation."
  }
];

export default function ImpactCounter() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 border-y border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title / Description */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 font-manrope">
            Measuring Our Success
          </h2>
          <p className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Our Grassroots Footprint in Uganda
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Counter Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Decorative background circle */}
              <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-slate-50 dark:bg-slate-800 group-hover:scale-125 transition-transform duration-300 ease-out z-0" />

              <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
                {/* Icon wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Animated counter number */}
                <div className="font-manrope text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-2 flex items-baseline">
                  <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                  <span className="text-emerald-500">{stat.suffix}</span>
                </div>

                {/* Label */}
                <h3 className="font-heading text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

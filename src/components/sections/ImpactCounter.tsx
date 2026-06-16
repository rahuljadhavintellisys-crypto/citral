"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Users, Award, Shield, Hourglass } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    value: 25000,
    suffix: "+",
    label: "Beneficiaries Reached",
    description: "Refugees & host community members assisted with critical aid.",
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "from-emerald-500/15 to-teal-500/15",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100/50 dark:border-emerald-900/30",
    accentText: "text-emerald-500 dark:text-emerald-400"
  },
  {
    icon: <Award className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
    value: 4,
    suffix: "",
    label: "Core Active Programs",
    description: "Sustainable projects in public health, SGBV, WASH & farming.",
    gradient: "from-sky-500 to-blue-500",
    glowColor: "from-sky-500/15 to-blue-500/15",
    iconBg: "bg-sky-50 dark:bg-sky-950/40 border-sky-100/50 dark:border-sky-900/30",
    accentText: "text-sky-500 dark:text-sky-400"
  },
  {
    icon: <Shield className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    value: 9,
    suffix: "",
    label: "Field Officers",
    description: "Dedicated full-time officers coordinating grassroots activities.",
    gradient: "from-amber-500 to-yellow-500",
    glowColor: "from-amber-500/15 to-yellow-500/15",
    iconBg: "bg-amber-50 dark:bg-amber-950/40 border-amber-100/50 dark:border-amber-900/30",
    accentText: "text-amber-500 dark:text-amber-400"
  },
  {
    icon: <Hourglass className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />,
    value: 2016,
    suffix: "",
    label: "Est. Year",
    description: "Over a decade of community-led humanitarian transformation.",
    gradient: "from-emerald-600 to-emerald-400",
    glowColor: "from-emerald-600/15 to-emerald-400/15",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100/30 dark:border-emerald-900/20",
    accentText: "text-emerald-650 dark:text-emerald-400"
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
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 border-y border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title / Description */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-emerald-400/20 bg-emerald-500/5 dark:bg-emerald-400/5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4 font-manrope">
            Measuring Our Success
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Our Grassroots Footprint in Uganda
          </h2>
          <div className="relative w-24 h-1 mx-auto mt-4 rounded-full overflow-hidden bg-slate-150 dark:bg-slate-800">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-emerald-500 to-sky-400 rounded-full" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-sky-400 to-emerald-500 rounded-full" />
          </div>
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
              className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 md:p-8 shadow-xs hover:shadow-xl hover:border-slate-300/60 dark:hover:border-slate-700/80 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden cursor-default"
            >
              {/* Colored Theme Bar at the top */}
              <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${stat.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Decorative themed background glowing circle on hover */}
              <div className={`absolute -right-8 -bottom-8 w-28 h-28 rounded-full bg-gradient-to-br ${stat.glowColor} opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 ease-out blur-md z-0`} />

              <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
                {/* Icon wrapper */}
                <div className={`w-12 h-12 rounded-xl ${stat.iconBg} border flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>

                {/* Animated counter number */}
                <div className="font-manrope text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2 flex items-baseline">
                  <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                  <span className={stat.accentText}>{stat.suffix}</span>
                </div>

                {/* Label */}
                <h3 className="font-heading text-base font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-405 leading-relaxed">
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

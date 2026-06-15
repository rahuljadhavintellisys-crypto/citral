"use client";

import { motion } from "framer-motion";
import { 
  Heart, 
  Users2, 
  Leaf, 
  Globe2, 
  TrendingUp, 
  GraduationCap
} from "lucide-react";

const features = [
  {
    icon: <Users2 className="w-6 h-6 text-emerald-600" />,
    title: "100% Community-Driven",
    description: "Our initiatives are designed, built, and led by the community, avoiding top-down solutions and ensuring cultural alignment."
  },
  {
    icon: <Heart className="w-6 h-6 text-emerald-600" />,
    title: "25,000+ Lives Impacted",
    description: "Since 2016, we have actively tracked and expanded our programs to lift families out of vulnerability."
  },
  {
    icon: <Globe2 className="w-6 h-6 text-emerald-600" />,
    title: "Direct Refugee Support",
    description: "Operating inside Nakivale Refugee Settlement, we help displaced families establish roots, security, and economic independence."
  },
  {
    icon: <Leaf className="w-6 h-6 text-emerald-600" />,
    title: "Environmental Sustainability",
    description: "Every program integrates eco-friendly practices, tree planting, and soil replenishment to defend local habitats."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
    title: "Long-Term Development",
    description: "We focus on skill-building, seed capital, and structural water assets that serve generations, not temporary relief."
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-emerald-600" />,
    title: "Women & Youth Empowerment",
    description: "Specifically targeting teenage mothers and young social innovators to lead tomorrow's community growth."
  }
];

export default function WhyChoose() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 font-manrope">
            Why CITRAL
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Designed for Credibility, Built for Sustainable Impact
          </h2>
          <p className="font-sans text-sm text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">
            We operate directly at the grassroots level with rigorous monitoring, transparency, and a vision that honors human dignity.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-8 bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-emerald-500/20 group"
            >
              <div className="flex gap-4">
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300 group-hover:text-white">
                    {item.icon}
                  </div>
                </div>
                {/* Text content */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

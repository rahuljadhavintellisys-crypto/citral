"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Users, Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ctaCards = [
  {
    icon: <Heart className="w-8 h-8 text-rose-500 fill-rose-500/10" />,
    title: "Make a Donation",
    description: "Your financial support directly funds WASH installations, public health supply kits, and seeds for farmers.",
    btnText: "Donate Online",
    href: "/get-involved?tab=donate",
    bgAccent: "group-hover:border-rose-500/30"
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-500" />,
    title: "Become a Volunteer",
    description: "Join our field team in Nakivale or support our administration remotely to impact displaced families.",
    btnText: "Join Our Team",
    href: "/get-involved?tab=volunteer",
    bgAccent: "group-hover:border-emerald-500/30"
  },
  {
    icon: <Handshake className="w-8 h-8 text-sky-500" />,
    title: "Partner With Us",
    description: "UN agencies, local government divisions, and CSR programs can coordinate to execute large-scale projects.",
    btnText: "Start a Collaboration",
    href: "/get-involved?tab=partner",
    bgAccent: "group-hover:border-sky-500/30"
  }
];

export default function HomeCTA() {
  return (
    <section className="relative py-20 overflow-hidden bg-slate-950">
      {/* Background Graphic */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 blur-[1px]" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1920&q=80')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Banner Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 text-white">
          <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 font-manrope">
            Take Action Today
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
            You Can Help Us Transform Lives in East Africa
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Every donation, volunteer hour, and strategic partnership directly powers sustainable, community-led change for refugees and host families in Uganda.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mx-auto mt-6 rounded-full" />
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-8 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-950/10 hover:-translate-y-1 ${card.bgAccent}`}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="font-sans text-sm text-slate-400 leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>

              <Link href={card.href} className="w-full">
                <Button className="w-full bg-slate-950 hover:bg-emerald-900/10 border border-slate-800 group-hover:border-slate-700 text-white rounded-xl py-5 font-manrope font-bold text-sm transition-all flex items-center justify-center gap-1.5">
                  {card.btnText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-emerald-400" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

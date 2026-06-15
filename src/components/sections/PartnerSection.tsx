"use client";

import { partners } from "@/data/mockData";
import { Handshake } from "lucide-react";

export default function PartnerSection() {
  // Double the list for infinite scroll effect
  const scrollList = [...partners, ...partners];

  return (
    <section className="py-16 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-8 text-center">
        <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 font-manrope flex items-center justify-center gap-1.5">
          <Handshake className="w-4 h-4" />
          Alliances & Collaboration
        </span>
        <h2 className="font-heading text-xl font-extrabold tracking-tight text-slate-400 dark:text-slate-500 uppercase font-manrope text-center">
          Supported by Leading Global Organizations
        </h2>
      </div>

      {/* Infinite Logo Scroll container */}
      <div className="relative w-full flex items-center justify-center py-6 select-none bg-slate-50/50 dark:bg-slate-900/10 border-y border-slate-100 dark:border-slate-900">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Scrolling flex */}
        <div className="flex w-max gap-16 items-center animate-scroll">
          {scrollList.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center px-4 py-2 opacity-50 hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
            >
              <div className="flex items-center gap-1.5 font-heading font-black text-lg text-slate-500 dark:text-slate-400 font-manrope tracking-tight whitespace-nowrap">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                {partner.logoPlaceholder}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Scrolling CSS */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 2rem));
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

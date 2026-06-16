"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Users, 
  BookOpen, 
  Trees, 
  Droplet,
  CheckCircle,
  X
} from "lucide-react";
import { successStories } from "@/data/mockData";
import GallerySection from "@/components/sections/GallerySection";

const achievementMetrics = [
  { label: "Tree Seedlings Raised in Certified Bed", current: 200000, target: 250000, unit: "seedlings", color: "bg-emerald-600", icon: <Trees className="w-4 h-4" /> },
  { label: "WASH Clean Water Infrastructure Access", current: 8500, target: 10000, unit: "people", color: "bg-sky-500", icon: <Droplet className="w-4 h-4" /> },
  { label: "CLM Healthcare Facility Sites Evaluated", current: 12, target: 15, unit: "sites", color: "bg-emerald-500", icon: <Users className="w-4 h-4" /> },
  { label: "Teenage Mothers Linked to GROW / school", current: 100, target: 150, unit: "mothers", color: "bg-amber-500", icon: <BookOpen className="w-4 h-4" /> },
];

const clientVideos = [
  {
    id: "gUs2b5BeyWk",
    title: "Teenage Mothers & Advocacy Re-entry",
    desc: "Advocacy meeting and dialogues on supporting school re-entry for teenage mothers and preventing child marriages at district level.",
    thumbnail: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "nqgREX48Eho",
    title: "Community Health Awareness Campaigns",
    desc: "Field video showing healthcare dialogues and awareness campaigns for malaria, TB, and HIV at Mabona HC III.",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "IQRjoRc7ErQ",
    title: "Community-Led Monitoring Feedback",
    desc: "Feedback and validation dialogues held with health facility staffs, community monitors, and DHO representatives.",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "TpKDbDxjT7I",
    title: "Run for Green: Bamboo Nakivale Wetlands",
    desc: "Consortium project launching the ecological restoration campaign and bamboo planting to restore Nakivale wetlands.",
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
  }
];

export default function ImpactPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeVideo, setActiveVideo] = useState(clientVideos[0]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-white dark:bg-slate-950 font-sans">
      
      {/* Page Header */}
      <section className="relative bg-slate-950 py-24 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-950/40" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center justify-center">
          <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-400 font-manrope">
            Our Legacy
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            Showcasing Our Impact
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-355 max-w-xl mx-auto leading-relaxed">
            Review the transparent metrics, visual stories, and physical transformations we have achieved since 2016 in Isingiro, Uganda.
          </p>
        </div>
      </section>

      {/* Program Statistics & Visual Charts */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Chart Side (Grid: 7 cols) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <div>
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 font-manrope">
                  Achievements Tracker
                </span>
                <h2 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white">
                  Program Metrics & targets
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mt-3 rounded-full" />
              </div>
              <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                We measure our success relative to strategic targets approved by local district administrations. Below is a breakdown of our progress against our 2026 milestones.
              </p>

              {/* Custom charts */}
              <div className="space-y-6">
                {achievementMetrics.map((metric, idx) => {
                  const percentage = Math.round((metric.current / metric.target) * 100);
                  return (
                    <motion.div key={idx} variants={itemVariants} className="flex flex-col gap-2">
                      <div className="flex justify-between items-center text-xs font-bold text-slate-700 dark:text-slate-300 font-manrope">
                        <span className="flex items-center gap-1.5 font-heading text-sm font-semibold">
                          <span className="w-6 h-6 rounded-lg bg-slate-50 dark:bg-slate-900 flex items-center justify-center border border-slate-100 dark:border-slate-800">
                            {metric.icon}
                          </span>
                          {metric.label}
                        </span>
                        <span className="text-emerald-600 dark:text-emerald-400">{percentage}%</span>
                      </div>
                      
                      {/* Bar Container */}
                      <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-900 overflow-hidden relative border border-slate-200/20 dark:border-slate-800/40">
                        <div 
                          className={`h-full ${metric.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      
                      <div className="flex justify-between text-[10px] text-slate-400 font-manrope">
                        <span>Current: {metric.current.toLocaleString()} {metric.unit}</span>
                        <span>Target: {metric.target.toLocaleString()} {metric.unit}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Video Column (Grid: 5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-sky-500 dark:text-sky-400 mb-2 font-manrope">
                  Field Documentation
                </span>
                <h2 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white">
                  Watch Our Impact
                </h2>
                <div className="w-12 h-1 bg-sky-500 mt-3 rounded-full" />
              </div>
              
              {/* Video Thumbnail */}
              <div 
                onClick={() => setIsVideoPlaying(true)}
                className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-slate-800/50 group cursor-pointer"
              >
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-slate-950/45 group-hover:bg-slate-950/60 transition-colors flex items-center justify-center" />
                
                {/* Pulse Play button */}
                <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg relative group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                  <span className="absolute inset-0 rounded-full border border-emerald-500 animate-ping opacity-75" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white z-10 text-xs font-manrope">
                  <span className="block font-bold truncate">{activeVideo.title}</span>
                  <span className="text-[10px] text-slate-300">Click to Play YouTube Video</span>
                </div>
              </div>

              {/* Video List Selector */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 font-manrope">
                  Select Video Playlist:
                </span>
                <div className="flex flex-col gap-2 max-h-[220px] overflow-y-auto pr-1">
                  {clientVideos.map((vid) => (
                    <button
                      key={vid.id}
                      onClick={() => {
                        setActiveVideo(vid);
                        setIsVideoPlaying(false);
                      }}
                      className={`text-left p-3 rounded-2xl border transition-all text-xs font-sans flex items-start gap-2.5 ${
                        activeVideo.id === vid.id
                          ? "bg-slate-50 dark:bg-slate-900 border-emerald-500/30 text-slate-900 dark:text-white shadow-sm"
                          : "bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-50/50"
                      }`}
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-650 flex items-center justify-center shrink-0 mt-0.5">
                        <Play className="w-2.5 h-2.5 fill-current" />
                      </div>
                      <div className="flex flex-col gap-0.5 overflow-hidden">
                        <span className="font-bold truncate">{vid.title}</span>
                        <span className="text-[10px] text-slate-450 dark:text-slate-500 truncate leading-snug">{vid.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Before and After Stories detail grid */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/10 border-t border-slate-100 dark:border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 font-manrope">
              Case Studies
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Before and After Transformations
            </h2>
            <p className="font-sans text-sm text-slate-550 dark:text-slate-400 mt-3">
              Comprehensive breakdowns of our programmatic interventions for specific families.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col gap-6 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 font-manrope mb-4">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600">{story.category}</span>
                    <span>•</span>
                    <span>{story.location}</span>
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {story.title}
                  </h3>

                  <div className="space-y-4 text-sm font-sans text-slate-650 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4">
                    <p><strong>The Challenge:</strong> {story.challenge}</p>
                    <p><strong>Intervention:</strong> {story.intervention}</p>
                    <p><strong>Outcome:</strong> {story.outcome}</p>
                  </div>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-850 pt-4 flex items-center justify-between text-xs font-semibold font-manrope">
                  <span className="text-slate-400">Beneficiary: {story.beneficiaryName}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Verified Self-Reliance
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* visual gallery */}
      <GallerySection />

      {/* Video Modal with YouTube IFrame */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoPlaying(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button 
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/10 z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <div 
              className="relative w-full max-w-4xl aspect-video bg-slate-900 border border-slate-800 rounded-[32px] overflow-hidden shadow-2xl flex items-center justify-center text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

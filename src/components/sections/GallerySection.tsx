"use client";

import { useState } from "react";
import { motion as motionFramer, AnimatePresence as AnimatePresenceFramer } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "/images/extracted/reports_for_data_collection_analysis_community_feedback_meeting_facility_level_img_4.jpg",
    title: "Community Outreach Assembly",
    category: "Health",
    size: "tall" // height class
  },
  {
    id: 2,
    url: "/images/extracted/community_initiative_to_transform_lives_profile_img_38.jpg",
    title: "Permaculture Training Session",
    category: "Agriculture",
    size: "wide"
  },
  {
    id: 3,
    url: "/images/extracted/reports_for_data_collection_analysis_community_feedback_meeting_facility_level_img_25.jpg",
    title: "Maternal Health Screenings",
    category: "Health",
    size: "normal"
  },
  {
    id: 4,
    url: "/images/extracted/reports_for_data_collection_analysis_community_feedback_meeting_facility_level_img_5.jpg",
    title: "School Hygiene Block Build",
    category: "WASH",
    size: "tall"
  },
  {
    id: 5,
    url: "/images/extracted/community_initiative_to_transform_lives_profile_img_25.jpg",
    title: "Tree Planting Initiative",
    category: "Environment",
    size: "normal"
  },
  {
    id: 6,
    url: "/images/extracted/community_initiative_to_transform_lives_profile_img_17.jpg",
    title: "Livelihood Tailoring Lab",
    category: "Livelihood",
    size: "wide"
  }
];

export default function GallerySection() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Health", "WASH", "Agriculture", "Environment", "Livelihood"];

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % filteredImages.length);
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 font-manrope flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4 text-emerald-600" />
              Visual Impact
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Our Work In Action: Field Gallery
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mt-2 rounded-full" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setLightboxIndex(null); }}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all font-manrope ${
                  filter === cat
                    ? "bg-primary-green text-white shadow-md shadow-emerald-950/10"
                    : "bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Layout — perfectly aligned cards with tight spacing and border */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {filteredImages.map((img, idx) => {
            return (
              <motionFramer.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(idx)}
                className="group flex flex-col overflow-hidden bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-xs hover:shadow-md hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-350 cursor-pointer"
              >
                {/* Image Container with fixed aspect ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover Overlay Inside the Image Container */}
                  <div className="absolute inset-0 bg-slate-950/20 dark:bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-100 shadow-md flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Card Info Content (Always Visible) */}
                <div className="flex flex-col flex-grow p-4 bg-white dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/60">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1 font-manrope">
                    {img.category}
                  </span>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-slate-800 dark:text-slate-250 line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {img.title}
                  </h3>
                </div>
              </motionFramer.div>
            );
          })}
        </div>

        {/* Lightbox Modal overlay */}
        <AnimatePresenceFramer>
          {lightboxIndex !== null && (
            <motionFramer.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-55 border border-white/10"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={handlePrev}
                className="absolute left-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-55 border border-white/10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div 
                className="relative max-w-4xl max-h-[80vh] aspect-auto flex flex-col gap-4 text-center items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredImages[lightboxIndex].url}
                  alt={filteredImages[lightboxIndex].title}
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                />
                <div className="text-white mt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-manrope">
                    {filteredImages[lightboxIndex].category}
                  </span>
                  <h3 className="font-heading text-lg font-bold">
                    {filteredImages[lightboxIndex].title}
                  </h3>
                </div>
              </div>

              <button
                onClick={handleNext}
                className="absolute right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-55 border border-white/10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motionFramer.div>
          )}
        </AnimatePresenceFramer>

      </div>
    </section>
  );
}

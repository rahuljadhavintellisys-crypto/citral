"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, MapPin, CheckCircle, Sparkles } from "lucide-react";
import { successStories, testimonials } from "@/data/mockData";
import { Button } from "@/components/ui/button";

export default function SuccessStories() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const handlePrevStory = () => {
    setActiveStoryIdx((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const handleNextStory = () => {
    setActiveStoryIdx((prev) => (prev + 1) % successStories.length);
  };

  const currentStory = successStories[activeStoryIdx];
  const currentTestimonial = testimonials[activeTestimonialIdx];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/10 border-t border-slate-100 dark:border-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* SECTION 1: Beneficiary Success Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          {/* Text content side (Grid: 7 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 font-manrope flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 fill-emerald-500/10" />
                Stories of Impact
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Real Lives Restored: Beneficiary Outcomes
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mt-2 rounded-full" />
            </div>

            {/* Carousel Container */}
            <div className="relative min-h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStory.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-5"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold font-manrope text-slate-500">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      {currentStory.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {currentStory.location}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
                    {currentStory.title}
                  </h3>

                  <div className="space-y-3 font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p><strong>The Challenge:</strong> {currentStory.challenge}</p>
                    <p><strong>CITRAL Intervention:</strong> {currentStory.intervention}</p>
                    <p><strong>The Outcome:</strong> {currentStory.outcome}</p>
                  </div>

                  {/* Blockquote quote */}
                  <div className="relative pl-6 border-l-4 border-sky-400 dark:border-sky-500 mt-2 italic font-medium text-slate-700 dark:text-slate-300">
                    <Quote className="absolute -left-1 -top-2 w-6 h-6 text-sky-400/10 rotate-180" />
                    <p className="font-sans text-sm">
                      &quot;{currentStory.quote}&quot;
                    </p>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white mt-1 not-italic font-manrope">
                      — {currentStory.beneficiaryName}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-3 mt-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevStory}
                className="w-10 h-10 rounded-xl border-slate-200 hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="font-manrope text-xs font-bold text-slate-500">
                {activeStoryIdx + 1} / {successStories.length}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNextStory}
                className="w-10 h-10 rounded-xl border-slate-200 hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Before & After comparison visual (Grid: 6 cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] grid grid-cols-2 gap-4">
              {/* Before Card */}
              <div className="flex flex-col gap-2">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-slate-200/40 dark:border-slate-800/40">
                  <img
                    src={currentStory.imageBefore}
                    alt="Before intervention"
                    className="w-full h-full object-cover grayscale brightness-90"
                  />
                  <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/70 text-[9px] uppercase tracking-wider font-extrabold text-slate-200 font-manrope">
                    Before
                  </div>
                </div>
                <span className="text-[11px] text-slate-500 font-semibold text-center italic font-sans">
                  Vulnerable family state
                </span>
              </div>

              {/* After Card */}
              <div className="flex flex-col gap-2 -translate-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-emerald-500/20">
                  <img
                    src={currentStory.imageAfter}
                    alt="After intervention"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2 py-1 rounded bg-emerald-600 text-[9px] uppercase tracking-wider font-extrabold text-white font-manrope">
                    After CITRAL
                  </div>
                </div>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold text-center italic font-sans flex items-center justify-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Self-reliance achieved
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: International Donor Testimonials */}
        <div className="max-w-4xl mx-auto border border-slate-200/50 dark:border-slate-800/50 rounded-[40px] bg-white dark:bg-slate-900/60 p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-sky-500/5 blur-3xl" />
          <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-emerald-500/5 blur-3xl" />
          
          <div className="relative z-10 flex flex-col items-center text-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500">
              <Quote className="w-6 h-6 fill-sky-500/10" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-4"
              >
                <p className="font-heading text-lg md:text-xl font-medium text-slate-800 dark:text-slate-200 max-w-2xl leading-relaxed italic">
                  &quot;{currentTestimonial.content}&quot;
                </p>

                {/* Avatar Info */}
                <div className="flex items-center gap-3 mt-4 text-left">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-12 h-12 rounded-full border border-sky-400/30 object-cover"
                  />
                  <div>
                    <h4 className="font-heading font-extrabold text-sm text-slate-900 dark:text-white">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-manrope">
                      {currentTestimonial.role}
                    </p>
                    {currentTestimonial.location && (
                      <span className="text-[10px] text-sky-500 font-semibold font-manrope">
                        {currentTestimonial.location}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="flex items-center gap-2 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonialIdx(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeTestimonialIdx ? "bg-sky-500 w-5" : "bg-slate-300 dark:bg-slate-700"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

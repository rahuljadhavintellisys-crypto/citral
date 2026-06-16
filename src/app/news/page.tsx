"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, User, Clock, ChevronRight, X, ArrowLeft, Newspaper } from "lucide-react";
import { newsArticles, NewsArticle } from "@/data/mockData";
import { Button } from "@/components/ui/button";

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const categories = ["All", "Campaign", "Field Activity", "Announcement", "Community Update"];

  const featuredArticle = newsArticles.find(art => art.featured) || newsArticles[0];
  const regularArticles = newsArticles.filter(art => art.id !== featuredArticle.id);

  // Filter logic
  const filterArticles = (list: NewsArticle[]) => {
    return list.filter(art => {
      const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            art.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All" || art.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const filteredRegularList = filterArticles(regularArticles);
  const showFeatured = activeCategory === "All" && searchTerm === "";

  return (
    <div className="flex flex-col flex-1 bg-white dark:bg-slate-950 font-sans">
      
      {/* Banner */}
      <section className="relative bg-slate-950 py-24 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-950/40" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center justify-center">
          <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-400 font-manrope">
            Media Hub
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            News & Field updates
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-355 max-w-xl mx-auto leading-relaxed">
            Stay informed with campaign timelines, local policy changes, community updates, and field reports directly from Isingiro.
          </p>
        </div>
      </section>

      {/* Main Blog Area */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Controls Bar: Search & Category Tabs */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-16 border-b border-slate-100 dark:border-slate-850 pb-8">
            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all font-manrope ${
                    activeCategory === cat
                      ? "bg-primary-green text-white shadow-md shadow-emerald-950/10"
                      : "bg-slate-50 hover:bg-slate-100 dark:bg-slate-905 dark:hover:bg-slate-900 text-slate-655 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800/80"
                  }`}
                >
                  {cat === "All" ? "All Updates" : cat + "s"}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full lg:w-80 flex items-center">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary-green transition-colors text-slate-800 dark:text-slate-100"
              />
              <Search className="w-4 h-4 text-slate-450 absolute left-3 pointer-events-none" />
            </div>
          </div>

          {/* Featured Article Section */}
          {showFeatured && (
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedArticle(featuredArticle)}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-900 rounded-[36px] overflow-hidden p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 mb-16 cursor-pointer"
            >
              {/* Photo col (Grid: 7 cols) */}
              <div className="lg:col-span-7 relative aspect-video rounded-3xl overflow-hidden shadow-inner shrink-0">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-600 text-[10px] uppercase tracking-wider font-extrabold text-white font-manrope shadow">
                  Featured {featuredArticle.category}
                </div>
              </div>

              {/* Text col (Grid: 5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between py-2">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-xs font-semibold font-manrope text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {featuredArticle.title}
                  </h2>

                  <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="border-t border-slate-200/50 dark:border-slate-800/80 pt-6 mt-6 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 font-manrope">
                    Author: {featuredArticle.author}
                  </span>
                  <span className="text-emerald-650 dark:text-emerald-400 flex items-center gap-1 text-sm font-bold font-manrope">
                    Read Story
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Regular Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRegularList.map((art) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedArticle(art)}
                className="group bg-slate-50 dark:bg-slate-905 rounded-3xl border border-slate-100 dark:border-slate-900/60 overflow-hidden hover:border-emerald-500/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Image wrapper */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded-lg bg-white/90 dark:bg-slate-900/90 text-[9px] uppercase tracking-wider font-extrabold text-slate-700 dark:text-emerald-400 font-manrope shadow border border-slate-100 dark:border-slate-800">
                      {art.category}
                    </div>
                  </div>

                  {/* Text body */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-[10px] font-bold font-manrope text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {art.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {art.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer details */}
                <div className="px-6 pb-6 pt-4 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between text-[11px] font-bold font-manrope">
                  <span className="text-slate-400">By {art.author}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                    Read Update
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {filteredRegularList.length === 0 && (!showFeatured || filteredRegularList.length === 0) && (
            <div className="text-center py-16 flex flex-col items-center gap-3">
              <Newspaper className="w-12 h-12 text-slate-300" />
              <p className="text-sm font-manrope font-bold text-slate-500">No updates match your search settings.</p>
              <Button variant="link" onClick={() => { setSearchTerm(""); setActiveCategory("All"); }} className="text-emerald-600">Reset Filters</Button>
            </div>
          )}

          {/* Pagination mock */}
          {filteredRegularList.length > 0 && (
            <div className="flex items-center justify-center gap-1.5 mt-16 text-xs font-bold font-manrope">
              <button disabled className="px-3.5 py-2 rounded-xl bg-slate-50 text-slate-350 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800">Prev</button>
              <button className="px-3.5 py-2 rounded-xl bg-primary-green text-white shadow shadow-emerald-950/20">1</button>
              <button className="px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-500 border border-slate-200/50 dark:border-slate-800">2</button>
              <button className="px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-500 border border-slate-200/50 dark:border-slate-800">Next</button>
            </div>
          )}

        </div>
      </section>

      {/* Article Read Modal overlay */}
      <AnimatePresence>
        {selectedArticle !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-[32px] max-w-2xl w-full p-6 md:p-8 shadow-2xl relative flex flex-col gap-6"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-550 transition-all border border-slate-150 dark:border-slate-800"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Back CTA */}
              <button 
                onClick={() => setSelectedArticle(null)}
                className="flex items-center gap-1.5 text-xs text-slate-400 font-bold uppercase tracking-wider font-manrope w-fit hover:text-primary-green transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to news grid
              </button>

              <div className="relative aspect-video rounded-2xl overflow-hidden w-full shadow-md">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold font-manrope text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-extrabold">{selectedArticle.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{selectedArticle.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{selectedArticle.readTime}</span>
                </div>

                <h2 className="font-heading text-2xl font-black text-slate-900 dark:text-white leading-tight">
                  {selectedArticle.title}
                </h2>

                <div className="font-sans text-sm text-slate-600 dark:text-slate-405 leading-relaxed space-y-4 pt-2 border-t border-slate-100 dark:border-slate-850">
                  <p className="font-semibold text-slate-700 dark:text-slate-300">{selectedArticle.excerpt}</p>
                  {/* Detailed body content split by sentences */}
                  {selectedArticle.content.split(". ").map((sentence, idx) => (
                    <p key={idx}>{sentence}.</p>
                  ))}
                </div>

                <div className="border-t border-slate-100 dark:border-slate-850 pt-4 mt-4 flex justify-between items-center text-xs font-bold text-slate-500 font-manrope">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-slate-400" />
                    Author: {selectedArticle.author}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest">
                    CITRAL News Services
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

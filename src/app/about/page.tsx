"use client";

import { motion } from "framer-motion";
import { 
  Heart, 
  Target, 
  Compass, 
  Quote, 
  Trees, 
  Droplet, 
  Globe, 
  Award, 
  Sprout, 
  Users, 
  Clock,
  Sparkles
} from "lucide-react";
import { timelineEvents, teamMembers } from "@/data/mockData";

// Dynamic icon mapping for timeline
const getTimelineIcon = (iconName: string) => {
  switch (iconName) {
    case "Globe":
      return <Globe className="w-5 h-5 text-white" />;
    case "Droplet":
      return <Droplet className="w-5 h-5 text-white" />;
    case "Sprout":
      return <Sprout className="w-5 h-5 text-white" />;
    case "Users":
      return <Users className="w-5 h-5 text-white" />;
    case "Trees":
      return <Trees className="w-5 h-5 text-white" />;
    case "Award":
      return <Award className="w-5 h-5 text-white" />;
    default:
      return <Clock className="w-5 h-5 text-white" />;
  }
};

export default function AboutPage() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const leaders = teamMembers.filter(member => member.type === 'leadership');
  const fieldStaff = teamMembers.filter(member => member.type === 'field');

  return (
    <div className="flex flex-col flex-1 bg-white dark:bg-slate-950 font-sans">
      
      {/* Banner / Header */}
      <section className="relative bg-slate-950 py-24 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-950/40" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center justify-center">
          <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-400 font-manrope">
            Learn More
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            Who We Are
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-350 max-w-xl mx-auto leading-relaxed">
            Our history, guiding principles, and the local leadership driving impact in the Nakivale Refugee Settlement, Uganda.
          </p>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Vision Card */}
            <motion.div 
              variants={itemVariants} 
              className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-[32px] p-8 md:p-10 shadow-xs hover:shadow-2xl transition-all duration-300 ease-out group hover:-translate-y-2 relative overflow-hidden flex flex-col items-center text-center cursor-default"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Glow Backdrop */}
              <div className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 ease-out blur-md z-0" />
              
              <div className="relative z-10 flex flex-col items-center flex-1 justify-between">
                <div>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40 flex items-center justify-center mx-auto mb-6 shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Target className="w-8 h-8" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Our Vision
                  </h3>
                  
                  {/* Description */}
                  <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    A community-led East Africa where refugees and vulnerable populations enjoy comprehensive health, economic autonomy, and live in ecological harmony.
                  </p>
                </div>
                
                {/* Pillars / Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {["Community Agency", "Autonomy", "Harmony"].map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100/50 dark:border-emerald-900/30 group-hover:bg-emerald-500/10 transition-colors duration-300 font-manrope"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              variants={itemVariants} 
              className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-[32px] p-8 md:p-10 shadow-xs hover:shadow-2xl transition-all duration-300 ease-out group hover:-translate-y-2 relative overflow-hidden flex flex-col items-center text-center cursor-default"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-sky-500 to-blue-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Glow Backdrop */}
              <div className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full bg-gradient-to-br from-sky-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 ease-out blur-md z-0" />
              
              <div className="relative z-10 flex flex-col items-center flex-1 justify-between">
                <div>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/40 flex items-center justify-center mx-auto mb-6 shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Compass className="w-8 h-8" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    Our Mission
                  </h3>
                  
                  {/* Description */}
                  <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    To address public health, environment, and poverty through sustainable local programming, vocational training, and infrastructure development, replacing reliance with autonomy.
                  </p>
                </div>
                
                {/* Pillars / Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {["Vocational Training", "Local Development", "Self-Reliance"].map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-sky-50 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400 border border-sky-100/50 dark:border-sky-900/30 group-hover:bg-sky-500/10 transition-colors duration-300 font-manrope"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Core Values Card */}
            <motion.div 
              variants={itemVariants} 
              className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-[32px] p-8 md:p-10 shadow-xs hover:shadow-2xl transition-all duration-300 ease-out group hover:-translate-y-2 relative overflow-hidden flex flex-col items-center text-center cursor-default"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Glow Backdrop */}
              <div className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full bg-gradient-to-br from-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 ease-out blur-md z-0" />
              
              <div className="relative z-10 flex flex-col items-center flex-1 justify-between">
                <div>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-450 border border-amber-100 dark:border-amber-900/40 flex items-center justify-center mx-auto mb-6 shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Heart className="w-8 h-8" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-405 transition-colors">
                    Core Values
                  </h3>
                  
                  {/* Description */}
                  <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    Empathy, local agency, environmental stewardship, financial accountability, and active gender equity shape every single action we take.
                  </p>
                </div>
                
                {/* Pillars / Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {["Empathy & Equity", "Stewardship", "Transparency"].map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border border-amber-100/50 dark:border-amber-900/30 group-hover:bg-amber-500/10 transition-colors duration-300 font-manrope"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Message Section (Expanded) */}
      <section id="founder" className="py-16 bg-slate-50 dark:bg-slate-900/10 border-y border-slate-100 dark:border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Image Col */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl border-4 border-white dark:border-slate-800">
                <img
                  src="/images/dr.alex.png"
                  alt="Dr. Alex Magomu Alfred"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right text Col */}
            <div className="lg:col-span-8 flex flex-col gap-5">
              <div>
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-manrope">
                  Message from the Founder
                </span>
                <h2 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Dr. Alex Magomu Alfred
                </h2>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider font-manrope -mt-1">
                  Founder & Executive Director, CITRAL
                </p>
                <div className="w-12 h-1 bg-emerald-500 mt-3 rounded-full" />
              </div>

              <div className="relative pl-6 border-l-4 border-emerald-500 italic font-medium text-slate-700 dark:text-slate-350">
                <Quote className="absolute -left-1.5 -top-3.5 w-6 h-6 text-emerald-500/15 rotate-180" />
                <p className="font-sans text-base">
                  &quot;True sustainability in humanitarian work is measured by how quickly we can help individuals and communities stand on their own. Nakivale Settlement is filled with resilience; our role is simply to provide the tools, skills, and structures to let that resilience thrive.&quot;
                </p>
              </div>

              <div className="space-y-4 font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  &quot;When we established CITRAL in 2016, our early operations focused entirely on urgent public health screenings. As an advocate, I quickly realized that treating illnesses without addressing clean water access (WASH), food security (Climate-Smart Agriculture), and economic capacity (Livelihood training) was only solving symptoms, not causes.&quot;
                </p>
                <p>
                  &quot;Over the last decade, we have unified these core sectors into an integrated model. Environmental conservation is linked directly with sustainable agriculture; women empowerment supports SGBV prevention and children&apos;s welfare. Today, with 9 field officers, we target local leadership at every stage, working hand-in-hand with UNHCR and local authorities.&quot;
                </p>
                <p>
                  &quot;Thank you to our global donors and volunteers. We hope this digital platform offers you absolute clarity on our field activities and provides pathways to join us in this critical mission.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section (Journey since 2016) */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 font-manrope">
              Our Milestones
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Our Journey Since 2016
            </h2>
            <p className="font-sans text-sm text-slate-550 dark:text-slate-400 mt-3">
              How a simple volunteer initiative grew into a leading regional NGO.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mx-auto mt-4 rounded-full" />
          </div>

          {/* Timeline Tree */}
          <div className="relative max-w-4xl mx-auto pl-8 sm:pl-0">
            {/* Center line (only desktop) */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

            <div className="space-y-12">
              {timelineEvents.map((evt, idx) => (
                <div key={evt.year} className="relative flex flex-col sm:flex-row items-start sm:items-center">
                  
                  {/* Timeline bullet */}
                  <div className="absolute left-0 sm:left-1/2 w-10 h-10 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-950 flex items-center justify-center -translate-x-1/2 z-10 shadow-lg">
                    {getTimelineIcon(evt.iconName)}
                  </div>

                  {/* Date marker */}
                  <div className={`w-full sm:w-1/2 flex justify-start sm:justify-end pl-8 sm:pl-0 sm:pr-12 ${
                    idx % 2 === 0 ? "sm:order-1" : "sm:order-2 sm:justify-start sm:pl-12"
                  }`}>
                    <span className="font-manrope text-2xl font-black text-emerald-600 dark:text-emerald-400 bg-slate-50 dark:bg-slate-900 px-4 py-1.5 rounded-2xl shadow-inner border border-slate-100 dark:border-slate-800">
                      {evt.year}
                    </span>
                  </div>

                  {/* Content card */}
                  <div className={`w-full sm:w-1/2 pl-8 sm:pl-12 mt-2 sm:mt-0 ${
                    idx % 2 === 0 ? "sm:order-2" : "sm:order-1 sm:pl-0 sm:pr-12"
                  }`}>
                    <div className="bg-slate-50 dark:bg-slate-900/40 p-6 rounded-3xl border border-slate-100 dark:border-slate-900 shadow-sm">
                      <h4 className="font-heading font-extrabold text-base text-slate-900 dark:text-white mb-2">
                        {evt.title}
                      </h4>
                      <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {evt.description}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Team Structure section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/10 border-t border-slate-100 dark:border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 font-manrope flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Our Structure
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              The Dedicated CITRAL Team
            </h2>
            <p className="font-sans text-sm text-slate-500 dark:text-slate-400 mt-3">
              Led by experts, deployed on the ground alongside refugee communities.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mx-auto mt-4 rounded-full" />
          </div>

          {/* Grids: Leadership */}
          <div className="mb-16">
            <h3 className="font-heading font-bold text-lg text-slate-800 dark:text-slate-200 mb-8 border-l-4 border-emerald-500 pl-3">
              Executive Leadership
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {leaders.map((member) => (
                <div key={member.id} className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row gap-5 items-center md:items-start text-center md:text-left">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-2xl object-cover shrink-0 border border-slate-100 dark:border-slate-800"
                  />
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white">{member.name}</h4>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider font-manrope">{member.role}</p>
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grids: Field Officers */}
          <div>
            <h3 className="font-heading font-bold text-lg text-slate-800 dark:text-slate-200 mb-8 border-l-4 border-sky-500 pl-3">
              Field Operations & Officers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {fieldStaff.map((member) => (
                <div key={member.id} className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row gap-5 items-center md:items-start text-center md:text-left">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-2xl object-cover shrink-0 border border-slate-100 dark:border-slate-800"
                  />
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white">{member.name}</h4>
                    <p className="text-xs text-sky-500 font-bold uppercase tracking-wider font-manrope">{member.role}</p>
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

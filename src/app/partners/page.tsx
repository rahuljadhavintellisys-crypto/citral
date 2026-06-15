"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, Send, CheckCircle2, Loader2, Sparkles, Building2 } from "lucide-react";
import { partners } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const partnerSchema = z.object({
  orgName: z.string().min(2, "Organization name must be at least 2 characters"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Please enter a valid contact number"),
  allianceType: z.enum(["UN Agency", "NGO", "Government", "Corporate CSR", "Strategic Partner"]),
  proposal: z.string().min(10, "Please outline your proposal details (min 10 characters)"),
});

type PartnerFormInput = z.infer<typeof partnerSchema>;

export default function PartnersPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<PartnerFormInput>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      allianceType: "NGO"
    }
  });

  const onSubmit = async (_data: PartnerFormInput) => {
    setLoading(true);
    // Mock API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  const categories = ["UN Agency", "NGO", "Government", "Corporate"];

  return (
    <div className="flex flex-col flex-1 bg-white dark:bg-slate-950 font-sans">
      
      {/* Banner */}
      <section className="relative bg-slate-950 py-24 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-950/40" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
          <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-400 font-manrope">
            Our Network
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            Partners & Alliances
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-355 max-w-xl leading-relaxed">
            Collaborating with UN agencies, international development divisions, and corporate CSR offices to maximize grassroots humanitarian impact.
          </p>
        </div>
      </section>

      {/* Grid of Partners */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 font-manrope flex items-center justify-center gap-1.5">
              <Handshake className="w-4 h-4" />
              Trusted Network
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Our Active Partners & Collaborators
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mx-auto mt-4 rounded-full" />
          </div>

          {/* Categorized Partner Grids */}
          <div className="space-y-16">
            {categories.map((cat) => {
              const list = partners.filter(p => p.category === cat);
              return (
                <div key={cat} className="space-y-6">
                  <h3 className="font-heading font-bold text-lg text-slate-800 dark:text-slate-200 border-l-4 border-sky-400 pl-3">
                    {cat} Alliances
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {list.map((partner) => (
                      <div 
                        key={partner.id} 
                        className="bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:border-emerald-500/20 hover:shadow-lg transition-all duration-300 group"
                      >
                        <Building2 className="w-8 h-8 text-slate-400 group-hover:text-emerald-500 transition-colors mb-3" />
                        <span className="font-heading font-extrabold text-sm text-slate-700 dark:text-slate-350 font-manrope">
                          {partner.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collaboration Intake Form Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/10 border-t border-slate-100 dark:border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Info side (Grid: 5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-manrope flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-emerald-500/10" />
                  Intake Center
                </span>
                <h2 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Establish a Strategic Partnership
                </h2>
                <div className="w-12 h-1 bg-emerald-500 mt-3 rounded-full" />
              </div>
              
              <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                We accept collaboration requests from registered NGOs, corporate philanthropic entities, academic institutions, and government sectors.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center text-emerald-600 shrink-0 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">CSR Opportunities</h4>
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Direct CSR reporting with audited financial indicators and project metrics.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center text-emerald-600 shrink-0 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">Field Operations Coordination</h4>
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Joint logistical and human resources support on the ground in Isingiro.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center text-emerald-650 shrink-0 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">Compliance & Transparency</h4>
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Audited programmatic reviews, monitoring data, and community reports.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form side (Grid: 7 cols) */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Org Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase font-manrope">Organization Name</label>
                        <input
                          type="text"
                          placeholder="e.g. UNHCR East Africa"
                          {...register("orgName")}
                          className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-green transition-colors text-slate-800 dark:text-slate-100"
                        />
                        {errors.orgName && <span className="text-[10px] text-red-500 font-bold">{errors.orgName.message}</span>}
                      </div>

                      {/* Contact Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase font-manrope">Contact Representative</label>
                        <input
                          type="text"
                          placeholder="e.g. Sarah Connor"
                          {...register("contactName")}
                          className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-green transition-colors text-slate-800 dark:text-slate-100"
                        />
                        {errors.contactName && <span className="text-[10px] text-red-500 font-bold">{errors.contactName.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase font-manrope">Email Address</label>
                        <input
                          type="email"
                          placeholder="e.g. contact@domain.org"
                          {...register("email")}
                          className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-green transition-colors text-slate-800 dark:text-slate-100"
                        />
                        {errors.email && <span className="text-[10px] text-red-500 font-bold">{errors.email.message}</span>}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase font-manrope">Phone Number</label>
                        <input
                          type="text"
                          placeholder="e.g. +256 700 000 000"
                          {...register("phone")}
                          className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-green transition-colors text-slate-800 dark:text-slate-100"
                        />
                        {errors.phone && <span className="text-[10px] text-red-500 font-bold">{errors.phone.message}</span>}
                      </div>
                    </div>

                    {/* Alliance Type */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase font-manrope">Alliance Category</label>
                      <select
                        {...register("allianceType")}
                        className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-green transition-colors text-slate-800 dark:text-slate-100 font-manrope font-semibold"
                      >
                        <option value="UN Agency">UN Agency</option>
                        <option value="NGO">Non-Governmental Organization (NGO)</option>
                        <option value="Government">Government / Local Administration</option>
                        <option value="Corporate CSR">Corporate CSR Collaboration</option>
                        <option value="Strategic Partner">Strategic Global Partner</option>
                      </select>
                      {errors.allianceType && <span className="text-[10px] text-red-500 font-bold">{errors.allianceType.message}</span>}
                    </div>

                    {/* Proposal Details */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase font-manrope">Proposal Scope Summary</label>
                      <textarea
                        rows={4}
                        placeholder="Detail your program objectives, target outputs, and requested coordination mechanisms..."
                        {...register("proposal")}
                        className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-green transition-colors text-slate-800 dark:text-slate-100"
                      />
                      {errors.proposal && <span className="text-[10px] text-red-500 font-bold">{errors.proposal.message}</span>}
                    </div>

                    {/* Submit */}
                    <Button 
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary-green hover:bg-emerald-800 text-white rounded-xl py-6 font-manrope font-bold text-sm shadow-md flex items-center justify-center gap-2 mt-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing Application...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-emerald-300" />
                          Submit Partnership Proposal
                        </>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center p-8 gap-5 min-h-[400px]"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-10 h-10 animate-bounce" />
                    </div>
                    <h3 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">
                      Proposal Received!
                    </h3>
                    <p className="font-sans text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                      Thank you for submitting your partnership query. Our Executive Director, Dr. Alex Magomu, and the operations team will audit the proposal and reach out within 3 business days.
                    </p>
                    <Button 
                      onClick={() => setSubmitted(false)} 
                      variant="outline" 
                      className="border-slate-200 hover:bg-slate-50 rounded-xl font-manrope text-xs font-semibold mt-4 text-slate-700 dark:text-slate-350"
                    >
                      Submit Another Proposal
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

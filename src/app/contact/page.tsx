"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Loader2, 
  Map
} from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormInput = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormInput) => {
    setLoading(true);
    // Mock API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="flex flex-col flex-1 bg-white dark:bg-slate-950 font-sans">
      
      {/* Banner */}
      <section className="relative bg-slate-950 py-24 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-950/40" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
          <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-400 font-manrope">
            Connect
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            Contact Our Team
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-355 max-w-xl leading-relaxed">
            Reach out directly to our headquarters in Isingiro or connect with our field operations coordinators.
          </p>
        </div>
      </section>

      {/* Main Grid: Form, Info, and Map */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Coordinates & Social Side (Grid: 5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-manrope">
                  Office Info
                </span>
                <h2 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                  How to Find Us
                </h2>
                <div className="w-12 h-1 bg-emerald-500 mt-3 rounded-full" />
              </div>

              {/* Coordinates Cards */}
              <div className="space-y-4">
                <div className="flex gap-4 p-5 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-emerald-600 shrink-0 shadow-inner">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">Headquarters Location</h4>
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Isingiro town council road, Isingiro District, Uganda (P.O. Box 03, Mbarara)</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-emerald-600 shrink-0 shadow-inner">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">Email Communications</h4>
                    <a href="mailto:citralug@gmail.com" className="font-sans text-xs text-emerald-600 dark:text-emerald-400 hover:underline">citralug@gmail.com</a>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-emerald-650 shrink-0 shadow-inner">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">Call/WhatsApp Desk</h4>
                    <a href="tel:+256776311235" className="font-sans text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600">+256 776 311 235</a>
                    <a href="tel:+256705172212" className="font-sans text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600">+256 705 172 212</a>
                    <span className="text-[10px] text-slate-400 font-semibold font-manrope mt-1">Mon-Fri • 8:00 AM - 5:00 PM EAT</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500 font-manrope">Follow Our Updates</h4>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-emerald-600 dark:bg-slate-900 text-slate-500 hover:text-white flex items-center justify-center transition-colors">
                    <FaFacebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-emerald-600 dark:bg-slate-900 text-slate-500 hover:text-white flex items-center justify-center transition-colors">
                    <FaTwitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-emerald-600 dark:bg-slate-900 text-slate-500 hover:text-white flex items-center justify-center transition-colors">
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-emerald-600 dark:bg-slate-900 text-slate-500 hover:text-white flex items-center justify-center transition-colors">
                    <FaInstagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Inquiry Form (Grid: 7 cols) */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2">Send an Inquiry</h3>
                      <p className="font-sans text-xs text-slate-500 dark:text-slate-400">Fill out the fields below, and our administrative officers will route it to the correct department.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase font-manrope">Full Name</label>
                        <input
                          type="text"
                          placeholder="e.g. John Doe"
                          {...register("fullName")}
                          className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-green text-slate-800 dark:text-slate-101"
                        />
                        {errors.fullName && <span className="text-[10px] text-red-500 font-bold">{errors.fullName.message}</span>}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase font-manrope">Email Address</label>
                        <input
                          type="email"
                          placeholder="e.g. john@domain.com"
                          {...register("email")}
                          className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-green text-slate-800 dark:text-slate-101"
                        />
                        {errors.email && <span className="text-[10px] text-red-500 font-bold">{errors.email.message}</span>}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase font-manrope">Subject</label>
                      <input
                        type="text"
                        placeholder="e.g. Donation inquiry, media request, project details"
                        {...register("subject")}
                        className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-green text-slate-800 dark:text-slate-101"
                      />
                      {errors.subject && <span className="text-[10px] text-red-500 font-bold">{errors.subject.message}</span>}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase font-manrope">Message Body</label>
                      <textarea
                        rows={5}
                        placeholder="Please write your detailed inquiry message here..."
                        {...register("message")}
                        className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-green text-slate-800 dark:text-slate-101"
                      />
                      {errors.message && <span className="text-[10px] text-red-500 font-bold">{errors.message.message}</span>}
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
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-emerald-300" />
                          Send Inquiry
                        </>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center p-8 gap-5 min-h-[350px]"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-10 h-10 animate-bounce" />
                    </div>
                    <h3 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">
                      Message Dispatched!
                    </h3>
                    <p className="font-sans text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                      Your inquiry has been logged. Our administrative team will review the scope and reply within 24-48 hours.
                    </p>
                    <Button 
                      onClick={() => setSubmitted(false)} 
                      variant="outline" 
                      className="border-slate-200 hover:bg-slate-50 rounded-xl font-manrope text-xs font-semibold mt-4 text-slate-700 dark:text-slate-350"
                    >
                      Send Another Inquiry
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Google Maps Placeholder */}
          <div className="mt-16 border border-slate-200/50 dark:border-slate-800/50 rounded-[40px] overflow-hidden bg-slate-50 dark:bg-slate-900 h-96 shadow-lg flex flex-col items-center justify-center text-center p-8 gap-4 relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')` }} />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white">Map Directory Placeholder</h3>
              <p className="font-sans text-xs text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
                CITRAL Headquarters: Isingiro town council road, Isingiro District, Uganda.<br />
                Postal Address: P.O. Box 03, Mbarara.<br />
                Coordinates: -0.7845° S, 30.8031° E
              </p>
              <span className="text-[10px] text-slate-450 uppercase tracking-widest font-bold font-manrope mt-2">
                [In a production build, this embeds a customized Google Maps IFrame API node]
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

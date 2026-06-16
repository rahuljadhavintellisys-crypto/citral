"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Flame, 
  Send,
  Loader2,
  CheckCircle2
} from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (_data: NewsletterForm) => {
    setLoading(true);
    // Mock API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const programsList = [
    { name: "Public Health Programs", href: "/programs#public-health" },
    { name: "SGBV Prevention & Gender Equity", href: "/programs#sgbv-prevention" },
    { name: "WASH (Clean Water & Hygiene)", href: "/programs#wash" },
    { name: "Climate-Smart Agriculture", href: "/programs#climate-smart-agriculture" },
    { name: "Environmental Restoration", href: "/programs#environmental-restoration" },
    { name: "Livelihood & Self-Reliance", href: "/programs#livelihood-development" },
  ];

  const quickLinks = [
    { name: "Who We Are", href: "/about" },
    { name: "Our Founder", href: "/about#founder" },
    { name: "Impact & Success Stories", href: "/impact" },
    { name: "News & Field Updates", href: "/news" },
    { name: "Strategic Partners", href: "/partners" },
    { name: "Get Involved / Volunteer", href: "/get-involved" },
    { name: "Contact & Location", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-green via-primary-green to-sky-blue flex items-center justify-center text-white shadow-lg">
                <Flame className="w-6 h-6 fill-white text-gold-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  CITRAL
                </span>
                <span className="text-[9px] uppercase tracking-wider font-semibold text-slate-400 -mt-1 font-manrope">
                  Community Initiative
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed font-sans mt-2">
              CITRAL is a grassroots humanitarian NGO dedicated to building healthier, self-reliant, and climate-resilient refugee and host communities in Isingiro District, Uganda.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-primary-green flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-200" aria-label="Facebook">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-primary-green flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-200" aria-label="Twitter">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-primary-green flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-primary-green flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-200" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-base text-white tracking-wide mb-6 uppercase border-l-4 border-sky-blue pl-3">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 font-sans">
                    <span className="text-sky-blue font-bold text-xs">→</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="font-heading font-bold text-base text-white tracking-wide mb-6 uppercase border-l-4 border-primary-green pl-3">
              Core Programs
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {programsList.map((prog) => (
                <li key={prog.name}>
                  <Link href={prog.href} className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 font-sans">
                    <span className="text-primary-green dark:text-emerald-500 font-bold text-xs">■</span> {prog.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contacts & Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-base text-white tracking-wide mb-6 uppercase border-l-4 border-gold-accent pl-3">
              Contact & Updates
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-400 mb-4 font-sans">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-accent shrink-0 mt-1" />
                <span>Isingiro town council road, Isingiro District, Uganda (P.O. Box 03, Mbarara)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-accent shrink-0" />
                <a href="mailto:citralug@gmail.com" className="hover:text-white transition-colors">citralug@gmail.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold-accent shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+256776311235" className="hover:text-white transition-colors">+256 776 311 235</a>
                  <a href="tel:+256705172212" className="hover:text-white transition-colors">+256 705 172 212</a>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-900">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-manrope">Newsletter Signup</h4>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-primary-green transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={loading || submitted}
                    className="absolute right-1 p-1.5 rounded-lg bg-primary-green text-white hover:bg-emerald-800 transition-colors disabled:bg-slate-800"
                  >
                    {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                  </button>
                </div>
                {errors.email && (
                  <span className="text-[10px] text-red-400 font-semibold">{errors.email.message}</span>
                )}
                {submitted && (
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-950" />
                    Subscribed successfully!
                  </span>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 mt-8 flex flex-col lg:flex-row items-center justify-between text-xs text-slate-500 font-manrope gap-6">
          <p className="text-center lg:text-left">© {new Date().getFullYear()} CITRAL. All rights reserved. Registered NGO in Uganda.</p>
          
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 bg-slate-900/50 hover:bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-900 shadow-inner transition-all duration-300 hover:border-slate-800/80">
            <span className="font-sans">Designed by team</span>
            <a 
              href="https://www.intellisysitsolutions.com/homepage" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-sky-400 via-emerald-400 to-sky-400 bg-[length:200%_auto] bg-clip-text text-transparent hover:bg-right transition-all duration-500 font-bold tracking-wide"
            >
              Intellisys
            </a>
          </div>

          <div className="flex gap-4 flex-wrap justify-center lg:justify-end">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Use</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Donor Transparency</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

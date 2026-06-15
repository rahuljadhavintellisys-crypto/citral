"use client";

import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, 
  Users, 
  HelpCircle, 
  DollarSign, 
  CheckCircle2, 
  Loader2, 
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Zod schema for Volunteer
const volunteerSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Please enter a valid contact number"),
  programInterest: z.string(),
  skills: z.string().min(5, "Please list a few of your skills or professional background"),
  motivation: z.string().min(10, "Please outline why you want to support CITRAL (min 10 characters)"),
});

type VolunteerFormInput = z.infer<typeof volunteerSchema>;

function GetInvolvedContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Set tab based on query param
  const [activeTab, setActiveTab] = useState("donate");

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && ["donate", "volunteer", "faq"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  // Donation states
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(100);
  const [customAmount, setCustomAmount] = useState("");
  const [donationProgram, setDonationProgram] = useState("all-programs");
  const [donating, setDonating] = useState(false);
  const [donationSubmitted, setDonationSubmitted] = useState(false);

  // Volunteer states
  const [volunteering, setVolunteering] = useState(false);
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<VolunteerFormInput>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      programInterest: "public-health"
    }
  });

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDonating(true);
    // Mock API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setDonating(false);
    setDonationSubmitted(true);
  };

  const handleVolunteerSubmit = async (_data: VolunteerFormInput) => {
    setVolunteering(true);
    // Mock API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setVolunteering(false);
    setVolunteerSubmitted(true);
    reset();
  };

  const donationAmounts = [25, 50, 100, 250, 500];

  const getFinalDonationValue = () => {
    if (selectedAmount === "custom") {
      return Number(customAmount) || 0;
    }
    return selectedAmount;
  };

  const faqs = [
    {
      q: "Where is Nakivale Refugee Settlement located?",
      a: "Nakivale is located in the Isingiro District in Southwest Uganda. It is one of the oldest refugee settlements in Africa, hosting over 150,000 refugees from DRC, Burundi, Rwanda, and Somalia."
    },
    {
      q: "Is CITRAL officially registered?",
      a: "Yes, CITRAL (Community Initiative to Transform Lives) is officially registered as a Non-Governmental Organization (NGO) with the National Bureau for Non-Governmental Organizations in Uganda."
    },
    {
      q: "How are CITRAL's donation funds spent?",
      a: "Over 85% of our funds go directly to program implementations: purchasing materials (seeds, piping, tools, sewing machines), medical outreach kits, and local construction. We maintain audited accounts to secure donor trust."
    },
    {
      q: "Can I volunteer on-site in Uganda?",
      a: "Yes, we accept on-site volunteers for durations ranging from 2 weeks to 6 months. On-site volunteers support agriculture workshops, health sensitization, and ICT teaching. Fill out the volunteer form, and our coordinators will reach out."
    },
    {
      q: "Do you support the local Ugandan host community as well?",
      a: "Yes. Our programming targets both refugees and vulnerable local host community households. This integrated approach fosters peace, collaboration, and shared resource sustainability."
    }
  ];

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
            Join Our Mission
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            Get Involved
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-355 max-w-xl leading-relaxed">
            Support our community-led transformations through financial donations, volunteering your time, or collaborating with us.
          </p>
        </div>
      </section>

      {/* Main Hub */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          
          <Tabs value={activeTab} onValueChange={(val) => { setActiveTab(val); router.replace(`/get-involved?tab=${val}`); }} className="max-w-4xl mx-auto">
            {/* Tabs List Headers */}
            <TabsList className="grid w-full grid-cols-3 h-12 bg-slate-50 dark:bg-slate-900 rounded-2xl p-1 mb-16 border border-slate-200/40 dark:border-slate-800">
              <TabsTrigger value="donate" className="rounded-xl font-heading font-bold h-full text-xs md:text-sm flex items-center justify-center gap-1.5 data-active:bg-primary-green data-active:text-white">
                <Heart className="w-4 h-4 fill-current shrink-0" />
                Donate
              </TabsTrigger>
              <TabsTrigger value="volunteer" className="rounded-xl font-heading font-bold h-full text-xs md:text-sm flex items-center justify-center gap-1.5 data-active:bg-primary-green data-active:text-white">
                <Users className="w-4 h-4 shrink-0" />
                Volunteer
              </TabsTrigger>
              <TabsTrigger value="faq" className="rounded-xl font-heading font-bold h-full text-xs md:text-sm flex items-center justify-center gap-1.5 data-active:bg-primary-green data-active:text-white">
                <HelpCircle className="w-4 h-4 shrink-0" />
                FAQ Guide
              </TabsTrigger>
            </TabsList>

            {/* TAB CONTENT: DONATION FLOW */}
            <TabsContent value="donate" className="bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-900 rounded-[36px] p-6 md:p-10 shadow-xl">
              <AnimatePresence mode="wait">
                {!donationSubmitted ? (
                  <motion.form
                    key="donate-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleDonationSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2">Secure Donor Portal</h3>
                      <p className="font-sans text-xs text-slate-500 dark:text-slate-400">100% of designated program funds support operations directly inside Nakivale Refugee Settlement.</p>
                    </div>

                    {/* Frequency selector */}
                    <div className="flex gap-2 p-1.5 bg-slate-100 dark:bg-slate-950 rounded-xl w-fit">
                      <button
                        type="button"
                        onClick={() => setFrequency("one-time")}
                        className={`px-4 py-2 text-xs font-bold rounded-lg transition-all font-manrope ${
                          frequency === "one-time" ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow" : "text-slate-500"
                        }`}
                      >
                        One-Time
                      </button>
                      <button
                        type="button"
                        onClick={() => setFrequency("monthly")}
                        className={`px-4 py-2 text-xs font-bold rounded-lg transition-all font-manrope ${
                          frequency === "monthly" ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow" : "text-slate-500"
                        }`}
                      >
                        Monthly Partner
                      </button>
                    </div>

                    {/* Amount Boxes Grid */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase font-manrope">Select Amount (USD)</label>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                        {donationAmounts.map((amt) => (
                          <button
                            type="button"
                            key={amt}
                            onClick={() => setSelectedAmount(amt)}
                            className={`py-3 text-sm font-extrabold rounded-xl border font-manrope transition-all ${
                              selectedAmount === amt
                                ? "bg-primary-green border-primary-green text-white shadow shadow-emerald-950/20"
                                : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-300 hover:bg-slate-100"
                            }`}
                          >
                            ${amt}
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={() => setSelectedAmount("custom")}
                          className={`py-3 text-sm font-extrabold rounded-xl border font-manrope transition-all ${
                            selectedAmount === "custom"
                              ? "bg-primary-green border-primary-green text-white shadow"
                              : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-300 hover:bg-slate-100"
                          }`}
                        >
                          Custom
                        </button>
                      </div>
                    </div>

                    {/* Custom Amount Field */}
                    {selectedAmount === "custom" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="relative flex items-center max-w-sm"
                      >
                        <input
                          type="number"
                          placeholder="Enter custom amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:border-primary-green text-slate-800 dark:text-slate-100"
                        />
                        <DollarSign className="w-4 h-4 text-slate-450 absolute left-3 pointer-events-none" />
                      </motion.div>
                    )}

                    {/* Designated Program Selector */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase font-manrope">Designate Donation Support</label>
                      <select
                        value={donationProgram}
                        onChange={(e) => setDonationProgram(e.target.value)}
                        className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-green text-slate-800 dark:text-slate-100 font-manrope font-semibold"
                      >
                        <option value="all-programs">All Programs (General Overhead & Needs)</option>
                        <option value="public-health">Public Health Initiatives</option>
                        <option value="sgbv-prevention">SGBV Prevention & Support</option>
                        <option value="wash">WASH (Clean Water infrastructure)</option>
                        <option value="climate-smart-agriculture">Climate-Smart Agriculture</option>
                        <option value="environmental-restoration">Environmental Restoration</option>
                      </select>
                    </div>

                    {/* Credit Card / Payment Gateway placeholder */}
                    <div className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/80 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400">
                        <DollarSign className="w-5 h-5 text-slate-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-manrope text-xs font-bold text-slate-700 dark:text-slate-300">Audited Financial Portal</span>
                        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider font-manrope">Secure SSL Encryption • Visa, MasterCard, Paypal</span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={donating || getFinalDonationValue() <= 0}
                      className="w-full bg-primary-green hover:bg-emerald-800 text-white rounded-xl py-6 font-manrope font-bold text-sm shadow-md flex items-center justify-center gap-2 mt-2"
                    >
                      {donating ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing Payment Gateway...
                        </>
                      ) : (
                        <>
                          <Heart className="w-4 h-4 fill-emerald-350 text-emerald-350" />
                          Complete Donation of ${getFinalDonationValue()}
                        </>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="donate-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center p-8 gap-5 min-h-[350px]"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-10 h-10 animate-bounce" />
                    </div>
                    <h3 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">
                      Thank You for Your Generosity!
                    </h3>
                    <p className="font-sans text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                      Your mock donation of <strong>${getFinalDonationValue()}</strong> has been processed successfully. An automated tax receipt has been sent to your simulated email address.
                    </p>
                    <Button 
                      onClick={() => { setDonationSubmitted(false); setSelectedAmount(100); }} 
                      variant="outline" 
                      className="border-slate-200 hover:bg-slate-50 rounded-xl font-manrope text-xs font-semibold mt-4 text-slate-700 dark:text-slate-350"
                    >
                      Back to Donor Hub
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>

            {/* TAB CONTENT: VOLUNTEER FORM */}
            <TabsContent value="volunteer" className="bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-900 rounded-[36px] p-6 md:p-10 shadow-xl">
              <AnimatePresence mode="wait">
                {!volunteerSubmitted ? (
                  <motion.form
                    key="volunteer-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(handleVolunteerSubmit)}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2">Volunteer Registration Form</h3>
                      <p className="font-sans text-xs text-slate-500 dark:text-slate-400">Apply to collaborate in the field or support our operations divisions remotely.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase font-manrope">Full Name</label>
                        <input
                          type="text"
                          placeholder="e.g. John Doe"
                          {...register("fullName")}
                          className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-green text-slate-800 dark:text-slate-105"
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
                          className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-green text-slate-800 dark:text-slate-105"
                        />
                        {errors.email && <span className="text-[10px] text-red-500 font-bold">{errors.email.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase font-manrope">Phone Number</label>
                        <input
                          type="text"
                          placeholder="e.g. +256 700 000 000"
                          {...register("phone")}
                          className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-green text-slate-800 dark:text-slate-105"
                        />
                        {errors.phone && <span className="text-[10px] text-red-500 font-bold">{errors.phone.message}</span>}
                      </div>

                      {/* Program Interest */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase font-manrope">Program Area Interest</label>
                        <select
                          {...register("programInterest")}
                          className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-green text-slate-800 dark:text-slate-101 font-manrope font-semibold"
                        >
                          <option value="public-health">Public Health Initiatives</option>
                          <option value="sgbv-prevention">SGBV Prevention & Advocacy</option>
                          <option value="wash">WASH Sanitation Systems</option>
                          <option value="climate-smart-agriculture">Climate-Smart Agriculture</option>
                          <option value="environmental-restoration">Environmental Restoration</option>
                          <option value="livelihoods">Livelihood & Economic Development</option>
                        </select>
                        {errors.programInterest && <span className="text-[10px] text-red-500 font-bold">{errors.programInterest.message}</span>}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase font-manrope">Skills Summary / Professional Background</label>
                      <input
                        type="text"
                        placeholder="e.g. Medical nursing, permaculture design, tailoring instruction, accounting"
                        {...register("skills")}
                        className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-green text-slate-800 dark:text-slate-105"
                      />
                      {errors.skills && <span className="text-[10px] text-red-500 font-bold">{errors.skills.message}</span>}
                    </div>

                    {/* Motivation */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase font-manrope">Why do you want to volunteer with CITRAL?</label>
                      <textarea
                        rows={4}
                        placeholder="Provide details about your objectives, availability, and motivation to coordinate with refugee communities..."
                        {...register("motivation")}
                        className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-green text-slate-800 dark:text-slate-105"
                      />
                      {errors.motivation && <span className="text-[10px] text-red-500 font-bold">{errors.motivation.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={volunteering}
                      className="w-full bg-primary-green hover:bg-emerald-800 text-white rounded-xl py-6 font-manrope font-bold text-sm shadow-md flex items-center justify-center gap-2 mt-2"
                    >
                      {volunteering ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting Registration...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-emerald-300" />
                          Apply to Volunteer
                        </>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="volunteer-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center p-8 gap-5 min-h-[350px]"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-10 h-10 animate-bounce" />
                    </div>
                    <h3 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">
                      Application Received!
                    </h3>
                    <p className="font-sans text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                      Thank you for applying to volunteer. Our coordination officers will verify the details, review available on-site/remote tasks, and contact you via email shortly.
                    </p>
                    <Button 
                      onClick={() => setVolunteerSubmitted(false)} 
                      variant="outline" 
                      className="border-slate-200 hover:bg-slate-50 rounded-xl font-manrope text-xs font-semibold mt-4 text-slate-700 dark:text-slate-350"
                    >
                      Submit Another Application
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>

            {/* TAB CONTENT: FAQs GUIDE */}
            <TabsContent value="faq" className="bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-900 rounded-[36px] p-6 md:p-10 shadow-xl flex flex-col gap-6">
              <div>
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2">Frequently Asked Questions</h3>
                <p className="font-sans text-xs text-slate-500 dark:text-slate-400">Answers to common inquiries regarding our local registration, field structures, and operations.</p>
              </div>

              <Accordion className="w-full divide-y divide-slate-200/50 dark:divide-slate-800">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-none py-2">
                    <AccordionTrigger className="font-heading font-bold text-sm text-slate-800 dark:text-slate-200 text-left hover:text-emerald-600 hover:no-underline flex items-center justify-between">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed pt-2">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Callout support */}
              <div className="mt-6 p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="flex flex-col gap-1">
                  <span className="font-manrope text-xs font-bold text-slate-800 dark:text-slate-200">Still have questions?</span>
                  <span className="text-[11px] text-slate-400 font-sans leading-relaxed">Reach out directly to our coordinates and we will reply within 24 hours.</span>
                </div>
                <Link href="/contact">
                  <Button className="bg-primary-green hover:bg-emerald-800 text-white rounded-xl text-xs font-bold py-3.5">
                    Contact Office
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>

        </div>
      </section>

    </div>
  );
}

export default function GetInvolvedPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-1 items-center justify-center min-h-[500px]">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
      </div>
    }>
      <GetInvolvedContent />
    </Suspense>
  );
}

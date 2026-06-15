import HomeHero from "@/components/sections/HomeHero";
import ImpactCounter from "@/components/sections/ImpactCounter";
import ProgramCards from "@/components/sections/ProgramCards";
import FounderSection from "@/components/sections/FounderSection";
import WhyChoose from "@/components/sections/WhyChoose";
import SuccessStories from "@/components/sections/SuccessStories";
import GallerySection from "@/components/sections/GallerySection";
import PartnerSection from "@/components/sections/PartnerSection";
import HomeCTA from "@/components/sections/HomeCTA";

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "CITRAL - Community Initiative to Transform Lives",
    "url": "https://citral-uganda.org",
    "logo": "https://citral-uganda.org/images/logo.png",
    "description": "Grassroots humanitarian and development organization in Nakivale Refugee Settlement, Uganda. Focusing on public health, WASH, agricultural resilience, and environmental conservation.",
    "founder": {
      "@type": "Person",
      "name": "Dr. Alex Magomu Alfred",
      "jobTitle": "Founder & Executive Director"
    },
    "foundingDate": "2016",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nakivale Refugee Settlement, Isingiro District",
      "addressRegion": "Isingiro",
      "addressCountry": "Uganda"
    },
    "knowsAbout": ["Public Health", "WASH", "SGBV Prevention", "Climate-Smart Agriculture", "Refugee Assistance"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <HomeHero />
      <ImpactCounter />
      <ProgramCards />
      <FounderSection />
      <WhyChoose />
      <SuccessStories />
      <GallerySection />
      <PartnerSection />
      <HomeCTA />
    </>
  );
}

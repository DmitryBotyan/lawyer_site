import { Hero } from "@/components/home/hero";
import { ServicesPreview } from "@/components/home/services-preview";
import { Advantages } from "@/components/home/advantages";
import { Process } from "@/components/home/process";
import { TeamPreview } from "@/components/home/team-preview";
import { Testimonials } from "@/components/home/testimonials";
import { QuoteBlock } from "@/components/home/quote-block";
import { CtaSection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Advantages />
      <Process />
      <TeamPreview />
      <Testimonials />
      <QuoteBlock />
      <CtaSection />
    </>
  );
}

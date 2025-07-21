import Hero from "../features/landing/Hero/Hero";
import Subheadline from "../features/landing/Subheadline/Subheadline";
import Features from "../features/landing/Features/Features";
import Testimonials from "../features/landing/Testimonials/Testimonials";
import FAQs from "../features/landing/FAQs/FAQs";
import CTA from "../features/landing/CTA/CTA";

function LandingPage() {
  return (
    <div>
      <Hero />
      <Subheadline />
      <Features />
      <Testimonials />
      <FAQs />
      <CTA />
    </div>
  );
}

export default LandingPage;

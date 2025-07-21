import Hero from "../ui/Hero/Hero";
import Subheadline from "../ui/Subheadline/Subheadline";
import Features from "../ui/Features/Features";
import Testimonials from "../ui/Testimonials/Testimonials";
import FAQs from "../ui/FAQs/FAQs";
import CTA from "../ui/CTA/CTA";

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

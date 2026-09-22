import QuoteModalProvider from "./QuoteModalProvider";
import Hero from "./Hero";
import ReviewsSection from "./ReviewsSection";
import WorriesSection from "./WorriesSection";
import SolutionsSection from "./SolutionsSection";
import ToursSection from "./ToursSection";
import VideoBannerSection from "./VideoBannerSection";
import RealProblemsSection from "./RealProblemsSection";
import SpecialOfferSection from "./SpecialOfferSection";
import HowItWorksSection from "./HowItWorksSection";
import WhyUsSection from "./WhyUsSection";
import AudienceSection from "./AudienceSection";
import AboutSection from "./AboutSection";
import FaqSection from "./FaqSection";
import FinalCtaSection from "./FinalCtaSection";
import Footer from "./Footer";
import StickyMobileBar from "./StickyMobileBar";

export default function KashmirLandingPage() {
  return (
    <QuoteModalProvider>
      <main className="pb-14 sm:pb-0">
        <Hero />
        <ReviewsSection />
        <WorriesSection />
        <SolutionsSection />
        <ToursSection />
        <VideoBannerSection />
        <RealProblemsSection />
        <SpecialOfferSection />
        <HowItWorksSection />
        <WhyUsSection />
        <AudienceSection />
        <AboutSection />
        <FaqSection />
        <FinalCtaSection />
        <Footer />
      </main>
      <StickyMobileBar />
    </QuoteModalProvider>
  );
}

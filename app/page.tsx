import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </main>
  );
} 
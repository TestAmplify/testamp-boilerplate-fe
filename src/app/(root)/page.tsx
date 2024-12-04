import CoursesSection from "@/components/CourseProjectsSection/Courses";
import Hero from "@/components/hero";
import PartnerCompanies from "@/components/partner-companies";
import OfficeSection from "@/components/officeSection";
import AiLearningSection from "@/components/aiLearningSection";
import ExpertSection from "@/components/expertSection";
import SuccessStorySection from "@/components/SuccessStoriesSection/successStorySection";
import CtaSection from "@/components/CtaSection/ctaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnerCompanies />
      <CoursesSection />
      <AiLearningSection />
      <OfficeSection />
      <ExpertSection />
      <SuccessStorySection />
      <CtaSection />
    </>
  );
}

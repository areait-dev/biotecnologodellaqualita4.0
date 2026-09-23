import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionNav from "@/components/SectionNav";
import WorkplaceSection from "@/components/WorkplaceSection";
import QualificationSection from "@/components/QualificationSection";
import InternshipSection from "@/components/InternshipSection";
import AccessSection from "@/components/AccessSection";
import LocationSection from "@/components/LocationSection";
import StudyPlanSection from "@/components/StudyPlanSection";
import TeachingSection from "@/components/TeachingSection";
import MaterialSection from "@/components/MaterialSection";
import CandidateSection from "@/components/CandidateSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 pt-10 xl:pt-14">
        <div className="xl:flex xl:items-start xl:justify-between xl:gap-16">
          <SectionNav />
          <div className="min-w-0 xl:order-1 xl:w-full xl:max-w-3xl">
            <WorkplaceSection />
            <QualificationSection />
            <InternshipSection />
            <AccessSection />
            <LocationSection />
            <TeachingSection />
            <StudyPlanSection />
            <MaterialSection />
          </div>
        </div>
        <CandidateSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

import { TravelNavbar } from "@/components/travel/travel-navbar";
import { LandingHero } from "@/components/travel/landing-hero";
import { Footer } from "@/components/travel/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <TravelNavbar />
      <LandingHero />
      <Footer />
    </div>
  );
}

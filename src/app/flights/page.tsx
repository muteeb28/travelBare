import { TravelNavbar } from "@/components/travel/travel-navbar";
import FlightSection from "@/components/FlightSection";
import { Footer } from "@/components/travel/footer";
import { HeroScrollDemo } from "@/components/flights/HeroScrollDemo";

export default function FlightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <TravelNavbar />

      {/* Hero Scroll Animation */}
      <HeroScrollDemo />

      {/* Flight Coming Soon Section */}
      <FlightSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

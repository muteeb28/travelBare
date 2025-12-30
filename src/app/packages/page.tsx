import { HeroSlider } from "@/components/travel/hero-slider";
import { TravelNavbar } from "@/components/travel/travel-navbar";
import { KashmirFocusCards } from "@/components/travel/kashmir-focus-cards";
import { KashmirTravelGuide } from "@/components/travel/kashmir-travel-guide";
import { ExploreKashmir } from "@/components/travel/explore-kashmir";
import { Footer } from "@/components/travel/footer";

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-background">
      <TravelNavbar />

      <div id="hero">
        <HeroSlider />
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div id="kashmir-packages" className="p-8 bg-card rounded-lg border">
            <h2 className="text-3xl font-bold mb-6">Kashmir Packages</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Experience the breathtaking beauty of Kashmir with our specially curated tour packages.
              From serene houseboat stays on Dal Lake to scenic mountain valleys, we offer complete
              travel experiences with comfortable accommodations, delicious meals, and guided sightseeing.
            </p>
            <KashmirFocusCards />
          </div>

          <div id="travel-guide" className="p-8 bg-card rounded-lg border">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold">Top 10 Offbeat Kashmir Places</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Skip the usual circuit. Discover alpine lakes, hidden valleys, and quiet villages that
                stay under the radar yet deliver Kashmir at its purest.
              </p>
            </div>
            <KashmirTravelGuide />
          </div>

          <ExploreKashmir />
        </div>
      </main>

      <Footer />
    </div>
  );
}

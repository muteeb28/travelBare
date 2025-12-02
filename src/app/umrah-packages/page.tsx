import { HeroSlider } from "@/components/travel/hero-slider";
import { TravelNavbar } from "@/components/travel/travel-navbar";
import { UmrahFocusCards } from "@/components/travel/umrah-focus-cards";
import { MakkahMadinahZiyarat } from "@/components/travel/makkah-madinah-ziyarat";
import { ExploreUmrah2025 } from "@/components/travel/explore-umrah-2025";
import { AboutUs } from "@/components/travel/about-us";
import { Footer } from "@/components/travel/footer";

export default function UmrahPackages() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <TravelNavbar />

      {/* Hero Section with Image Slider */}
      <div id="home">
        <HeroSlider />
      </div>

      {/* Umrah Packages Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          {/* Main Umrah Packages Section */}
          <div id="umrah-packages" className="p-8 bg-card rounded-lg border">
            <h2 className="text-3xl font-bold mb-6">
              Premium Umrah Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Embark on the sacred journey of a lifetime with our comprehensive Umrah packages.
              We provide premium accommodations, expert spiritual guidance, and complete support
              throughout your pilgrimage to the holy cities of Mecca and Medina.
            </p>

            {/* Interactive Focus Cards for Packages */}
            <UmrahFocusCards />
          </div>

          {/* Makkah and Madinah Ziyarat Section */}
          <div id="ziyarat" className="p-8 bg-card rounded-lg border">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold">Sacred Ziyarat Tours</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Embark on a spiritual journey through the sacred sites of Makkah and Madinah.
                Our guided Ziyarat tours will take you to the most blessed locations where
                Islamic history was made and where the hearts find peace.
              </p>
            </div>
            <MakkahMadinahZiyarat />
          </div>

          {/* Explore Umrah 2025 Section */}
          <ExploreUmrah2025 />

          {/* About Us Section */}
          <AboutUs />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
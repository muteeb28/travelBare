"use client";
import { TravelNavbar } from "@/components/travel/travel-navbar";
import { useParams } from "next/navigation";
import Link from "next/link";

const blogPosts: Record<string, any> = {
  "top-offbeat-locations-kashmir-2025": {
    title: "Top Offbeat Locations in Kashmir (2025 Guide)",
    image: "https://images.pexels.com/photos/19656086/pexels-photo-19656086.jpeg",
    date: "Jan 2025",
    author: "TravelBare",
    category: "Kashmir",
    readTime: "8 min read",
    content: `
      <p class="text-lg mb-6">Kashmir is full of surprises. Beyond the tourist spots lie untouched valleys, quiet villages, and unexplored meadows that show you the real “Heaven on Earth.” Here are the top offbeat places you MUST explore in 2025.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 1. Gurez Valley</h2>
      <p class="mb-2"><strong>Distance:</strong> 123 km from Srinagar</p>
      <p class="mb-4"><strong>Highlight:</strong> Habba Khatoon Peak, Tulail Valley, wooden homes, Kishanganga River. Remote, stunning, peaceful—zero commercialization.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 2. Bangus Valley</h2>
      <p class="mb-4">Massive untouched meadows. Feels like Switzerland without the crowds.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 3. Warwan Valley</h2>
      <p class="mb-4"><strong>Best for:</strong> Adventure lovers. Glacial rivers, high-altitude meadows. Often called “the most beautiful valley you’ve never heard of.”</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 4. Lolab Valley</h2>
      <p class="mb-4"><strong>Best for:</strong> Forest lovers. Pine forests and untouched rivers for dreamy nature photography.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 5. Aharbal + Kousarnag</h2>
      <p class="mb-4">Aharbal is Kashmir’s “Niagara Falls”; Kousarnag is an untouched alpine lake for trekkers.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 6. Karnah (Sadhna Top)</h2>
      <p class="mb-4">Snow walls and border-village culture—postcard-perfect landscapes.</p>

      <div class="mt-8 p-4 border rounded-lg bg-amber-50 text-amber-900">
        <p class="font-semibold">✨ Plan Your Kashmir Trip With TravelBare</p>
        <p>Safest routes • Local guides • Private cab • Hotels included</p>
        <p>📞 Call: 6006031751</p>
        <p>⭐ Book now and explore offbeat Kashmir like a local.</p>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4">FAQ</h2>
      <p class="mb-2"><strong>Q1. Which is the most beautiful offbeat place in Kashmir?</strong><br/>Gurez Valley is considered the most stunning offbeat destination due to its untouched mountains, wooden houses, and pristine river.</p>
      <p class="mb-2"><strong>Q2. Is Kashmir safe for offbeat travel?</strong><br/>Yes, especially with local operators like TravelBare, who provide verified guides, safe routes, and real-time support.</p>
      <p class="mb-2"><strong>Q3. When is the best time to visit offbeat Kashmir?</strong><br/>May to October for meadows; December to February for snow lovers.</p>
      <p class="mb-2"><strong>Q4. Which offbeat place has the best views?</strong><br/>Bangus Valley offers massive meadows and dramatic mountain views unlike anywhere else.</p>
    `
  },
  "top-hike-tours-kashmir-2025": {
    title: "Top Hike Tours in Kashmir (2025 Guide)",
    image: "https://images.pexels.com/photos/7979146/pexels-photo-7979146.jpeg",
    date: "Jan 2025",
    author: "TravelBare",
    category: "Trekking",
    readTime: "7 min read",
    content: `
      <p class="text-lg mb-6">Explore the best trek routes in Kashmir—perfect for beginners to pros.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 1. Kashmir Great Lakes (KGL)</h2>
      <p class="mb-2">Duration: 7–8 days | Difficulty: Moderate–Hard</p>
      <p class="mb-4">Seven magical alpine lakes in one route.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 2. Tarsar–Marsar</h2>
      <p class="mb-2">Duration: 4–6 days | Difficulty: Moderate</p>
      <p class="mb-4">Perfect first multi-day trek.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 3. Kousarnag (Aharbal Route)</h2>
      <p class="mb-4">Duration: 2 days | Highlight: Turquoise glacier lake.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 4. Naranag–Gangbal</h2>
      <p class="mb-4">Great for monsoon & post-monsoon.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 5. Lidderwat–Sheeshnag Trail</h2>
      <p class="mb-4">Beginner-friendly; great for families.</p>

      <div class="mt-8 p-4 border rounded-lg bg-amber-50 text-amber-900">
        <p class="font-semibold">🌄 Book Your Kashmir Trek With TravelBare</p>
        <p>Certified trek leaders • Gear • Camps • Meals included</p>
        <p>📞 6006031751 | ✔ Safe • Guided • Fully organized</p>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4">FAQ</h2>
      <p class="mb-2"><strong>Q1. What is the best trek in Kashmir?</strong><br/>Kashmir Great Lakes is iconic for multiple alpine lakes and dramatic landscapes.</p>
      <p class="mb-2"><strong>Q2. Can beginners trek in Kashmir?</strong><br/>Yes—routes like Lidderwat and Doodhpathri trails are great for beginners.</p>
      <p class="mb-2"><strong>Q3. Best month for trekking in Kashmir?</strong><br/>July to September.</p>
    `
  },
  "top-foods-to-try-in-kashmir-2025": {
    title: "Top Foods to Try in Kashmir",
    image: "https://images.pexels.com/photos/3243027/pexels-photo-3243027.jpeg",
    date: "Jan 2025",
    author: "TravelBare",
    category: "Food",
    readTime: "6 min read",
    content: `
      <p class="text-lg mb-6">Discover the most authentic Kashmiri foods including Wazwan, Harissa, Kahwa, trout, Yakhni, Rogan Josh, and more.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 1. Wazwan</h2>
      <p class="mb-4">The royal multi-course feast.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 2. Harissa</h2>
      <p class="mb-4">Winter delicacy.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 3. Kahwa</h2>
      <p class="mb-4">Saffron green tea, perfect all day.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 4. Goshtaba & Rista</h2>
      <p class="mb-4">Iconic Wazwan meatballs.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 5. Trout Fish</h2>
      <p class="mb-4">Fresh from Pahalgam rivers.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 6. Nadur Yakhni</h2>
      <p class="mb-4">Lotus stem curry with yogurt.</p>

      <div class="mt-8 p-4 border rounded-lg bg-amber-50 text-amber-900">
        <p class="font-semibold">🍛 Want to Try Kashmir’s Best Foods?</p>
        <p>TravelBare arranges food tours & authentic Wazwan dinners.</p>
        <p>📞 6006031751</p>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4">FAQ</h2>
      <p class="mb-2"><strong>Q1. What is Kashmir’s most famous food?</strong><br/>Wazwan, a royal multi-course feast.</p>
      <p class="mb-2"><strong>Q2. Best street food in Kashmir?</strong><br/>Harissa, Masala tchot, roadside Kahwa.</p>
      <p class="mb-2"><strong>Q3. Best time to try Harissa?</strong><br/>December to February.</p>
    `
  },
  "top-foods-to-try-during-umrah": {
    title: "Top Foods to Try During Umrah",
    image: "https://images.pexels.com/photos/7038224/pexels-photo-7038224.jpeg",
    date: "Jan 2025",
    author: "TravelBare",
    category: "Umrah",
    readTime: "5 min read",
    content: `
      <p class="text-lg mb-6">Find the best foods to eat during Umrah — from Mandi to Shawarma, Mutabbaq, Kabsa, dates, Labneh bowls, and more.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 1. Mandi</h2>
      <p class="mb-4">Light & aromatic.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 2. Kabsa</h2>
      <p class="mb-4">Saudi national dish.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 3. Shawarma</h2>
      <p class="mb-4">Best quick meal during long days.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 4. Mutabbaq</h2>
      <p class="mb-4">Crispy, filling, flavorful.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 5. Labneh Bowls</h2>
      <p class="mb-4">Perfect breakfast.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">⭐ 6. Dates + Zamzam</h2>
      <p class="mb-4">Energy + hydration.</p>

      <div class="mt-8 p-4 border rounded-lg bg-amber-50 text-amber-900">
        <p class="font-semibold">🕋 Planning Umrah?</p>
        <p>TravelBare offers affordable Umrah packages with ground handling & food guidance.</p>
        <p>📞 6006031751</p>
      </div>

      <h2 class="text-2xl font-bold mt-10 mb-4">FAQ</h2>
      <p class="mb-2"><strong>Q1. What foods are best during Umrah?</strong><br/>Light meals like mandi, shawarma, labneh, fruits.</p>
      <p class="mb-2"><strong>Q2. Is food expensive in Makkah?</strong><br/>Budget, mid-range, and premium options are easily available.</p>
      <p class="mb-2"><strong>Q3. Can you get Indian/Pakistani food in Makkah?</strong><br/>Yes, very easily.</p>
    `
  },
};

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts[params.id as string];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <TravelNavbar />
        <div className="pt-32 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <Link href="/blogs" className="text-amber-600 hover:underline">
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TravelNavbar />

      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl">
            <span className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-p:mb-4 prose-p:text-neutral-700 dark:prose-p:text-neutral-300
            prose-a:text-amber-600 hover:prose-a:text-amber-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Back to Blogs */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <Link
            href="/blogs"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold"
          >
            ← Back to all blogs
          </Link>
        </div>
      </article>
    </div>
  );
}

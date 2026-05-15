export interface SideHustle {
  id: number;
  rank: string;
  title: string;
  tagline: string;
  image: string;
  earnings: string;
  difficulty: string;
  timeToStart: string;
  tags: string[];
  tagColors: string[];
  intro: string;
  whyItWorks: string[];
  howToStart: string[];
  proTip: string;
  realTalk: string;
}

export const sideHustles: SideHustle[] = [
  {
    id: 1,
    rank: "01",
    title: "Freelance Writing & Copywriting",
    tagline: "Turn your words into a money machine. Every business needs content — and they'll pay handsomely for it.",
    image: "/images/freelance-writing.jpg",
    earnings: "$2K – $10K/mo",
    difficulty: "Beginner-Friendly",
    timeToStart: "1–2 Weeks",
    tags: ["Remote", "Creative", "Scalable"],
    tagColors: ["bg-emerald-100 text-emerald-700", "bg-purple-100 text-purple-700", "bg-amber-100 text-amber-700"],
    intro: "Here's the truth nobody tells you: companies are desperate for good writers. We're talking blog posts, email sequences, website copy, social media captions — the list is endless. And here's the kicker: you don't need a degree in English. You need a laptop, an internet connection, and the willingness to learn what makes people click, read, and buy.",
    whyItWorks: [
      "Content marketing is a $600 billion industry and growing every year",
      "You can start with zero investment — literally just your brain and a Google Doc",
      "Rates scale fast: beginners earn $0.05/word, pros charge $1+/word",
      "Work from anywhere: your couch, a beach in Bali, a café in Paris",
      "Recurring clients mean predictable monthly income"
    ],
    howToStart: [
      "Pick a niche you're passionate about (finance, health, tech, SaaS — anything)",
      "Write 3 killer sample articles and publish them on Medium or your own blog",
      "Create profiles on Upwork, Fiverr, and Contently",
      "Cold-pitch 10 businesses per day with personalized emails",
      "Deliver exceptional work, ask for testimonials, raise your rates every 3 months"
    ],
    proTip: "The secret weapon? Learn SEO basics. Writers who understand search intent and keyword strategy can charge 2–3x more than general writers. Take a free SEO course, master it, and watch your inbox explode with offers.",
    realTalk: "Your first gig might pay $50 for a 1,000-word article. That's okay. Think of it as paid practice. Within 6 months of consistent effort, most freelance writers hit $3K–$5K/month. Within a year? The sky's the limit."
  },
  {
    id: 2,
    rank: "02",
    title: "E-Commerce & Dropshipping",
    tagline: "Build an online store without ever touching inventory. Welcome to the future of retail.",
    image: "/images/dropshipping.jpg",
    earnings: "$1K – $50K/mo",
    difficulty: "Moderate",
    timeToStart: "2–4 Weeks",
    tags: ["E-Commerce", "Passive Income", "High Ceiling"],
    tagColors: ["bg-blue-100 text-blue-700", "bg-green-100 text-green-700", "bg-red-100 text-red-700"],
    intro: "Imagine running a store that sells products worldwide — without a warehouse, without employees, without ever packing a single box. That's dropshipping. You find trending products, list them in your store, and when someone buys, the supplier ships directly to the customer. Your job? Marketing and customer experience. That's it.",
    whyItWorks: [
      "Global e-commerce will hit $8 trillion by 2027 — there's room for everyone",
      "No inventory risk: you only pay for products after customers buy them",
      "Automation tools handle orders, emails, and tracking for you",
      "You can test dozens of products with minimal upfront cost",
      "Once you find a winner, you can scale to six figures surprisingly fast"
    ],
    howToStart: [
      "Research trending niches using Google Trends, TikTok, and spy tools like Minea",
      "Set up a Shopify store (or use WooCommerce if you want more control)",
      "Source products from suppliers on AliExpress, CJDropshipping, or Spocket",
      "Create scroll-stopping ads for TikTok and Facebook — video content is king",
      "Obsess over your customer experience: fast responses, clear policies, branded packaging"
    ],
    proTip: "Don't sell random gadgets. Build a brand. The most successful dropshippers in 2025 create branded stores around a lifestyle — think 'minimalist home goods' or 'adventure pet gear.' Branding = higher prices, repeat customers, and real equity.",
    realTalk: "Let's be honest: 90% of dropshipping stores fail. But they fail because people treat it like a get-rich-quick scheme. Those who treat it like a real business — testing products methodically, optimizing ads, and building a brand — are the ones pulling $10K+ months."
  },
  {
    id: 3,
    rank: "03",
    title: "Content Creation & Social Media",
    tagline: "Your personality is your product. Your phone is your studio. Your audience is your ATM.",
    image: "/images/content-creator.jpg",
    earnings: "$500 – $100K+/mo",
    difficulty: "Easy to Start, Hard to Master",
    timeToStart: "Today",
    tags: ["Creative", "Personal Brand", "Unlimited Upside"],
    tagColors: ["bg-pink-100 text-pink-700", "bg-indigo-100 text-indigo-700", "bg-orange-100 text-orange-700"],
    intro: "This isn't just about dancing on TikTok (though that works too). Content creation in 2025 means sharing your expertise, stories, or entertainment with the world — and getting paid through brand deals, affiliate marketing, ad revenue, and digital products. The creator economy is worth over $250 billion, and it's still the early innings.",
    whyItWorks: [
      "Algorithms reward consistency, not perfection — you don't need fancy equipment",
      "Multiple income streams: sponsorships, affiliates, merch, courses, memberships",
      "Your content works for you 24/7 — a video posted today can earn money for years",
      "Building an audience is the most valuable asset in the digital economy",
      "You can pivot into literally any other business once you have an audience"
    ],
    howToStart: [
      "Pick ONE platform to master first (YouTube for long-term, TikTok/Reels for fast growth)",
      "Choose your content pillar: what unique perspective can you share with the world?",
      "Post consistently for 90 days — minimum 3x per week. No excuses.",
      "Study what works: hook in the first 2 seconds, deliver value, strong call to action",
      "Engage with your community relentlessly — reply to every comment for the first 6 months"
    ],
    proTip: "The biggest mistake new creators make? Trying to go viral. Forget virality. Focus on making content that ONE specific person would save, share, or come back for. Depth beats breadth. Every. Single. Time.",
    realTalk: "Months 1–6 will feel like shouting into the void. Your videos will get 47 views. Your mom will be your biggest fan (and sometimes your only one). But if you keep going, month 7–12 is where the magic happens. The algorithm starts trusting you, brands start noticing you, and suddenly you're getting paid to be yourself."
  },
  {
    id: 4,
    rank: "04",
    title: "Online Tutoring & Coaching",
    tagline: "You know something others don't. Package that knowledge and sell it — the world is your classroom.",
    image: "/images/online-tutoring.jpg",
    earnings: "$1K – $15K/mo",
    difficulty: "Beginner-Friendly",
    timeToStart: "1 Week",
    tags: ["Education", "High Demand", "Fulfilling"],
    tagColors: ["bg-cyan-100 text-cyan-700", "bg-yellow-100 text-yellow-700", "bg-teal-100 text-teal-700"],
    intro: "Here's a mind-blowing stat: the online education market is projected to reach $350 billion by 2025. People are willing to pay serious money to learn skills faster — whether it's math, coding, guitar, fitness, or even how to grow tomatoes. If you're good at something (anything!), there's someone out there willing to pay you to teach them.",
    whyItWorks: [
      "The shift to online learning is permanent — demand is only increasing",
      "You can charge premium rates: $50–$300/hour depending on your expertise",
      "One-on-one coaching builds deep relationships and insane referral rates",
      "You can scale by creating group programs or pre-recorded courses",
      "It's deeply fulfilling — you literally change people's lives"
    ],
    howToStart: [
      "Identify your superpower: what do people always ask you for help with?",
      "Start on platforms like Wyzant, Preply, or Varsity Tutors to build reviews",
      "Create a simple landing page showcasing your expertise and results",
      "Offer 3 free sessions to build testimonials and refine your teaching method",
      "Gradually move to private clients at higher rates — use Calendly for seamless booking"
    ],
    proTip: "The real money isn't in one-on-one tutoring forever. It's in creating a signature framework, recording it as a course, and selling it on autopilot. One great course can generate $5K–$50K/month in passive income while you sleep.",
    realTalk: "The barrier to entry is beautifully low. You don't need certification to teach most skills online (though it helps for academic subjects). You need patience, empathy, and the ability to break complex topics into simple steps. If you can do that, you're golden."
  },
  {
    id: 5,
    rank: "05",
    title: "Graphic Design & Digital Services",
    tagline: "Every brand needs a visual identity. Learn design, and you'll never run out of clients.",
    image: "/images/graphic-design.jpg",
    earnings: "$2K – $20K/mo",
    difficulty: "Moderate",
    timeToStart: "2–3 Weeks",
    tags: ["Creative", "In-Demand", "Remote"],
    tagColors: ["bg-violet-100 text-violet-700", "bg-rose-100 text-rose-700", "bg-emerald-100 text-emerald-700"],
    intro: "In a world drowning in content, good design is the difference between being noticed and being ignored. Logos, social media graphics, pitch decks, website designs, packaging — businesses are spending billions on visual content. And with tools like Figma, Canva, and AI-assisted design, the barrier to creating professional work has never been lower.",
    whyItWorks: [
      "Every new business needs a logo, brand kit, and social media templates",
      "Design skills compound — you get faster and better with every project",
      "Recurring revenue from retainer clients who need monthly design work",
      "You can sell digital products: templates, fonts, icon packs on marketplaces",
      "AI tools are making designers MORE valuable, not less (you direct the AI)"
    ],
    howToStart: [
      "Learn Figma (free) or master Canva Pro — watch YouTube tutorials daily",
      "Build a portfolio of 10 projects (redesign real brands for practice if needed)",
      "Set up profiles on 99designs, Dribbble, and Behance to showcase your work",
      "Start with logo design and social media templates — highest demand, easiest entry",
      "Network on Twitter/X and LinkedIn — post your design process and attract clients organically"
    ],
    proTip: "The designers earning $10K+/month aren't just pushing pixels. They're solving business problems visually. Learn to ask clients 'What's the goal of this design?' and 'Who is your target audience?' — that strategic thinking is what separates a $500 logo from a $5,000 one.",
    realTalk: "You don't need to go to design school. Some of the highest-paid freelance designers are self-taught. What you DO need is taste, which comes from studying great design obsessively. Save inspiration daily, deconstruct why great designs work, and practice relentlessly."
  }
];

export const blogMeta = {
  title: "The Hustle Files",
  subtitle: "Top 5 Side Hustles That Actually Work in 2025",
  author: "Alex Rivera",
  date: "January 15, 2025",
  readTime: "12 min read",
  heroImage: "/images/hero.jpg",
  introText: "Let's cut through the noise. You've seen a thousand 'side hustle' lists that recommend stuff like 'take online surveys' or 'walk dogs.' No shade to dog walkers, but we're here for something bigger. These are five proven, scalable side hustles that real people are using to earn $2K–$50K+ per month — some even replacing their full-time income entirely.",
  closingText: "The best time to start was yesterday. The second best time is right now. Pick ONE hustle from this list, give it 90 days of focused effort, and watch what happens. Your future self will thank you.",
};

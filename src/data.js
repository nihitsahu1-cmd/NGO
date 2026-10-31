import heroOne from "../hero1.png";
import heroTwo from "../hero2.png";
import heroThree from "../hero3.jpeg";
import heroFour from "../hero4.jpeg";

export const NGO_DATA = {
  site: {
    name: "Swadesh Seva Sansthan",
    heroTitle: "Together for a\nStronger Society.",
    motto: "Let us commit to social service—the path to society's progress.",
    heroText:
      "Serving Prayagraj through free education, healthcare, community support, and opportunities for every family.",
    aboutTitle: {
      firstLine: "A community",
      secondLine: "where everyone",
      emphasis: "can thrive.",
    },
    aboutText:
      "Swadesh Seva Sansthan is a Prayagraj-based nonprofit that grew from Swadesh Yuva Shakti, formed in 2018, and was registered as a society on 17 December 2020. The organization works with local communities to make education, healthcare, dignity, and opportunity more accessible.",
    registration: "06536/2020-21",
    website: "https://swadeshsevasansthan.in",
    socialHandle: "@SSS_swadesh_NGO",
    socialUrl: "https://x.com/SSS_swadesh_NGO",
    socialPlatforms: ["YouTube", "Instagram", "Facebook"],
    phone: "+91 81270 09790",
    aboutImage: heroTwo,
    offices: [
      {
        label: "Head Office",
        address: "136/4C/6A, Bhagirath Marg, Chota Baghada, Prayagraj 211002",
      },
      {
        label: "Branch Office",
        address: "76/3A, Suturkhana (Near Appu Medical Store), Salori, Prayagraj 211004",
      },
    ],
    emails: ["Contact@swadeshsevasansthan.org", "Sansthanswadeshseva@gmail.com"],
    heroImage: heroFour,
  },
  programs: [
    {
      title: "Education",
      description: "Opening doors to learning and future opportunities for every child.",
      details: [
        "Free education and scholarship support for 400+ children",
        "The brochure reports 350 children attending free classes across the branches",
        "Six free learning centers serving communities across Prayagraj",
        "Digital literacy, girl child education, and career guidance",
        "Books, stationery, school supplies, and teacher recognition",
      ],
      image: heroTwo,
      button: "Support education",
    },
    {
      title: "Healthcare",
      description: "Helping families access essential care, nutrition, and health information.",
      details: [
        "Free health camps, eye examinations, and check-ups",
        "Blood donation drives and preventive health awareness",
        "Food distribution, nutrition support, and mid-day meals",
        "COVID relief with food, masks, sanitizer, and vaccine awareness",
      ],
      image: heroFour,
      button: "Support healthcare",
    },
    {
      title: "Human Empowerment",
      description: "Building confidence, equal opportunity, and independence for all.",
      details: [
        "Women's self-help groups, vocational training, and social justice",
        "Awareness about cyber safety, good touch/bad touch, and child labor",
        "Respect and support for workers and differently-abled individuals",
        "Community membership and local participation",
      ],
      image: heroThree,
      button: "Empower communities",
    },
    {
      title: "Livelihood",
      description: "Creating pathways to reliable income and sustainable self-employment.",
      details: [
        "Practical skills in stitching, handicrafts, and computers",
        "Creative workshops in diya-making, art, and craft",
        "Micro-enterprise guidance, job connections, and self-employment",
      ],
      image: heroFour,
      button: "Build livelihoods",
    },
  ],
  branches: [
    { name: "Bhardwaj Branch", location: "Bada Baghada, Prayagraj" },
    { name: "Sandeepani Branch", location: "Tikona Park, Teliarganj" },
    { name: "Sangam Branch", location: "Sangam, Prayagraj" },
    { name: "Vivekanand Branch", location: "Salori, Prayagraj" },
    { name: "Buddha Branch", location: "Allapur, Prayagraj" },
    { name: "Bhagirath Branch", location: "Chota Baghada, Prayagraj" },
  ],
  initiatives: [
    {
      title: "Food and clothing drives",
      description:
        "Distributing meals and warm clothing to people in need across Prayagraj and nearby communities.",
    },
    {
      title: "Birthday celebrations with children",
      description:
        "Celebrating with children in local communities and sharing books, stationery, and useful school supplies.",
    },
    {
      title: "Water and environmental awareness",
      description:
        "Encouraging water conservation, tree planting, and care for a cleaner environment.",
    },
    {
      title: "Health, yoga, and wellbeing",
      description:
        "Organizing health camps, yoga activities, and awareness about physical and mental wellbeing.",
    },
    {
      title: "Skills and self-reliance",
      description:
        "Helping people discover practical skills through craft, art, mehndi, and other hands-on activities.",
    },
    {
      title: "Culture and community recognition",
      description:
        "Bringing people together for national and cultural events, honoring teachers, recognizing community service, and sharing work through local media.",
    },
  ],
  gallery: [
    { image: heroOne, alt: "Swadesh Seva Sansthan volunteers and children at a community event" },
    { image: heroTwo, alt: "Children gathered for a Swadesh Seva Sansthan education program" },
    { image: heroThree, alt: "Children taking part in a community learning activity" },
    { image: heroFour, alt: "Volunteers and children at an outdoor community program" },
  ],
  impact: [
    { value: "400+", label: "Children reached through education and scholarship support" },
    { value: "6", label: "Free learning centers in Prayagraj" },
    { value: "300+", label: "Community members" },
    { value: "70", label: "Active members supporting education" },
  ],
  donation: {
    accountName: "Swadesh Seva Sansthan",
    bank: "State Bank of India",
    accountNumber: "39986692230",
    ifsc: "SBIN0013766",
  },
};

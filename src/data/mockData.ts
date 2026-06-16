// mockData models and static collections
export interface Program {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  shortDesc: string;
  longDesc: string;
  impactMetric: string;
  impactLabel: string;
  image: string;
  activities: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  location?: string;
}

export interface SuccessStory {
  id: string;
  title: string;
  category: string;
  beneficiaryName: string;
  location: string;
  challenge: string;
  intervention: string;
  outcome: string;
  quote: string;
  imageBefore: string;
  imageAfter: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  iconName: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'Campaign' | 'Field Activity' | 'Announcement' | 'Community Update';
  date: string;
  readTime: string;
  image: string;
  author: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  type: 'leadership' | 'field';
}

export interface Partner {
  id: string;
  name: string;
  category: 'UN Agency' | 'NGO' | 'Government' | 'Corporate';
  logoPlaceholder: string;
}

// Programs Data
export const programs: Program[] = [
  {
    id: "public-health",
    title: "Public Health & CLM Initiatives",
    slug: "public-health",
    iconName: "HeartPulse",
    shortDesc: "Strengthening health services through Community-Led Monitoring (CLM) and community health screenings.",
    longDesc: "Supported by TASO and MMHF, CITRAL conducts Community-Led Monitoring (CLM) to assess the access, availability, and quality of HIV, TB, and malaria services in health facilities like Nakivale HC III, Juru HC III, and Kibengo HC III. We also perform community health screenings for Syphilis, Hepatitis B, cervical/prostate cancer, and distribute family planning methods.",
    impactMetric: "300+ surveyed",
    impactLabel: "FGD and Interview Respondents Reached",
    image: "/images/extracted/reports_for_data_collection_analysis_community_feedback_meeting_facility_level_img_4.jpg",
    activities: [
      "Community-Led Monitoring (CLM) data collection at selected health facilities",
      "Screening for HIV/AIDS, Syphilis, Hepatitis B, and cervical/prostate cancer",
      "Community feedback dialogues and facility-level validation meetings",
      "Malaria, TB, and HIV prevention awareness and treatment linkages",
      "Weekly cleanliness competitions for malaria-safe SMART homes"
    ]
  },
  {
    id: "sgbv-prevention",
    title: "SGBV Prevention & Child Protection",
    slug: "sgbv-prevention",
    iconName: "ShieldAlert",
    shortDesc: "Preventing Sexual and Gender-Based Violence, protecting child welfare, and empowering teenage mothers.",
    longDesc: "CITRAL implements community-led prevention of SGBV and supports survivors with multi-sectoral services and psychosocial support. We advocate at the district level for the school re-entry of teenage mothers, link vulnerable girls to GROW for skills training, and campaign against child marriage and teenage pregnancies.",
    impactMetric: "100+ mothers",
    impactLabel: "Teenage Mothers Linked to School Re-entry and GROW",
    image: "/images/extracted/community_initiative_to_transform_lives_profile_img_29.jpg",
    activities: [
      "School re-entry advocacy and regulation alignment at the district level",
      "Linking adolescent girls and teenage mothers to GROW for skills development",
      "Psychosocial support and mental health resources for trauma survivors",
      "Community watchdogs and rapid reporting channels for SGBV protection",
      "Religious institution partnerships to reduce SGBV and promote equality"
    ]
  },
  {
    id: "wash",
    title: "WASH (Water, Sanitation, & Hygiene)",
    slug: "wash",
    iconName: "Droplet",
    shortDesc: "Ensuring clean water access and facilitating affordable hygiene and sanitation facilities.",
    longDesc: "We facilitate clean and safe drinking water access for both host and refugee communities. CITRAL supports the construction and rehabilitation of clean water networks, designs handwashing stations, and promotes affordable hygiene facilities to prevent waterborne diseases in Isingiro.",
    impactMetric: "8,500+",
    impactLabel: "Residents Accessing Clean Water and Hygiene",
    image: "/images/extracted/reports_for_data_collection_analysis_community_feedback_meeting_facility_level_img_5.jpg",
    activities: [
      "Promoting clean, safe drinking water access across Isingiro sub-counties",
      "Supporting the establishment of affordable latrines and sanitation stations",
      "Conducting hygiene campaigns and water safety training in schools",
      "Distributing hygiene kits to adolescent girls and young women (AGYW)",
      "Coordinating school health clubs for active hygiene sensitization"
    ]
  },
  {
    id: "climate-smart-agriculture",
    title: "Climate-Smart Agriculture",
    slug: "climate-smart-agriculture",
    iconName: "Sprout",
    shortDesc: "Training farmers in sustainable agriculture, crop production, and value addition.",
    longDesc: "We train farmers on nursery bed establishment, value addition, and crop production. Cultivating crops like tomatoes, cabbages, carrots, onions, and ginger, we support farmers with modern implements, including irrigation pumps, pipes, and hoses, to sustain yields through climatic changes.",
    impactMetric: "12 Acres",
    impactLabel: "Hired Land Cultivated for Sustainable Production",
    image: "/images/extracted/community_initiative_to_transform_lives_profile_img_38.jpg",
    activities: [
      "Nursery bed establishment and agricultural management instruction",
      "Sustainable crop production of tomatoes, beetroots, carrots, and ginger",
      "Value addition training on raw agricultural harvest yields",
      "Distributing farm implements like irrigation pumps, pipes, and hoses",
      "Agro inputs coordination and storage facility management"
    ]
  },
  {
    id: "environmental-restoration",
    title: "Environmental Restoration",
    slug: "environmental-restoration",
    iconName: "Trees",
    shortDesc: "Mass tree seedlings raising, wetland conservation, and waste management.",
    longDesc: "Our environmental programs focus on wetland restoration and clean energy education. CITRAL raises over 200,000 tree seedlings (including eucalyptus, bamboo, pine) in certified nursery beds, leads the 'Run for Green' wetland campaign, and manages solid waste segregation and disposal in Isingiro TC.",
    impactMetric: "200,000+ Raised",
    impactLabel: "Eucalyptus, Pine, and Bamboo Seedlings Raised",
    image: "/images/extracted/community_initiative_to_transform_lives_profile_img_25.jpg",
    activities: [
      "Tree and fruit seedlings mass production in certified nursery beds",
      "Run for Green campaign to restore 65 hectares of Nakivale wetlands",
      "Solid waste management assessment, segregation, and dumping sites cleanups",
      "Community clean and modern household energy conservation seminars",
      "Nursery bed training course on Bamboo development technology"
    ]
  },
  {
    id: "livelihood-development",
    title: "Livelihood & Skills Development",
    slug: "livelihood-development",
    iconName: "TrendingUp",
    shortDesc: "Vocational fashion design, art & crafts, rabbit farming, and youth employment.",
    longDesc: "CITRAL offers youth and women vocational skills to boost household income. We conduct training in fashion design, tailoring, art & crafts, and rabbit farming. We mentor participants in project management, leadership, and financial literacy to ensure sustainable economic independence.",
    impactMetric: "15 Youth",
    impactLabel: "Direct Employment Opportunities Provided",
    image: "/images/extracted/community_initiative_to_transform_lives_profile_img_17.jpg",
    activities: [
      "Vocational training in fashion design, tailoring, and art & craft",
      "Rabbit farming project training and coordination as a source of IGA",
      "Project management and financial literacy mentorship sessions",
      "Leadership and self-advocacy workshops for adolescent girls",
      "Inclusive program integration for vulnerable refugee and host members"
    ]
  }
];

// Success Stories Data
export const successStories: SuccessStory[] = [
  {
    id: "story-1",
    title: "From Teen Mother to Community Advocate: Sharon's Story",
    category: "SGBV & Livelihood",
    beneficiaryName: "Sharon Kiconco",
    location: "Nakivale Refugee Settlement",
    challenge: "Fleeing conflict and arriving in Nakivale, Sharon became a teen mother at 18. Lacking financial independence, she was vulnerable to early marriage and faced severe hardship.",
    intervention: "CITRAL enrolled Sharon in psychosocial counseling and skills development. Supported by youth leader Kayesu Rachael, she learned tailoring, joined a local self-advocacy panel, and received business guidance.",
    outcome: "Sharon avoided early marriage, completed her training, and is now mapped as an active youth advocate. She leads community dialogues on the dangers of teenage pregnancies and family planning.",
    quote: "CITRAL showed me that my life wasn't over. They guided me back to my path, and now I lead community dialogues to protect other young girls.",
    imageBefore: "/images/extracted/community_initiative_to_transform_lives_profile_img_29.jpg",
    imageAfter: "/images/extracted/community_initiative_to_transform_lives_profile_img_17.jpg"
  },
  {
    id: "story-2",
    title: "Sustaining a Farm Through Severe Drought",
    category: "Climate-Smart Agriculture",
    beneficiaryName: "Emmanuel Mbonimpa",
    location: "Isingiro Host Community",
    challenge: "Emmanuel faced recurrent crop failures due to prolonged droughts. Lacking funds for inputs or irrigation, his family struggled to meet basic food security.",
    intervention: "CITRAL trained Emmanuel on certified nursery bed establishment and climate-resilient crop management. He received premium vegetable seeds and shared access to the group's pump-irrigation system.",
    outcome: "Emmanuel's crop yields tripled. Growing tomatoes, cabbages, carrots, and ginger year-round with the irrigation system, he now sells surplus produce to local markets in Isingiro and Nakivale.",
    quote: "With the irrigation pump and seeds from CITRAL, I harvested my best crops ever. Farming is now a reliable business for my family.",
    imageBefore: "/images/extracted/community_initiative_to_transform_lives_profile_img_38.jpg",
    imageAfter: "/images/extracted/reports_for_data_collection_analysis_community_feedback_meeting_facility_level_img_25.jpg"
  }
];

// Timeline Events
export const timelineEvents: TimelineEvent[] = [
  {
    year: "2016",
    title: "Founding & Strategic Assessments",
    description: "CITRAL is founded by Magomu Alex in Isingiro. A detailed assessment is conducted to draw up a strategic plan, mobilizing 324 community members for initial health sensitizations.",
    iconName: "Globe"
  },
  {
    year: "2017",
    title: "Land Hire & Crop Production",
    description: "Hires 12 acres of agricultural land, producing tons of tomatoes, carrots, green peppers, onions, and ginger to initiate early livelihood models.",
    iconName: "Sprout"
  },
  {
    year: "2018",
    title: "Office Setup & Irrigation Launch",
    description: "CITRAL hires an office for long-term operations, trains 18 staff in project management, and procures the first irrigation system (pump, pipes, and hoses).",
    iconName: "Award"
  },
  {
    year: "2019/20",
    title: "Waste Management & Seedling Nurseries",
    description: "Launches solid waste segregation in Kikagate and Isingiro TC. Establishes a large-scale tree nursery bed, raising over 200,000 tree seedlings ready for planting.",
    iconName: "Trees"
  },
  {
    year: "2021",
    title: "SPGS Certification & Health Screenings",
    description: "The tree nursery bed receives certification from the Saw log Production Grant Scheme (SPGS). Conducts screening for HIV/AIDS, Syphilis, Hepatitis B, and cervical/prostate cancer.",
    iconName: "HeartPulse"
  },
  {
    year: "2022",
    title: "CSO Validation & Global Fund malaria Project",
    description: "Undergoes capacity assessments by TASO, ICWEA, and MMHF. CITRAL coordinates the Global Fund malaria prevention project across Isingiro TC.",
    iconName: "Users"
  },
  {
    year: "2023",
    title: "Teen Mother Advocacy & China Training",
    description: "PTY/RHU funds a school re-entry campaign returning 100+ teen mothers back to school. Staff completes a 14-day training course in China on Bamboo development technology.",
    iconName: "Compass"
  },
  {
    year: "2024",
    title: "Consortium Formation & Run for Green",
    description: "Forms a 5-CBO consortium to coordinate Nakivale SGBV and SRHR campaigns, and launches 'Run for Green' to restore 65 hectares of wetlands around Lake Nakivale.",
    iconName: "Trees"
  },
  {
    year: "2025",
    title: "Community-Led Monitoring (CLM) Rollout",
    description: "Supported by TASO and MMHF, CITRAL deploys community monitors, successfully collecting and analyzing data across 12 facilities and 16 community sites.",
    iconName: "Award"
  }
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Alex Magomu",
    role: "Executive Director",
    content: "Since 2016, our focus has been transitioning community members from aid dependency to long-term self-reliance. Real health and environmental preservation start when local communities lead the solution.",
    avatar: "/images/dr.alex.png",
    location: "CITRAL Uganda"
  },
  {
    id: "test-2",
    name: "Juru Health Facility Representative",
    role: "Midwife / In-charge",
    content: "CITRAL's Community-Led Monitoring project provided us with direct, real-time feedback from patients. This data helped us immediately adapt our reception and triage processes to reduce waiting times.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    location: "Juru HC III, Isingiro"
  },
  {
    id: "test-3",
    name: "Isingiro Local Administration Officer",
    role: "District Forest Officer",
    content: "CITRAL's certified nursery beds have become a major source of quality seedlings in the district. Their team worked alongside us to train farmers on potting and sustainable agroforestry.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    location: "Isingiro District Local Gov"
  }
];

// News and Events Data
export const newsArticles: NewsArticle[] = [
  {
    id: "news-1",
    title: "Community-Led Monitoring (CLM) Data Collection Wraps Up in Isingiro",
    slug: "clm-data-collection-isingiro",
    excerpt: "CITRAL deployed trained monitors across 12 health facilities and 16 community sites to collect primary data on HIV, TB, and malaria services.",
    content: "In partnership with TASO and MMHF, CITRAL Uganda completed its CLM data collection cycle. Using digital devices, monitors gathered experiences from over 300 respondents in Isingiro. Executive Director Magomu Alex highlighted that the collected data will serve as a strong basis for feedback meetings with health facility managers, district officers, and local stakeholders to improve healthcare delivery.",
    category: "Field Activity",
    date: "April 10, 2025",
    readTime: "4 min read",
    image: "/images/extracted/reports_for_data_collection_analysis_community_feedback_meeting_facility_level_img_25.jpg",
    author: "Azairwe Jotham",
    featured: true
  },
  {
    id: "news-2",
    title: "Consortium Launches 'Run for Green' Campaign for Lake Nakivale Wetlands",
    slug: "run-for-green-nakivale-wetlands",
    excerpt: "CITRAL leads a 5-CBO consortium campaign to restore 65 hectares of degraded wetlands around Lake Nakivale through bamboo planting.",
    content: "To combat severe deforestation and wetland erosion, CITRAL and its CBO partners signed MoUs for Nakivale ecological restoration. The 'Run for Green' campaign aims to restore 65 hectares of Lake Nakivale wetlands. Over 200,000 seedlings, including bamboo and pine, have been raised in certified beds ready for active planting.",
    category: "Campaign",
    date: "November 12, 2024",
    readTime: "3 min read",
    image: "/images/extracted/community_initiative_to_transform_lives_profile_img_23.jpg",
    author: "Nyangoma Sharon"
  },
  {
    id: "news-3",
    title: "Advocating for School Re-entry of Teenage Mothers in Isingiro",
    slug: "school-reentry-teenage-mothers",
    excerpt: "CITRAL's district-level advocacy campaigns help teenage mothers return to school, linking over 100 girls to skills development.",
    content: "Supported by PTY and RHU, CITRAL successfully executed a dialogue meeting to lobby for teenage mothers' re-entry support. School regulations are adapting across Isingiro town council to accommodate mothers. Furthermore, CITRAL linked 100+ teenage mothers to GROW for fashion design, art & crafts, and financial literacy training.",
    category: "Community Update",
    date: "August 24, 2023",
    readTime: "5 min read",
    image: "/images/extracted/reports_for_data_collection_analysis_community_feedback_meeting_facility_level_img_6.jpg",
    author: "Kabatesi Shantel"
  }
];

// Team Members
export const teamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "Magomu Alex",
    role: "Executive Director",
    bio: "Medical and Public Health Officer facilitating CITRAL's community interventions, health partnerships, and overall strategic vision since 2016.",
    image: "/images/dr.alex.png",
    type: "leadership"
  },
  {
    id: "team-2",
    name: "Azairwe Jotham",
    role: "M&E Specialist",
    bio: "IT Specialist managing CLM data collection pipelines, offline synchronization, and project monitoring reviews.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    type: "leadership"
  },
  {
    id: "team-3",
    name: "Nabasa Tomson",
    role: "Finance Manager & Agriculturist",
    bio: "Coordinates agricultural extension support, certified tree nursery bed logistics, and administrative accounting.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    type: "leadership"
  },
  {
    id: "team-4",
    name: "Kabatesi Shantel",
    role: "General Secretary",
    bio: "Social worker coordinating community intake registers, communications, and administrative operations.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    type: "leadership"
  },
  {
    id: "team-5",
    name: "Omiat Samuel Okure",
    role: "Public Relations Officer",
    bio: "Economist and Researcher coordinating media outreach, community meetings, and strategic partner communications.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    type: "leadership"
  },
  {
    id: "team-6",
    name: "Bwambale Samson",
    role: "SGBV Focal Person",
    bio: "Medical Officer coordinating SGBV survivor support services, safety audits, and psychosocial counseling resources.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    type: "field"
  },
  {
    id: "team-7",
    name: "Abaho Brian Innocent",
    role: "Skills Development Coordinator",
    bio: "Professional tailor instructing youth and teenage mothers in fashion design, tailoring courses, and art & craft.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    type: "field"
  },
  {
    id: "team-8",
    name: "Kayesu Racheal",
    role: "Youth Leader & Lab Teacher",
    bio: "Coordinates teenage mothers empowerment panels, peer mentorship programs, and health lab diagnostics.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    type: "field"
  }
];

// Partners Data
export const partners: Partner[] = [
  { id: "p-1", name: "TASO Uganda", category: "NGO", logoPlaceholder: "TASO" },
  { id: "p-2", name: "Mayanja Memorial Hospital Foundation", category: "NGO", logoPlaceholder: "MMHF" },
  { id: "p-3", name: "UWESO Isingiro", category: "NGO", logoPlaceholder: "UWESO" },
  { id: "p-4", name: "Hunger Fighters Uganda", category: "NGO", logoPlaceholder: "Hunger Fighters" },
  { id: "p-5", name: "Reproductive Health Uganda", category: "NGO", logoPlaceholder: "RHU" },
  { id: "p-6", name: "EASSI East Africa", category: "NGO", logoPlaceholder: "EASSI" },
  { id: "p-7", name: "Ministry of Health Uganda", category: "Government", logoPlaceholder: "MoH Uganda" },
  { id: "p-8", name: "Isingiro District Local Gov", category: "Government", logoPlaceholder: "Isingiro District" }
];

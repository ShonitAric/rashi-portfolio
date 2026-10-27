export interface CaseStudyBlockImage {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  layout?: "full" | "centered-graphic";
  width?: number;
  height?: number;
  unoptimized?: boolean;
}

export interface CaseStudyBlockText {
  type: "text";
  content: string;
}

export interface CaseStudyBlockList {
  type: "list";
  items: string[];
  ordered?: boolean;
}

export interface CaseStudyBlockSubheading {
  type: "subheading";
  text: string;
}

export interface CaseStudyBlockLink {
  type: "link";
  text: string;
  url: string;
}

export interface CaseStudyBlockQuote {
  type: "quote";
  text: string;
}

export interface CaseStudyBlockPlaceholder {
  type: "placeholder";
  title: string;
  subtitle?: string;
  note?: string;
}

export type CaseStudyBlock =
  | CaseStudyBlockImage
  | CaseStudyBlockText
  | CaseStudyBlockList
  | CaseStudyBlockSubheading
  | CaseStudyBlockLink
  | CaseStudyBlockQuote
  | CaseStudyBlockPlaceholder;

export interface CaseStudyRichSection {
  number?: string;
  title: string;
  blocks: CaseStudyBlock[];
}

export interface CaseStudyContent {
  slug: string;
  headline: string;
  subtitle: string;
  role: string;
  timeline?: string;
  team?: string;
  platform: string;
  client?: string;
  industry?: string;
  heroImage?: string;
  heroAlt?: string;
  richSections?: CaseStudyRichSection[];
  overview?: string;
  challenge?: string;
  research?: string;
  strategy?: string;
  architecture?: string;
  interfaceSystem?: string;
  outcome?: string;
  metrics?: { label: string; value: string; detail: string }[];
}

export const CASE_STUDIES_DATA: Record<string, CaseStudyContent> = {
  stcp: {
    slug: "stcp",
    headline: "Secure Trade Compliance Platform (STCP)",
    subtitle:
      "Modernizing GEM: a 20+ year-old internal compliance tool into an intuitive, accessible, and user-friendly experience.",
    client: "Secure Trade Compliance Platform (STCP)",
    industry: "Financial Services",
    role: "UX Researcher/Designer",
    platform: "Enterprise Web Application",
    heroImage: "/projects/stcp/stcp-cover.jpg",
    heroAlt: "Secure Trade Compliance Platform desktop monitor display",
    richSections: [
      {
        number: "01",
        title: "Overview",
        blocks: [
          {
            type: "text",
            content:
              "GEM is a 20+ year-old internal platform used by employees to submit personal trade pre-clearance requests — a crucial part of maintaining compliance with financial and regulatory policies.\n\nOver the years, GEM had grown in complexity. The interface was outdated, cluttered, and hard to use, leading to confusion, longer review times, and accessibility challenges.",
          },
          {
            type: "text",
            content:
              "The goal of this project was to modernize GEM into an intuitive, accessible, and efficient platform — one that supports compliance integrity while making everyday tasks easier and faster for employees.",
          },
        ],
      },
      {
        number: "02",
        title: "The Challenge",
        blocks: [
          {
            type: "image",
            src: "/projects/stcp/challenge-user-persona.png",
            alt: "Employee persona navigating confusing legacy compliance software",
            caption: "",
            layout: "centered-graphic",
            width: 496,
            height: 792,
          },
          {
            type: "text",
            content:
              "How might we modernize a legacy compliance tool — known for its complexity — into a user-friendly, inclusive experience without compromising data accuracy or regulatory standards?",
          },
          {
            type: "text",
            content:
              "This meant improving the user experience while respecting the strict, rule-bound nature of compliance workflows. Every design change had to be precise, validated, and trustworthy.",
          },
        ],
      },
      {
        number: "03",
        title: "Goals",
        blocks: [
          {
            type: "subheading",
            text: "Business Goals",
          },
          {
            type: "list",
            items: [
              "Maintain 100% adherence to compliance and internal policies",
              "Reduce trade review and approval time by 25%",
              "Improve employee satisfaction and reduce training dependency",
              "Strengthen the organization’s commitment to accessibility and inclusivity",
            ],
          },
          {
            type: "subheading",
            text: "Product Goals",
          },
          {
            type: "list",
            items: [
              "Redesign GEM with a clean, modern, and intuitive interface",
              "Achieve WCAG 2.1 AA compliance across all workflows",
              "Streamline navigation to minimize task completion time",
              "Build a scalable design system for future updates and consistency",
            ],
          },
        ],
      },
      {
        number: "04",
        title: "Research & Insights",
        blocks: [
          {
            type: "text",
            content:
              "To truly understand where users struggled, I collaborated with employees, reviewers, and compliance officers through:",
          },
          {
            type: "list",
            items: [
              "User interviews & surveys to uncover friction points and workflow pain areas",
              "Heuristic evaluation of the existing interface to identify usability gaps",
              "Journey mapping for trade submission and approval flows",
              "Accessibility audit to flag visual contrast issues and missing assistive support",
            ],
          },
          {
            type: "image",
            src: "/projects/stcp/research-activities.png",
            alt: "Research activities, synthesis board, and journey mapping sticky notes",
            caption: "Research Activities",
            layout: "full",
            width: 1980,
            height: 1016,
          },
          {
            type: "text",
            content:
              "The insights were clear — users spent too much time navigating scattered modules, key actions were often hidden, and the interface wasn’t optimized for modern devices or assistive tools.",
          },
          {
            type: "image",
            src: "/projects/stcp/research-insights-diagram.png",
            alt: "Research insights breakdown and cognitive friction points diagram",
            caption: "",
            layout: "centered-graphic",
            width: 806,
            height: 468,
          },
        ],
      },
      {
        number: "05",
        title: "Design Approach",
        blocks: [
          {
            type: "text",
            content:
              "I started by co-creating a UX roadmap that broke the redesign into clear, achievable milestones.\n\nThrough collaborative workshops, we sketched and tested early concepts with real users, focusing on clarity, hierarchy, and ease of navigation.",
          },
          {
            type: "text",
            content:
              "The visual design system was built around simplicity and accessibility — with improved contrast, clearer typography, and responsive layouts that worked seamlessly across devices.",
          },
        ],
      },
      {
        number: "06",
        title: "Testing & Iteration",
        blocks: [
          {
            type: "text",
            content:
              "Usability testing was central to this project. Across several testing rounds, we evaluated how easily users could complete tasks, locate actions, and navigate workflows.\n\nKey improvements included:",
          },
          {
            type: "list",
            items: [
              "Reducing excessive clicks and hidden actions",
              "Improving layout efficiency through smarter use of space",
              "Enhancing visibility of critical buttons and progress indicators",
            ],
          },
          {
            type: "text",
            content:
              "Each iteration made the platform faster, cleaner, and easier to learn — especially for new employees.",
          },
        ],
      },
      {
        number: "07",
        title: "Key Challenges",
        blocks: [
          {
            type: "list",
            items: [
              "Inefficient use of space: Important content was buried below the fold.",
              "Hidden actions: Users struggled to locate key buttons.",
              "Too many steps: Workflows involved unnecessary navigation.",
              "Accessibility issues: Poor color contrast and limited screen reader support.",
              "Non-responsive design: Difficult to use on mobile and smaller screens.",
            ],
          },
          {
            type: "text",
            content:
              "Addressing these required not just design fixes, but rethinking how compliance and usability could coexist.",
          },
          {
            type: "image",
            src: "/projects/stcp/old-vs-new.png",
            alt: "Visual comparison of Old legacy UI vs New modern UI",
            caption: "Old Vs New",
            layout: "full",
            width: 1980,
            height: 1004,
          },
        ],
      },
      {
        number: "08",
        title: "Product Outcomes & Impact",
        blocks: [
          {
            type: "subheading",
            text: "Product Outcomes",
          },
          {
            type: "text",
            content:
              "Reworked the STP flow to reduce visual noise, clarify primary actions, and support faster decision-making for frequent users in a regulated environment.",
          },
          {
            type: "image",
            src: "/projects/stcp/stcp-before-after-outcomes.png",
            alt: "STP Experience — Before & After comparison reducing cognitive load and clarifying task workflows",
            caption: "Product Outcomes: Before & After comparison reducing cognitive load and clarifying primary actions",
            layout: "full",
            width: 1024,
            height: 682,
          },
          {
            type: "subheading",
            text: "Key Measurable Results",
          },
          {
            type: "list",
            items: [
              "25% faster Task completion process",
              "50% reduction in navigation steps",
              "WCAG 2.1 AA accessibility compliance achieved",
              "Noticeably higher user satisfaction and engagement",
              "A scalable, reusable design system now powers future feature rollouts",
            ],
          },
        ],
      },
      {
        number: "09",
        title: "Lessons Learned",
        blocks: [
          {
            type: "text",
            content:
              "Modernizing a legacy system taught me how critical it is to balance innovation with compliance precision. In a regulated space, change must be thoughtful, well-documented, and validated at every step.\n\nEarly stakeholder alignment and inclusive user testing were key — ensuring that every improvement worked for both the end-users and the compliance teams that safeguard the system’s integrity.",
          },
          {
            type: "image",
            src: "/projects/stcp/final-ui-screens.png",
            alt: "Final modernized STCP screens and component architecture",
            caption: "",
            layout: "full",
            width: 1200,
            height: 1110,
          },
        ],
      },
      {
        number: "10",
        title: "Reflection",
        blocks: [
          {
            type: "text",
            content:
              "The GEM redesign was about more than refreshing an old interface — it was about empowering employees to work confidently within a complex compliance ecosystem.\n\nThrough research-driven design, accessibility-first thinking, and close collaboration with stakeholders, we turned a rigid legacy tool into a modern, human-centered experience.",
          },
        ],
      },
    ],
    metrics: [
      { label: "Task Completion", value: "25% faster", detail: "Significant reduction in review and submission time" },
      { label: "Navigation Steps", value: "50% fewer", detail: "Consolidated scattered modules into clear flows" },
      { label: "Accessibility", value: "WCAG 2.1 AA", detail: "Achieved full compliance across all workflows" },
    ],
  },

  ticketmitra: {
    slug: "ticketmitra",
    headline: "TicketMitra",
    subtitle:
      "Designing a unified, role-based platform that streamlines planning, coordination, and execution while staying inclusive and accessible.",
    client: "TicketMitra / Product Manager, Developers, Business Stakeholders",
    industry: "Event Tech",
    role: "UX/UI Designer",
    platform: "Responsive Web & Mobile",
    heroImage: "/projects/ticketmitra/hero-thumbnail.png",
    heroAlt: "TicketMitra event operations platform on mobile in crowd",
    richSections: [
      {
        number: "01",
        title: "Overview",
        blocks: [
          {
            type: "text",
            content:
              "TicketMitra is an all-in-one event management platform built to make life easier for organizers — whether they’re hosting small virtual sessions or large-scale on-ground festivals.",
          },
          {
            type: "text",
            content:
              "My goal was simple: design a unified, role-based platform that streamlines planning, coordination, and execution while staying inclusive and accessible for everyone involved.",
          },
        ],
      },
      {
        number: "02",
        title: "The Challenge",
        blocks: [
          {
            type: "text",
            content:
              "Event organizers often juggle multiple tools for ticketing, rides, merchandise, and on-ground logistics — leading to inefficiency and communication gaps.\n\nSo I asked:\nHow might we create a single, role-based platform where organizers, owners, and ground teams can work together in real time — ensuring smooth coordination and a seamless experience for attendees, both online and offline?",
          },
          {
            type: "image",
            src: "/projects/ticketmitra/hand-holding-phone.png",
            alt: "User holding mobile device with TicketMitra app interface",
            caption: "",
            layout: "full",
            width: 4000,
            height: 2666,
          },
        ],
      },
      {
        number: "03",
        title: "Objectives",
        blocks: [
          {
            type: "text",
            content:
              "We wanted TicketMitra to help businesses grow while making their work easier. Our key goals were:",
          },
          {
            type: "list",
            items: [
              "Increase adoption – onboard 40% of target organizers in 6 months.",
              "Boost revenue – integrate ticketing, rides, and merchandise to increase per-event revenue by 25%.",
              "Improve efficiency – reduce event setup time by 30%.",
              "Build trust – create a reputation for reliable, all-in-one event management.",
              "Reach more users – support diverse event types across industries.",
            ],
          },
        ],
      },
      {
        number: "04",
        title: "Research & Discovery",
        blocks: [
          {
            type: "text",
            content:
              "To understand how different teams manage events, I conducted:",
          },
          {
            type: "list",
            items: [
              "12 stakeholder interviews with organizers, owners, and on-ground officers.",
              "User journey mapping to uncover pain points across workflows.",
              "Competitive benchmarking against leading EventTech platforms to find usability gaps, especially in role-based experiences.",
            ],
          },
          {
            type: "text",
            content: "This helped me identify four key personas:",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Virtual Event Organizer – needs a smoother way to set up and track merchandise.",
              "Ride Coordinator – depends on real-time ride scheduling and attendee management.",
              "Event Owner – looks for quick insights and analytics to make data-driven decisions.",
              "Station Officer – values speed in check-ins, updates, and issue reporting.",
            ],
          },
          {
            type: "image",
            src: "/projects/ticketmitra/verified-and-organising-screens.png",
            alt: "TicketMitra Verified and Organising screens",
            caption: "Verified and Organising screen",
            layout: "centered-graphic",
            width: 1500,
            height: 1500,
          },
        ],
      },
      {
        number: "05",
        title: "Design Approach",
        blocks: [
          {
            type: "text",
            content:
              "I started by mapping each role’s unique needs to a personalized information architecture.",
          },
          {
            type: "list",
            items: [
              "Used MoSCoW prioritization with the product team to focus on the most impactful features.",
              "Created low-fidelity wireframes to validate task flows early and iterated to high-fidelity prototypes in Figma.",
              "Ensured WCAG-compliant accessibility through color contrast, clean typography, and responsive layouts for mobile and web.",
            ],
          },
          {
            type: "image",
            src: "/projects/ticketmitra/login-screen.png",
            alt: "TicketMitra Login Screen mobile mockup",
            caption: "Login Screen",
            layout: "centered-graphic",
            width: 1500,
            height: 1500,
          },
        ],
      },
      {
        number: "06",
        title: "Testing & Iteration",
        blocks: [
          {
            type: "text",
            content:
              "We ran three rounds of usability testing, each with five participants.\nThe focus was on:",
          },
          {
            type: "list",
            items: [
              "Navigation clarity",
              "Time to complete key tasks",
              "Discoverability of major features",
            ],
          },
          {
            type: "text",
            content:
              "Based on feedback, I simplified the merchandise upload process and refined the ride-tracking interface to make real-time coordination smoother.",
          },
          {
            type: "image",
            src: "/projects/ticketmitra/signup-login-process.png",
            alt: "Sign Up and Login Process user flow overview",
            caption: "Sign Up/Login Process",
            layout: "full",
            width: 4586,
            height: 1028,
          },
        ],
      },
      {
        number: "07",
        title: "Impact",
        blocks: [
          {
            type: "list",
            items: [
              "30% faster event setup and coordination",
              "Increased adoption among new organizers thanks to an easier onboarding flow",
              "New revenue streams through integrated ticketing and merchandise",
              "Improved real-time updates for on-ground teams",
              "Consistent accessibility across web and mobile platforms",
            ],
          },
        ],
      },
      {
        number: "08",
        title: "Lessons Learned",
        blocks: [
          {
            type: "image",
            src: "/projects/ticketmitra/lessons-learned-interaction.gif",
            alt: "TicketMitra live mobile screen interaction animation",
            caption: "",
            layout: "centered-graphic",
            width: 800,
            height: 1317,
            unoptimized: true,
          },
          {
            type: "text",
            content:
              "Designing for multiple personas taught me the importance of <b>flexibility and scalability</b> in product architecture. Building inclusivity into the foundation of the system — not as an add-on — made the platform more resilient and user-friendly for everyone.",
          },
        ],
      },
      {
        number: "09",
        title: "Reflection",
        blocks: [
          {
            type: "text",
            content:
              "TicketMitra reminded me that design is most powerful when empathy meets structure.\n\nBy blending research insights, collaboration, and accessibility-first thinking, I was able to craft an experience that supports every organizer — regardless of their scale, role, or event type.",
          },
        ],
      },
    ],
    metrics: [
      { label: "Setup Time", value: "-30%", detail: "Faster event setup and coordination workflows" },
      { label: "Per-Event Revenue", value: "+25%", detail: "Via integrated ticketing, rides, and merchandise" },
      { label: "Organizer Adoption", value: "40%", detail: "Target organizers onboarded within 6 months" },
    ],
  },

  "bu-super-league": {
    slug: "bu-super-league",
    headline: "BU Super League 2026",
    subtitle:
      "Designed and delivered an internal sports championship platform for 1,000–1,500 Fidelity employees, leveraging AI-assisted workflows in Figma Make through to engineering handoff and internal launch.",
    client: "Fidelity Investments · Internal BU Championship",
    industry: "Tech",
    role: "Lead Product & UX Designer",
    platform: "Internal Web App (Figma Make & Code Handoff)",
    heroImage: "/projects/bu-super-league/hero-thumbnail.png",
    heroAlt: "BU Super League 2026 championship portal on laptop and mobile",
    richSections: [
      {
        number: "01",
        title: "The Opportunity",
        blocks: [
          {
            type: "text",
            content:
              "Generative AI is rapidly changing how digital products are imagined, designed, and built.\n\nHow might AI accelerate creative exploration while allowing human-centered design to guide product strategy, usability, and brand coherence?\n\nTo solve this for an active enterprise initiative, I designed BU Super League 2026—an internal championship platform engaging 1,000–1,500 Fidelity employees across regional chapters and business units. What started as an exploration combining generative AI with human UX in Figma Make progressed into an interactive prototype, engineering handoff, and an internally launched championship platform.",
          },
          {
            type: "text",
            content:
              "Rather than designing another corporate portal, I wanted to create an experience that felt high-energy, community-driven, and emotionally engaging.\n\nThe project became an experiment in designing not only a product, but a new design workflow—one where generative AI acts as a creative collaborator, accelerating ideation while human design judgment shapes the user journey, interaction architecture, and design system.",
          },
          {
            type: "link",
            text: "View Interactive Prototype ↗",
            url: "https://www.figma.com/make/QFbhfF82GegUrh9bF93jEC/BU-Super-League-2026-Website?fullscreen=1&t=Cb8bOfSwtTjagqfE-1&code-node-id=0-9",
          },
        ],
      },
      {
        number: "02",
        title: "The Challenge",
        blocks: [
          {
            type: "text",
            content:
              "Employee engagement initiatives often struggle to sustain excitement. Many internal platforms prioritize administration over experience—focusing heavily on logistics while missing the emotional spark that inspires participation.\n\nThe challenge was twofold:\n• First, how could an internal sports championship feel emotionally compelling, identity-driven, and memorable?\n• Second, how could AI become a creative collaborator during product design—helping generate concepts, interface elements, and brand identities without compromising usability, consistency, or human-centered UX principles?",
          },
        ],
      },
      {
        number: "03",
        title: "Design Vision",
        blocks: [
          {
            type: "text",
            content:
              "Instead of designing an event management portal, I envisioned a platform that felt closer to joining a professional sports league.\n\nThe experience needed to create anticipation, celebrate identity, and encourage participation before, during, and after each event.\n\nThe goal wasn't simply helping employees register. It was helping them feel like they belonged.",
          },
        ],
      },
      {
        number: "04",
        title: "My Role & Framing",
        blocks: [
          {
            type: "subheading",
            text: "My Role",
          },
          {
            type: "text",
            content:
              "I led the end-to-end product and UX design for the championship platform—collaborating with tournament organizers, establishing the design system in Figma Make, and partnering closely with our internal engineering team through handoff and launch for our 1,000–1,500 employee Business Unit at Fidelity. My responsibilities included:",
          },
          {
            type: "list",
            items: [
              "Product strategy",
              "UX strategy",
              "Information architecture",
              "Interaction design",
              "Design system direction",
              "AI prompt engineering",
              "High-fidelity visual exploration",
              "Product storytelling",
            ],
          },
          {
            type: "text",
            content:
              "While rapid internal turnaround prioritized agile deployment, every design decision was grounded in human-centered UX principles and validated through iterative stakeholder reviews prior to production development.",
          },
          {
            type: "subheading",
            text: "Framing the Design Challenge",
          },
          {
            type: "text",
            content:
              "Before generating a single screen, I defined the emotional experience I wanted employees to have.",
          },
          {
            type: "quote",
            text: "What should employees feel throughout the journey?",
          },
          {
            type: "text",
            content:
              "The desired progression became:\nDiscover the championship → Register effortlessly → Choose preferred sports → Select skill level → Be assigned to a team → Celebrate team identity → Compete with colleagues → Share achievements → Return for future events.\n\nThis shifted the experience from completing another HR process to becoming part of a shared organizational culture.",
          },
        ],
      },
      {
        number: "05",
        title: "Exploring AI as a Design Partner",
        blocks: [
          {
            type: "text",
            content:
              "Instead of asking AI to generate random interfaces, I approached it as a collaborative design tool. Every prompt included strategic direction rather than purely visual requests. The guidance covered:",
          },
          {
            type: "list",
            items: [
              "Brand personality",
              "Team identities",
              "User journeys",
              "Interaction behaviors",
              "Motion principles",
              "Responsive layouts",
              "Design system foundations",
              "Content hierarchy",
            ],
          },
          {
            type: "text",
            content:
              "This allowed AI to accelerate visual exploration while leaving critical product decisions in the hands of the designer.",
          },
          {
            type: "subheading",
            text: "What AI Accelerated",
          },
          {
            type: "text",
            content:
              "The experiment demonstrated several areas where AI significantly improved the design process:\n\n• Rapid concept exploration: Multiple visual directions could be explored within hours instead of days.",
          },
          {
            type: "image",
            src: "/projects/bu-super-league/rapid-concept-exploration.png",
            alt: "Rapid concept exploration across sports identities and screen layouts",
            caption: "Rapid Concept Exploration",
            layout: "full",
            width: 2522,
            height: 1518,
          },
          {
            type: "text",
            content:
              "• Brand expression & Creative momentum: AI quickly generated distinct visual identities for teams, environments, and interface themes. Rather than beginning with a blank canvas, AI provided starting points that encouraged further refinement.\n\n• Visual consistency: Shared prompts helped maintain a coherent design language across multiple screens.",
          },
          {
            type: "image",
            src: "/projects/bu-super-league/visual-consistency.png",
            alt: "Visual consistency and cohesive component styling across league portal",
            caption: "Visual Consistency & Brand Expression",
            layout: "full",
            width: 2530,
            height: 1500,
          },
        ],
      },
      {
        number: "06",
        title: "Where Human Design Was Essential",
        blocks: [
          {
            type: "text",
            content:
              "Perhaps the most valuable outcome wasn't what AI created—it was identifying where human judgment remained irreplaceable.\n\nUX decisions still required careful consideration around:",
          },
          {
            type: "list",
            items: [
              "Information hierarchy",
              "Accessibility",
              "Interaction behavior",
              "Progressive disclosure",
              "Product strategy",
              "User psychology",
              "Enterprise feasibility",
              "Design trade-offs",
            ],
          },
          {
            type: "text",
            content:
              "The project reinforced that while AI can generate interfaces, it cannot replace the reasoning behind meaningful user experiences.",
          },
        ],
      },
      {
        number: "07",
        title: "Experience Highlights & Design Principles",
        blocks: [
          {
            type: "subheading",
            text: "Creating emotional moments",
          },
          {
            type: "text",
            content:
              "One of the core objectives was transforming ordinary product interactions into memorable experiences. Instead of confirming registration with a standard success message, employees are welcomed through a cinematic house assignment sequence featuring animated emblems, dynamic lighting, celebration effects, and personalized messaging.\n\nThis interaction was intentionally designed to strengthen emotional investment before the competition even begins.",
          },
          {
            type: "subheading",
            text: "Extending engagement beyond the event",
          },
          {
            type: "text",
            content:
              "Many internal sports initiatives lose momentum once matches conclude. To encourage ongoing participation, I designed the Experience Wall—a social space where employees could share match highlights, celebrate victories, post photos, react to teammates, and revisit memorable moments. This transformed the platform from a scheduling tool into a community-building experience.",
          },
          {
            type: "subheading",
            text: "Design Principles",
          },
          {
            type: "list",
            items: [
              "Design for emotion: Memorable experiences create stronger engagement than efficient workflows alone.",
              "Identity drives participation: People are more likely to contribute when they feel part of something larger than themselves.",
              "AI supports creativity—not decisions: Artificial intelligence accelerates exploration, but product strategy and user experience remain human responsibilities.",
              "Systems create consistency: A scalable design system enables innovation without sacrificing usability.",
            ],
          },
        ],
      },
      {
        number: "08",
        title: "Design System",
        blocks: [
          {
            type: "text",
            content:
              "The visual language intentionally blended modern sports branding with enterprise usability. Key decisions included:",
          },
          {
            type: "list",
            items: [
              "Dark interface optimized for immersive experiences.",
              "Bold athletic-inspired typography.",
              "Glassmorphism-inspired containers.",
              "Dynamic gradients.",
              "Animated leaderboard components.",
              "Responsive layouts across desktop and mobile.",
              "Reusable component library supporting future expansion.",
            ],
          },
          {
            type: "text",
            content:
              "Every visual decision aimed to reinforce excitement while preserving clarity and usability.",
          },
        ],
      },
      {
        number: "09",
        title: "Outcomes",
        blocks: [
          {
            type: "subheading",
            text: "Product Outcomes",
          },
          {
            type: "list",
            items: [
              "Successfully launched an internal sports championship platform engaging 1,000–1,500 Fidelity employees.",
              "Elevated employee engagement beyond administrative logistics into a celebratory, team-first experience.",
              "Established a cohesive design system and interactive component library supporting upcoming seasons.",
            ],
          },
          {
            type: "subheading",
            text: "Design Outcomes",
          },
          {
            type: "list",
            items: [
              "Developed an agile workflow combining AI-assisted exploration in Figma Make with robust UX standards.",
              "Proved how rapid prototyping accelerates creative momentum without sacrificing information architecture.",
              "Bridged design and engineering through clear Figma slot specifications and responsive layout guidelines.",
            ],
          },
          {
            type: "subheading",
            text: "Personal Growth",
          },
          {
            type: "text",
            content:
              "This project expanded my understanding of how emerging technologies can complement—not compete with—human-centered design. It reinforced the importance of balancing innovation with critical thinking, ensuring that new tools enhance the design process without diminishing the designer's role.",
          },
        ],
      },
      {
        number: "10",
        title: "Reflection",
        blocks: [
          {
            type: "text",
            content:
              "BU Super League fundamentally changed how I think about AI in design. Rather than viewing AI as a shortcut for generating interfaces, I began seeing it as a creative collaborator capable of accelerating exploration while leaving strategy, empathy, and decision-making firmly in human hands.\n\nMore importantly, the project reminded me that meaningful products are rarely defined by their visuals alone. They're defined by the experiences they create, the emotions they evoke, and the communities they help build.\n\nWith the platform successfully launched internally for the championship, future evolutions focus on evaluating post-tournament participant feedback, tracking multi-season engagement patterns, and refining the AI-assisted component workflow for future enterprise employee events.",
          },
        ],
      },
    ],
    metrics: [
      { label: "AI Acceleration", value: "Workflow", detail: "Prompt engineering paired with strategic UX direction" },
      { label: "Team Onboarding", value: "Cinematic", detail: "Animated house draft and personalized identity sequence" },
      { label: "Visual Language", value: "Dark System", detail: "Athletic typography, glassmorphism, responsive components" },
    ],
  },

  worksite: {
    slug: "worksite",
    headline: "Making Fieldwork Easier before the first knock on the door",
    subtitle:
      "Restructuring complex appointment information and workflows to help field agents navigate delivery, repair and service experiences more clearly.",
    role: "Experience designer",
    timeline: "1 month",
    team: "3 Engineers, 1 PM, 1 Product Designer",
    platform: "App",
    client: "Best Buy · Worksite",
    industry: "Product Design",
    heroImage: "/projects/worksite/worksite-cover.png",
    heroAlt: "Making Fieldwork Easier before the first knock on the door - Best Buy Worksite Case Study overview",
    richSections: [
      {
        number: "01",
        title: "Overview",
        blocks: [
          {
            type: "subheading",
            text: "One appointment. A lot happening behind it.",
          },
          {
            type: "text",
            content:
              "Worksite supports field teams as they move through delivery, repair, installation, and other appointment-related workflows.\n\nThe challenge wasn't simply redesigning an Appointment Detail Page. It was understanding what information an agent needs, when they need it, and what action should come next as an appointment moves through different stages.\n\nMy work focuses on restructuring that experience—from understanding the end-to-end journey and information architecture to exploring interaction patterns and evolving the experience through low- and higher-fidelity designs.",
          },
        ],
      },
      {
        number: "02",
        title: "The Challenge",
        blocks: [
          {
            type: "subheading",
            text: "The information was there. Finding what mattered was harder.",
          },
          {
            type: "text",
            content:
              "The Appointment Details Page (ADP) is one of the most frequently used screens inside Work Site.\n\nIt acts as the operational hub where technicians access customer information, products, services, notes, documentation, and workflow actions.\n\nAs part of a modernization initiative, leadership wanted to improve technician efficiency and reduce workflow friction across the appointment lifecycle.\n\nAt first, the ask sounded straightforward:",
          },
          {
            type: "quote",
            text: "Redesign the Appointment Details Page.",
          },
          {
            type: "text",
            content:
              "But after reviewing workflows and speaking with stakeholders, I realized the problem wasn't the screen itself.\n\nThe problem was much larger.\n\nAppointment Details was being used across multiple stages of a technician's journey, yet the information hierarchy remained largely static regardless of context.",
          },
          {
            type: "subheading",
            text: "The Real Question",
          },
          {
            type: "quote",
            text: "How might Appointment Details adapt to where a technician is in their workflow?",
          },
          {
            type: "text",
            content: "Because what a technician needs while:",
          },
          {
            type: "list",
            items: [
              "Preparing for a pre-call",
              "Leaving the warehouse",
              "Traveling to an appointment",
              "Performing a repair",
              "Completing documentation",
            ],
          },
          {
            type: "text",
            content:
              "...is completely different.\n\nThe challenge wasn't redesigning a page.\n\nThe challenge was designing a system that could support changing needs throughout the technician journey.",
          },
        ],
      },
      {
        number: "03",
        title: "Understanding The Journey First",
        blocks: [
          {
            type: "text",
            content:
              "Before redesigning any screens, I mapped the complete technician workflow to understand how information needs evolve over time.",
          },
          {
            type: "subheading",
            text: "Technician Journey",
          },
          {
            type: "image",
            src: "/projects/worksite/journey-banner.png",
            alt: "Technician Journey: Pre-Call to Close for the day",
            caption: "Technician journey lifecycle progression from initial pre-call to end of day",
          },
          {
            type: "image",
            src: "/projects/worksite/journey-customer.png",
            alt: "End-to-end customer and technician journey map across Intake, Planning, Preparation, Execution, and Closure",
            caption: "End-to-End View: 13 journey stages mapping what questions and actions technicians face at each touchpoint",
          },
        ],
      },
      {
        number: "04",
        title: "What I Learned",
        blocks: [
          {
            type: "text",
            content: "Three patterns emerged almost immediately.",
          },
          {
            type: "subheading",
            text: "01 Context Changes Constantly",
          },
          {
            type: "text",
            content:
              "Information useful during a pre-call is not the same information needed in a warehouse.\n\nLikewise, information needed during a repair differs from information required during appointment completion.",
          },
          {
            type: "subheading",
            text: "02 Not Everything Deserves Equal Attention",
          },
          {
            type: "text",
            content:
              "The existing experience surfaced large amounts of information at once.\n\nImportant details often competed with secondary information.",
          },
          {
            type: "subheading",
            text: "03 The Next Action Matters More Than The Data",
          },
          {
            type: "text",
            content: "Technicians don't open ADP to read information. They open it to decide:",
          },
          {
            type: "quote",
            text: "What should I do next?",
          },
          {
            type: "image",
            src: "/projects/worksite/workflow-ia-crop.png",
            alt: "Workflow breakdown: Orders Assigned, Warehouse, In-Transit, Arrival, and Active Appointment contexts",
            caption: "Context mapping across order states and shifting technician priorities",
          },
        ],
      },
      {
        number: "05",
        title: "Key Insight",
        blocks: [
          {
            type: "subheading",
            text: "The information wasn't missing. Finding what mattered was hard.",
          },
          {
            type: "text",
            content:
              "The existing experience already contained most of the information technicians needed.\n\nThe challenge was helping them:",
          },
          {
            type: "list",
            items: [
              "Find it faster",
              "Understand it quicker",
              "Act on it confidently",
            ],
          },
          {
            type: "text",
            content: "This shifted the project from feature design to information design.",
          },
        ],
      },
      {
        number: "06",
        title: "Creating A Stage-Based Information Model",
        blocks: [
          {
            type: "text",
            content:
              "Technicians don't need all data at all times. In the field, cognitive overload directly slows service velocity.\n\nInstead of treating Appointment Details as a static record, I restructured it as a stage-aware operational hub categorized into distinct information layers:",
          },
          {
            type: "subheading",
            text: "01 · Persistent Layer (Anchor Data — Always Present)",
          },
          {
            type: "text",
            content: "Core data technicians constantly reference regardless of journey phase. Anchored at the top for immediate recognition:",
          },
          {
            type: "list",
            items: [
              "<strong>Customer Identity & Quick Contact:</strong> Name, verified phone, address, access codes.",
              "<strong>Appointment Time Window:</strong> Current scheduled arrival slot and service status.",
              "<strong>Primary Job Scope:</strong> Core work order type (Delivery, Repair, Install).",
            ],
          },
          {
            type: "subheading",
            text: "02 · Contextual Layer (Stage-Aware — Dynamically Surfaced)",
          },
          {
            type: "text",
            content: "Surfaces only the actions and instructions required for the technician's immediate physical stage:",
          },
          {
            type: "list",
            items: [
              "<strong>Pre-Call Stage:</strong> Customer availability confirmation, special access notes.",
              "<strong>Warehouse Departure:</strong> Part verification, staging checklist, loading confirmation.",
              "<strong>In-Transit:</strong> Turn-by-turn navigation shortcut, gate codes, running-late quick notification.",
              "<strong>On-Site Execution:</strong> Diagnosis checklist, warranty check, part replacement logging.",
              "<strong>Job Wrap-Up:</strong> Digital signature capture, payment collection, return staging.",
            ],
          },
          {
            type: "subheading",
            text: "Appointment-Specific Information",
          },
          {
            type: "text",
            content: "Changes depending on:",
          },
          {
            type: "list",
            items: [
              "Delivery",
              "Repair",
              "Installation",
              "Pickup",
              "Haul Away",
            ],
          },
          {
            type: "subheading",
            text: "Supporting Information",
          },
          {
            type: "text",
            content: "Available when needed but shouldn't dominate primary tasks. Examples:",
          },
          {
            type: "list",
            items: [
              "Notes",
              "Documentation",
              "Photos",
              "History",
            ],
          },
          {
            type: "image",
            src: "/projects/worksite/workflow-ia-map.png",
            alt: "Comprehensive Information Architecture and Order Lifecycle Map: 'What do I have today and what should I focus on first?'",
            caption: "Information Architecture & Order Lifecycle: Complete multi-stage mapping of technician context and actions",
          },
        ],
      },
      {
        number: "07",
        title: "Design Principles",
        blocks: [
          {
            type: "text",
            content: "The resulting framework was guided by four principles.",
          },
          {
            type: "subheading",
            text: "Persistent",
          },
          {
            type: "text",
            content: "Keep essential information accessible throughout the journey.",
          },
          {
            type: "subheading",
            text: "Contextual",
          },
          {
            type: "text",
            content: "Adapt information based on technician needs.",
          },
          {
            type: "subheading",
            text: "Expandable",
          },
          {
            type: "text",
            content: "Make supporting information available without overwhelming the primary experience.",
          },
          {
            type: "subheading",
            text: "Actionable",
          },
          {
            type: "text",
            content: "Prioritize information that helps technicians decide what to do next.",
          },
        ],
      },
      {
        number: "08",
        title: "Applying The Framework",
        blocks: [
          {
            type: "text",
            content: "Pre-call became the first stage used to validate the model.",
          },
          {
            type: "image",
            src: "/projects/worksite/purpose-callouts.png",
            alt: "Appointment details screen breakdown addressing technician purpose: Who am I calling? Why am I calling? What is the appointment about? What action should I take?",
            caption: "Appointment Details: Restructured around key technician questions during pre-call prep",
          },
          {
            type: "text",
            content:
              "Instead of designing for every possible scenario at once, I focused on understanding how information hierarchy could better support technician goals during appointment preparation.\n\nThis exploration became the foundation for upcoming stages including:",
          },
          {
            type: "list",
            items: [
              "Warehouse",
              "Transit",
              "Start Appointment",
              "In Appointment",
              "Completion",
            ],
          },
          {
            type: "text",
            content:
              "Each stage uses the same underlying framework while adapting content priority and actions to match technician needs.",
          },
        ],
      },
      {
        number: "09",
        title: "Example: Pre-call",
        blocks: [
          {
            type: "text",
            content: "During a pre-call, technicians are primarily trying to answer four questions:",
          },
          {
            type: "list",
            items: [
              "Who am I calling?",
              "Why am I calling?",
              "What is the appointment about?",
              "What action should I take?",
            ],
          },
          {
            type: "text",
            content:
              "The existing experience contained the required information but required excessive scanning.\n\nI explored:",
          },
          {
            type: "list",
            items: [
              "Separating customer context from appointment context",
              "Reorganizing information around technician goals",
              "Reducing competing actions",
              "Improving content hierarchy",
              "Supporting multiple note-capture methods",
            ],
          },
          {
            type: "text",
            content: "The goal was not to simplify the workflow.\n\nThe goal was to simplify understanding.",
          },
          {
            type: "image",
            src: "/projects/worksite/screen-breakdown-callouts.png",
            alt: "Mobile UI Breakdown with 5 callouts: Customer Info Layout, Promoted to Primary CTA, Dual CTAs to Single Sticky CTA, Collapsible List Sections, Notes & Photos Section",
            caption: "Detailed UI Callouts: Key layout and interaction refinements designed to minimize friction in the field",
          },
          {
            type: "image",
            src: "/projects/worksite/appointment-details-flow.png",
            alt: "Figma Flow Canvas: Appointment details state changes, assign pre-call, pop-overs, disclosure module, and repair edge cases",
            caption: "Figma Flow Canvas: Complete state transitions, sticky pre-call action bar, and disclosure module",
          },
        ],
      },
      {
        number: "10",
        title: "Outcome",
        blocks: [
          {
            type: "text",
            content:
              "The project established a scalable framework for how Appointment Details can evolve across the technician journey rather than being redesigned as a single isolated screen.\n\nSo far, the work has delivered:",
          },
          {
            type: "list",
            items: [
              "Stage-based JTBDs",
              "Context-aware information hierarchy",
              "A scalable ADP framework",
              "Improved content prioritization",
              "Reduced cognitive load",
              "A foundation for future appointment stages",
            ],
          },
          {
            type: "text",
            content: "Most importantly, it changed the conversation from:",
          },
          {
            type: "quote",
            text: "What features should we add?",
          },
          {
            type: "text",
            content: "to",
          },
          {
            type: "quote",
            text: "What information matters right now?",
          },
          {
            type: "image",
            src: "/projects/worksite/framework-evolution.png",
            alt: "Scalable ADP Framework wireframes and state variations across appointment lifecycle",
            caption: "A unified system scaling across delivery, repair, installation, and job closure",
          },
        ],
      },
      {
        number: "11",
        title: "Reflection",
        blocks: [
          {
            type: "text",
            content:
              "One of the biggest lessons from this project was recognizing that enterprise experiences often suffer from information overload rather than missing functionality.\n\nBy stepping back from the screen and understanding the technician journey first, I was able to create a framework that scales across multiple workflows while preserving the behaviors technicians already know and trust.\n\nIn the end, this project wasn't about redesigning a page.\n\nIt was about designing for decision-making.",
          },
        ],
      },
    ],
  },

  "search-discovery": {
    slug: "search-discovery",
    headline: "The products weren't inconsistent. The experience was.",
    subtitle:
      "Auditing the Product Listing Page across App and Small View to identify fragmented layout patterns, establishing module-specific spacing rules, and securing stakeholder approval for a reusable Figma slot-template framework.",
    client: "Best Buy · Search & Product Discovery",
    industry: "E-Commerce Systems · Interaction Design · Design Systems",
    role: "Product & UX Designer",
    platform: "Mobile App & Small View (SV) Responsive Web",
    heroImage: "/projects/search-discovery/search-discovery-cover.png",
    heroAlt:
      "Search & Discovery PLP Experience — Small View (SV) and App View comparison mockup",
    richSections: [
      {
        number: "01",
        title: "The Situation",
        blocks: [
          {
            type: "subheading",
            text: "The page worked. But the experience didn't always feel connected.",
          },
          {
            type: "text",
            content:
              "A Product Listing Page brings together multiple systems: product results, filters, sorting, sponsored content, seller information, recommendations, and merchandising.\n\nIndividually, these elements may function as intended. But across the page, similar information and interactions can be presented differently.\n\nThe challenge was not simply to introduce another feature or redesign the entire page.\n\n<strong>It was to identify where the mobile experience lacked consistency, clarity, or predictability.</strong>",
          },
          {
            type: "quote",
            text: "The opportunity wasn't to redesign everything. It was to understand where the experience stopped behaving like one system.",
          },
        ],
      },
      {
        number: "02",
        title: "Finding the Friction: SV & App Audit",
        blocks: [
          {
            type: "subheading",
            text: "Focusing on Small View (SV) and Native App touchpoints.",
          },
          {
            type: "text",
            content:
              "I examined the PLP as a connected experience, looking specifically at Small View (SV) mobile web and Native App platforms where the majority of customer discovery takes place.\n\nAreas of investigation included:",
          },
          {
            type: "list",
            items: [
              "Product information hierarchy and scanning cadence",
              "Vertical margins, card density, and gutter alignment",
              "Inconsistent divider treatments across adjacent content blocks",
              "Sponsored and promoted placement styling within organic results",
              "Third-party seller carousels and container boundary padding",
            ],
          },
          {
            type: "text",
            content:
              "The goal was to pinpoint layout inconsistencies that created cognitive friction, disrupted scanning rhythm, or made customer decisions harder.",
          },
          {
            type: "subheading",
            text: "Design Question",
          },
          {
            type: "text",
            content:
              "<strong>Where are customers being asked to relearn patterns that should already feel familiar?</strong>",
          },
          {
            type: "image",
            src: "/projects/search-discovery/app-vs-web-spacing-audit.png",
            alt: "Interaction and layout density audit comparing App and Mobile Web Product Listing Pages",
            caption:
              "SV & App Audit: Cross-platform comparison examining vertical rhythm, separator collisions, and card layout density",
            layout: "full",
          },
          {
            type: "image",
            src: "/projects/search-discovery/audit-finding-1-divider-treatment.png",
            alt: "UI Audit Finding 01: Divider treatment variations between standard and sponsored product cards",
            caption:
              "Audit Finding 01: Inconsistent divider treatments across adjacent product cards",
            layout: "full",
          },
          {
            type: "image",
            src: "/projects/search-discovery/audit-finding-2-product-spacing.png",
            alt: "UI Audit Finding 02: Vertical spacing variations affecting scanning rhythm",
            caption:
              "Audit Finding 02: Vertical spacing variations and irregular gaps affecting scannability",
            layout: "full",
          },
          {
            type: "image",
            src: "/projects/search-discovery/audit-finding-3-sponsored-skus.png",
            alt: "UI Audit Finding 03: Sponsored SKU treatments and badge hierarchy within the product list",
            caption:
              "Audit Finding 03: Distinct treatment of sponsored SKUs competing with standard product lists",
            layout: "full",
          },
        ],
      },
      {
        number: "03",
        title: "Current vs. Expected: Audit Findings & Acceptance Criteria",
        blocks: [
          {
            type: "subheading",
            text: "Structuring findings into clear criteria for design and engineering.",
          },
          {
            type: "text",
            content:
              "To translate observational friction into actionable design changes, I synthesized the audit into finding cards comparing production evidence against expected source rules across Small View and App:",
          },
          {
            type: "list",
            items: [
              "<strong>01 Divider Inconsistencies:</strong> Place one single divider at the documented content boundary across SV and App view. Acceptance: A 16px divider wrapper is used once at the source boundary.",
              "<strong>02 Product Spacing Inconsistencies:</strong> Standardize product module padding to eliminate irregular scanning gaps. Acceptance: Top/right/bottom/left equals 16/16/8/16 px.",
              "<strong>04 Excessive Carousel Spacing:</strong> Review carousel module padding against the confirmed Featured rule. Acceptance: Proposed target is 16px on every side.",
              "<strong>05 Wrong Divider Usage:</strong> Standardize the visual use of trenches and dividers. Prevent divider/trench overlap or arbitrary spacing left for future content.",
            ],
          },
          {
            type: "image",
            src: "/projects/search-discovery/plp-audit-current-vs-expected.png",
            alt: "Current vs. Expected audit synthesis cards showing divider inconsistencies, product spacing rules, carousel padding, and trench avoidance",
            caption:
              "Current vs. Expected Audit Synthesis: Documenting divider inconsistencies, product spacing rules (16/16/8/16 px), carousel container padding, and trench avoidance",
            layout: "full",
          },
        ],
      },
      {
        number: "04",
        title: "Defining the Opportunity",
        blocks: [
          {
            type: "subheading",
            text: "Not every difference is a problem.",
          },
          {
            type: "text",
            content:
              "Consistency does not mean making every component identical.\n\nA difference becomes worth investigating when it introduces unnecessary effort, uncertainty, or an unexpected interaction.\n\nI framed the audit around three questions:",
          },
          {
            type: "list",
            items: [
              "<strong>UNDERSTANDABLE</strong> — Can customers quickly recognize what they are looking at and what actions are available?",
              "<strong>PREDICTABLE</strong> — Do similar interactions behave consistently across the experience?",
              "<strong>INTENTIONAL</strong> — When patterns differ, is there a meaningful reason grounded in the customer's context?",
            ],
          },
          {
            type: "quote",
            text: "Consistency matters where expectations are shared. Context matters where needs differ.",
          },
        ],
      },
      {
        number: "05",
        title: "Looking Beyond Our PLP",
        blocks: [
          {
            type: "subheading",
            text: "Researching patterns, not copying competitors.",
          },
          {
            type: "text",
            content:
              "I reviewed comparable e-commerce experiences to understand how leading retailers approached modular listing layouts across mobile web and native apps.\n\nThe exploration focused on product presentation, filtering, seller information, promoted content, and discovery interactions.\n\nI used these references to distinguish between established conventions, emerging approaches, and context-dependent solutions that required validation before adoption.",
          },
          {
            type: "quote",
            text: "Competitive research gave us reference points, not ready-made answers.",
          },
        ],
      },
      {
        number: "06",
        title: "Defined Layout Rules: Module-Specific Spacing",
        blocks: [
          {
            type: "subheading",
            text: "Tailoring layout rules to support distinct content types without sacrificing rhythm.",
          },
          {
            type: "text",
            content:
              "Rather than enforcing an artificial, single-margin rule across incompatible components, we established module-specific spacing rules for Small View and App View:\n\nThese variations support different content types while preserving vertical consistency:",
          },
          {
            type: "list",
            items: [
              "<strong>Product Modules — 16px Top · 16px Right · 8px Bottom · 16px Left:</strong> The reduced 8px bottom spacing tightens visual proximity to the card's separator/boundary, preserving a scannable vertical cadence across repetitive product lists without dead space.",
              "<strong>Standard Modules — 16px on All Sides:</strong> Uniform 16px padding creates balanced breathing room for utility components, promotional banners, and filter/sort controls.",
              "<strong>Featured Modules — 16px on All Sides:</strong> Uniform 16px padding provides visual prominence for intent-driven categories, curated spotlights, or brand banners without crowding adjacent modules.",
            ],
          },
          {
            type: "subheading",
            text: "Large View (Desktop) Scope — Exploratory Consideration",
          },
          {
            type: "text",
            content:
              "<em>Large View (Desktop) is part of the broader initiative but is not the primary focus of the current work. A 24px all-around spacing rule is currently under consideration as an exploratory concept, but is NOT finalized or approved. All primary implementation and slot-template work remains concentrated on Small View and App View.</em>",
          },
        ],
      },
      {
        number: "07",
        title: "Exploring Third-Party Discovery & Carousels",
        blocks: [
          {
            type: "subheading",
            text: "Surfacing additional choices without disrupting the primary search journey.",
          },
          {
            type: "text",
            content:
              "One key area explored within the broader PLP work was the presentation and discovery of third-party products.\n\nThis required balancing discoverability, information hierarchy, customer control, and container boundary spacing within the surrounding product feed.",
          },
          {
            type: "image",
            src: "/projects/search-discovery/audit-finding-4-carousel-spacing.png",
            alt: "UI Exploration: Third-party carousel card spacing and content grouping",
            caption:
              "Audit Finding 04 & Exploration: Balancing carousel container spacing and 3P card density against confirmed Featured rules",
            layout: "full",
          },
        ],
      },
      {
        number: "08",
        title: "Reusable Figma Slot Templates",
        blocks: [
          {
            type: "subheading",
            text: "Evolving visual placeholders into functional component slots.",
          },
          {
            type: "text",
            content:
              "As part of the Search & Discovery initiative at Best Buy, I developed a reusable PLP composition framework in Figma, transforming static mockup placeholders into functional component slots.\n\nInstead of relying on legacy INSTANCE_SWAP overrides, the library exposes Figma's native <strong>Slot property</strong>. Designers simply select the module, then place the linked content instance directly in its slot container with pre-baked padding rules.",
          },
          {
            type: "list",
            items: [
              "<strong>Native Figma Slot Property:</strong> Direct instance insertion into responsive slots (Product, Standard, Featured) with locked padding.",
              "<strong>Embedded Reference Skeletons:</strong> Pre-assembled page skeletons that define the authorized module order before handoff.",
              "<strong>Standardized Separator Wrappers:</strong> Automated 16px divider placement at documented boundaries to prevent trench collisions.",
            ],
          },
          {
            type: "image",
            src: "/projects/search-discovery/figma-slot-placeholder-modules.png",
            alt: "Figma slot placeholder architecture and module-specific padding rules across Product, Standard, and Featured variants",
            caption:
              "Figma Slot Architecture: Module-specific padding variants (Product 16-16-8-16, Standard 16-all, Featured 16-all) with exploratory 24px desktop reference",
            layout: "full",
          },
          {
            type: "image",
            src: "/projects/search-discovery/figma-plp-app-template-slots.png",
            alt: "Full Product Listing Page composition: App template wireframe, populated screen with intent/sponsored slots, and component hierarchy stack",
            caption:
              "App PLP Slot Template: Modular component hierarchy stack, wireframe slots, and populated intent/sponsored screens",
            layout: "full",
          },
        ],
      },
      {
        number: "09",
        title: "Designer Guidance & Workflow: Select → Swap → Review",
        blocks: [
          {
            type: "subheading",
            text: "A standardized 3-step operating guide for squad designers.",
          },
          {
            type: "text",
            content:
              "To make adoption intuitive across multi-disciplinary squads, I created the <strong>PLP Slot Templates — Designers Usage Guide</strong> detailing an efficient 3-step workflow:\n\n<strong>01 SELECT:</strong> Choose the viewport template (App or Small View).\n<strong>02 SWAP:</strong> Place linked content instance in the exposed Slot property.\n<strong>03 REVIEW:</strong> Check the finished order against the reference skeleton and verify separator treatment before handoff.",
          },
          {
            type: "image",
            src: "/projects/search-discovery/plp-slot-templates-designer-guide.png",
            alt: "PLP Slot Templates — Designers Usage Guide: Getting started workflow (Select, Swap, Review), App and Small View templates, Slot property mechanics, and Reference Skeleton",
            caption:
              "PLP Slot Templates — Designers Usage Guide: Documenting the Select → Swap → Review workflow, native Slot property usage, App + Small View wireframes, and Reference Skeleton",
            layout: "full",
          },
        ],
      },
      {
        number: "10",
        title: "Designing for the Whole Page",
        blocks: [
          {
            type: "subheading",
            text: "A component still has to work inside a busy, full-page PLP.",
          },
          {
            type: "text",
            content:
              "A carousel or filtering pattern cannot be evaluated only in isolation.\n\nIts placement and behavior affect the surrounding product results, information hierarchy, promoted content, and overall scrolling cadence.\n\nWe validated the slot templates across complete, full-page category matrices in Small View to ensure visual harmony across high-density and promotional shopping journeys.",
          },
          {
            type: "quote",
            text: "The goal wasn't simply to make a component more visible. It was to make it fit the whole experience.",
          },
          {
            type: "image",
            src: "/projects/search-discovery/cross-product-audit-matrix.png",
            alt: "Full-page PLP audit matrix across viewports and product categories in Small View",
            caption:
              "Holistic PLP Matrix: Evaluating full-page vertical rhythm, spacing trenches, and content transitions in context across Small View",
            layout: "full",
          },
        ],
      },
      {
        number: "11",
        title: "Outcomes & Confirmed Stakeholder Approval",
        blocks: [
          {
            type: "subheading",
            text: "Confirmed milestone: Reusable slot template approach approved as the standard direction.",
          },
          {
            type: "text",
            content:
              "<strong>Confirmed Project Milestone:</strong> The reusable, slot-based PLP template approach has been <strong>formally approved by product and design leadership as the standard direction for future PLP composition</strong> at Best Buy.\n\n<em>Framing Note: While the framework and template approach have secured confirmed stakeholder approval as the official standard direction, implementation is rolling out progressively across squads. This represents an approved architectural foundation, rather than an immediate full-scale code deployment across every product category.</em>",
          },
          {
            type: "list",
            items: [
              "<strong>Formal Stakeholder Sign-Off:</strong> Approved standard direction for future PLP page composition across App and Small View.",
              "<strong>Eliminated Layout Guesswork:</strong> Squad designers utilize pre-configured 16/16/8/16 and 16-all slots rather than calculating ad-hoc margins.",
              "<strong>Predictable Engineering Handoff:</strong> Reference skeletons and divider rules bridge the gap between Figma components and front-end layout rendering.",
              "<strong>Consistent Customer Rhythm:</strong> A unified spacing cadence for millions of customers discovering products across Best Buy mobile touchpoints.",
            ],
          },
        ],
      },
      {
        number: "12",
        title: "Reflection",
        blocks: [
          {
            type: "subheading",
            text: "Consistency isn't about making everything identical.",
          },
          {
            type: "text",
            content:
              "This project reinforced the importance of examining the relationships between components rather than treating each screen or interaction as an isolated design problem.\n\nA more consistent experience comes from understanding where customers expect familiar behavior—and where context genuinely calls for something different.\n\n<strong>The strongest design decisions are not always about adding something new. Sometimes they're about making what already exists work better together.</strong>",
          },
        ],
      },
    ],
  },

  "madras-mandi": {
    slug: "madras-mandi",
    headline: "Madras Mandi",
    subtitle:
      "An online marketplace bringing farm-fresh fruits and vegetables directly from farmers to consumers in Chennai.",
    client: "Madras Mandi",
    industry: "E-commerce / Food & Agriculture",
    role: "UI Designer",
    platform: "Website",
    heroImage: "/projects/madras-mandi/hero-thumbnail.png",
    heroAlt: "Madras Mandi MacBook mockup on desk with coffee",
    richSections: [
      {
        number: "01",
        title: "Overview",
        blocks: [
          {
            type: "text",
            content:
              "Madras Mandi is an online marketplace bringing farm-fresh fruits and vegetables directly from farmers to consumers in Chennai. The platform emphasizes freshness, affordability, and supporting local farming communities.",
          },
          {
            type: "image",
            src: "/projects/madras-mandi/imac-overview.png",
            alt: "Madras Mandi desktop storefront interface displayed on iMac",
            caption: "",
            layout: "full",
            width: 3931,
            height: 3840,
          },
        ],
      },
      {
        number: "02",
        title: "The Challenge",
        blocks: [
          {
            type: "text",
            content:
              "The biggest challenge was to create a complete visual identity and website interface from scratch. The client wanted an experience that felt earthy, authentic, and modern—bridging the gap between a traditional vegetable market (mandi) and a seamless digital delivery service.",
          },
          {
            type: "image",
            src: "/projects/madras-mandi/laptop-challenge.png",
            alt: "Madras Mandi responsive website interface shown on laptop",
            caption: "",
            layout: "full",
            width: 3872,
            height: 3840,
          },
        ],
      },
      {
        number: "03",
        title: "My Role",
        blocks: [
          {
            type: "text",
            content: "As the sole designer on this project, I:",
          },
          {
            type: "list",
            items: [
              "Crafted a new visual identity that reflects freshness and reliability.",
              "Built brand guidelines covering color, typography, iconography, and imagery style.",
              "Designed the website UI for key pages — including product listings, testimonials, and promotional sections — maintaining visual consistency and breathing room throughout.",
            ],
          },
          {
            type: "image",
            src: "/projects/madras-mandi/laptop-box-role.png",
            alt: "Madras Mandi branded packaging box alongside laptop UI",
            caption: "",
            layout: "full",
            width: 3872,
            height: 3840,
          },
        ],
      },
      {
        number: "04",
        title: "Design Highlights",
        blocks: [
          {
            type: "text",
            content: "We wanted the brand to look fresh and feel approachable.",
          },
          {
            type: "list",
            items: [
              "Chose a vibrant, organic palette inspired by fruits and vegetables.",
              "Used soft curves and subtle illustrations to make the interface feel friendly and local.",
              "Simplified product categorization so users could find essentials quickly.",
              "Placed clear, high-contrast CTAs (“Order Now”) to guide users smoothly through checkout.",
            ],
          },
          {
            type: "image",
            src: "/projects/madras-mandi/landing-page-design.png",
            alt: "Madras Mandi full Landing Page design",
            caption: "Landing Page Design",
            layout: "full",
            width: 1215,
            height: 3840,
          },
          {
            type: "image",
            src: "/projects/madras-mandi/about-us-page-design.png",
            alt: "Madras Mandi About Us page design",
            caption: "About US page design",
            layout: "full",
            width: 1296,
            height: 2333,
          },
          {
            type: "image",
            src: "/projects/madras-mandi/how-to-order-1.png",
            alt: "How to place an order page design - 1",
            caption: "How to place an order page design - 1",
            layout: "full",
            width: 1296,
            height: 1571,
          },
          {
            type: "image",
            src: "/projects/madras-mandi/how-to-order-2.png",
            alt: "How to place an order page design - 2",
            caption: "How to place an order page design - 2",
            layout: "full",
            width: 1440,
            height: 1978,
          },
        ],
      },
      {
        number: "05",
        title: "Impact",
        blocks: [
          {
            type: "text",
            content:
              "The redesign gave Madras Mandi a cohesive, modern digital identity while preserving its rustic, local warmth.",
          },
          {
            type: "list",
            items: [
              "Built stronger visual trust and brand recognition.",
              "Improved readability and product discoverability.",
              "Delivered an intuitive, refreshing shopping experience for farm-to-home customers.",
            ],
          },
        ],
      },
      {
        number: "06",
        title: "Reflection",
        blocks: [
          {
            type: "text",
            content:
              "Designing for Madras Mandi reminded me that simplicity and emotion can coexist beautifully. The goal wasn’t just to sell produce — it was to create an experience that feels as warm and natural as visiting your neighborhood market. Every design choice, from colors to whitespace, was made to build trust, celebrate freshness, and make the digital feel human.",
          },
        ],
      },
    ],
    metrics: [
      { label: "Visual Identity", value: "End-to-End", detail: "From brand guidelines to responsive web experience" },
      { label: "Product Discovery", value: "Streamlined", detail: "Simplified categorization and high-contrast checkout" },
      { label: "Brand Warmth", value: "100% Organic", detail: "Farm-to-table storytelling tailored for local communities" },
    ],
  },
};

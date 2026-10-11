export const CHESS_CONFIG = {
  username: "divyarashi45",
  url: "https://www.chess.com/member/divyarashi45",
  cta: "CHALLENGE ME ON CHESS.COM ↗",
};

export const INSTAGRAM_CONFIG = {
  handle: "@rash_creations04",
  username: "rash_creations04",
  url: "https://www.instagram.com/rash_creations04",
  promptText: "More from my creative studio",
  cta: "EXPLORE MY ART ON INSTAGRAM ↗",
  description: "Handcrafted resin jewelry, botanical pieces, paintings & creative experiments",
};

export const STRAVA_CONFIG = {
  url: "https://www.strava.com/athletes/1839978808",
  cta: "FOLLOW MY RUNS ON STRAVA ↗",
};

export interface ResinPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  details?: string;
}

export const RESIN_GALLERY: ResinPhoto[] = [
  {
    id: "resin-1",
    src: "/images/resin/resin-1.jpg",
    alt: "Handcrafted resin diamond earrings with preserved white florals and warm marigold beads in a terracotta bowl",
    caption: "Sunlit Florals · Marigold Beads",
    details: "Dried baby's breath encased in crystal resin with antique silver trim",
  },
  {
    id: "resin-2",
    src: "/images/resin/resin-2.jpg",
    alt: "Handcrafted resin drop earrings with real pressed pink daisy and lilac beads on blue silk",
    caption: "Lavender & Daisy · Pressed Florals",
    details: "Real botanical press with purple beads and intricate metal jhumka drops",
  },
  {
    id: "resin-3",
    src: "/images/resin/resin-3.jpg",
    alt: "Round emerald green resin earrings with shimmering botanical flakes and green beads surrounded by turquoise baby's breath",
    caption: "Emerald Shimmer · Forest Green",
    details: "Circular resin discs with dried florals, gold shimmer, and matching beads",
  },
  {
    id: "resin-4",
    src: "/images/resin/resin-4.jpg",
    alt: "Diamond resin earrings with pressed pink petals and soft blush beads on blue weave",
    caption: "Blush Petals · Pressed Blooms",
    details: "Real garden blossoms dried and cast in clear UV resin",
  },
  {
    id: "resin-5",
    src: "/images/resin/resin-5.jpg",
    alt: "Ruby red resin earrings with pressed red florals and crimson beads on textured dark fabric",
    caption: "Crimson Bloom · Red Botanicals",
    details: "Vibrant pressed crimson florals in silver filigree setting",
  },
  {
    id: "resin-6",
    src: "/images/resin/resin-6.jpg",
    alt: "Handcrafted botanical resin coaster set and matching holder with real pressed colorful daisies, ferns, and wildflowers on wooden coffee table",
    caption: "Botanical Coasters · Tableware Set",
    details: "Circular resin coasters & matching holder with real pressed daisies, ferns, and wildflowers",
  },
];

export interface PaintingPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  details?: string;
}

export const PAINTING_GALLERY: PaintingPhoto[] = [
  {
    id: "painting-1",
    src: "/images/painting/painting-1.jpg",
    alt: "Original canvas painting of white and yellow wildflowers blooming against an azure blue sky",
    caption: "Sunlit Wildflowers · Azure Canvas",
    details: "Acrylic on stretched canvas · Bold textural brushstrokes & botanical study",
  },
  {
    id: "painting-2",
    src: "/images/painting/painting-2.jpg",
    alt: "Contemporary round canvas painting of Lord Ganesha in warm saffron, vermilion, and deep black with pearl ornament",
    caption: "Contemporary Ganesha · Saffron & Crimson",
    details: "Circular canvas art · Devotional contemporary acrylic with pearl accents",
  },
  {
    id: "painting-3",
    src: "/images/painting/painting-3.jpg",
    alt: "Round textured canvas painting of a multi-colored butterfly above garden flowers against textured cobalt blue",
    caption: "Garden Butterfly · Textured Impasto",
    details: "Heavily textured impasto acrylic on circular canvas with vivid palette knife work",
  },
  {
    id: "painting-4",
    src: "/images/painting/painting-4.jpg",
    alt: "Textured palette knife canvas featuring split butterfly wings and dimensional white florals on lavender purple background",
    caption: "Metamorphosis · Palette Knife Florals",
    details: "Sculptural heavy-body acrylic on square canvas · Lilac & sage botanical relief",
  },
];

export interface KathakPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export const KATHAK_GALLERY: KathakPhoto[] = [
  {
    id: "kathak-1",
    src: "/images/kathak/kathak-1.jpg",
    alt: "Rashi Chaurasia performing a Kathak spin (chakkar) on stage under theatrical red lighting",
    caption: "Chakkar & expression under stage lights",
  },
  {
    id: "kathak-2",
    src: "/images/kathak/kathak-2.jpg",
    alt: "Rashi Chaurasia in traditional classical attire with abhinaya mudra posture",
    caption: "Classical mudra and storytelling posture",
  },
  {
    id: "kathak-3",
    src: "/images/kathak/kathak-3.jpg",
    alt: "Rashi Chaurasia performing on stage with flowing white and gold costume",
    caption: "Flowing costume and dynamic stage movement",
  },
  {
    id: "kathak-4",
    src: "/images/kathak/kathak-4.jpg",
    alt: "Rashi Chaurasia leading a classical dance performance before an ornate architectural backdrop",
    caption: "Stage performance with ornate backdrop",
  },
  {
    id: "kathak-5",
    src: "/images/kathak/kathak-5.jpg",
    alt: "Rashi Chaurasia performing a seated classical abhinaya pose under stage spotlights",
    caption: "Seated classical abhinaya and rhythm",
  },
];

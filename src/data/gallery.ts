export interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  description?: string;
  width: number;
  height: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export const categories: Category[] = [
  { id: "1", name: "All", slug: "all" },
  { id: "2", name: "Landscape", slug: "landscape" },
  { id: "3", name: "Portrait", slug: "portrait" },
  { id: "4", name: "Street", slug: "street" },
  { id: "5", name: "Nature", slug: "nature" },
  { id: "6", name: "Architecture", slug: "architecture" },
];

export const photos: Photo[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Mountain Sunrise",
    title: "Mountain Sunrise",
    category: "landscape",
    description: "Golden light breaking over the mountain peaks at dawn",
    width: 800,
    height: 600,
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    alt: "Portrait Study",
    title: "Portrait Study",
    category: "portrait",
    description: "Natural light portrait in urban setting",
    width: 800,
    height: 1000,
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80",
    alt: "City Nights",
    title: "City Nights",
    category: "street",
    description: "The city comes alive after dark",
    width: 800,
    height: 600,
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80",
    alt: "Ocean Waves",
    title: "Ocean Waves",
    category: "nature",
    description: "Powerful waves crashing against the shore",
    width: 800,
    height: 600,
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    alt: "Modern Lines",
    title: "Modern Lines",
    category: "architecture",
    description: "Geometric patterns in modern architecture",
    width: 800,
    height: 1000,
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    alt: "Valley View",
    title: "Valley View",
    category: "landscape",
    description: "Panoramic view of the lush valley below",
    width: 800,
    height: 600,
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    alt: "Fashion Portrait",
    title: "Fashion Portrait",
    category: "portrait",
    description: "Studio fashion photography",
    width: 800,
    height: 1000,
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    alt: "Urban Life",
    title: "Urban Life",
    category: "street",
    description: "Daily life in the bustling city",
    width: 800,
    height: 600,
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    alt: "Natural Light",
    title: "Natural Light",
    category: "portrait",
    description: "Capturing authentic moments with natural light",
    width: 800,
    height: 1000,
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    alt: "Forest Path",
    title: "Forest Path",
    category: "nature",
    description: "A peaceful walk through the ancient forest",
    width: 800,
    height: 600,
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
    alt: "Glass Structure",
    title: "Glass Structure",
    category: "architecture",
    description: "Reflections in modern glass architecture",
    width: 800,
    height: 1000,
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    alt: "Lake Reflection",
    title: "Lake Reflection",
    category: "landscape",
    description: "Perfect mirror reflection on still lake waters",
    width: 800,
    height: 600,
  },
];

export const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    title: "Capturing Moments",
    subtitle: "Through the Lens of Artistry",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80",
    title: "Nature's Beauty",
    subtitle: "Exploring the World's Wonders",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1920&q=80",
    title: "Visual Stories",
    subtitle: "Every Frame Tells a Story",
  },
];

import { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | PhotoGallery",
  description: "Browse our complete collection of stunning photographs.",
};

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.4em] text-primary mb-6">
            Portfolio
          </span>
          <h1 className="heading-font text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-[-0.04em]">
            Photo <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            Explore our curated collection of photographs spanning landscapes,
            portraits, street scenes, and architectural marvels.
          </p>
        </div>
        <GalleryGrid />
      </div>
    </div>
  );
}

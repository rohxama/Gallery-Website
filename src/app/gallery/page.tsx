import { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | PhotoGallery",
  description: "Browse our complete collection of stunning photographs.",
};

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Photo <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            Explore our curated collection of photographs spanning landscapes,
            portraits, street scenes, and architectural marvels.
          </p>
        </div>
        <GalleryGrid />
      </div>
    </div>
  );
}

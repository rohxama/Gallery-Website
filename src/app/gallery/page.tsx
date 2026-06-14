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
          <h1 className="heading-font text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-[-0.04em]">
            Photo <span className="text-gradient">Gallery</span>
          </h1>
        </div>
        <GalleryGrid />
      </div>
    </div>
  );
}

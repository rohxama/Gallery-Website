import { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Work | PhotoGallery",
};

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-3">
            Portfolio
          </span>
          <h1 className="font-[var(--font-syne)] text-4xl md:text-5xl font-extrabold tracking-[-0.04em]">
            Work
          </h1>
        </div>
        <GalleryGrid />
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GalleryItem } from "./GalleryItem";
import { photos, categories, Photo } from "@/data/gallery";

export function GalleryGrid() {
  const [active, setActive] = useState("all");
  const [filtered, setFiltered] = useState<Photo[]>(photos);

  const filter = (slug: string) => {
    setActive(slug);
    setFiltered(slug === "all" ? photos : photos.filter((p) => p.category === slug));
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => filter(cat.slug)}
            className={`text-[10px] uppercase tracking-[0.2em] pb-1 transition-colors duration-300 ${
              active === cat.slug
                ? "text-primary border-b border-primary"
                : "text-muted hover:text-foreground"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((photo, i) => (
          <GalleryItem key={photo.id} photo={photo} index={i} />
        ))}
      </motion.div>
    </div>
  );
}

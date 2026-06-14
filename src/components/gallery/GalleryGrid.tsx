"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GalleryItem } from "./GalleryItem";
import { photos, categories, Photo } from "@/data/gallery";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>(photos);

  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    if (slug === "all") {
      setFilteredPhotos(photos);
    } else {
      setFilteredPhotos(photos.filter((p) => p.category === slug));
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => handleCategoryChange(category.slug)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-500 ${
              activeCategory === category.slug
                ? "bg-gradient-to-r from-primary to-accent text-background"
                : "bg-card text-muted hover:text-foreground border border-white/[0.08] hover:border-primary/30"
            }`}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {filteredPhotos.map((photo, index) => (
          <GalleryItem key={photo.id} photo={photo} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

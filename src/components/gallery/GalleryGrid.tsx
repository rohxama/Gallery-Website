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
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => handleCategoryChange(category.slug)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.slug
                ? "bg-primary text-background"
                : "bg-surface text-muted hover:text-foreground"
            }`}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredPhotos.map((photo, index) => (
          <GalleryItem key={photo.id} photo={photo} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

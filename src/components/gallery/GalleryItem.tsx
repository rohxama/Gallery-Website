"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Photo } from "@/data/gallery";

interface GalleryItemProps {
  photo: Photo;
  index: number;
}

export function GalleryItem({ photo, index }: GalleryItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: index * 0.08 }}
        className="group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden rounded-xl bg-card border border-white/[0.05] hover:border-primary/20 transition-colors duration-500">
          <div className="aspect-[4/3] relative">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-2 block">
                {photo.category}
              </span>
              <h3 className="heading-font text-xl font-bold text-foreground mb-1">
                {photo.title}
              </h3>
              {photo.description && (
                <p className="text-muted text-sm line-clamp-1">
                  {photo.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0B]/95 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-3 text-muted hover:text-primary transition-colors bg-card rounded-full border border-white/[0.08]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="mt-6 text-center">
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-primary mb-3 block">
                {photo.category}
              </span>
              <h3 className="heading-font text-3xl font-bold text-foreground mb-2">
                {photo.title}
              </h3>
              {photo.description && (
                <p className="text-muted">{photo.description}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

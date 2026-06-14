"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Photo } from "@/data/gallery";

interface Props {
  photo: Photo;
  index: number;
}

export function GalleryItem({ photo, index }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="cursor-pointer group"
        onClick={() => setOpen(true)}
      >
        <div className="relative overflow-hidden bg-card">
          <div className="aspect-[4/3] relative">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-sm font-medium">{photo.title}</h3>
            <p className="text-[10px] text-muted uppercase tracking-wider mt-0.5">
              {photo.category}
            </p>
          </div>
        </div>
      </motion.div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0B]/95 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-muted hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-sm font-medium">{photo.title}</h3>
              {photo.description && (
                <p className="text-xs text-muted mt-1">{photo.description}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

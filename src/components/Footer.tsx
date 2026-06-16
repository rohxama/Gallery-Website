"use client";

import Image from "next/image";

const footerProjects = [
  { name: "Superpower", src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80", className: "w-[120px] h-[160px] sm:w-[140px] sm:h-[180px] md:w-[160px] md:h-[200px]" },
  { name: "Girlfriends", src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80", className: "w-[130px] h-[170px] sm:w-[150px] sm:h-[190px] md:w-[170px] md:h-[210px]" },
  { name: "Character AI", src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80", className: "w-[140px] h-[180px] sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[230px]" },
  { name: "Bastian Bees", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80", className: "w-[150px] h-[200px] sm:w-[170px] sm:h-[220px] md:w-[190px] md:h-[250px]" },
  { name: "Eliza Dolittle", src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80", className: "w-[140px] h-[180px] sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[230px]" },
  { name: "Waverly", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", className: "w-[130px] h-[170px] sm:w-[150px] sm:h-[190px] md:w-[170px] md:h-[210px]" },
  { name: "Timmons", src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80", className: "w-[120px] h-[160px] sm:w-[140px] sm:h-[180px] md:w-[160px] md:h-[200px]" },
  { name: "POGA", src: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=400&q=80", className: "w-[110px] h-[150px] sm:w-[130px] sm:h-[170px] md:w-[150px] md:h-[190px]" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#000] text-white h-full">
      {/* Top Bar */}
      <div className="w-full flex justify-start items-center px-6 sm:px-10 pt-6 sm:pt-8 md:pt-10 pb-4">
        <h2 className="font-[var(--font-oswald)] text-2xl sm:text-3xl md:text-4xl font-bold">
          Brand<sup className="text-sm">®</sup>
        </h2>
      </div>

      {/* Projects Row */}
      <div className="w-full pb-5">
        <div className="flex items-end justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-10">
          {footerProjects.map((project, i) => (
            <div key={i} className="flex flex-col items-start">
              {/* Project Name */}
              <div className="flex items-center gap-1 mb-2">
                <span className="w-2 h-2 rounded-full border border-white/50"></span>
                <span className="text-[10px] sm:text-xs font-medium whitespace-nowrap text-white/80">{project.name}</span>
              </div>
              {/* Project Card */}
              <div className={`relative overflow-hidden rounded-lg bg-gray-800 ${project.className}`}>
                <Image
                  src={project.src}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
                {/* Icon Badge */}
                <div className="absolute top-2 right-2 w-6 h-6 sm:w-7 sm:h-7 bg-white/90 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

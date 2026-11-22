"use client";

import { useState } from "react";

function getInitials(title) {
  return title
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

export default function ProjectLogo({ project, className = "" }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const showImage = project.logo && failedSrc !== project.logo;

  return (
    <div
      className={`flex items-center justify-center overflow-hidden bg-white shrink-0 ${className}`}
    >
      {showImage ? (
        <img
          src={project.logo}
          alt={`${project.title} logo`}
          className="h-full w-full object-contain"
          loading="lazy"
          draggable={false}
          onError={() => setFailedSrc(project.logo)}
        />
      ) : (
        <span aria-hidden className="font-serif font-black text-slate-800">
          {getInitials(project.title)}
        </span>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

export default function InstagramReelCard({ reel }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-black shadow-inner">
        <iframe
          src={`https://www.instagram.com/reel/${reel.id}/embed/`}
          className="w-full h-full border-0 absolute inset-0"
          allowFullScreen
          scrolling="no"
          allow="encrypted-media"
        ></iframe>
      </div>
    );
  }

  return (
    <div
      onClick={() => setIsPlaying(true)}
      className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A1209] to-[#2E2214] shadow-inner flex flex-col justify-between p-5 cursor-pointer group transition-all duration-300 hover:scale-[1.01]"
    >
      {/* Decorative top pattern */}
      <div className="flex items-center justify-between text-white/40">
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Instagram Reel</span>
        {/* Instagram Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/60 group-hover:text-[#D6A451] transition-colors"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </div>

      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/10 group-hover:bg-black/30 transition-all duration-300">
        <div className="h-16 w-16 rounded-full bg-gold/90 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold">
          <Play size={24} fill="currentColor" className="ml-1" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-white/90 drop-shadow-md">
          Play Video
        </span>
      </div>

      {/* Reel Info */}
      <div className="z-10 mt-auto">
        <h4 className="text-sm font-bold text-white leading-snug drop-shadow-md group-hover:text-[#D6A451] transition-colors">
          {reel.title || 'Showroom Video'}
        </h4>
        <p className="text-[10px] text-white/50 mt-1 uppercase tracking-wider">
          Tap to load
        </p>
      </div>
    </div>
  );
}

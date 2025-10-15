"use client";

import React, { useEffect, useState } from 'react';

const confettiColors = [
  '#006A4E', // Deep Green
  '#F42A41', // Red from flag
  '#8AC926', // Yellow-Green
  '#FFD700', // Gold
];

const ConfettiPiece = ({ id, style }: { id: number; style: React.CSSProperties }) => (
  <div
    style={style}
    className="absolute top-0 left-0 w-2 h-2 rounded-full"
  />
);

export function Confetti() {
  const [pieces, setPieces] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const newPieces = Array.from({ length: 100 }).map((_, index) => {
      const style: React.CSSProperties = {
        backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        left: `${Math.random() * 100}%`,
        animation: `fall ${Math.random() * 3 + 2}s ${Math.random() * 2}s linear infinite`,
        transform: `rotate(${Math.random() * 360}deg)`,
      };
      return <ConfettiPiece key={index} id={index} style={style} />;
    });

    setPieces(newPieces);

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      @keyframes fall {
        0% { top: -10%; opacity: 1; }
        100% { top: 110%; opacity: 0; }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
        document.head.removeChild(styleSheet);
    }
  }, []);

  return <div className="absolute inset-0 pointer-events-none z-50">{pieces}</div>;
}

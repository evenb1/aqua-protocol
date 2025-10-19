'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function MouseFollower() {
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed w-8 h-8 rounded-full border-2 border-accent pointer-events-none z-50 mix-blend-difference"
        style={{
          left: cursorX,
          top: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      />
      <motion.div
        className="fixed w-1 h-1 rounded-full bg-accent pointer-events-none z-50"
        style={{
          left: cursorX,
          top: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
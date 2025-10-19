'use client';

import { motion } from 'framer-motion';
import { Droplet, Lock, TrendingUp, Zap, Shield, Coins } from 'lucide-react';

const icons = [
  { Icon: Droplet, delay: 0, x: '10%', y: '20%' },
  { Icon: Lock, delay: 0.5, x: '80%', y: '30%' },
  { Icon: TrendingUp, delay: 1, x: '15%', y: '70%' },
  { Icon: Zap, delay: 1.5, x: '85%', y: '60%' },
  { Icon: Shield, delay: 2, x: '50%', y: '80%' },
  { Icon: Coins, delay: 2.5, x: '90%', y: '15%' },
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.1, 0],
            scale: [0, 1, 0],
            y: [0, -100, -200],
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="absolute"
          style={{ left: x, top: y }}
        >
          <Icon className="w-8 h-8 text-accent" />
        </motion.div>
      ))}
    </div>
  );
}
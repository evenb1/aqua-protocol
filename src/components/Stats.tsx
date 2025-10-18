'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

const stats = [
  { label: 'Total Value Locked', value: 45000000, prefix: '$', suffix: 'M' },
  { label: 'AquaUSD Minted', value: 28000000, prefix: '$', suffix: 'M' },
  { label: 'Active Users', value: 12500, prefix: '', suffix: '+' },
  { label: 'Collateral Ratio', value: 215, prefix: '', suffix: '%' },
];

export default function Stats() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-3xl p-12 md:p-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ 
  stat, 
  index 
}: { 
  stat: typeof stats[0]; 
  index: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (stat.suffix === 'M') {
      return (latest / 1000000).toFixed(1);
    }
    if (stat.suffix === '%') {
      return Math.round(latest).toString();
    }
    return Math.round(latest).toLocaleString();
  });

  useEffect(() => {
    const controls = animate(count, stat.value, {
      duration: 2,
      delay: index * 0.2,
    });
    return controls.stop;
  }, [count, stat.value, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-accent mb-3">
        {stat.prefix}
        <motion.span>{rounded}</motion.span>
        {stat.suffix}
      </div>
      <div className="text-muted">{stat.label}</div>
    </motion.div>
  );
}
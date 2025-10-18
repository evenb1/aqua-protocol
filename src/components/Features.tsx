'use client';

import { motion } from 'framer-motion';
import { Shield, TrendingUp, Zap, Lock, Coins, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Over-Collateralized',
    description: '200% collateralization ratio ensures stability and security for all AquaUSD minted.',
  },
  {
    icon: TrendingUp,
    title: 'Yield-Generating',
    description: 'Your collateral continues earning staking rewards while you borrow against it.',
  },
  {
    icon: Zap,
    title: 'Fixed Fees',
    description: 'No variable interest rates. Pay a simple, predictable 0% minting fee.',
  },
  {
    icon: Lock,
    title: 'Decentralized',
    description: 'Non-custodial protocol. You maintain full control of your assets at all times.',
  },
  {
    icon: Coins,
    title: 'Multi-Collateral',
    description: 'Support for TON, LSTs, and LP tokens. More assets coming soon.',
  },
  {
    icon: Users,
    title: 'Community Governed',
    description: 'AquaDAO enables token holders to participate in protocol decisions.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Built for <span className="text-accent">DeFi</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            A new primitive for capital efficiency on the TON blockchain
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ 
  feature, 
  index 
}: { 
  feature: typeof features[0]; 
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass rounded-2xl p-8 group cursor-pointer"
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
        <feature.icon className="w-6 h-6 text-accent" />
      </div>
      
      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
      <p className="text-muted leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}
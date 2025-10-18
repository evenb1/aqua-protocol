'use client';

import { motion } from 'framer-motion';
import { Shield, AlertCircle, Lock, FileCheck } from 'lucide-react';

const safetyFeatures = [
  {
    icon: Shield,
    title: 'Liquidation Protection',
    description: 'Positions are automatically liquidated at 150% collateral ratio to protect the protocol.',
  },
  {
    icon: AlertCircle,
    title: 'Health Factor Monitoring',
    description: 'Real-time monitoring of your position health with alerts before liquidation risk.',
  },
  {
    icon: Lock,
    title: 'Non-Custodial',
    description: 'Your assets remain in your control. The protocol never takes custody of your funds.',
  },
  {
    icon: FileCheck,
    title: 'Audited Smart Contracts',
    description: 'All contracts have been audited by leading security firms in the industry.',
  },
];

export default function Safety() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Safety <span className="text-accent">First</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Built with security and transparency at its core
          </p>
        </motion.div>

        {/* Safety features grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {safetyFeatures.map((feature, index) => (
            <SafetyCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Collateral ratio visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Understanding Collateral Ratios
          </h3>
          
          <div className="space-y-6">
            <RatioBar 
              label="Safe Zone" 
              percentage={200} 
              color="bg-green-500"
              description="Healthy position with buffer"
            />
            <RatioBar 
              label="Warning Zone" 
              percentage={165} 
              color="bg-yellow-500"
              description="Monitor closely"
            />
            <RatioBar 
              label="Liquidation" 
              percentage={150} 
              color="bg-red-500"
              description="Position will be liquidated"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SafetyCard({ 
  feature, 
  index 
}: { 
  feature: typeof safetyFeatures[0]; 
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass rounded-2xl p-8"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
          <feature.icon className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
          <p className="text-muted leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function RatioBar({
  label,
  percentage,
  color,
  description,
}: {
  label: string;
  percentage: number;
  color: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-bold">{label}</span>
        <span className="text-muted">{percentage}%</span>
      </div>
      <div className="h-3 bg-surface rounded-full overflow-hidden mb-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(percentage / 250) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-full ${color}`}
        />
      </div>
      <p className="text-sm text-muted">{description}</p>
    </div>
  );
}
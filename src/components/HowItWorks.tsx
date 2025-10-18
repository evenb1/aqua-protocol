'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Deposit Collateral',
    description: 'Connect your wallet and deposit TON, LSTs, or LP tokens as collateral.',
  },
  {
    number: '02',
    title: 'Mint AquaUSD',
    description: 'Borrow up to 66% of your collateral value in AquaUSD stablecoins.',
  },
  {
    number: '03',
    title: 'Keep Earning',
    description: 'Your collateral continues generating staking rewards while borrowed.',
  },
  {
    number: '04',
    title: 'Repay Anytime',
    description: 'Return AquaUSD to unlock your collateral. No time limits or penalties.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Four simple steps to unlock liquidity while earning yield
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} isLast={index === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ 
  step, 
  index,
  isLast 
}: { 
  step: typeof steps[0]; 
  index: number;
  isLast: boolean;
}) {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="glass rounded-2xl p-8 h-full"
      >
        <div className="text-6xl font-bold text-accent/20 mb-4">
          {step.number}
        </div>
        
        <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
        <p className="text-muted leading-relaxed">{step.description}</p>
      </motion.div>

      {/* Arrow between steps */}
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
          <ArrowRight className="w-8 h-8 text-accent/30" />
        </div>
      )}
    </div>
  );
}
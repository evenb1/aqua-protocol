'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap, Users } from 'lucide-react';

export default function Bento() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why Choose <span className="text-accent">Aqua</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {/* Large card - top left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 glass rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <TrendingUp className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-3xl font-bold mb-4">Capital Efficiency</h3>
            <p className="text-muted text-lg max-w-md">
              Your collateral keeps earning staking rewards while you borrow. 
              Maximize returns without sacrificing liquidity.
            </p>
          </motion.div>

          {/* Small card - top right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-3xl p-8 group cursor-pointer hover:bg-white/10 transition-colors"
          >
            <Shield className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-bold">Secure</h3>
            <p className="text-muted text-sm">Audited contracts</p>
          </motion.div>

          {/* Small card - middle right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-8 group cursor-pointer hover:bg-white/10 transition-colors"
          >
            <Zap className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-bold">Fast</h3>
            <p className="text-muted text-sm">Instant minting</p>
          </motion.div>

          {/* Medium card - bottom left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 glass rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Users className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-3">Community Governed</h3>
            <p className="text-muted">
              AquaDAO puts protocol decisions in the hands of token holders. 
              Vote on new collateral types, fee structures, and more.
            </p>
          </motion.div>

          {/* Tall card - bottom right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:row-span-2 glass rounded-3xl p-8 flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-white/10 transition-colors"
          >
            <div className="text-6xl font-bold text-accent mb-4">200%</div>
            <h3 className="text-xl font-bold mb-2">Over-Collateralized</h3>
            <p className="text-muted text-sm">Maximum stability and security</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
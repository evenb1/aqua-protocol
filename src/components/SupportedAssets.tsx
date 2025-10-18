'use client';

import { motion } from 'framer-motion';
import { Coins } from 'lucide-react';

const assets = [
  {
    name: 'TON',
    symbol: 'TON',
    type: 'Native Token',
    apy: '4.2%',
  },
  {
    name: 'Tonstakers',
    symbol: 'tsTON',
    type: 'Liquid Staking',
    apy: '5.1%',
  },
  {
    name: 'Bemo',
    symbol: 'stTON',
    type: 'Liquid Staking',
    apy: '4.8%',
  },
  {
    name: 'DeDust LP',
    symbol: 'TON/USDT',
    type: 'Liquidity Pool',
    apy: '12.3%',
  },
  {
    name: 'Storm Trade LP',
    symbol: 'STORM/TON',
    type: 'Liquidity Pool',
    apy: '18.7%',
  },
];

export default function SupportedAssets() {
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
            Supported <span className="text-accent">Assets</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Use your yield-generating tokens as collateral
          </p>
        </motion.div>

        {/* Assets grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assets.map((asset, index) => (
            <AssetCard key={index} asset={asset} index={index} />
          ))}
          
          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: assets.length * 0.1 }}
            className="glass rounded-2xl p-8 flex flex-col items-center justify-center border-dashed"
          >
            <Coins className="w-12 h-12 text-muted mb-4" />
            <h3 className="text-xl font-bold mb-2">More Coming Soon</h3>
            <p className="text-muted text-center text-sm">
              Additional LSTs and LP tokens will be added via governance
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AssetCard({ 
  asset, 
  index 
}: { 
  asset: typeof assets[0]; 
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass rounded-2xl p-8 cursor-pointer group"
    >
      {/* Asset icon placeholder */}
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
        <span className="text-xl font-bold text-accent">
          {asset.symbol.charAt(0)}
        </span>
      </div>

      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{asset.name}</h3>
          <p className="text-sm text-muted">{asset.type}</p>
        </div>
        <div className="text-right">
          <div className="text-accent font-bold">{asset.apy}</div>
          <div className="text-xs text-muted">APY</div>
        </div>
      </div>

      <div className="pt-4 border-t border-white/10">
        <div className="text-sm text-muted">Symbol</div>
        <div className="font-mono text-white">{asset.symbol}</div>
      </div>
    </motion.div>
  );
}
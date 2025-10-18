'use client';

import { motion } from 'framer-motion';
import { Droplets, Github, Twitter, MessageCircle, FileText } from 'lucide-react';

const links = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Supported Assets', href: '#assets' },
    { name: 'Security', href: '#security' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'GitHub', href: '#' },
    { name: 'Audit Reports', href: '#' },
    { name: 'Brand Kit', href: '#' },
  ],
  community: [
    { name: 'Twitter', href: '#' },
    { name: 'Telegram', href: '#' },
    { name: 'Discord', href: '#' },
    { name: 'Blog', href: '#' },
  ],
};

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: MessageCircle, href: '#', label: 'Telegram' },
  { icon: FileText, href: '#', label: 'Docs' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <Droplets className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold">Aqua Protocol</span>
            </motion.div>
            <p className="text-muted mb-6 max-w-sm">
              Decentralized stablecoin protocol on TON. 
              Mint AquaUSD against your yield-generating assets.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-accent/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <FooterColumn title="Product" links={links.product} />
          
          {/* Resources links */}
          <FooterColumn title="Resources" links={links.resources} />
          
          {/* Community links */}
          <FooterColumn title="Community" links={links.community} />
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © 2025 Aqua Protocol. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ 
  title, 
  links 
}: { 
  title: string; 
  links: { name: string; href: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-muted hover:text-white transition-colors text-sm"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
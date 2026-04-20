import { motion, AnimatePresence } from 'framer-motion';
import { X, Mouse, Smartphone, ZoomIn, Navigation, Info } from 'lucide-react';

interface HelpOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const tips = [
  { icon: Mouse, title: 'Look Around', desc: 'Click and drag to rotate the view' },
  { icon: Smartphone, title: 'Mobile', desc: 'Swipe to look around on touch devices' },
  { icon: ZoomIn, title: 'Zoom', desc: 'Use scroll wheel or pinch to zoom in/out' },
  { icon: Navigation, title: 'Navigate', desc: 'Click golden hotspots to move between locations' },
  { icon: Info, title: 'Information', desc: 'Click info hotspots for building details' },
];

const HelpOverlay = ({ isOpen, onClose }: HelpOverlayProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-mits-dark/60"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed inset-x-4 bottom-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 glass-panel rounded-2xl p-6 max-w-lg w-full"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-display font-bold text-primary-foreground">How to Navigate</h2>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors">
                <X className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>
            <div className="space-y-4">
              {tips.map((tip) => (
                <div key={tip.title} className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-mits-gold/20 shrink-0">
                    <tip.icon className="w-5 h-5 text-mits-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary-foreground">{tip.title}</h3>
                    <p className="text-xs text-primary-foreground/70">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HelpOverlay;

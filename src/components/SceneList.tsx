import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Navigation } from 'lucide-react';
import { scenes } from '@/data/scenes';

interface SceneListProps {
  isOpen: boolean;
  currentSceneId: string;
  onClose: () => void;
  onNavigate: (sceneId: string) => void;
}

const SceneList = ({ isOpen, currentSceneId, onClose, onNavigate }: SceneListProps) => {
  const menuScenes = scenes.filter(s => s.showInMenu !== false);
  const aiScenes = menuScenes.filter(s => s.group === 'New Academic Block');
  const otherScenes = menuScenes.filter(s => s.group !== 'New Academic Block');

  const renderSceneButton = (scene: any, i: number) => {
    const isActive = scene.id === currentSceneId;
    return (
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 + (i * 0.05) }}
        key={scene.id}
        onClick={() => { onNavigate(scene.id); onClose(); }}
        className={`group w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 relative overflow-hidden border ${
          isActive
            ? 'bg-mits-gold/10 border-mits-gold/30 shadow-[0_0_20px_rgba(252,211,77,0.1)]'
            : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'
        }`}
      >
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-mits-gold/20 to-transparent opacity-50 pointer-events-none" />
        )}
        
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-white/10">
          <img src={scene.image} alt={scene.title} className="h-full w-full object-cover" />
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isActive
              ? 'bg-mits-gold/70 text-mits-navy'
              : 'bg-black/35 text-white/85 group-hover:bg-primary/65 group-hover:text-white'
          }`}>
            <MapPin className="w-4 h-4" />
          </div>
        </div>
        
        <div className="flex-1 relative z-10">
          <p className={`text-sm font-semibold mb-0.5 transition-colors ${isActive ? 'text-mits-gold' : 'text-white group-hover:text-primary-foreground'}`}>
            {scene.title}
          </p>
          <p className={`text-xs line-clamp-1 transition-colors ${isActive ? 'text-mits-gold/70' : 'text-white/50 group-hover:text-white/70'}`}>
            {scene.description.slice(0, 60)}...
          </p>
        </div>
        
        {isActive && (
          <div className="w-2 h-2 rounded-full bg-mits-gold animate-pulse shadow-[0_0_8px_rgba(252,211,77,1)]" />
        )}
      </motion.button>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 250 }}
            className="fixed left-0 top-0 bottom-0 z-50 w-full max-w-[340px] bg-mits-dark/80 backdrop-blur-2xl border-r border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 bg-white/5 relative flex items-center justify-between shrink-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full -z-10" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                  <Navigation className="w-5 h-5 text-primary" fill="currentColor" fillOpacity={0.2} />
                </div>
                <div>
                  <h2 className="text-xl font-display font-bold text-white tracking-wide">Locations</h2>
                  <p className="text-xs text-primary/80 font-medium uppercase tracking-widest">Select a scene</p>
                </div>
              </div>
              <button 
                onClick={onClose} 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group relative z-10"
              >
                <X className="w-5 h-5 text-white/70 group-hover:text-white group-hover:rotate-90 transition-all duration-300" />
              </button>
            </div>
            
            {/* List */}
            <div className="p-4 space-y-6 overflow-y-auto flex-1 custom-scrollbar">
              {aiScenes.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-display font-bold text-mits-gold uppercase tracking-widest px-2">New Academic Block</h3>
                  <div className="space-y-2">
                    {aiScenes.map((scene, i) => renderSceneButton(scene, i))}
                  </div>
                </div>
              )}
              
              {otherScenes.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-display font-bold text-white/50 uppercase tracking-widest px-2">Other Locations</h3>
                  <div className="space-y-2">
                    {otherScenes.map((scene, i) => renderSceneButton(scene, i + aiScenes.length))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SceneList;

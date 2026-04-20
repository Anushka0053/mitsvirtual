import { motion, AnimatePresence } from 'framer-motion';
import { X, Map as MapIcon, Navigation, Route } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface CampusMapProps {
  isOpen: boolean;
  currentSceneId: string;
  onClose: () => void;
  onNavigate: (sceneId: string) => void;
}

const BUILDINGS = [
  { id: 'gate1', name: 'MITS Main Gate' },
  { id: 'admin', name: 'Admission Sector' },
  { id: 'library', name: 'Central Library' },
  { id: 'ai', name: 'AI Department' },
  { id: 'cse', name: 'CSE & IT Department' },
  { id: 'biotech', name: 'Biotech Dept' },
  { id: 'arch', name: 'Architecture Dept' },
  { id: 'mech', name: 'Mechanical Dept' },
  { id: 'girls', name: 'Girls Hostel' },
  { id: 'boys', name: 'Boys Hostel' },
  { id: 'canteen', name: 'Canteen' }
];

const CampusMap = ({ isOpen, currentSceneId, onClose, onNavigate }: CampusMapProps) => {
  const [mapSource, setMapSource] = useState('/campus_explorer.html');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');

  useEffect(() => {
    if (isOpen) {
      setMapSource('/campus_explorer.html');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === 'CLOSE_MAP_MODAL') {
        setMapSource('/campus_explorer.html');
      }
      
      if (e.data?.type === 'NAVIGATE_TO_SCENE') {
        // Map building IDs to actual scene IDs in the 360 tour
        const sceneMapping: Record<string, string> = {
          'ai': 'ai-1-1',
          'cse': 'cse-entry', 
          'arch': 'archN1',
          'library': 'library-1',
          'admin': 'admin-1',
          'canteen': 'canteen-1',
        };
        const targetScene = sceneMapping[e.data.buildingId] || e.data.buildingId;
        onNavigate(targetScene);
        onClose();
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onNavigate, onClose]);

  const handleShowRoute = () => {
    if (startPoint && endPoint && startPoint !== endPoint) {
      iframeRef.current?.contentWindow?.postMessage({
        type: 'DRAW_ROUTE',
        startId: startPoint,
        endId: endPoint
      }, '*');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 lg:inset-y-16 lg:inset-x-32 z-50 bg-mits-dark/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)] rounded-3xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 md:p-6 border-b border-white/10 bg-white/5 relative overflow-hidden shrink-0">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-mits-gold/50 to-transparent" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-mits-gold/20 flex items-center justify-center border border-mits-gold/30">
                  <MapIcon className="w-5 h-5 text-mits-gold" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-bold text-white tracking-wide">Campus Map</h2>
                  <p className="text-xs text-mits-gold/80 font-medium uppercase tracking-widest hidden sm:block">Interactive Navigation</p>
                </div>
              </div>
              <button 
                onClick={onClose} 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group relative z-10"
              >
                <X className="w-5 h-5 text-white/70 group-hover:text-white group-hover:rotate-90 transition-all duration-300" />
              </button>
            </div>
            
            {/* Main Area */}
            <div className="flex-1 relative w-full h-full overflow-hidden flex flex-col md:flex-row">
              
              {/* Route Planner Overlay (Left Sidebar) */}
              <div className="absolute top-4 left-4 z-10 w-[calc(100%-2rem)] md:w-80 md:static p-4 bg-black/60 backdrop-blur-md border border-white/10 md:border-r border-b-0 md:h-full rounded-2xl md:rounded-none shadow-2xl flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2">
                  <Route className="w-5 h-5 text-mits-primary" />
                  <h3 className="text-white font-semibold tracking-wide">Directions</h3>
                </div>
                
                <div className="flex flex-col gap-3 relative">
                  {/* Decorative path line */}
                  <div className="absolute left-4 top-5 bottom-8 w-[2px] bg-gradient-to-b from-mits-primary/50 to-mits-secondary/50 rounded-full z-0"></div>
                  
                  <div className="relative z-10 flex gap-3 items-center">
                    <div className="w-3 h-3 rounded-full border-[2px] border-mits-primary bg-mits-dark shrink-0 ml-2.5"></div>
                    <select 
                      value={startPoint}
                      onChange={(e) => setStartPoint(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-mits-primary/50 focus:bg-white/10 transition-colors appearance-none"
                    >
                      <option value="" disabled className="text-gray-500 bg-mits-dark">Choose starting point</option>
                      {BUILDINGS.map(b => (
                        <option key={`start-${b.id}`} value={b.id} className="bg-mits-dark text-white">{b.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="relative z-10 flex gap-3 items-center">
                    <div className="w-3 h-3 rounded-full bg-mits-secondary shrink-0 ml-2.5 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
                    <select 
                      value={endPoint}
                      onChange={(e) => setEndPoint(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-mits-secondary/50 focus:bg-white/10 transition-colors appearance-none"
                    >
                      <option value="" disabled className="text-gray-500 bg-mits-dark">Choose destination</option>
                      {BUILDINGS.map(b => (
                        <option key={`end-${b.id}`} value={b.id} className="bg-mits-dark text-white">{b.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <button 
                  onClick={handleShowRoute}
                  disabled={!startPoint || !endPoint || startPoint === endPoint}
                  className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-mits-primary to-mits-secondary text-white font-medium shadow-[0_0_20px_rgba(188,19,254,0.3)] hover:shadow-[0_0_30px_rgba(188,19,254,0.5)] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  Show Route
                </button>
              </div>

              {/* Map Iframe */}
              <div className="flex-1 relative w-full h-full">
                <iframe
                  ref={iframeRef}
                  src={mapSource}
                  className="absolute inset-0 w-full h-full border-0"
                  title="MITS 3D Campus Map"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CampusMap;


import { useState, useCallback, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { scenes, getScene } from '@/data/scenes';
import type { Hotspot } from '@/data/scenes';
import PanoramaViewer from '@/components/PanoramaViewer';
import TourHeader from '@/components/TourHeader';
import InfoPanel from '@/components/InfoPanel';
import CampusMap from '@/components/CampusMap';
import HelpOverlay from '@/components/HelpOverlay';
import SceneList from '@/components/SceneList';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Tour = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialScene = searchParams.get('scene') || 'main-gate';
  const [currentSceneId, setCurrentSceneId] = useState(getScene(initialScene) ? initialScene : 'main-gate');
  const [showInfo, setShowInfo] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showSceneList, setShowSceneList] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentScene = getScene(currentSceneId) || scenes[0];
  const quickScenes = scenes.filter((scene) =>
    ['main-gate', 'ai-department', 'library', 'canteen', 'cse-it-department', 'architecture-department'].includes(scene.id)
  );

  const handleNavigate = useCallback((sceneId: string) => {
    setTransitioning(true);
    setTimeout(() => {
      setHistory(prev => [...prev, currentSceneId]);
      setCurrentSceneId(sceneId);
      setTimeout(() => setTransitioning(false), 100);
    }, 400);
  }, [currentSceneId]);

  const handleShowInfo = useCallback((hotspot: Hotspot) => {
    setSelectedHotspot(hotspot);
    setShowInfo(true);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-mits-dark overflow-hidden">
      {/* Transition overlay */}
      <AnimatePresence>
        {transitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-50 bg-mits-dark"
          />
        )}
      </AnimatePresence>

      {/* Panorama */}
      <PanoramaViewer
        scene={currentScene}
        onNavigate={handleNavigate}
        onShowInfo={handleShowInfo}
      />

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-24 left-4 md:left-6 z-40 flex items-center gap-3 rounded-full border border-white/10 bg-[#1c2330]/88 px-5 py-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all hover:bg-[#222b39]/92 hover:border-white/20 pointer-events-auto group"
      >
        <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
        <span className="text-sm font-semibold tracking-wide">Back</span>
      </button>

      {/* Header */}
      <TourHeader
        sceneTitle={currentScene.title}
        onOpenMap={() => setShowMap(true)}
        onOpenHelp={() => setShowHelp(true)}
        onOpenSceneList={() => setShowSceneList(true)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      <div className="pointer-events-none absolute inset-x-0 top-24 z-20 px-4 md:px-6">
        <div className="mx-auto flex max-w-6xl justify-between gap-4">
          {currentScene.showInMenu !== false && (
            <div className="tour-chip pointer-events-auto hidden max-w-sm rounded-[1.6rem] p-4 md:block transition-all duration-500">
              <p className="text-[11px] uppercase tracking-[0.28em] text-primary">Now Viewing</p>
              <h2 className="mt-2 text-2xl font-display font-bold text-white">{currentScene.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-white/65">{currentScene.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Floor Buttons - Fixed Top Right Styled like Info Chip */}
      <div className="absolute top-24 right-4 md:right-6 z-40 flex flex-col gap-3 pointer-events-none items-end">
        {currentScene.floorLinks?.map((floor) => (
          <button
            key={floor.targetScene}
            onClick={() => handleNavigate(floor.targetScene)}
            className="tour-chip pointer-events-auto w-[140px] sm:w-[160px] text-left rounded-[1.2rem] p-3 md:p-4 transition-all duration-300 hover:-translate-x-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-white/10 hover:border-mits-gold/40 group"
          >
            <div className="flex justify-between items-center mb-1.5">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-primary transition-colors group-hover:text-mits-gold">
                Navigate
              </p>
              <ChevronRight className="w-3.5 h-3.5 text-white/40 group-hover:text-mits-gold transition-colors" />
            </div>
            <h2 className="text-sm sm:text-base font-display font-bold text-white group-hover:text-mits-gold transition-colors">
              {floor.label}
            </h2>
          </button>
        ))}
      </div>

      {/* Bottom bar - scene title */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <div className="p-4 bg-gradient-to-t from-mits-dark/80 to-transparent">
          <p className="text-primary-foreground/60 text-xs font-body text-center">
            MITS Gwalior • 360° Virtual Campus Tour
          </p>
        </div>
      </div>

      {/* Overlays */}
      <InfoPanel
        scene={currentScene}
        hotspot={selectedHotspot}
        isOpen={showInfo}
        onClose={() => setShowInfo(false)}
        onNavigate={handleNavigate}
      />
      <CampusMap
        isOpen={showMap}
        currentSceneId={currentSceneId}
        onClose={() => setShowMap(false)}
        onNavigate={handleNavigate}
      />
      <HelpOverlay isOpen={showHelp} onClose={() => setShowHelp(false)} />
      <SceneList
        isOpen={showSceneList}
        currentSceneId={currentSceneId}
        onClose={() => setShowSceneList(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default Tour;

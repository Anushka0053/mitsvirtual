import { Map, HelpCircle, Home, Maximize, Minimize, List, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface TourHeaderProps {
  sceneTitle: string;
  onOpenMap: () => void;
  onOpenHelp: () => void;
  onOpenSceneList: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

const TourHeader = ({ sceneTitle, onOpenMap, onOpenHelp, onOpenSceneList, isFullscreen, onToggleFullscreen }: TourHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-4 left-0 right-0 z-30 pointer-events-none flex justify-center px-4 w-full">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
        className="flex items-center justify-between pointer-events-auto bg-[linear-gradient(180deg,rgba(12,18,31,0.82),rgba(8,14,25,0.72))] backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.36)] rounded-full px-3 py-2 w-full max-w-5xl transition-all duration-300 hover:border-white/20"
      >
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/')}
            className="rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all duration-300 w-10 h-10"
            title="Home"
          >
            <Home className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-2 px-4 border-l border-white/10 ml-1 pl-3">
            <Navigation className="w-4 h-4 text-mits-gold hidden sm:block" />
            <span className="text-primary-foreground font-display text-sm md:text-base font-semibold tracking-wide truncate max-w-[150px] sm:max-w-xs">{sceneTitle}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1 sm:gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onOpenSceneList} 
            title="Locations"
            className="rounded-full bg-white/5 hover:bg-white/20 transition-all duration-300 w-9 h-9 sm:w-10 sm:h-10 text-primary-foreground/80 hover:text-white"
          >
            <List className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onOpenMap} 
            title="Campus Map"
            className="rounded-full bg-white/5 hover:bg-mits-gold/20 hover:text-mits-gold transition-all duration-300 w-9 h-9 sm:w-10 sm:h-10 text-primary-foreground/80"
          >
            <Map className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
          <div className="w-[1px] h-6 bg-white/10 mx-1 hidden sm:block"></div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onOpenHelp} 
            title="Help"
            className="rounded-full bg-white/5 hover:bg-white/20 transition-all duration-300 w-9 h-9 sm:w-10 sm:h-10 text-primary-foreground/80 hover:text-white"
          >
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onToggleFullscreen} 
            title="Fullscreen"
            className="rounded-full bg-white/5 hover:bg-white/20 transition-all duration-300 w-9 h-9 sm:w-10 sm:h-10 text-primary-foreground/80 hover:text-white hidden sm:flex"
          >
            {isFullscreen ? <Minimize className="w-4 h-4 sm:w-5 sm:h-5" /> : <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default TourHeader;

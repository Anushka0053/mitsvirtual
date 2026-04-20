import { useEffect, useRef, useCallback, useState } from 'react';
import * as THREE from 'three';
import type { Scene as SceneData, Hotspot } from '@/data/scenes';
import { Navigation, Info, ChevronRight } from 'lucide-react';

interface PanoramaViewerProps {
  scene: SceneData;
  onNavigate: (sceneId: string) => void;
  onShowInfo: (hotspot: Hotspot) => void;
}

const PanoramaViewer = ({ scene, onNavigate, onShowInfo }: PanoramaViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const isUserInteracting = useRef(false);
  const lonRef = useRef(scene.initialYaw);
  const latRef = useRef(scene.initialPitch);
  const onPointerDownLon = useRef(0);
  const onPointerDownLat = useRef(0);
  const onPointerDownX = useRef(0);
  const onPointerDownY = useRef(0);
  const fovRef = useRef(75);
  const animFrameRef = useRef(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hotspotPositions, setHotspotPositions] = useState<{ hotspot: Hotspot; x: number; y: number; visible: boolean }[]>([]);

  const updateHotspots = useCallback(() => {
    if (!cameraRef.current || !containerRef.current) return;
    const camera = cameraRef.current;
    const rect = containerRef.current.getBoundingClientRect();

    const positions = scene.hotspots.map((hotspot) => {
      const phi = THREE.MathUtils.degToRad(90 - hotspot.pitch);
      const theta = THREE.MathUtils.degToRad(hotspot.yaw);
      const pos = new THREE.Vector3(
        500 * Math.sin(phi) * Math.cos(theta),
        500 * Math.cos(phi),
        500 * Math.sin(phi) * Math.sin(theta)
      );

      const projected = pos.clone().project(camera);
      const x = (projected.x * 0.5 + 0.5) * rect.width;
      const y = (-projected.y * 0.5 + 0.5) * rect.height;
      const visible = projected.z < 1;

      return { hotspot, x, y, visible };
    });

    setHotspotPositions(positions);
  }, [scene.hotspots]);

  useEffect(() => {
    if (scene.type === 'normal') {
      setIsLoading(false);
      return;
    }

    if (!containerRef.current) return;
    const container = containerRef.current;

    // Setup
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 1, 1100);
    cameraRef.current = camera;

    const threeScene = new THREE.Scene();
    sceneRef.current = threeScene;

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const loader = new THREE.TextureLoader();
    setIsLoading(true);

    loader.load(scene.image, (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const mesh = new THREE.Mesh(geometry, material);
      threeScene.add(mesh);
      setIsLoading(false);
    });

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    lonRef.current = scene.initialYaw;
    latRef.current = scene.initialPitch;

    // Events
    const onPointerDown = (e: PointerEvent) => {
      isUserInteracting.current = true;
      onPointerDownX.current = e.clientX;
      onPointerDownY.current = e.clientY;
      onPointerDownLon.current = lonRef.current;
      onPointerDownLat.current = latRef.current;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isUserInteracting.current) return;
      lonRef.current = (onPointerDownX.current - e.clientX) * 0.15 + onPointerDownLon.current;
      latRef.current = (e.clientY - onPointerDownY.current) * 0.15 + onPointerDownLat.current;
    };

    const onPointerUp = () => {
      isUserInteracting.current = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      fovRef.current = THREE.MathUtils.clamp(fovRef.current + e.deltaY * 0.05, 30, 100);
      camera.fov = fovRef.current;
      camera.updateProjectionMatrix();
    };

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    container.addEventListener('pointerdown', onPointerDown);
    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerup', onPointerUp);
    container.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('resize', onResize);

    // Touch
    let touchStartX = 0, touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        onPointerDownLon.current = lonRef.current;
        onPointerDownLat.current = latRef.current;
        isUserInteracting.current = true;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isUserInteracting.current || e.touches.length !== 1) return;
      lonRef.current = (touchStartX - e.touches[0].clientX) * 0.2 + onPointerDownLon.current;
      latRef.current = (e.touches[0].clientY - touchStartY) * 0.2 + onPointerDownLat.current;
    };
    const onTouchEnd = () => { isUserInteracting.current = false; };

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onTouchEnd);

    // Animate
    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      if (!isUserInteracting.current) {
        lonRef.current -= 0.05;
      }
      latRef.current = Math.max(-85, Math.min(85, latRef.current));
      const phi = THREE.MathUtils.degToRad(90 - latRef.current);
      const theta = THREE.MathUtils.degToRad(lonRef.current);
      const target = new THREE.Vector3(
        500 * Math.sin(phi) * Math.cos(theta),
        500 * Math.cos(phi),
        500 * Math.sin(phi) * Math.sin(theta)
      );
      camera.lookAt(target);
      renderer.render(threeScene, camera);
      updateHotspots();
    };
    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      container.removeEventListener('pointerdown', onPointerDown);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerup', onPointerUp);
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
    };
  }, [scene, updateHotspots]);

  if (scene.type === 'normal') {
    return (
      <div className="relative w-full h-full bg-black flex items-center justify-center overflow-hidden select-none">
        <img src={scene.image} alt={scene.title} className="w-full h-full object-fill pointer-events-none" />
        {scene.hotspots.map((hotspot) => {
          let x = 50 + (hotspot.yaw / 180) * 50;
          let y = 50 - (hotspot.pitch / 90) * 50;
          x = Math.max(5, Math.min(95, x));
          y = Math.max(5, Math.min(95, y));

          return (
            <button
              key={hotspot.id}
              className={`absolute z-10 transform -translate-x-1/2 -translate-y-1/2 group ${hotspot.variant === 'small' ? 'scale-[0.65] origin-right' : ''}`}
              style={{ left: `${x}%`, top: `${y}%` }}
              onClick={(e) => {
                e.stopPropagation();
                if (hotspot.type === 'scene' && hotspot.targetScene) {
                  onNavigate(hotspot.targetScene);
                } else {
                  onShowInfo(hotspot);
                }
              }}
            >
              <div className={`
                relative flex items-center gap-2.5 px-4 py-2.5 rounded-full overflow-hidden transition-all duration-300
                ${hotspot.type === 'scene' 
                  ? 'bg-mits-gold/90 hover:bg-mits-gold shadow-[0_0_20px_rgba(252,211,77,0.4)] hover:shadow-[0_0_30px_rgba(252,211,77,0.6)] border border-mits-gold' 
                  : 'bg-white/10 hover:bg-white/20 shadow-lg backdrop-blur-md border border-white/20 hover:border-white/40'}
                hotspot-pulse group-hover:scale-105
              `}>
                <div className={`absolute inset-[-10px] rounded-full blur-md transition-opacity duration-300 ${
                  hotspot.type === 'scene' ? 'bg-mits-gold/25 opacity-80' : 'bg-primary/20 opacity-60'
                }`} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover:animate-[sweep_1.5s_ease-in-out_infinite] skew-x-12" />
                
                {hotspot.type === 'info' && (
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-primary/40">
                    <Info className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
                <span className={`text-sm font-bold tracking-wide whitespace-nowrap drop-shadow-sm ${
                  hotspot.type === 'scene' ? 'text-mits-navy' : 'text-white'
                }`}>
                  {hotspot.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full h-full cursor-grab active:cursor-grabbing select-none">
      {/* Loading */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-mits-dark">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-mits-gold border-t-transparent rounded-full animate-spin" />
            <p className="text-primary-foreground font-body text-sm">Loading panorama...</p>
          </div>
        </div>
      )}

      {/* Hotspots */}
      {hotspotPositions.map(({ hotspot, x, y, visible }) => (
        visible && (
          <button
            key={hotspot.id}
            className={`absolute z-10 transform -translate-x-1/2 -translate-y-1/2 group ${hotspot.variant === 'small' ? 'scale-[0.65] origin-right' : ''}`}
            style={{ left: x, top: y }}
            onClick={(e) => {
              e.stopPropagation();
              if (hotspot.type === 'scene' && hotspot.targetScene) {
                onNavigate(hotspot.targetScene);
              } else {
                onShowInfo(hotspot);
              }
            }}
            onPointerDown={(e) => e.stopPropagation()}
          >
            <div className={`
              relative flex items-center gap-2.5 px-4 py-2.5 rounded-full overflow-hidden transition-all duration-300
              ${hotspot.type === 'scene' 
                ? 'bg-mits-gold/90 hover:bg-mits-gold shadow-[0_0_20px_rgba(252,211,77,0.4)] hover:shadow-[0_0_30px_rgba(252,211,77,0.6)] border border-mits-gold' 
                : 'bg-white/10 hover:bg-white/20 shadow-lg backdrop-blur-md border border-white/20 hover:border-white/40'}
              hotspot-pulse group-hover:scale-105
            `}>
              <div className={`absolute inset-[-10px] rounded-full blur-md transition-opacity duration-300 ${
                hotspot.type === 'scene' ? 'bg-mits-gold/25 opacity-80' : 'bg-primary/20 opacity-60'
              }`} />
              {/* Highlight sweep effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover:animate-[sweep_1.5s_ease-in-out_infinite] skew-x-12" />
              
              {hotspot.type === 'info' && (
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-primary/40">
                  <Info className="w-3.5 h-3.5 text-white" />
                </div>
              )}
              <span className={`text-sm font-bold tracking-wide whitespace-nowrap drop-shadow-sm ${
                hotspot.type === 'scene' ? 'text-mits-navy' : 'text-white'
              }`}>
                {hotspot.label}
              </span>
            </div>
          </button>
        )
      ))}
    </div>
  );
};

export default PanoramaViewer;

import { useEffect, useRef, useCallback, useState } from 'react';
import * as THREE from 'three';
import type { Scene as SceneData, Hotspot } from '@/data/scenes';
import { Info } from 'lucide-react';

interface PanoramaViewerProps {
  scene: SceneData;
  onNavigate: (sceneId: string) => void;
  onShowInfo: (hotspot: Hotspot) => void;
}

const isArrowHotspot = (label: string) =>
  label === '\u2191' || label === '\u2193' || label === 'â†‘' || label === 'â†“';

const getHotspotClasses = (hotspot: Hotspot) => {
  if (hotspot.type === 'info') {
    return {
      container: 'bg-sky-100/78 border border-sky-200/90 shadow-[0_0_18px_rgba(125,211,252,0.28)] backdrop-blur-md',
      glow: 'bg-sky-200/55 opacity-90',
      text: 'text-slate-800',
      icon: 'bg-white/55',
      iconColor: 'text-slate-700',
    };
  }

  if (hotspot.style === 'exit' || /exit|back/i.test(hotspot.label)) {
    return {
      container: 'bg-red-900/38 border border-red-500/55 shadow-[0_0_18px_rgba(127,29,29,0.32)] backdrop-blur-md',
      glow: 'bg-red-700/30 opacity-90',
      text: 'text-red-50',
      icon: 'bg-red-100/18',
      iconColor: 'text-red-50',
    };
  }

  return {
    container: 'bg-yellow-400/92 border border-yellow-200/95 shadow-[0_0_18px_rgba(250,204,21,0.34)] backdrop-blur-md',
    glow: 'bg-yellow-200/55 opacity-90',
    text: 'text-slate-950',
    icon: 'bg-yellow-50/35',
    iconColor: 'text-slate-950',
  };
};

const PanoramaViewer = ({ scene, onNavigate, onShowInfo }: PanoramaViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
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

    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 1, 1100);
    cameraRef.current = camera;

    const threeScene = new THREE.Scene();
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

    let touchStartX = 0;
    let touchStartY = 0;

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

    const onTouchEnd = () => {
      isUserInteracting.current = false;
    };

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onTouchEnd);

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

  const renderHotspot = (hotspot: Hotspot, position: { left: string | number; top: string | number }) => {
    const hotspotClasses = getHotspotClasses(hotspot);
    const arrowHotspot = isArrowHotspot(hotspot.label);

    return (
      <button
        key={hotspot.id}
        className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 ${hotspot.variant === 'small' ? 'scale-[0.7] origin-right' : ''}`}
        style={position}
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
        <div
          className={`
            relative flex items-center justify-center gap-2 overflow-hidden
            ${arrowHotspot ? 'h-11 w-11 rounded-full sm:h-12 sm:w-12' : 'max-w-[min(72vw,17rem)] rounded-[1rem] px-3.5 py-2 sm:max-w-none'}
            ${hotspotClasses.container}
          `}
        >
          <div className={`absolute inset-[-8px] rounded-full blur-md ${hotspotClasses.glow}`} />

          {hotspot.type === 'info' && (
            <div className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${hotspotClasses.icon}`}>
              <Info className={`h-3.5 w-3.5 ${hotspotClasses.iconColor}`} />
            </div>
          )}

          <span
            className={`${arrowHotspot ? 'text-[1.35rem] leading-none sm:text-[1.45rem]' : 'text-[0.82rem] sm:text-[0.9rem]'} relative z-10 whitespace-nowrap font-semibold tracking-wide ${hotspotClasses.text}`}
          >
            {hotspot.label}
          </span>
        </div>
      </button>
    );
  };

  if (scene.type === 'normal') {
    return (
      <div className="relative flex h-full w-full select-none items-center justify-center overflow-hidden bg-black">
        <img src={scene.image} alt={scene.title} className="h-full w-full object-fill pointer-events-none" />
        {scene.hotspots.map((hotspot) => {
          let x = 50 + (hotspot.yaw / 180) * 50;
          let y = 50 - (hotspot.pitch / 90) * 50;
          x = Math.max(5, Math.min(95, x));
          y = Math.max(5, Math.min(95, y));
          return renderHotspot(hotspot, { left: `${x}%`, top: `${y}%` });
        })}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-full w-full cursor-grab select-none active:cursor-grabbing">
      {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-mits-dark">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-mits-gold border-t-transparent" />
            <p className="font-body text-sm text-primary-foreground">Loading panorama...</p>
          </div>
        </div>
      )}

      {hotspotPositions.map(({ hotspot, x, y, visible }) => {
        if (!visible) return null;
        return renderHotspot(hotspot, { left: x, top: y });
      })}
    </div>
  );
};

export default PanoramaViewer;

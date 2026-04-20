export interface Hotspot {
  id: string;
  pitch: number; // vertical angle (-90 to 90)
  yaw: number;   // horizontal angle (-180 to 180)
  type: 'scene' | 'info';
  targetScene?: string;
  label: string;
  description?: string;
  variant?: 'small' | 'default';
}

export interface Scene {
  id: string;
  title: string;
  description: string;
  image: string;
  initialYaw: number;
  initialPitch: number;
  hotspots: Hotspot[];
  group?: string;
  showInMenu?: boolean;
  facilities?: string[];
  departments?: string[];
  floorLinks?: { label: string; targetScene: string }[];
  mapPosition: { x: number; y: number }; // percentage position on map
  type?: 'panorama' | 'normal';
}

export const scenes: Scene[] = [
  {
    id: 'main-gate',
    title: 'Main Gate',
    description: 'The grand entrance of Madhav Institute of Technology & Science (MITS), Gwalior.',
    image: '/photos/main gate.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'mg-to-mg1', pitch: -5, yaw: 30, type: 'scene', targetScene: 'main-gate-1', label: 'Inside Campus →' }
    ],
    mapPosition: { x: 50, y: 90 },
    showInMenu: true
  },
  {
    id: 'main-gate-1',
    title: 'Campus Entrance Path',
    description: 'Path leading from the main gate.',
    image: '/photos/mits main 1.jpg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'mg1-to-mg2', pitch: -5, yaw: 0, type: 'scene', targetScene: 'main-gate-2', label: 'Forward →' },
      { id: 'mg1-to-mg', pitch: -5, yaw: 180, type: 'scene', targetScene: 'main-gate', label: '← Main Gate' }
    ],
    showInMenu: false,
    mapPosition: { x: 49.5, y: 89 }
  },
  {
    id: 'main-gate-2',
    title: 'Inside Main Gate',
    description: 'Path leading from the main gate into the campus.',
    image: '/photos/mits main 2.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'mg2-to-ai', pitch: -5, yaw: -10, type: 'scene', targetScene: 'ai-main-out', label: 'New Academic Block →' },
      { id: 'mg2-to-mg1', pitch: -5, yaw: 170, type: 'scene', targetScene: 'main-gate-1', label: '← Back' }
    ],
    showInMenu: false,
    mapPosition: { x: 49, y: 88 }
  },
  {
    id: 'ai-main-out',
    title: 'New Academic Block Gate',
    description: 'The Artificial Intelligence & Machine Learning department building.',
    image: '/photos/ai out.jpg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'ai-to-mg2', pitch: -5, yaw: 2, type: 'scene', targetScene: 'main-gate-2', label: '← Main Gate' },
      { id: 'ai-enter', pitch: -2, yaw: -160, type: 'scene', targetScene: 'ai-main-in', label: 'Enter Building →' }
    ],
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-main-in',
    title: 'Inside New Academic Block',
    description: 'Ground Floor of New Academic Block.',
    image: '/photos/ai in.jpg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-ai-main-in', pitch: 15, yaw: 0, type: 'info', label: 'New Academic Block Info', description: 'The central area connects to the corridors, stairs, and the lift for upper floor access.' },
      { id: 'h-g3', pitch: 0, yaw: -90, type: 'scene', targetScene: 'ai-g-3', label: 'Left Corridor' },
      { id: 'h-gr', pitch: 0, yaw: 90, type: 'scene', targetScene: 'ai-g-r', label: 'Right Corridor' },
      { id: 'h-3-2', pitch: 15, yaw: 70, type: 'scene', targetScene: 'ai-3-2', label: '3rd Floor' },
      { id: 'h-2-1', pitch: 0, yaw: 70, type: 'scene', targetScene: 'ai-2-1', label: '2nd Floor' },
      { id: 'h-1', pitch: -15, yaw: 70, type: 'scene', targetScene: 'ai-1', label: '1st Floor' }
    ],
    group: 'New Academic Block',
    showInMenu: true,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-g-r',
    title: 'Right Corridor',
    description: 'Right Corridor.',
    image: '/photos/ai g r.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'h-g6', pitch: 0, yaw: 0, type: 'scene', targetScene: 'ai-g-6', label: '↑' },
      { id: 'h-lift', pitch: 0, yaw: -90, type: 'scene', targetScene: 'ai-lift', label: 'Lift (Left Side)' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 56 }
  },
  {
    id: 'ai-g-6',
    title: 'Right Corridor - Pt 6',
    description: 'Right Corridor.',
    image: '/photos/ai g 6.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'h-g5', pitch: 0, yaw: 0, type: 'scene', targetScene: 'ai-g-5', label: '↑' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 56 }
  },
  {
    id: 'ai-g-5',
    title: 'Right Corridor - Pt 5',
    description: 'Right Corridor.',
    image: '/photos/ai g 5.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'h-g4', pitch: 0, yaw: 0, type: 'scene', targetScene: 'ai-g-4', label: '↑' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 56 }
  },
  {
    id: 'ai-g-4',
    title: 'Right Corridor - Pt 4',
    description: 'Right Corridor.',
    image: '/photos/ai g 4.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'h-cabin-g', pitch: 0, yaw: 0, type: 'scene', targetScene: 'ai-cabin-g', label: '↑' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 56 }
  },
  {
    id: 'ai-cabin-g',
    title: 'Faculty Cabin Ground Floor',
    description: 'Inside the Faculty Cabin on the Ground Floor.',
    image: '/photos/ai cabin g.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-ai-cabin-g', pitch: 15, yaw: 0, type: 'info', label: 'Faculty Cabins', description: 'Offices for faculty members available for academic consultations and mentoring.' }
    ],
    type: 'panorama',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 56 }
  },
  {
    id: 'ai-lift',
    title: 'Lift',
    description: 'Elevator.',
    image: '/photos/ailift1.jpg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [],
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 56 }
  },
  // Left Corridor Path
  {
    id: 'ai-g-3',
    title: 'Left Corridor',
    description: 'Left Corridor.',
    image: '/photos/ai g 3.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'h-g2', pitch: 0, yaw: 0, type: 'scene', targetScene: 'ai-g-2', label: '↑' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 56 }
  },
  {
    id: 'ai-g-2',
    title: 'Left Corridor - Pt 2',
    description: 'Left Corridor.',
    image: '/photos/ai g2.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'h-g1', pitch: 0, yaw: 0, type: 'scene', targetScene: 'ai-g-1', label: '↑' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 56 }
  },
  {
    id: 'ai-g-1',
    title: 'Left Corridor - End',
    description: 'End of Left Corridor.',
    image: '/photos/ai g 1.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'h-wash', pitch: 0, yaw: 0, type: 'scene', targetScene: 'ai-g-wash', label: 'Washroom (Straight) →' },
      { id: 'h-stair', pitch: 0, yaw: 90, type: 'scene', targetScene: 'ai-g-stair', label: 'Stairs (Right) →' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 56 }
  },
  {
    id: 'ai-g-wash',
    title: 'Washroom',
    description: 'Washroom.',
    image: '/photos/ai g wash.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 56 }
  },
  {
    id: 'ai-g-stair',
    title: 'Stairs',
    description: 'Stairs.',
    image: '/photos/ai g stair.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 56 }
  },
  {
    id: 'ai-1',
    title: 'New Academic Block 1st Floor',
    description: '1st Floor.',
    image: '/photos/ai 1(1).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-ai-1', pitch: 15, yaw: 0, type: 'info', label: 'First Floor Overview', description: 'The first floor primarily contains expansive tutorial rooms and seminar halls.' },
      { id: 'f1-to-ai-1-corridor', pitch: 0, yaw: 0, type: 'scene', targetScene: 'ai-1-corridor', label: '↑' },
      { id: 'f1-to-ai-1-2', pitch: -20, yaw: 0, type: 'scene', targetScene: 'ai-1-2', label: '↓' },
      { id: 'f1-to-g', pitch: 30, yaw: 160, type: 'scene', targetScene: 'ai-main-in', label: 'Ground', variant: 'small' },
      { id: 'f1-to-2', pitch: -10, yaw: 160, type: 'scene', targetScene: 'ai-2-1', label: '2nd Flr', variant: 'small' },
      { id: 'f1-to-3', pitch: -30, yaw: 160, type: 'scene', targetScene: 'ai-3-2', label: '3rd Flr', variant: 'small' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: true,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-1-2',
    title: 'AI 1st Floor Path 2',
    description: 'Path on the 1st Floor.',
    image: '/photos/ai 1(2).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'ai-1-2-to-dummy', pitch: -20, yaw: 0, type: 'scene', targetScene: 'ai-1-dummy', label: '↓' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-1-dummy',
    title: 'AI 1st Floor Path',
    description: 'Path on the 1st Floor.',
    image: '/photos/faculty1stcor.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-ai-1-dummy', pitch: 15, yaw: 0, type: 'info', label: 'info', description: 'info' },
      { id: 'ai-1-d-to-2', pitch: 0, yaw: 90, type: 'scene', targetScene: 'ai-1-2', label: '→' },
      { id: 'ai-1-d-to-4', pitch: 0, yaw: -90, type: 'scene', targetScene: 'ai-1-4', label: '←' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-1-4',
    title: 'AI 1st Floor Path 4',
    description: 'Path on the 1st Floor.',
    image: '/photos/ai 1(4).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'ai-1-4-to-3', pitch: 10, yaw: 0, type: 'scene', targetScene: 'ai-1-3', label: '↑' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-1-3',
    title: 'AI 1st Floor Path 3',
    description: 'Path on the 1st Floor.',
    image: '/photos/ai 1(3).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-1-corridor',
    title: 'AI 1st Floor Corridor',
    description: 'Corridor on the 1st Floor.',
    image: '/photos/ai (1).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'ai-1-to-cabin', pitch: 0, yaw: 0, type: 'scene', targetScene: 'ai-cabin-1st', label: '↑' },
      { id: 'ai-1-to-hod', pitch: 0, yaw: 90, type: 'scene', targetScene: 'ai-hod', label: 'HOD Cabin →' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-cabin-1st',
    title: 'Faculty Cabin 1st Floor',
    description: 'Inside the AI Cabin on the 1st Floor.',
    image: '/photos/ai cabin 1st.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-ai-cabin-1st', pitch: 10, yaw: 0, type: 'info', label: 'Faculty Cabin', description: '1st Floor faculty cabin.' }
    ],
    type: 'panorama',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-hod',
    title: 'AI HOD Room',
    description: 'HOD Room for the New Academic Block.',
    image: '/photos/ai (hod).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-ai-hod', pitch: 10, yaw: 0, type: 'info', label: 'Info', description: 'HOD Details' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-2-1',
    title: 'New Academic Block 2nd Floor',
    description: '2nd Floor.',
    image: '/photos/ai 2(1).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-ai-2-1', pitch: 15, yaw: 0, type: 'info', label: 'Second Floor Overview', description: 'This level houses the main computing center and several departmental servers.' },
      { id: 'f2-to-2', pitch: -5, yaw: 0, type: 'scene', targetScene: 'ai-2-2', label: '↑' },
      { id: 'f2-to-4', pitch: -20, yaw: 0, type: 'scene', targetScene: 'ai-2-4', label: '↓' },
      { id: 'f2-to-g', pitch: 30, yaw: 160, type: 'scene', targetScene: 'ai-main-in', label: 'Ground', variant: 'small' },
      { id: 'f2-to-1', pitch: 10, yaw: 160, type: 'scene', targetScene: 'ai-1', label: '1st Flr', variant: 'small' },
      { id: 'f2-to-3', pitch: -30, yaw: 160, type: 'scene', targetScene: 'ai-3-2', label: '3rd Flr', variant: 'small' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: true,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-2-2',
    title: 'New Academic Block 2nd Floor Path 2',
    description: 'Path on the 2nd Floor.',
    image: '/photos/ai 2(2).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'f2-2-to-3', pitch: 10, yaw: 0, type: 'scene', targetScene: 'ai-2-3', label: '↑' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-2-3',
    title: 'New Academic Block 2nd Floor Path 3',
    description: 'Path on the 2nd Floor.',
    image: '/photos/ai 2(3).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'f2-3-to-cabin', pitch: 10, yaw: 0, type: 'scene', targetScene: 'ai-cabin-2nd', label: '↑' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-cabin-2nd',
    title: 'Faculty Cabin 2nd Floor',
    description: 'Inside the Faculty Cabin on the 2nd Floor.',
    image: '/photos/faculty cabin 2nd floor.jpg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-ai-cabin-2nd', pitch: 10, yaw: 0, type: 'info', label: 'Faculty Cabin', description: '2nd Floor faculty cabin.' }
    ],
    type: 'panorama',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-2-4',
    title: 'New Academic Block 2nd Floor Path 4',
    description: 'Path on the 2nd Floor.',
    image: '/photos/ai 2(4).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-ai-provc', pitch: 15, yaw: 50, type: 'info', label: 'Info', description: 'Pro Vice-Chancellor Office' },
      { id: 'f2-4-to-5', pitch: 5, yaw: 0, type: 'scene', targetScene: 'ai-2-5', label: '↑' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-2-5',
    title: 'New Academic Block 2nd Floor Path 5',
    description: 'Path on the 2nd Floor.',
    image: '/photos/ai 2(5).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'f2-5-to-6', pitch: 10, yaw: 0, type: 'scene', targetScene: 'ai-2-6', label: '↑' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-2-6',
    title: 'New Academic Block 2nd Floor Path 6',
    description: 'Path on the 2nd Floor.',
    image: '/photos/ai 2(6).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'f2-6-to-7', pitch: 10, yaw: 0, type: 'scene', targetScene: 'ai-2-7', label: '↑' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-2-7',
    title: 'New Academic Block 2nd Floor Path 7',
    description: 'Path on the 2nd Floor.',
    image: '/photos/ai 2(7).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-3-2',
    title: 'New Academic Block 3rd Floor',
    description: '3rd Floor.',
    image: '/photos/ai 3(1).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-ai-3-2', pitch: 15, yaw: 0, type: 'info', label: 'Third Floor Overview', description: 'A quiet floor dedicated to specialized research labs and thesis defense rooms.' },
      { id: 'f3-to-path-mid', pitch: 0, yaw: 0, type: 'scene', targetScene: 'ai-3-path-mid', label: '↑' },
      { id: 'f3-to-path4', pitch: -20, yaw: 0, type: 'scene', targetScene: 'ai-3-path4', label: '↓' },
      { id: 'f3-to-g', pitch: 30, yaw: 160, type: 'scene', targetScene: 'ai-main-in', label: 'Ground', variant: 'small' },
      { id: 'f3-to-1', pitch: 10, yaw: 160, type: 'scene', targetScene: 'ai-1', label: '1st Flr', variant: 'small' },
      { id: 'f3-to-2', pitch: -10, yaw: 160, type: 'scene', targetScene: 'ai-2-1', label: '2nd Flr', variant: 'small' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: true,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-3-path-mid',
    title: 'AI 3rd Floor Path',
    description: 'Path on the 3rd Floor.',
    image: '/photos/ai 3 (2).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'ai-3-pmid-to-p1', pitch: 0, yaw: 0, type: 'scene', targetScene: 'ai-3-path1', label: '↑' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-3-path1',
    title: 'AI 3rd Floor Path 1',
    description: 'Path on the 3rd Floor.',
    image: '/photos/ai3.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-ai-vc', pitch: 15, yaw: 45, type: 'info', label: 'VC Office', description: 'Vice-Chancellor Office' },
      { id: 'ai-3-p1-to-p2', pitch: 0, yaw: 0, type: 'scene', targetScene: 'ai-3-path2', label: '↑' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-3-path2',
    title: 'AI 3rd Floor Path 2',
    description: 'Path on the 3rd Floor.',
    image: '/photos/ai 3.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'ai-3-p2-to-p3', pitch: 0, yaw: 0, type: 'scene', targetScene: 'ai-3-path3', label: '↑' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-3-path3',
    title: 'AI 3rd Floor Path 3',
    description: 'Path on the 3rd Floor.',
    image: '/photos/ai3 (3).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-3-path4',
    title: 'AI 3rd Floor Path 4',
    description: 'Path on the 3rd Floor.',
    image: '/photos/ai 3 (4).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'ai-3-p4-to-p5', pitch: 10, yaw: 0, type: 'scene', targetScene: 'ai-3-path5', label: '↑' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-3-path5',
    title: 'AI 3rd Floor Path 5',
    description: 'Path on the 3rd Floor.',
    image: '/photos/ai 3(5).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'ai-3-p5-to-p6', pitch: 10, yaw: 0, type: 'scene', targetScene: 'ai-3-path6', label: '↑' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-3-path6',
    title: 'AI 3rd Floor Path 6',
    description: 'Path on the 3rd Floor.',
    image: '/photos/ai 3(6).jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'ai-3-p6-to-cabin', pitch: 10, yaw: 0, type: 'scene', targetScene: 'ai-cabin-3rd', label: '↑' }
    ],
    type: 'normal',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-cabin-3rd',
    title: 'Faculty Cabin 3rd Floor',
    description: 'Inside the Faculty Cabin on the 3rd Floor.',
    image: '/photos/ai cabin 3rd.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-ai-cabin-3rd', pitch: 10, yaw: 0, type: 'info', label: 'Faculty Cabin', description: '3rd Floor faculty cabin.' }
    ],
    type: 'panorama',
    group: 'New Academic Block',
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'library',
    title: 'Central Library',
    description: 'The Central Library of MITS.',
    image: '/photos/library.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-library', pitch: 15, yaw: 0, type: 'info', label: 'Central Library', description: 'A treasure trove of knowledge with thousands of academic texts, journals, and a modern reading area.' },
      { id: 'lib-to-inside', pitch: -5, yaw: 0, type: 'scene', targetScene: 'library1', label: 'Inside' },
      { id: 'lib-to-ai', pitch: -5, yaw: -120, type: 'scene', targetScene: 'ai-main-out', label: '← New Academic Block' }
    ],
    showInMenu: true,
    mapPosition: { x: 65, y: 45 }
  },
  {
    id: 'library1',
    title: 'Inside Central Library',
    description: 'Entrance area of the Central Library.',
    image: '/photos/library1.jpg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'lib1-to-lib2', pitch: 0, yaw: 0, type: 'scene', targetScene: 'library2', label: '↑' }
    ],
    showInMenu: false,
    mapPosition: { x: 65, y: 45 }
  },
  {
    id: 'library2',
    title: 'Central Library Interior',
    description: 'Inside the Central Library.',
    image: '/photos/library2.jpg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [],
    showInMenu: false,
    mapPosition: { x: 65, y: 45 }
  },
  {
    id: 'canteen',
    title: 'Canteen & Mandir',
    description: 'The college canteen and mandir area.',
    image: '/photos/canteen mandir.jpg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-canteen', pitch: 15, yaw: 0, type: 'info', label: 'Cafeteria', description: 'The hub of campus social life offering a variety of refreshments and meals.' },
      { id: 'cant-to-inside', pitch: 0, yaw: 45, type: 'scene', targetScene: 'canteen-normal', label: 'Canteen Inside →' }
    ],
    showInMenu: true,
    mapPosition: { x: 30, y: 40 }
  },
  {
    id: 'canteen-normal',
    title: 'Inside Canteen',
    description: 'Inside the college canteen.',
    image: '/photos/canteeninside.jpg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [],
    type: 'panorama',
    showInMenu: false,
    mapPosition: { x: 29, y: 41 }
  },
  {
    id: 'girls-hostel',
    title: 'Girls Hostel',
    description: 'The Girls Hostel.',
    image: '/photos/girlHostel.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-girls-hostel', pitch: 10, yaw: -10, type: 'info', label: 'Girls Hostel', description: 'Providing safe and comfortable on-campus accommodation for female students.' },
      { id: 'gh-to-gh2', pitch: -5, yaw: -10, type: 'scene', targetScene: 'gh2', label: 'Inside' }
    ],
    showInMenu: true,
    mapPosition: { x: 80, y: 30 }
  },
  {
    id: 'gh2',
    title: 'Girls Hostel Entrance',
    description: 'Path leading to the Girls Hostel entrance.',
    image: '/photos/gh2.jpg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'gh2-to-gh3', pitch: 0, yaw: 0, type: 'scene', targetScene: 'gh3', label: 'Inside' }
    ],
    showInMenu: false,
    mapPosition: { x: 80, y: 30 }
  },
  {
    id: 'gh3',
    title: 'Inside Girls Hostel',
    description: 'Inside view of the Girls Hostel.',
    image: '/photos/gh3.jpg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [],
    showInMenu: false,
    mapPosition: { x: 80, y: 30 }
  },
  {
    id: 'cse-it-department',
    title: 'CSE, IT Department',
    description: 'A view of the Computer Science and Information Technology department.',
    image: '/photos/cs&it.jpg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-cse-it', pitch: 15, yaw: 0, type: 'info', label: 'CSE & IT Block', description: 'Central hub for coding, networking labs, and advanced software engineering studies.' },
      { id: 'csit-to-ai', pitch: -5, yaw: -90, type: 'scene', targetScene: 'ai-main-out', label: 'New Academic Block →' }
    ],
    showInMenu: true,
    mapPosition: { x: 40, y: 52 }
  },
  {
    id: 'architecture-department',
    title: 'Architecture Department',
    description: 'A view of the Architecture Department.',
    image: '/photos/architecture.jpg',
    initialYaw: 0,
    initialPitch: 0,
    type: 'panorama',
    hotspots: [
      { id: 'info-architecture', pitch: 15, yaw: 0, type: 'info', label: 'Architecture Block', description: 'Features drafting studios, model making workshops, and exhibition spaces.' },
      { id: 'arch-to-inside', pitch: 0, yaw: 0, type: 'scene', targetScene: 'architecture-inside', label: 'Inside Architecture →' }
    ],
    showInMenu: true,
    mapPosition: { x: 35, y: 58 }
  },
  {
    id: 'architecture-inside',
    title: 'Inside Architecture',
    description: 'Inside the Architecture Department.',
    image: '/photos/architecture inside.jpg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [],
    showInMenu: false,
    mapPosition: { x: 34, y: 59 }
  },
  {
    id: 'jubilee-gate',
    title: 'Jubilee Gate',
    description: 'The Diamond Jubilee Gate of MITS.',
    image: '/photos/jubliee gate.jpg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-jubilee-gate', pitch: 15, yaw: 0, type: 'info', label: 'Diamond Jubilee Gate', description: 'Constructed to celebrate the illustrious 60-year milestone of the institute.' }
    ],
    showInMenu: true,
    mapPosition: { x: 50, y: 90 }
  },
  {
    id: 'main-hall',
    title: 'Main Hall',
    description: 'The Main Hall of the institute.',
    image: '/photos/main hall.jpg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-main-hall', pitch: 0, yaw: 0, type: 'info', label: 'Main Hall', description: 'Central gathering space for events and key functions.' },
      { id: 'hall-to-inside', pitch: 0, yaw: 0, type: 'scene', targetScene: 'main-hall-inside', label: 'Inside Main Hall →' }
    ],
    showInMenu: true,
    mapPosition: { x: 50, y: 50 }
  },
  {
    id: 'main-hall-inside',
    title: 'Inside Main Hall',
    description: 'Inside view of the Main Hall.',
    image: '/photos/main hall in.jpg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-main-hall-inside', pitch: 5, yaw: 0, type: 'info', label: 'Main Hall Info', description: 'Official information about the Main Hall and its role in campus events.' }
    ],
    showInMenu: false,
    mapPosition: { x: 50, y: 50 }
  },
  {
    id: 'medical-dispensary',
    title: 'Medical Dispensary',
    description: 'The campus medical dispensary.',
    image: '/photos/mits dispencary.jpg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-dispensary', pitch: 0, yaw: 0, type: 'info', label: 'Medical Dispensary', description: 'Provides medical assistance and first aid for students and staff.' }
    ],
    showInMenu: true,
    mapPosition: { x: 60, y: 40 }
  }
];

export const getScene = (id: string): Scene | undefined => scenes.find(s => s.id === id);

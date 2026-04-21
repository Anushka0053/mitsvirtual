export interface Hotspot {
  id: string;
  pitch: number; // vertical angle (-90 to 90)
  yaw: number; // horizontal angle (-180 to 180)
  type: 'scene' | 'info';
  targetScene?: string;
  label: string;
  description?: string;
  variant?: 'small' | 'default';
  style?: 'navigation' | 'exit';
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
      { id: 'mg-to-mg1', pitch: -5, yaw: 30, type: 'scene', targetScene: 'main-gate-1', label: 'INSIDE_CAMPUS', style: 'navigation' }
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
      { id: 'mg1-to-mg2', pitch: -5, yaw: 0, type: 'scene', targetScene: 'main-gate-2', label: 'FORWARD', style: 'navigation' },
      { id: 'mg1-to-mg', pitch: -5, yaw: 180, type: 'scene', targetScene: 'main-gate', label: 'MAIN_GATE', style: 'navigation' },
      { id: 'mg1-to-hall', pitch: -2, yaw: 72, type: 'scene', targetScene: 'main-hall', label: 'MAIN_HALL', style: 'navigation' }
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
      { id: 'mg2-to-gh', pitch: -15, yaw: -10, type: 'scene', targetScene: 'girls-hostel', label: 'GIRLS_HOSTEL', style: 'navigation' },
      { id: 'mg2-to-dispensary', pitch: -15, yaw: 170, type: 'scene', targetScene: 'medical-dispensary', label: 'MEDICAL_DISPENSARY', style: 'navigation' },
      { id: 'mg2-to-mg1', pitch: -5, yaw: 170, type: 'scene', targetScene: 'main-gate-1', label: 'BACK', style: 'exit' },
      { id: 'mg2-to-ai', pitch: -5, yaw: -10, type: 'scene', targetScene: 'ai-main-out', label: 'NEW_ACADEMIC_BLOCK', style: 'navigation' }
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
      { id: 'ai-to-mg2', pitch: -15, yaw: -82, type: 'scene', targetScene: 'main-gate-2', label: 'MAIN_GATE_PATH', style: 'navigation' },
      { id: 'ai-enter', pitch: -2, yaw: -160, type: 'scene', targetScene: 'ai-main-in', label: 'ENTER_BUILDING', style: 'navigation' },
      { id: 'ai-to-jubilee', pitch: -14, yaw: 48, type: 'scene', targetScene: 'jubilee-gate', label: 'JUBILEE_GATE', style: 'navigation' },
      { id: 'ai-to-gh', pitch: -3, yaw: -82, type: 'scene', targetScene: 'girls-hostel', label: 'GIRLS_HOSTEL', style: 'navigation' },
      { id: 'ai-to-architecture', pitch: -6, yaw: 48, type: 'scene', targetScene: 'architecture-department', label: 'ARCHITECTURE', style: 'navigation' }
    ],
    showInMenu: false,
    mapPosition: { x: 45, y: 55 }
  },
  {
    id: 'ai-main-in',
    title: 'Inside New Academic Block',
    description: 'Ground Floor of New Academic Block.',
    image: '/photos/ai main in.jpeg',
    initialYaw: 0,
    initialPitch: 0,
    hotspots: [
      { id: 'info-ai-main-in', pitch: 15, yaw: 0, type: 'info', label: 'New Academic Block Info', description: 'The central area connects to the corridors, stairs, and the lift for upper floor access.' },
      { id: 'h-g3', pitch: 0, yaw: -90, type: 'scene', targetScene: 'ai-g-3', label: 'Left Corridor', style: 'navigation' },
      { id: 'h-gr', pitch: 0, yaw: 90, type: 'scene', targetScene: 'ai-g-r', label: 'Right Corridor', style: 'navigation' },
      { id: 'h-3-2', pitch: 15, yaw: 70, type: 'scene', targetScene: 'ai-3-2', label: '3rd Floor', variant: 'small', style: 'navigation' },
      { id: 'h-2-1', pitch: 0, yaw: 70, type: 'scene', targetScene: 'ai-2-1', label: '2nd Floor', variant: 'small', style: 'navigation' },
      { id: 'h-1', pitch: -15, yaw: 70, type: 'scene', targetScene: 'ai-1', label: '1st Floor', variant: 'small', style: 'navigation' },
      { id: 'ai-main-exit', pitch: -12, yaw: 155, type: 'scene', targetScene: 'ai-main-out', label: 'EXIT', style: 'exit' }
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
      { id: 'h-wash', pitch: 0, yaw: 0, type: 'scene', targetScene: 'ai-g-wash', label: 'Washroom (Straight)' },
      { id: 'h-stair', pitch: 0, yaw: 90, type: 'scene', targetScene: 'ai-g-stair', label: 'Stairs (Right)' }
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
      { id: 'ai-1-2-to-dummy', pitch: -20, yaw: 0, type: 'scene', targetScene: 'ai-1-dummy', label: '↓' },
      { id: 'ai-1-2-to-1', pitch: 10, yaw: 0, type: 'scene', targetScene: 'ai-1', label: '↑' }
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
      { id: 'ai-1-d-to-2', pitch: 0, yaw: 90, type: 'scene', targetScene: 'ai-1-2', label: 'RIGHT' },
      { id: 'ai-1-d-to-4', pitch: 0, yaw: -90, type: 'scene', targetScene: 'ai-1-4', label: 'LEFT' }
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
      { id: 'ai-1-4-to-3', pitch: 10, yaw: 0, type: 'scene', targetScene: 'ai-1-3', label: '↑' },
      { id: 'ai-1-4-to-dummy', pitch: -20, yaw: 0, type: 'scene', targetScene: 'ai-1-dummy', label: '↓' }
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
    hotspots: [
      { id: 'ai-1-3-to-4', pitch: -20, yaw: 0, type: 'scene', targetScene: 'ai-1-4', label: '↓' },
      { id: 'ai-1-3-exit', pitch: -10, yaw: 160, type: 'scene', targetScene: 'ai-1', label: 'EXIT', style: 'exit' }
    ],
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
      { id: 'ai-1-to-hod', pitch: 0, yaw: 90, type: 'scene', targetScene: 'ai-hod', label: 'HOD Cabin' },
      { id: 'ai-1-corridor-to-1', pitch: -20, yaw: 0, type: 'scene', targetScene: 'ai-1', label: '↓' }
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
      { id: 'info-ai-cabin-1st', pitch: 10, yaw: 0, type: 'info', label: 'Faculty Cabin', description: '1st Floor faculty cabin.' },
      { id: 'ai-cabin1-to-corridor', pitch: 0, yaw: 180, type: 'scene', targetScene: 'ai-1-corridor', label: 'BACK' },
      { id: 'ai-cabin1-exit', pitch: -10, yaw: 160, type: 'scene', targetScene: 'ai-1', label: 'EXIT', style: 'exit' }
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
      { id: 'f2-2-to-3', pitch: 10, yaw: 0, type: 'scene', targetScene: 'ai-2-3', label: '↑' },
      { id: 'f2-2-to-1', pitch: -20, yaw: 0, type: 'scene', targetScene: 'ai-2-1', label: '↓' }
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
      { id: 'f2-3-to-cabin', pitch: 10, yaw: 0, type: 'scene', targetScene: 'ai-cabin-2nd', label: '↑' },
      { id: 'f2-3-to-2', pitch: -20, yaw: 0, type: 'scene', targetScene: 'ai-2-2', label: '↓' }
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
      { id: 'info-ai-cabin-2nd', pitch: 10, yaw: 0, type: 'info', label: 'Faculty Cabin', description: '2nd Floor faculty cabin.' },
      { id: 'ai-cabin2-exit', pitch: -10, yaw: 160, type: 'scene', targetScene: 'ai-2-1', label: 'EXIT', style: 'exit' }
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
      { id: 'info-ai-provc', pitch: 15, yaw: 50, type: 'info', label: 'Pro VC Office', description: 'Pro Vice-Chancellor Office' },
      { id: 'f2-4-to-5', pitch: 5, yaw: 0, type: 'scene', targetScene: 'ai-2-5', label: '↑' },
      { id: 'f2-4-to-5-down', pitch: -20, yaw: 0, type: 'scene', targetScene: 'ai-2-5', label: '↓' }
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
      { id: 'f2-5-to-6', pitch: 10, yaw: 0, type: 'scene', targetScene: 'ai-2-6', label: '↑' },
      { id: 'f2-5-to-4', pitch: -20, yaw: 0, type: 'scene', targetScene: 'ai-2-4', label: '↓' }
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
      { id: 'f2-6-to-7', pitch: 10, yaw: 0, type: 'scene', targetScene: 'ai-2-7', label: '↑' },
      { id: 'f2-6-to-5', pitch: -20, yaw: 0, type: 'scene', targetScene: 'ai-2-5', label: '↓' }
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
      { id: 'lib-to-inside', pitch: -5, yaw: 0, type: 'scene', targetScene: 'library1', label: 'INSIDE_LIBRARY', style: 'navigation' },
      { id: 'lib-to-csit', pitch: -5, yaw: -120, type: 'scene', targetScene: 'cse-it-department', label: 'CSIT_DEPARTMENT', style: 'navigation' },
      { id: 'lib-to-canteen', pitch: -4, yaw: 55, type: 'scene', targetScene: 'canteen', label: 'CANTEEN', style: 'navigation' }
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
      { id: 'lib1-to-lib2', pitch: 0, yaw: 0, type: 'scene', targetScene: 'library2', label: 'FORWARD', style: 'navigation' },
      { id: 'lib1-exit', pitch: -12, yaw: 155, type: 'scene', targetScene: 'library', label: 'EXIT', style: 'exit' }
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
    hotspots: [
      { id: 'lib2-to-lib1', pitch: 18, yaw: 0, type: 'scene', targetScene: 'library1', label: '↓', style: 'navigation' },
      { id: 'lib2-exit', pitch: -12, yaw: 155, type: 'scene', targetScene: 'library', label: 'EXIT', style: 'exit' }
    ],
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
      { id: 'cant-to-inside', pitch: 0, yaw: 45, type: 'scene', targetScene: 'canteen-normal', label: 'INSIDE_CANTEEN', style: 'navigation' },
      { id: 'cant-to-library', pitch: -4, yaw: 145, type: 'scene', targetScene: 'library', label: 'LIBRARY', style: 'navigation' },
      { id: 'cant-to-hall', pitch: -3, yaw: -62, type: 'scene', targetScene: 'main-hall', label: 'MAIN_HALL', style: 'navigation' }
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
    hotspots: [
      { id: 'canteen-inside-exit', pitch: -10, yaw: 160, type: 'scene', targetScene: 'canteen', label: 'EXIT', style: 'exit' }
    ],
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
      { id: 'gh-to-ai', pitch: -16, yaw: 155, type: 'scene', targetScene: 'ai-main-out', label: 'NEW_ACADEMIC_BLOCK', style: 'navigation' },
      { id: 'gh-to-mg2', pitch: -8, yaw: 155, type: 'scene', targetScene: 'main-gate-2', label: 'OUTSIDE', style: 'navigation' },
      { id: 'gh-to-gh2', pitch: -5, yaw: -10, type: 'scene', targetScene: 'gh2', label: 'INSIDE_HOSTEL', style: 'navigation' }
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
      { id: 'gh2-to-gh3', pitch: 0, yaw: 0, type: 'scene', targetScene: 'gh3', label: 'INSIDE', style: 'navigation' }
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
    hotspots: [
      { id: 'gh3-exit', pitch: -10, yaw: 160, type: 'scene', targetScene: 'girls-hostel', label: 'EXIT', style: 'exit' }
    ],
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
      { id: 'csit-to-library', pitch: -5, yaw: 150, type: 'scene', targetScene: 'library', label: 'LIBRARY', style: 'navigation' },
      { id: 'csit-to-architecture', pitch: -5, yaw: -90, type: 'scene', targetScene: 'architecture-department', label: 'ARCHITECTURE', style: 'navigation' }
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
      { id: 'info-architecture', pitch: 8, yaw: 144, type: 'info', label: 'Architecture Block', description: 'Features drafting studios, model making workshops, and exhibition spaces.' },
      { id: 'arch-to-inside', pitch: -2, yaw: 158, type: 'scene', targetScene: 'architecture-inside', label: 'INSIDE_ARCHITECTURE', style: 'navigation' },
      { id: 'arch-to-ai', pitch: -4, yaw: -62, type: 'scene', targetScene: 'ai-main-out', label: 'NEW_ACADEMIC_BLOCK', style: 'navigation' },
      { id: 'arch-to-csit', pitch: 0, yaw: 0, type: 'scene', targetScene: 'cse-it-department', label: 'CSIT_DEPARTMENT', style: 'navigation' },
      { id: 'arch-to-jubilee', pitch: -4, yaw: 62, type: 'scene', targetScene: 'jubilee-gate', label: 'JUBILEE_GATE', style: 'navigation' }
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
    hotspots: [
      { id: 'architecture-inside-exit', pitch: -10, yaw: 160, type: 'scene', targetScene: 'architecture-department', label: 'EXIT', style: 'exit' }
    ],
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
      { id: 'info-jubilee-gate', pitch: 15, yaw: 0, type: 'info', label: 'Diamond Jubilee Gate', description: 'Constructed to celebrate the illustrious 60-year milestone of the institute.' },
      { id: 'jubilee-to-architecture', pitch: -14, yaw: 85, type: 'scene', targetScene: 'architecture-department', label: 'ARCHITECTURE', style: 'navigation' },
      { id: 'jubilee-to-ai', pitch: -4, yaw: 85, type: 'scene', targetScene: 'ai-main-out', label: 'NEW_ACADEMIC_BLOCK', style: 'navigation' }
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
      { id: 'hall-to-inside', pitch: -5, yaw: 155, type: 'scene', targetScene: 'main-hall-inside', label: 'INSIDE_MAIN_HALL', style: 'navigation' },
      { id: 'hall-to-canteen', pitch: -3, yaw: -62, type: 'scene', targetScene: 'canteen', label: 'CANTEEN', style: 'navigation' },
      { id: 'hall-to-gate', pitch: 0, yaw: 0, type: 'scene', targetScene: 'main-gate-1', label: 'MAIN_GATE', style: 'navigation' }
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
      { id: 'info-main-hall-inside', pitch: 5, yaw: 0, type: 'info', label: 'Main Hall Info', description: 'Official information about the Main Hall and its role in campus events.' },
      { id: 'main-hall-inside-exit', pitch: -10, yaw: 160, type: 'scene', targetScene: 'main-hall', label: 'EXIT', style: 'exit' }
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
      { id: 'info-dispensary', pitch: 0, yaw: 0, type: 'info', label: 'Medical Dispensary', description: 'Provides medical assistance and first aid for students and staff.' },
      { id: 'dispensary-to-ai', pitch: -4, yaw: -60, type: 'scene', targetScene: 'ai-main-out', label: 'NEW_ACADEMIC_BLOCK', style: 'navigation' },
      { id: 'dispensary-to-gate', pitch: -8, yaw: 150, type: 'scene', targetScene: 'main-gate-1', label: 'MAIN_GATE', style: 'navigation' }
    ],
    showInMenu: true,
    mapPosition: { x: 60, y: 40 }
  }
];

const aiSceneOverrides: Record<string, Partial<Scene>> = {
  'ai-main-in': {
    image: '/photos/ai main in.jpeg',
    hotspots: [
      { id: 'info-ai-main-in', pitch: 15, yaw: 0, type: 'info', label: 'New Academic Block Info', description: 'The central area connects to the corridors, stairs, and the lift for upper floor access.' },
      { id: 'h-g3', pitch: 0, yaw: -90, type: 'scene', targetScene: 'ai-g-3', label: 'Left Corridor', style: 'navigation' },
      { id: 'h-gr', pitch: 0, yaw: 90, type: 'scene', targetScene: 'ai-g-r', label: 'Right Corridor', style: 'navigation' },
      { id: 'h-3-2', pitch: 15, yaw: 70, type: 'scene', targetScene: 'ai-3-2', label: '3rd Floor', variant: 'small', style: 'navigation' },
      { id: 'h-2-1', pitch: 0, yaw: 70, type: 'scene', targetScene: 'ai-2-1', label: '2nd Floor', variant: 'small', style: 'navigation' },
      { id: 'h-1', pitch: -15, yaw: 70, type: 'scene', targetScene: 'ai-1', label: '1st Floor', variant: 'small', style: 'navigation' },
      { id: 'ai-main-exit', pitch: -12, yaw: 155, type: 'scene', targetScene: 'ai-main-out', label: 'EXIT', style: 'exit' }
    ]
  },
  'ai-g-r': {
    hotspots: [
      { id: 'ai-g-r-up', pitch: 12, yaw: 0, type: 'scene', targetScene: 'ai-g-6', label: '↑', style: 'navigation' },
      { id: 'ai-g-r-down', pitch: -18, yaw: 0, type: 'scene', targetScene: 'ai-main-in', label: '↓', style: 'navigation' }
    ]
  },
  'ai-g-6': {
    hotspots: [
      { id: 'ai-g-6-up', pitch: 12, yaw: 0, type: 'scene', targetScene: 'ai-g-5', label: '↑', style: 'navigation' },
      { id: 'ai-g-6-down', pitch: -18, yaw: 0, type: 'scene', targetScene: 'ai-g-r', label: '↓', style: 'navigation' }
    ]
  },
  'ai-g-5': {
    hotspots: [
      { id: 'ai-g-5-up', pitch: 12, yaw: 0, type: 'scene', targetScene: 'ai-g-4', label: '↑', style: 'navigation' },
      { id: 'ai-g-5-down', pitch: -18, yaw: 0, type: 'scene', targetScene: 'ai-g-6', label: '↓', style: 'navigation' }
    ]
  },
  'ai-g-4': {
    hotspots: [
      { id: 'ai-g-4-up', pitch: 12, yaw: 0, type: 'scene', targetScene: 'ai-cabin-g', label: '↑', style: 'navigation' },
      { id: 'ai-g-4-down', pitch: -18, yaw: 0, type: 'scene', targetScene: 'ai-g-5', label: '↓', style: 'navigation' }
    ]
  },
  'ai-cabin-g': {
    hotspots: [
      { id: 'info-ai-cabin-g', pitch: 15, yaw: 0, type: 'info', label: 'Faculty Cabins', description: 'Offices for faculty members available for academic consultations and mentoring.' },
      { id: 'ai-cabin-g-back', pitch: -6, yaw: 0, type: 'scene', targetScene: 'ai-g-4', label: '↓', style: 'navigation' },
      { id: 'ai-cabin-g-exit', pitch: -12, yaw: 155, type: 'scene', targetScene: 'ai-main-in', label: 'EXIT', style: 'exit' }
    ]
  },
  'ai-g-3': {
    hotspots: [
      { id: 'ai-g-3-up', pitch: 12, yaw: 0, type: 'scene', targetScene: 'ai-g-2', label: '↑', style: 'navigation' },
      { id: 'ai-g-3-down', pitch: -18, yaw: 0, type: 'scene', targetScene: 'ai-main-in', label: '↓', style: 'navigation' }
    ]
  },
  'ai-g-2': {
    hotspots: [
      { id: 'ai-g-2-up', pitch: 12, yaw: 0, type: 'scene', targetScene: 'ai-g-1', label: '↑', style: 'navigation' },
      { id: 'ai-g-2-down', pitch: -18, yaw: 0, type: 'scene', targetScene: 'ai-g-3', label: '↓', style: 'navigation' }
    ]
  },
  'ai-g-1': {
    hotspots: [
      { id: 'ai-g-1-wash', pitch: 0, yaw: -30, type: 'scene', targetScene: 'ai-g-wash', label: 'Washroom', style: 'navigation' },
      { id: 'ai-g-1-stair', pitch: 0, yaw: 30, type: 'scene', targetScene: 'ai-g-stair', label: 'Stairs', style: 'navigation' },
      { id: 'ai-g-1-down', pitch: -18, yaw: 0, type: 'scene', targetScene: 'ai-g-2', label: '↓', style: 'navigation' },
      { id: 'ai-g-1-exit', pitch: -12, yaw: 155, type: 'scene', targetScene: 'ai-main-in', label: 'EXIT', style: 'exit' }
    ]
  },
  'ai-g-wash': {
    hotspots: [
      { id: 'ai-g-wash-down', pitch: -6, yaw: 0, type: 'scene', targetScene: 'ai-g-1', label: '↓', style: 'navigation' },
      { id: 'ai-g-wash-exit', pitch: -12, yaw: 155, type: 'scene', targetScene: 'ai-main-in', label: 'EXIT', style: 'exit' }
    ]
  },
  'ai-g-stair': {
    hotspots: [
      { id: 'ai-g-stair-down', pitch: -6, yaw: 0, type: 'scene', targetScene: 'ai-g-1', label: '↓', style: 'navigation' }
    ]
  },

  'ai-2-7': {
    hotspots: [
      { id: 'ai-2-7-down', pitch: -18, yaw: 0, type: 'scene', targetScene: 'ai-2-6', label: '↓', style: 'navigation' },
      { id: 'ai-2-7-exit', pitch: -12, yaw: 155, type: 'scene', targetScene: 'ai-2-1', label: 'EXIT', style: 'exit' }
    ]
  },
  'ai-3-2': {
    hotspots: [
      { id: 'info-ai-3-2', pitch: 15, yaw: -105, type: 'info', label: 'Third Floor Overview', description: 'A quiet floor dedicated to specialized research labs and thesis defense rooms.' },
      { id: 'ai-3-2-up', pitch: 12, yaw: 0, type: 'scene', targetScene: 'ai-3-path-mid', label: '↑', style: 'navigation' },
      { id: 'ai-3-2-path4', pitch: -18, yaw: 0, type: 'scene', targetScene: 'ai-3-path4', label: '↓', style: 'navigation' },
      { id: 'f3-to-g', pitch: 30, yaw: 160, type: 'scene', targetScene: 'ai-main-in', label: 'Ground', variant: 'small', style: 'navigation' },
      { id: 'f3-to-1', pitch: 10, yaw: 160, type: 'scene', targetScene: 'ai-1', label: '1st Flr', variant: 'small', style: 'navigation' },
      { id: 'f3-to-2', pitch: -10, yaw: 160, type: 'scene', targetScene: 'ai-2-1', label: '2nd Flr', variant: 'small', style: 'navigation' }
    ]
  },
  'ai-3-path-mid': {
    hotspots: [
      { id: 'ai-3-vc-info', pitch: 15, yaw: 45, type: 'info', label: 'VC Office', description: 'Vice-Chancellor Office' },
      { id: 'ai-3-path-mid-up', pitch: 12, yaw: 0, type: 'scene', targetScene: 'ai-3-path1', label: '↑', style: 'navigation' },
      { id: 'ai-3-path-mid-down', pitch: -18, yaw: 0, type: 'scene', targetScene: 'ai-3-2', label: '↓', style: 'navigation' }
    ]
  },
  'ai-3-path1': {
    hotspots: [
      { id: 'ai-3-path1-up', pitch: 12, yaw: 0, type: 'scene', targetScene: 'ai-3-path3', label: '↑', style: 'navigation' },
      { id: 'ai-3-path1-down', pitch: -18, yaw: 0, type: 'scene', targetScene: 'ai-3-path-mid', label: '↓', style: 'navigation' }
    ]
  },
  'ai-3-path3': {
    hotspots: [
      { id: 'ai-3-path3-down', pitch: -18, yaw: 0, type: 'scene', targetScene: 'ai-3-path1', label: '↓', style: 'navigation' },
      { id: 'ai-3-path3-exit', pitch: -12, yaw: 155, type: 'scene', targetScene: 'ai-3-2', label: 'EXIT', style: 'exit' }
    ]
  },
  'ai-3-path4': {
    hotspots: [
      { id: 'ai-3-path4-up', pitch: 12, yaw: 0, type: 'scene', targetScene: 'ai-3-path5', label: '↑', style: 'navigation' },
      { id: 'ai-3-path4-down', pitch: -18, yaw: 0, type: 'scene', targetScene: 'ai-3-2', label: '↓', style: 'navigation' }
    ]
  },
  'ai-3-path5': {
    hotspots: [
      { id: 'ai-3-path5-up', pitch: 12, yaw: 0, type: 'scene', targetScene: 'ai-3-path6', label: '↑', style: 'navigation' },
      { id: 'ai-3-path5-down', pitch: -18, yaw: 0, type: 'scene', targetScene: 'ai-3-path4', label: '↓', style: 'navigation' }
    ]
  },
  'ai-3-path6': {
    hotspots: [
      { id: 'ai-3-path6-up', pitch: 12, yaw: 0, type: 'scene', targetScene: 'ai-cabin-3rd', label: '↑', style: 'navigation' },
      { id: 'ai-3-path6-down', pitch: -18, yaw: 0, type: 'scene', targetScene: 'ai-3-path5', label: '↓', style: 'navigation' }
    ]
  },
  'ai-cabin-3rd': {
    hotspots: [
      { id: 'info-ai-cabin-3rd', pitch: 10, yaw: 0, type: 'info', label: 'Faculty Cabin', description: '3rd Floor faculty cabin.' },
      { id: 'ai-cabin-3rd-back', pitch: -6, yaw: 0, type: 'scene', targetScene: 'ai-3-path6', label: '↓', style: 'navigation' },
      { id: 'ai-cabin-3rd-exit', pitch: -12, yaw: 155, type: 'scene', targetScene: 'ai-3-2', label: 'EXIT', style: 'exit' }
    ]
  }
};

for (const scene of scenes) {
  const override = aiSceneOverrides[scene.id];
  if (override) {
    Object.assign(scene, override);
  }
}

export const getScene = (id: string): Scene | undefined => scenes.find((scene) => scene.id === id);

import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Building2, BookOpen, Layers, Building, ChevronRight, Calendar, Microscope, Users, MonitorSmartphone, Mail, Phone, ExternalLink } from 'lucide-react';
import type { Scene, Hotspot } from '@/data/scenes';

interface InfoPanelProps {
  scene: Scene;
  hotspot?: Hotspot | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sceneId: string) => void;
}

const InfoPanel = ({ scene, hotspot, isOpen, onClose, onNavigate }: InfoPanelProps) => {
  const title = hotspot?.label || scene.title;
  const description = hotspot?.description || scene.description;
  const toPublicAsset = (path: string) => path.startsWith('public/') ? `/${path.slice(7)}` : path;

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const facultyData = [
    { name: 'Dr. Praveen Bansal', designation: 'Associate Professor and Head of CIoT', photo: 'public/FACULTY/praveen_bansal.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-iot-2/praveen-bansal', email: 'pbansal444@mitsgwalior.in', phone: '9827577549' },
    { name: 'Dr. Kaushal Pratap Sengar', designation: 'Assistant Professor', photo: 'public/FACULTY/kaushal_pratap_sengar.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-iot-2/dr-kaushal-pratap-sengar', email: 'kaushalsengar@mitsgwalior.in', phone: '7581831949' },
    { name: 'Dr. Dhananjay Bisen', designation: 'Assistant Professor', photo: 'public/FACULTY/dhananjay_bisen.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-iot-2/dr-dhananjay-bisen', email: 'dhananjay@mitsgwalior.in', phone: '9993331506' },
    { name: 'Dr. Aditya Dubey', designation: 'Assistant Professor', photo: '', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-iot-2/dr-aditya-dubey', email: 'dubeyaditya65@mitsgwalior.in', phone: '9425114751' },
    { name: 'Dr. Murli Manohar', designation: 'Assistant Professor', photo: 'public/FACULTY/murli_manohar.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-iot-2/dr-murli-manohar', email: 'murlimanohar@mitsgwalior.in', phone: '9907016922' }
  ];

  const caiFacultyData = [
    { name: 'Dr. Anu Sayal', designation: 'Associate Professor', photo: 'public/FACULTY/anu.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/dr-anu-sayal', email: 'anusayal@mitsgwalior.in', phone: 'Not listed' },
    { name: 'Prof. Archana Acharya', designation: 'Assistant Professor', photo: 'public/FACULTY/archana.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/pro-archana-acharya', email: 'archna.acharya17@gmail.com', phone: 'Not listed' },
    { name: 'Dr. Shubha Mishra', designation: 'Assistant Professor', photo: 'public/FACULTY/shubha.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/shubha-mishra', email: 'shubha@mitsgwalior.in', phone: 'Not listed' },
    { name: 'Dr. Hardev Singh Pal', designation: 'Assistant Professor', photo: 'public/FACULTY/hardev.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/dr-hardev-singh-pal', email: 'HardevPal@mitsgwalior.in', phone: '91-XXXXXXXXXX' },
    { name: 'Dr. Bhagat Singh Raghuwanshi', designation: 'Assistant Professor', photo: 'public/FACULTY/bsr.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/dr-bhagat-singh-raghuwanshi', email: 'bhagat@mitsgwalior.in', phone: 'Not listed' },
    { name: 'Dr. Pawan Dubey', designation: 'Assistant Professor', photo: 'public/FACULTY/pawan.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/dr-pawan-dubey', email: 'pawand@mitsgwalior.in', phone: '9911654322' },
    { name: 'Dr. Neeraj Mishra', designation: 'Assistant Professor', photo: 'public/FACULTY/neeraj.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/dr-neeraj-mishra', email: 'mishraneeraj@mitsgwalior.in', phone: '7973245088' },
    { name: 'Dr. Tej Singh', designation: 'Assistant Professor', photo: 'public/FACULTY/tej.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/dr-tej-singh', email: 'tejs@mitsgwalior.in', phone: 'Not listed' }
  ];

  const ranaFacultyData = [
    { name: 'Dr. Arun Kumar Rana', designation: 'Assistant Professor', photo: 'public/FACULTY/ak.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/arun-kumar-2', email: 'arun.vsrana@mitsgwalior.in', phone: 'Not listed' }
  ];

  const hodData = [
    { name: 'Dr. Rajni Ranjan Singh Makwana', designation: 'Associate Professor & Head (CAI)', photo: 'public/FACULTY/hodai.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/dr-rajni-ranjan-singh-makwana-2', email: 'rrsingh@mitsgwalior.in', phone: 'Not listed' }
  ];

  const caiSecondFloorFacultyData = [
    { name: 'Dr. Abhishek Dixit', designation: 'Assistant Professor & Coordinator (Head of CST)', photo: 'public/FACULTY/hodcst.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-csbs-2/abhishek-dixit', email: 'abhishekdixit@mitsgwalior.in', phone: '07000480998' },
    { name: 'Dr. Sumit Dhariwal', designation: 'Assistant Professor', photo: 'public/FACULTY/sumit.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/dr-sumit-dhariwal', email: 'sumitdhariwal@mitsgwalior.in', phone: '9752070470' },
    { name: 'Dr. Sunil Kumar Shukla', designation: 'Assistant Professor', photo: 'public/FACULTY/sunil.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/dr-sunil-kumar-shukla', email: 'sunilshukla@mitsgwalior.in', phone: '9131231387' },
    { name: 'Prof. Nandkishore Joshi', designation: 'Assistant Professor', photo: 'public/FACULTY/joshi.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/prof-nand-kishore-joshi', email: 'nandkishore@mitsgwalior.in', phone: '9425114704' },
    { name: 'Dr. Vibha Tiwari', designation: 'Assistant Professor', photo: 'public/FACULTY/vibha.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/dr-vibha-tiwari', email: 'vibhatiwari@mitsgwalior.in', phone: '8109673523' },
    { name: 'Dr. Tejaswita Mishra', designation: 'Assistant Professor', photo: 'public/FACULTY/tejasvita.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-csbs-2/dr-tejaswita-mishra', email: 'tejaswita@mitsgwalior.in', phone: '+91-9109985297' },
    { name: 'Prof. Ramnaresh Sharma', designation: 'Assistant Professor', photo: 'public/FACULTY/ram.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/prof-ramnaresh-sharma', email: 'ramcse1983@mitsgwalior.in', phone: '9754063682' }
  ];

  const caiThirdFloorFacultyData = [
    { name: 'Dr. Satyam Omar', designation: 'Assistant Professor', photo: 'public/FACULTY/satyam.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/dr-satyam-omar', email: 'satyamomar@mitsgwalior.in', phone: '+91-9454157582' },
    { name: 'Dr. Abhishek Bhatt', designation: 'Assistant Professor', photo: 'public/FACULTY/ab.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/dr-abhishek-bhatt', email: 'abhishekbhatt@mitsgwalior.in', phone: '+91-9039328245' },
    { name: 'Dr. Gulshan Soni', designation: 'Assistant Professor', photo: 'public/FACULTY/gulshan.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-csbs-2/dr-gulshan-soni', email: 'gulshansoni@mitsgwalior.in', phone: '7587416809' },
    { name: 'Dr. Namita Arya', designation: 'Assistant Professor', photo: 'public/FACULTY/namita.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-iot-2/dr-namita-arya', email: 'namitaarya@mitsgwalior.in', phone: '8279535987' },
    { name: 'Dr. Devanshu Tiwari', designation: 'Assistant Professor', photo: 'public/FACULTY/devanshu.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-csbs-2/dr-devanshu-tiwari', email: 'devanshutiwari@mitsgwalior.in', phone: '9713840152' },
    { name: 'Prof. Utkarsh Sharma', designation: 'Assistant Professor', photo: 'public/FACULTY/utkarsh.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-csbs-2/utkarsh-sharma', email: 'utkarshsharma770@mitsgwalior.in', phone: '8269149178' },
    { name: 'Dr. Shradha Dubey', designation: 'Assistant Professor', photo: 'public/FACULTY/shradha.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-csbs-2/dr-shradha-dubey', email: 'shradhadubey@mitsgwalior.in', phone: '8989695527' },
    { name: 'Dr. Suchitra Agarwal', designation: 'Assistant Professor', photo: 'public/FACULTY/suchitra.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-it-2', email: 'suchitraagarwal@mitsgwalior.in', phone: '9425121234' },
    { name: 'Dr. Saurabh Kumar Rajput', designation: 'Assistant Professor', photo: 'public/FACULTY/saurabh.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-iot-2/saurabh-kumar-rajput', email: 'saurabh9march@mitsgwalior.in', phone: '9555969573' },
    { name: 'Dr. Mir Shahnawaz Ahmad', designation: 'Assistant Professor', photo: 'public/FACULTY/mir.png', profileUrl: 'https://web.mitsgwalior.in/faculty-profiles-cai/mir-shahnawaz-ahmad-2', email: 'mirshahnawaz888@mitsgwalior.in', phone: '7006080550' }
  ];

  const renderFacultyList = (data: any[]) => {
    return data.map((faculty, idx) => (
      <motion.a
        href={faculty.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        key={idx}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 + idx * 0.1 }}
        className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 hover:border-mits-gold/50 transition-all cursor-pointer group relative overflow-hidden"
      >
        <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-4 h-4 text-mits-gold" />
        </div>
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 bg-black/50 shrink-0">
          {faculty.photo ? (
            <img src={toPublicAsset(faculty.photo)} alt={faculty.name} className="w-full h-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-white/70">
              {faculty.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white group-hover:text-mits-gold transition-colors">{faculty.name}</p>
          <p className="text-xs text-mits-gold mb-1.5">{faculty.designation}</p>
          <div className="flex flex-col gap-1">
            {faculty.email && faculty.email !== 'Not listed' && (
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-white/40" />
                <span className="text-[11px] text-white/70 truncate" title={faculty.email}>{faculty.email}</span>
              </div>
            )}
            {faculty.phone && faculty.phone !== 'Not listed' && faculty.phone !== '91-XXXXXXXXXX' && (
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-white/40" />
                <span className="text-[11px] text-white/70">{faculty.phone}</span>
              </div>
            )}
          </div>
        </div>
      </motion.a>
    ));
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
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 250 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-mits-dark/80 backdrop-blur-2xl border-l border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-y-auto"
          >
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="p-8 space-y-8 relative"
            >
              {/* Decorative top blur */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full -z-10" />

              <motion.div variants={staggerItem} className="flex items-start justify-between border-b border-white/10 pb-6">
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                    <MapPin className="w-5 h-5 text-primary" fill="currentColor" fillOpacity={0.2} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-white tracking-tight leading-tight mb-1">{title}</h2>
                    <p className="text-xs font-body text-mits-gold tracking-widest uppercase font-semibold">Location Info</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 rounded-full hover:bg-white/10 transition-colors group z-10"
                >
                  <X className="w-5 h-5 text-white/70 group-hover:text-white group-hover:rotate-90 transition-all duration-300" />
                </button>
              </motion.div>

              <motion.div variants={staggerItem} className="relative">
                <Layers className="absolute -left-2 -top-2 w-12 h-12 text-white/5 -z-10" />
                <p className="text-white/80 leading-relaxed text-[15px] font-light">{description}</p>
              </motion.div>

              {hotspot?.id === 'info-ai-main-in' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                        <Building2 className="w-4 h-4 text-mits-gold" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">About the Building</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-white/80">
                      <li className="flex items-start gap-3">
                        <Calendar className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span><strong>Inauguration:</strong> March 10, 2024 (Constructed in 2023-24)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Users className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span><strong>Dedicated to:</strong> Center for Artificial Intelligence, Center for Internet of Things (CIoT), and Center for Computer Science and Technology.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                        <Microscope className="w-4 h-4 text-sky-400" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Ground Floor Specifications</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <MonitorSmartphone className="w-4 h-4 text-sky-300" />
                        <span><strong>Rooms 004 & 005:</strong> Designated Labs</span>
                      </li>
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <MonitorSmartphone className="w-4 h-4 text-sky-300" />
                        <span><strong>Room 007:</strong> CIoT Lab</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {hotspot?.id === 'info-ai-cabin-g' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                      <Users className="w-4 h-4 text-mits-gold" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-wide">CIoT Faculty Directory</h3>
                  </div>
                  <div className="space-y-3">
                    {renderFacultyList(facultyData)}
                  </div>
                </motion.div>
              )}

              {hotspot?.id === 'info-ai-1' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                        <Building2 className="w-4 h-4 text-mits-gold" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">First Floor Overview</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-white/80">
                      <li className="flex items-start gap-3">
                        <Building className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>Part of the New Academic Block.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Users className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>Primarily used for Center for Artificial Intelligence (AI) classes.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                        <Microscope className="w-4 h-4 text-sky-400" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">First Floor Specifications</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <MonitorSmartphone className="w-4 h-4 text-sky-300" />
                        <span><strong>Rooms 104 & 105:</strong> Designated labs where practical sessions are conducted.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {hotspot?.id === 'info-ai-cabin-1st' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                      <Users className="w-4 h-4 text-mits-gold" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-wide">CAI Faculty Directory (1st Floor)</h3>
                  </div>
                  <div className="space-y-3">
                    {renderFacultyList(caiFacultyData)}
                  </div>
                </motion.div>
              )}

              {hotspot?.id === 'info-ai-1-dummy' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                      <Users className="w-4 h-4 text-mits-gold" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-wide">Faculty Information</h3>
                  </div>
                  <div className="space-y-3">
                    {renderFacultyList(ranaFacultyData)}
                  </div>
                </motion.div>
              )}

              {hotspot?.id === 'info-ai-hod' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                      <Users className="w-4 h-4 text-mits-gold" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-wide">HOD Details</h3>
                  </div>
                  
                  <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                    <div className="p-5 flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b border-white/10 relative">
                      <div className="absolute right-3 top-3">
                        <a href="https://web.mitsgwalior.in/faculty-profiles-cai/dr-rajni-ranjan-singh-makwana-2" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 text-mits-gold hover:text-white transition-colors" />
                        </a>
                      </div>
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-mits-gold/50 bg-black/50 shrink-0">
                        <img src={toPublicAsset('public/FACULTY/hodai.png')} alt="Dr. Rajni Ranjan" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 text-center sm:text-left mt-2 sm:mt-0">
                        <h4 className="text-lg font-bold text-white">Dr. Rajni Ranjan Singh Makwana</h4>
                        <p className="text-sm text-mits-gold mb-2">Associate Professor & Head (CAI)</p>
                        <div className="flex flex-col gap-1 items-center sm:items-start">
                          <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3 text-white/40" />
                            <span className="text-xs text-white/70">rrsingh@mitsgwalior.in</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 space-y-5">
                      <div>
                        <h5 className="text-sm font-semibold text-mits-gold mb-2 flex items-center gap-2"><BookOpen className="w-3 h-3"/> Education</h5>
                        <ul className="space-y-2 text-xs text-white/80">
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span><strong>Ph.D.</strong> (Computer Science & Engineering) - MANIT, Bhopal</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span><strong>M.Tech.</strong> (Information Security) - MANIT, Bhopal</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span><strong>B.Tech.</strong> (Computer Science & Engineering) - SATI, Vidisha</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-mits-gold mb-2 flex items-center gap-2"><Building2 className="w-3 h-3"/> Key Responsibilities</h5>
                        <ul className="space-y-2 text-xs text-white/80">
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span>HoD "Centre for Artificial Intelligence" at MITS, Gwalior (July 2023 - Present)</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span>Member of Internal Quality Assurance Cell (IQAC) & Academic Development Cell (ADC)</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span>Web Manager & In-charge of MOOCs development Centre</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-mits-gold mb-2 flex items-center gap-2"><Layers className="w-3 h-3"/> Research & Patents</h5>
                        <ul className="space-y-2 text-xs text-white/80">
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span><strong>Patent:</strong> "END-USER MEANINGLESS UNPRONOUNCEABLE ONE TIME PASSWORD (EMU-OTP) WITH DYNAMIC ONE TIME PASSWORD VIRTUAL KEYBOARD" (App No: 202311008390)</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span>Numerous research publications in reputed domains including Network Forensics, Intrusion Detection, and Anomaly Analysis.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {hotspot?.id === 'info-ai-2-1' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                        <Building2 className="w-4 h-4 text-mits-gold" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Second Floor Overview</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-white/80">
                      <li className="flex items-start gap-3">
                        <Building className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>Part of the New Academic Block. Includes important administrative and academic spaces.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Users className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>Dedicated to activities related to the Center for Artificial Intelligence (AI).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Building2 className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>The <strong>Pro Vice-Chancellor’s Office</strong> is located on this floor.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                        <Microscope className="w-4 h-4 text-sky-400" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Room Specifics</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <MonitorSmartphone className="w-4 h-4 text-sky-300" />
                        <span><strong>Room 204:</strong> Robotics Lab</span>
                      </li>
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <MonitorSmartphone className="w-4 h-4 text-sky-300" />
                        <span><strong>Rooms 203 & 205:</strong> Designated Labs</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {hotspot?.id === 'info-ai-cabin-2nd' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                      <Users className="w-4 h-4 text-mits-gold" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-wide">CAI Faculty Directory (2nd Floor)</h3>
                  </div>
                  <div className="space-y-3">
                    {renderFacultyList(caiSecondFloorFacultyData)}
                  </div>
                </motion.div>
              )}

              {hotspot?.id === 'info-ai-provc' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                      <Building2 className="w-4 h-4 text-mits-gold" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-wide">Administrator Profile</h3>
                  </div>
                  
                  <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                    <div className="p-5 flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b border-white/10 relative">
                      <div className="absolute right-3 top-3">
                        <a href="https://web.mitsgwalior.in/faculty-profiles-ece-2/dr-manjaree-pandit" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 text-mits-gold hover:text-white transition-colors" />
                        </a>
                      </div>
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-mits-gold/50 bg-black/50 shrink-0">
                        <img src={toPublicAsset('public/FACULTY/provice.png')} alt="Dr. Manjaree Pandit" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 text-center sm:text-left mt-2 sm:mt-0">
                        <h4 className="text-lg font-bold text-white">Dr. Manjaree Pandit</h4>
                        <p className="text-sm text-mits-gold mb-2">Pro Vice-Chancellor</p>
                        <div className="flex flex-col gap-1 items-center sm:items-start">
                          <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3 text-white/40" />
                            <span className="text-xs text-white/70">manjaree_p@mitsgwalior.in</span>
                          </div>
                          {/* <div className="flex items-center gap-2">
                            <Phone className="w-3 h-3 text-white/40" />
                            <span className="text-xs text-white/70">9826954902</span>
                          </div> */}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 space-y-5">
                      <div>
                        <h5 className="text-sm font-semibold text-mits-gold mb-2 flex items-center gap-2"><BookOpen className="w-3 h-3"/> Education</h5>
                        <ul className="space-y-2 text-xs text-white/80">
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span><strong>Ph.D.</strong> - Jiwaji University, Gwalior (2001)</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span><strong>M.E.</strong> (Electrical Engineering) - MACT Bhopal (1989)</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span><strong>B.E.</strong> (Electrical Engineering) - M.I.T.S. Gwalior (1984)</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-mits-gold mb-2 flex items-center gap-2"><Building2 className="w-3 h-3"/> Responsibilities</h5>
                        <ul className="space-y-2 text-xs text-white/80">
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span>Pro Vice-Chancellor, MITS Gwalior</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span>Dean, Faculty of Engineering & Technology (since July 2024)</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span>Editor of Engineering Applications of Artificial Intelligence (Elsevier)</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-mits-gold mb-2 flex items-center gap-2"><Layers className="w-3 h-3"/> Research & Impact</h5>
                        <ul className="space-y-2 text-xs text-white/80">
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span>Specialized in Nature-inspired algorithms, ANN, and Fuzzy neural networks in power systems.</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span>Published over 75+ Research papers in International Journals.</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span>Successfully guided 70+ PG dissertations and 7 Ph.D. candidates.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {hotspot?.id === 'info-ai-3-2' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                        <Building2 className="w-4 h-4 text-mits-gold" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Third Floor Overview</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-white/80">
                      <li className="flex items-start gap-3">
                        <Building className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>Part of the New Academic Block. Includes important administrative and academic spaces.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Users className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>Dedicated to activities related to the Center for Computer Science and Technology (CST).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Building2 className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>The <strong>Vice-Chancellor’s Office</strong> is located on this floor.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                        <Microscope className="w-4 h-4 text-sky-400" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Room Specifics</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <MonitorSmartphone className="w-4 h-4 text-sky-300" />
                        <span><strong>Labs:</strong> HPC, AR/VR Lab, and Code Lab</span>
                      </li>
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <MonitorSmartphone className="w-4 h-4 text-sky-300" />
                        <span><strong>Room 302:</strong> Designated Lab</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {hotspot?.id === 'info-ai-cabin-3rd' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                      <Users className="w-4 h-4 text-mits-gold" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-wide">Faculty Directory (3rd Floor)</h3>
                  </div>
                  <div className="space-y-3">
                    {renderFacultyList(caiThirdFloorFacultyData)}
                  </div>
                </motion.div>
              )}

              {(hotspot?.id === 'info-ai-vc' || hotspot?.id === 'ai-3-vc-info') && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                      <Building2 className="w-4 h-4 text-mits-gold" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-wide">Administrator Profile</h3>
                  </div>
                  
                  <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                    <div className="p-5 flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b border-white/10 relative">
                      <div className="absolute right-3 top-3">
                        <a href="https://web.mitsgwalior.in/administration/director" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 text-mits-gold hover:text-white transition-colors" />
                        </a>
                      </div>
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-mits-gold/50 bg-black/50 shrink-0">
                        <img src={toPublicAsset('public/FACULTY/vice.png')} alt="Dr. Rajindra Kumar Pandit" className="w-full h-full object-cover top-object" style={{objectPosition: 'top'}} />
                      </div>
                      <div className="flex-1 text-center sm:text-left mt-2 sm:mt-0">
                        <h4 className="text-lg font-bold text-white">Dr. Rajindra Kumar Pandit</h4>
                        <p className="text-sm text-mits-gold mb-2">Vice-Chancellor</p>
                        <div className="flex flex-col gap-1 items-center sm:items-start">
                          {/* <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3 text-white/40" />
                            <span className="text-xs text-white/70">vicechancellor@mitsgwalior.in</span>
                          </div> */}
                          {/* <div className="flex items-center gap-2">
                            <Phone className="w-3 h-3 text-white/40" />
                            <span className="text-xs text-white/70">0751-240-9354</span>
                          </div> */}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 space-y-5">
                      <div>
                        <h5 className="text-sm font-semibold text-mits-gold mb-2 flex items-center gap-2"><BookOpen className="w-3 h-3"/> Education</h5>
                        <ul className="space-y-2 text-xs text-white/80">
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span><strong>Ph.D.</strong> in Architecture</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span><strong>M.Arch.</strong> & <strong>B.Arch.</strong></span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-mits-gold mb-2 flex items-center gap-2"><Building2 className="w-3 h-3"/> Responsibilities</h5>
                        <ul className="space-y-2 text-xs text-white/80">
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span>Overall academic and administrative leadership of the institution.</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span>Leading the transition of MITS into a Deemed University context.</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span>Member Secretary of the Governing Body.</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-mits-gold mb-2 flex items-center gap-2"><Layers className="w-3 h-3"/> Background</h5>
                        <ul className="space-y-2 text-xs text-white/80">
                          <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 shrink-0" />
                            <span>Extensive experience in Architecture, Planning, and Sustainable Urban Development.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {hotspot?.id === 'info-library' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                        <BookOpen className="w-4 h-4 text-mits-gold" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Learning Resource Centre</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-white/80">
                      <li className="flex items-start gap-3">
                        <BookOpen className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>Central Library houses around <strong>1,00,000 books</strong> for Engineering, Architecture, UG, PG, and Ph.D. learners.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Layers className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>The archive preserves rare books since <strong>1950</strong> and also includes around <strong>1,000 M.Tech dissertations and Ph.D theses</strong>.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Calendar className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span><strong>Library hours:</strong> 10:00 AM to 8:30 PM on working days.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                        <MonitorSmartphone className="w-4 h-4 text-sky-400" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Digital Access & Services</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <MonitorSmartphone className="w-4 h-4 text-sky-300" />
                        <span>RFID-enabled circulation with smart-card based issue and return.</span>
                      </li>
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <MonitorSmartphone className="w-4 h-4 text-sky-300" />
                        <span>Approx. <strong>620+ e-journal titles</strong> available across resources like IEEE, ASME, ASCE, and ScienceDirect.</span>
                      </li>
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <MonitorSmartphone className="w-4 h-4 text-sky-300" />
                        <span>A separate <strong>15-computer lab</strong> and campus Wi-Fi support access to e-books and e-resources.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {hotspot?.id === 'info-canteen' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                        <Building2 className="w-4 h-4 text-mits-gold" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Campus Refreshment Zone</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-white/80">
                      <li className="flex items-start gap-3">
                        <Users className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>The canteen serves as a daily social hub where students and staff gather between classes, labs, and meetings.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Building className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>MITS lists the <strong>Canteen</strong>, <strong>Amul Parlour</strong>, and <strong>Coffee Shop</strong> among its core campus infrastructure facilities.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>This area also connects with a temple space, making it a familiar informal pause point on campus.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                        <Calendar className="w-4 h-4 text-sky-400" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Why It Matters</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <Users className="w-4 h-4 text-sky-300" />
                        <span>A convenient meeting point for classmates, project teams, and club discussions.</span>
                      </li>
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <Building2 className="w-4 h-4 text-sky-300" />
                        <span>Recognized as part of the institute’s student-support amenities alongside hostels, library, and dispensary services.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {hotspot?.id === 'info-girls-hostel' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                        <Building2 className="w-4 h-4 text-mits-gold" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Girls Hostel Facilities</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-white/80">
                      <li className="flex items-start gap-3">
                        <Building className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>MITS maintains <strong>two girls hostels</strong> as part of its campus residential infrastructure.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Users className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span><strong>Hostel No. 6</strong> accommodates <strong>232 residents</strong>, while <strong>Hostel No. 5</strong> accommodates <strong>94 residents</strong>.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Calendar className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>Hostel administration is supervised by wardens, with institute-level oversight through the Chief Warden.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                        <Users className="w-4 h-4 text-sky-400" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Resident Amenities</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <Building2 className="w-4 h-4 text-sky-300" />
                        <span>Mess facility, 24x7 CCTV security, and on-site security guards.</span>
                      </li>
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <Users className="w-4 h-4 text-sky-300" />
                        <span>Recreation and sports support for a balanced residential life.</span>
                      </li>
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <Building className="w-4 h-4 text-sky-300" />
                        <span>Guest room access is also listed among the available hostel facilities.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {hotspot?.id === 'info-cse-it' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                        <MonitorSmartphone className="w-4 h-4 text-mits-gold" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Computing Disciplines Hub</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-white/80">
                      <li className="flex items-start gap-3">
                        <Building2 className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>This academic zone brings together the institute’s strengths in <strong>Computer Science & Engineering</strong>, <strong>Information Technology</strong>, and adjacent computing programs.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Users className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>The CSE department offers <strong>B.Tech., M.Tech., and Ph.D.</strong> programs and is <strong>NBA-accredited till 2028</strong>.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <BookOpen className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>The IT department offers <strong>B.Tech., M.Tech., and Ph.D.</strong> pathways with a practical, industry-oriented curriculum.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                        <Layers className="w-4 h-4 text-sky-400" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Academic Highlights</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <MonitorSmartphone className="w-4 h-4 text-sky-300" />
                        <span>Modern computing infrastructure supported by high-speed Ethernet and wireless networks.</span>
                      </li>
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <Users className="w-4 h-4 text-sky-300" />
                        <span>Both departments emphasize research, practical learning, workshops, internships, and innovation.</span>
                      </li>
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <Building className="w-4 h-4 text-sky-300" />
                        <span>The neighbouring CST centre focuses on bridging computer science with business systems under coordinator Dr. Abhishek Dixit.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {hotspot?.id === 'info-architecture' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                        <Building2 className="w-4 h-4 text-mits-gold" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Department of Architecture & Planning</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-white/80">
                      <li className="flex items-start gap-3">
                        <Calendar className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>The department was established in <strong>1984</strong> with an intake of <strong>20 students</strong>, later increased to <strong>40 students</strong> in 2004.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <BookOpen className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>MITS describes architecture as an amalgamation of <strong>Technology, Science, and Art</strong>.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Users className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>The department’s vision is to create innovative professional architects rooted in cultural ethos and nation building.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                        <Layers className="w-4 h-4 text-sky-400" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Learning Focus</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <BookOpen className="w-4 h-4 text-sky-300" />
                        <span>Issue-based academics and a philosophical approach to design.</span>
                      </li>
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <Building className="w-4 h-4 text-sky-300" />
                        <span>Training for contemporary design and construction needs with multidisciplinary exposure.</span>
                      </li>
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <Users className="w-4 h-4 text-sky-300" />
                        <span>Strong emphasis on critical thinking, creativity, and problem-solving.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {hotspot?.id === 'info-jubilee-gate' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                        <Building2 className="w-4 h-4 text-mits-gold" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">A Milestone Marker</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-white/80">
                      <li className="flex items-start gap-3">
                        <Calendar className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>MITS was established in <strong>1957</strong>, with its foundation stone laid on <strong>28 October 1956</strong> and the main building inaugurated on <strong>11 December 1964</strong>.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Building className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>The Diamond Jubilee identity celebrates the institute’s <strong>60-year journey</strong> and its long-standing academic legacy.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Users className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>This gate acts as a symbolic campus landmark tied to commemorative events and institute heritage.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                        <BookOpen className="w-4 h-4 text-sky-400" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Historic Context</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <Calendar className="w-4 h-4 text-sky-300" />
                        <span>The institute’s Golden Jubilee celebration was marked on <strong>30 June 2008</strong> in the presence of the President of India.</span>
                      </li>
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <Building2 className="w-4 h-4 text-sky-300" />
                        <span>It stands as a visual reminder of MITS progressing from an aided institute to a deemed university in 2024.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {(hotspot?.id === 'info-main-hall' || hotspot?.id === 'info-main-hall-inside') && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                        <Building2 className="w-4 h-4 text-mits-gold" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Indoor Event Venue</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-white/80">
                      <li className="flex items-start gap-3">
                        <Users className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>MITS uses its indoor venues extensively for cultural programmes, technical fests, conferences, and institute gatherings.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Building className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>Institute documentation highlights the <strong>Conclave Centre</strong>, <strong>Conference Hall</strong>, and other indoor spaces as regular event venues.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Calendar className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>The hall supports recurring events such as <strong>MITS Day</strong>, <strong>Founder’s Day</strong>, award ceremonies, and student activities.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                        <Layers className="w-4 h-4 text-sky-400" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Campus Activity Role</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <Users className="w-4 h-4 text-sky-300" />
                        <span>Student clubs, co-curricular events, and ceremonial functions depend on spaces like this for indoor programming.</span>
                      </li>
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <BookOpen className="w-4 h-4 text-sky-300" />
                        <span>It complements the institute’s broader focus on holistic student development through academic and cultural engagement.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {hotspot?.id === 'info-dispensary' && (
                <motion.div variants={staggerItem} className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                        <Building2 className="w-4 h-4 text-mits-gold" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Medical Support Centre</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-white/80">
                      <li className="flex items-start gap-3">
                        <Calendar className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span><strong>Working hours:</strong> 10:00 AM to 7:20 PM.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Users className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span>Medical consultation is available for students, staff, and their dependants.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Phone className="w-4 h-4 mt-0.5 text-mits-gold/70" />
                        <span><strong>Contact:</strong> 0751-2409379</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                        <Layers className="w-4 h-4 text-sky-400" />
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-wide">Services Available</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <Building2 className="w-4 h-4 text-sky-300" />
                        <span>OPD consultation, free emergency medicines, injections, dressings, and minor procedures.</span>
                      </li>
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <MonitorSmartphone className="w-4 h-4 text-sky-300" />
                        <span>Day-care support, blood sugar testing, ECG, and nebulizer services for campus residents.</span>
                      </li>
                      <li className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-2 border border-sky-500/10">
                        <Users className="w-4 h-4 text-sky-300" />
                        <span>Awareness lectures and vaccinations are also provided as part of preventive care support.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {!hotspot && scene.departments && scene.departments.length > 0 && (
                <motion.div variants={staggerItem}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-mits-gold/10 flex items-center justify-center border border-mits-gold/20">
                      <BookOpen className="w-4 h-4 text-mits-gold" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-wide">Academic Departments</h3>
                  </div>
                  <div className="space-y-2">
                    {scene.departments.map((dept, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.05) }}
                        key={dept} 
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-white/90 text-sm flex items-center gap-3 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:scale-150 transition-transform" />
                        {dept}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {!hotspot && scene.facilities && scene.facilities.length > 0 && (
                <motion.div variants={staggerItem}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                      <Building2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-wide">Facilities Available</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {scene.facilities.map((f, i) => (
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + (i * 0.05), type: "spring" }}
                        key={f} 
                        className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium hover:bg-emerald-500/20 transition-colors cursor-default"
                      >
                        {f}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}

              {!hotspot && scene.floorLinks && scene.floorLinks.length > 0 && (
                <motion.div variants={staggerItem}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                      <Building className="w-4 h-4 text-sky-300" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-wide">Inside New Academic Block</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {scene.floorLinks.map((floor, i) => (
                      <motion.button
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (i * 0.06) }}
                        key={floor.targetScene}
                        onClick={() => {
                          onNavigate(floor.targetScene);
                          onClose();
                        }}
                        className="group flex items-center justify-between gap-3 rounded-2xl border border-sky-400/15 bg-sky-500/10 px-4 py-3 text-left text-white/90 transition-all duration-300 hover:border-sky-300/40 hover:bg-sky-500/20"
                      >
                        <div>
                          <p className="text-sm font-semibold">{floor.label}</p>
                          <p className="text-xs text-white/50">Add interior image here</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-sky-200 transition-transform duration-300 group-hover:translate-x-1" />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InfoPanel;

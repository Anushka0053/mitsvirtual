import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, MapPin, BookOpen, Users, Award, ChevronDown, Building2, Library, UtensilsCrossed, Dumbbell, GraduationCap, Landmark, TreePine, Globe, Microscope, Cpu, FlaskConical } from 'lucide-react';
import { useRef } from 'react';

const stats = [
  { icon: BookOpen, label: 'Programs', value: '15+' },
  { icon: Users, label: 'Students', value: '5000+' },
  { icon: Award, label: 'Years Legacy', value: '65+' },
  { icon: MapPin, label: 'Acre Campus', value: '650' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const LandingClassic = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen overflow-hidden relative bg-[hsl(220,30%,6%)] text-white">

      <div className="fixed inset-0 pointer-events-none -scale-y-100 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-mits-gold/5 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/campus-hero.jpg')",
            y: backgroundY,
            scale: 1.05
          }}
          animate={{ scale: [1.05, 1.1, 1.05] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mits-dark/80 via-mits-dark/60 to-mits-dark/95" />

        <motion.div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full"
          style={{ opacity }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-mits-navy/90 backdrop-blur-md border border-mits-gold/30 mb-8 shadow-xl shadow-black/40">
              <span className="w-2 h-2 rounded-full bg-mits-gold animate-pulse shadow-[0_0_10px_rgba(252,211,77,0.8)]" />
              <p className="text-white font-body text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
                Welcome to Excellence
              </p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-mits-gold mb-6 leading-[1.1] tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              Madhav Institute of<br />
              <span className="text-gradient relative inline-block">
                Technology & Science
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-[4px] bg-gradient-to-r from-mits-gold/0 via-mits-gold/50 to-mits-gold/0"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                />
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-mits-gold/90 text-xl md:text-2xl font-body mb-3 font-light">
              Gwalior, Madhya Pradesh
            </motion.p>

            <motion.p variants={itemVariants} className="text-mits-gold/75 text-sm md:text-base font-body mb-10 max-w-2xl mx-auto flex items-center justify-center gap-2 flex-wrap">
              <span>Established in 1957</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <span>Deemed University</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <span>NAAC A++ Accredited</span>
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
              <Button
                variant="hero"
                size="lg"
                onClick={() => navigate('/tour')}
                className="gap-3 px-8 py-7 text-lg w-full sm:w-auto hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] border border-white/20 overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
                <Play className="w-5 h-5 relative z-10" fill="currentColor" />
                <span className="relative z-10 font-semibold tracking-wide">Start Virtual Tour</span>
              </Button>
              <Button
                variant="tour"
                size="lg"
                className="gap-2 px-8 py-7 w-full sm:w-auto hover:bg-white/10 glass-panel border border-white/10 hover:border-white/20 transition-all duration-300 group"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-20"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-2xl p-5 md:p-6 text-center border border-primary/15 bg-[linear-gradient(180deg,rgba(12,32,56,0.72),rgba(10,20,38,0.82))] hover:border-mits-gold/35 hover:bg-[linear-gradient(180deg,rgba(18,40,68,0.84),rgba(12,24,42,0.92))] transition-all duration-300 shadow-xl shadow-black/30 group cursor-default relative overflow-hidden backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-mits-gold/10 opacity-70 transition-opacity duration-500" />
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-mits-gold/20 transition-all duration-500 border border-primary/15">
                  <stat.icon className="w-6 h-6 text-mits-gold drop-shadow-md" />
                </div>
                <p className="text-3xl font-display font-bold text-white mb-1 tracking-tight">{stat.value}</p>
                <p className="text-xs md:text-sm text-white/65 font-body uppercase tracking-wider font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1 hover:border-primary-foreground/60 transition-colors">
            <motion.div
              className="w-1.5 h-3 bg-mits-gold rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      <section id="about" className="py-24 md:py-32 px-4 relative z-10 bg-[linear-gradient(180deg,rgba(10,16,28,0.98),rgba(12,20,34,0.96))]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-mits-gold/50" />
              <p className="text-primary font-body text-sm tracking-[0.2em] uppercase font-bold">About MITS</p>
              <span className="w-8 h-[1px] bg-mits-gold/50" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 tracking-tight">
              A Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-mits-sky">Excellence</span>
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed text-lg md:text-xl font-light">
              Madhav Institute of Technology & Science (MITS), Gwalior is one of the most prestigious engineering
              institutions in Central India. Established in 1957, the institute offers a transformative educational experience on an expansive 650-acre campus.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-gradient-to-tr from-primary/5 via-transparent to-mits-gold/5 blur-3xl -z-10 rounded-[100%]" />

            {[
              { title: 'Academic Excellence', desc: 'NAAC accredited with 15+ UG/PG programs. Offering cutting-edge curriculum affiliated to RGPV, Bhopal.', icon: Globe },
              { title: 'Research & Innovation', desc: 'Active research centers, funded projects by DST, AICTE, and intensive collaborations with leading industries.', icon: Microscope },
              { title: 'Campus Life', desc: 'Vibrant campus with cultural fests, technical symposiums, premier sports tournaments, and NCC/NSS activities.', icon: Cpu },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:rotate-12 transition-all duration-500">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-base text-white/65 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <Button
              variant="default"
              size="lg"
              onClick={() => navigate('/tour')}
              className="gap-3 px-10 py-7 text-lg rounded-full bg-white text-mits-dark hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/20 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0 skew-x-12" />
              <Play className="w-5 h-5 relative z-10" fill="currentColor" />
              <span className="relative z-10 font-semibold">Explore Campus in 360°</span>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 relative border-t border-white/10 bg-[linear-gradient(180deg,rgba(9,15,26,0.98),rgba(7,12,22,1))]">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase font-bold mb-3">Explore Virtually</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Campus Amenities
            </h2>
            <p className="text-white/65 text-lg max-w-2xl mx-auto font-light">
              Jump directly into a 360° immersive view of our pristine campus locations. Experience MITS from anywhere.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { id: 'main-gate', icon: Landmark, label: 'Main Gate', color: 'bg-blue-500/10 text-blue-600', hoverBorder: 'hover:border-blue-500/50', hoverShadow: 'hover:shadow-blue-500/20' },
              { id: 'ai-main-out', icon: Cpu, label: 'New Academic Block', color: 'bg-purple-500/10 text-purple-600', hoverBorder: 'hover:border-purple-500/50', hoverShadow: 'hover:shadow-purple-500/20' },
              { id: 'library', icon: Library, label: 'Central Library', color: 'bg-amber-500/10 text-amber-600', hoverBorder: 'hover:border-amber-500/50', hoverShadow: 'hover:shadow-amber-500/20' },
              { id: 'canteen', icon: UtensilsCrossed, label: 'Canteen', color: 'bg-rose-500/10 text-rose-600', hoverBorder: 'hover:border-rose-500/50', hoverShadow: 'hover:shadow-rose-500/20' },
              { id: 'girls-hostel', icon: Building2, label: 'Girls Hostel', color: 'bg-emerald-500/10 text-emerald-600', hoverBorder: 'hover:border-emerald-500/50', hoverShadow: 'hover:shadow-emerald-500/20' },
              { id: 'cse-it-department', icon: GraduationCap, label: 'CSE, IT Department', color: 'bg-indigo-500/10 text-indigo-600', hoverBorder: 'hover:border-indigo-500/50', hoverShadow: 'hover:shadow-indigo-500/20' },
              { id: 'architecture-department', icon: Building2, label: 'Architecture Dept', color: 'bg-orange-500/10 text-orange-600', hoverBorder: 'hover:border-orange-500/50', hoverShadow: 'hover:shadow-orange-500/20' },
              { id: 'main-hall', icon: Building2, label: 'Main Hall', color: 'bg-fuchsia-500/10 text-fuchsia-600', hoverBorder: 'hover:border-fuchsia-500/50', hoverShadow: 'hover:shadow-fuchsia-500/20' },
              { id: 'jubilee-gate', icon: Landmark, label: 'Jubilee Gate', color: 'bg-cyan-500/10 text-cyan-600', hoverBorder: 'hover:border-cyan-500/50', hoverShadow: 'hover:shadow-cyan-500/20' },
              { id: 'medical-dispensary', icon: FlaskConical, label: 'Medical Dispensary', color: 'bg-teal-500/10 text-teal-600', hoverBorder: 'hover:border-teal-500/50', hoverShadow: 'hover:shadow-teal-500/20' },
            ].map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
                onClick={() => item.id ? navigate(`/tour?scene=${item.id}`) : undefined}
                disabled={!item.id}
                className={`group relative flex flex-col items-center gap-4 p-8 rounded-3xl border border-transparent bg-white/5
                  ${item.id
                    ? `hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-xl ${item.hoverBorder} ${item.hoverShadow}`
                    : 'opacity-60 cursor-not-allowed border-white/10 bg-white/[0.04]'
                  }
                  transition-all duration-500 block w-full outline-none focus-visible:ring-2 focus-visible:ring-primary`}
              >
                {item.id && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
                )}

                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center
                  ${item.id ? 'group-hover:scale-110 group-hover:rotate-6' : ''} transition-all duration-500 relative z-10`}>
                  <item.icon className="w-8 h-8 stroke-[1.5]" />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-1.5 w-full">
                  <span className="font-display font-bold text-base md:text-lg text-white text-center truncate w-full px-2">{item.label}</span>
                  {!item.id && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/10 text-[10px] uppercase tracking-wider text-white/55 font-semibold">Coming Soon</span>
                  )}
                  {item.id && (
                    <span className="inline-flex items-center text-[11px] uppercase tracking-widest text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      View in 360° &rarr;
                    </span>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-white/10 bg-[hsl(220,30%,6%)] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TreePine className="w-6 h-6 text-primary" />
            </div>
            <p className="font-display text-2xl font-bold text-white mb-3">
              Madhav Institute of Technology & Science
            </p>
            <p className="text-base text-white/65 font-light mb-8">
              Race Course Road, Gwalior - 474005, Madhya Pradesh, India
            </p>
            {/* <div className="flex items-center justify-center gap-6 mb-8">
              <span className="text-sm font-medium text-white/55 hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-sm font-medium text-white/55 hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-sm font-medium text-white/55 hover:text-white cursor-pointer transition-colors">Contact Us</span>
            </div> */}
            <p className="text-sm text-white/45 font-light">
              © {new Date().getFullYear()} MITS Gwalior. Virtual Campus Tour. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default LandingClassic;

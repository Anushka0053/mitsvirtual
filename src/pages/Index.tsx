import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, MapPin, BookOpen, Users, Award, ChevronDown, Building2, Library, UtensilsCrossed, Dumbbell, GraduationCap, Landmark, TreePine, FlaskConical, Globe, Microscope, Cpu } from 'lucide-react';
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

const Index = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute left-[-10%] top-[-5%] h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-[-8%] right-[-8%] h-[28rem] w-[28rem] rounded-full bg-mits-gold/10 blur-[130px]" />
      </div>

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden px-4 pt-6 md:px-8">
        <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/campus-hero.jpg')" }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,12,22,0.24)_34%,rgba(7,12,22,0.78)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(3,8,20,0.94)_8%,rgba(9,22,41,0.72)_42%,rgba(7,12,22,0.92)_100%)]" />
        </motion.div>

        <motion.div 
          className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center"
          style={{ opacity }}
        >
          <div className="grid items-end gap-10 pb-10 pt-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <motion.div variants={itemVariants} className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-mits-gold animate-pulse shadow-[0_0_10px_rgba(252,211,77,0.8)]" />
                MITS Virtual Campus Experience
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="mb-6 max-w-4xl text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-[6.2rem]"
              >
                A more
                <span className="text-gradient"> immersive </span>
                way to explore MITS.
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg text-white/78 md:text-xl">
                Gwalior, Madhya Pradesh
              </motion.p>

              <motion.p variants={itemVariants} className="mb-10 mt-4 max-w-2xl text-sm leading-8 text-white/58 md:text-base">
                Present the campus like a premium digital product with cinematic entry points,
                smart navigation, indoor floor access, and a guided 360 tour experience that feels
                modern, polished, and memorable.
              </motion.p>

              <motion.div variants={itemVariants} className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => navigate('/tour')}
                  className="group h-14 rounded-full border border-white/20 px-8 text-base shadow-[0_24px_80px_rgba(0,0,0,0.4)]"
                >
                  <Play className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" />
                  Start Virtual Tour
                </Button>
                <Button
                  variant="tour"
                  size="lg"
                  className="h-14 rounded-full border border-white/12 bg-white/5 px-8 text-base text-white hover:bg-white/10"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore More
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-white/48">
                <span className="tour-chip rounded-full px-4 py-2">Established in 1957</span>
                <span className="tour-chip rounded-full px-4 py-2">Affiliated to RGPV</span>
                <span className="tour-chip rounded-full px-4 py-2">NAAC Accredited</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mesh-panel relative overflow-hidden rounded-[2rem] p-5 md:p-6"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/20 blur-[70px]" />
              <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                <div className="relative min-h-[340px] overflow-hidden rounded-[1.6rem] border border-white/10">
                  <img src="/panoramas/ai-department.jpg.jpeg" alt="New Academic Block preview" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Featured Path</p>
                    <h2 className="mt-2 text-3xl font-bold text-white">New Academic Block Entry</h2>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/68">
                      Outdoor gate hotspot opens indoor navigation and dedicated floor views.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-mits-gold">What feels new</p>
                    <div className="mt-4 space-y-4">
                      {['Cinematic landing experience', 'Indoor floor navigation', 'More premium scene discovery'].map((point) => (
                        <div key={point} className="flex gap-3">
                          <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">•</div>
                          <p className="text-sm leading-6 text-white/74">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {stats.slice(0, 2).map((stat) => (
                      <div key={stat.label} className="rounded-[1.4rem] border border-white/10 bg-black/15 p-4">
                        <stat.icon className="h-5 w-5 text-mits-gold" />
                        <p className="mt-4 text-2xl font-extrabold text-white">{stat.value}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-4 pb-8 md:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label} 
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-panel rounded-2xl p-5 md:p-6 text-center border border-white/10 hover:border-mits-gold/30 hover:bg-white/[0.08] transition-all duration-300 shadow-xl shadow-black/20 group cursor-default relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-mits-gold/0 to-mits-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-mits-gold/20 transition-all duration-500">
                  <stat.icon className="w-6 h-6 text-mits-gold drop-shadow-md" />
                </div>
                <p className="text-3xl font-display font-bold text-primary-foreground mb-1 tracking-tight">{stat.value}</p>
                <p className="text-xs md:text-sm text-primary-foreground/70 font-body uppercase tracking-wider font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
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

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-4 relative z-10">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8 tracking-tight">
              A Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-mits-sky">Excellence</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg md:text-xl font-light">
              Madhav Institute of Technology & Science (MITS), Gwalior is one of the most prestigious engineering 
              institutions in Central India. Established in 1957, the institute offers a transformative educational experience on an expansive 650-acre campus.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Background decorative blob */}
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
                className="group relative p-8 rounded-3xl border border-border/50 bg-card/60 backdrop-blur-sm hover:bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:rotate-12 transition-all duration-500">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed font-light">{item.desc}</p>
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
              className="gap-3 px-10 py-7 text-lg rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/20 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0 skew-x-12" />
              <Play className="w-5 h-5 relative z-10" fill="currentColor" />
              <span className="relative z-10 font-semibold">Explore Campus in 360°</span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Campus Amenities */}
      <section className="py-24 px-4 bg-muted/30 relative border-t border-border/50">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase font-bold mb-3">Explore Virtually</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Campus Amenities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
              Jump directly into a 360° immersive view of our pristine campus locations. Experience MITS from anywhere.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { id: 'main-gate', icon: Landmark, label: 'Main Gate', color: 'bg-blue-500/10 text-blue-600', hoverBorder: 'hover:border-blue-500/50', hoverShadow: 'hover:shadow-blue-500/20' },
              { id: 'ai-department', icon: Cpu, label: 'New Academic Block', color: 'bg-purple-500/10 text-purple-600', hoverBorder: 'hover:border-purple-500/50', hoverShadow: 'hover:shadow-purple-500/20' },
              { id: 'library', icon: Library, label: 'Central Library', color: 'bg-amber-500/10 text-amber-600', hoverBorder: 'hover:border-amber-500/50', hoverShadow: 'hover:shadow-amber-500/20' },
              { id: 'canteen', icon: UtensilsCrossed, label: 'Canteen & Mandir', color: 'bg-rose-500/10 text-rose-600', hoverBorder: 'hover:border-rose-500/50', hoverShadow: 'hover:shadow-rose-500/20' },
              { id: 'girls-hostel', icon: Building2, label: 'Girls Hostel', color: 'bg-emerald-500/10 text-emerald-600', hoverBorder: 'hover:border-emerald-500/50', hoverShadow: 'hover:shadow-emerald-500/20' },
              // Inactive amenities
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
                className={`group relative flex flex-col items-center gap-4 p-8 rounded-3xl border border-transparent bg-background
                  ${item.id 
                    ? `hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-xl ${item.hoverBorder} ${item.hoverShadow}` 
                    : 'opacity-60 cursor-not-allowed border-border/50 bg-muted/10'
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
                  <span className="font-display font-bold text-base md:text-lg text-foreground text-center truncate w-full px-2">{item.label}</span>
                  {!item.id && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-muted text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Coming Soon</span>
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

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-background relative overflow-hidden">
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
            <p className="font-display text-2xl font-bold text-foreground mb-3">
              Madhav Institute of Technology & Science
            </p>
            <p className="text-base text-muted-foreground font-light mb-8">
              Race Course Road, Gwalior - 474005, Madhya Pradesh, India
            </p>
            <div className="flex items-center justify-center gap-6 mb-8">
              <span className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Contact Us</span>
            </div>
            <p className="text-sm text-muted-foreground font-light">
              © {new Date().getFullYear()} MITS Gwalior. Virtual Campus Tour. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

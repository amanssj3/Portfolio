import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ExternalLink, Download, Code, Gamepad2, Shield, User, Briefcase, GraduationCap, Cpu, Globe, Menu, X } from 'lucide-react';
import CustomCursor from './CustomCursor';

const resumeUrl = "/AmanQureshi_DEV_TL_PM_CH.pdf";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050510]">
      <CustomCursor />
      {/* Background neon grid/gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGgxdjQwSDB6TTM5IDBoMXY0MEgzOXoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz4KPC9zdmc+')] opacity-20" />
      </div>

      <nav className="fixed top-0 w-full glass z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white tracking-widest uppercase glow-text">AMAN Q.</h1>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 items-center">
            <a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-primary transition-colors">Skills</a>
            <a href="#experience" className="text-gray-400 hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</a>
            <a href={resumeUrl} download className="px-5 py-2 border border-primary text-primary hover:bg-primary/20 transition-all rounded glow-box">
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white hover:text-primary transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden glass border-t border-gray-800 overflow-hidden"
            >
              <div className="flex flex-col items-center gap-6 py-8 px-4">
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-200 text-lg hover:text-primary transition-colors">About</a>
                <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-200 text-lg hover:text-primary transition-colors">Skills</a>
                <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-200 text-lg hover:text-primary transition-colors">Experience</a>
                <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-200 text-lg hover:text-primary transition-colors">Projects</a>
                <a href={resumeUrl} onClick={() => setIsMobileMenuOpen(false)} download className="px-8 py-3 w-full max-w-[200px] text-center border border-primary text-primary hover:bg-primary/20 transition-all rounded glow-box">
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h2 className="text-primary font-mono mb-4 text-base md:text-lg">&gt; Hello, I am</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6">Aman <span className="text-transparent border-text" style={{ WebkitTextStroke: '2px #00f5d4' }}>Qureshi</span></h1>
            <p className="text-gray-400 text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto font-sans leading-relaxed px-4 md:px-0">
              Lead Unity Developer crafting polished multiplayer, AR/VR, and cross-platform experiences. Building the future of interactive entertainment.
            </p>
            <div className="flex gap-4 md:gap-6 justify-center flex-col sm:flex-row px-6 sm:px-0">
              <a href="#projects" className="px-6 py-3 md:px-8 md:py-4 bg-primary text-dark font-bold rounded hover:shadow-[0_0_20px_rgba(0,245,212,0.6)] transition-all">
                View My Projects
              </a>
              <a href="#contact" className="px-6 py-3 md:px-8 md:py-4 border border-gray-600 text-white hover:border-primary hover:text-primary transition-all rounded">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </section>

        {/* ABOUT & QUICK INFO */}
        <section id="about" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <User className="text-secondary w-6 h-6 md:w-8 md:h-8" />
              <h2 className="text-3xl md:text-4xl font-serif text-white uppercase glow-text">Profile</h2>
            </div>
            <p className="text-lg text-gray-400 leading-relaxed">
              I'm a <span className="text-primary glow-text">Lead Unity Developer</span> with over 8 years of hands-on experience creating polished multiplayer and cross-platform games. I architect real-time reliable systems using tools like Photon, Mirror, and Fish Networking.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Whether it’s a casual title like 8-Ball Pool or advanced AR/VR experiences for <span className="text-secondary">Apple Vision Pro and Meta Quest</span> via Unreal Engine & Unity, I'm driven by the thrill of seamless global connectivity.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Beyond engineering, I manage Apple App Store and Google Play developer profiles, mentor junior developers, and ensure efficient workflows for timely global releases.
            </p>
          </div>
          <div className="flex-1 glass p-6 rounded-lg font-mono text-xs sm:text-sm border border-gray-800 relative">
            <div className="absolute top-0 right-0 p-2 text-gray-500">profile.json</div>
            <pre className="text-gray-300 overflow-x-auto whitespace-pre-wrap word-break">
{`{
  "name": "Aman Qureshi",
  "role": "Lead Unity Developer",
  "location": "Ahmedabad, India",
  "expertise": [
    "Unity 3D / 2D",
    "Unreal Engine",
    "AR/VR (Vision Pro, Quest)",
    "Multiplayer Architecture",
    "IT Operations",
    "People Management"
  ],
  "languages_spoken": [
    "English", "Hindi", "Gujarati"
  ]
}`}
            </pre>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
            <Cpu className="text-secondary w-6 h-6 md:w-8 md:h-8" />
            <h2 className="text-3xl md:text-4xl font-serif text-white uppercase glow-text text-center">Technical Arsenal</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Languages", icon: "💻", items: ["C#", "C/C++", "Java", "PHP", "Node.js"] },
              { title: "Engines & Tools", icon: "⚙️", items: ["Unity", "Unreal Engine", "Maya", "Photoshop", "JSON", "XML"] },
              { title: "Networking", icon: "🌐", items: ["Photon Networking", "Firebase", "AdMob", "REST APIs", "Telegram API", "Mirror", "FishNetworking"] },
              { title: "Soft Skills", icon: "🧠", items: ["Leadership", "Mentorship", "Problem Solving", "Agile Project Management"] },
            ].map((skillData, i) => (
              <div key={i} className="glass p-6 rounded-lg border border-gray-800 hover:border-primary/30 transition-all">
                <div className="text-2xl mb-4">{skillData.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{skillData.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillData.items.map((item, j) => (
                    <span key={j} className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full text-primary">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section id="experience" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-16">
          <div className="flex-[2]">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <Briefcase className="text-secondary w-6 h-6 md:w-8 md:h-8" />
              <h2 className="text-3xl md:text-4xl font-serif text-white uppercase glow-text">Experience</h2>
            </div>
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  role: "Team Lead / Sr. Unity Game Developer",
                  company: "IndiaNIC Infotech Limited",
                  date: "Aug 2024 — Present",
                  desc: [
                    "Leading cross-functional team optimizing AR/VR and multiplayer Unity projects.",
                    "Created demos for Apple Vision Pro and Meta Quest.",
                    "Built 8-Ball Pool Multiplayer, Ludo Multiplayer, and Chess 2D implementing smart AI.",
                    "Mentored juniors and adopted AI tools (ChatGPT, Windsurf, Cursor) for productivity."
                  ]
                },
                {
                  role: "Project Manager / Sr. Unity Game Developer",
                  company: "Artoon Solutions Pvt Ltd",
                  date: "Jul 2020 — Jul 2024",
                  desc: [
                    "Managed full project cycles, delegated tasks for a 15-member team.",
                    "Key projects: Sweep It Poker (Gala Games), Hill Racing Multiplayer (MPL), Home Makeover.",
                    "Conducted bug resolution, scaling architectures, and pre-sales technology suggestions."
                  ]
                },
                {
                  role: "Junior Unity 3D Developer",
                  company: "Escrow Infotech",
                  date: "Jun 2018 — May 2020",
                  desc: [
                    "Designed and implemented game UI, menus, and camera systems.",
                    "Integrated plugins and research system optimizations.",
                    "Titles: Kite Fly, Indian Train Simulator, Sniper Bottle Shooting, Blood Rivals."
                  ]
                },
                {
                  role: "Junior Unity 3D Developer",
                  company: "IDivineCreation Technologies",
                  date: "Dec 2016 — May 2018",
                  desc: [
                    "Developed multiplayer mechanics and optimized 3D performance.",
                    "Lead scrums, reviewed codes, and managed Store publishing.",
                    "Titles: Clash of Modern Force, Zombie Battle, Gang war Mafia Crime 2017."
                  ]
                },
                {
                  role: "Junior Android Developer",
                  company: "Lynkersoft Solutions",
                  date: "Mar 2016 — Aug 2016",
                  desc: [
                    "Developed Android-based applications focusing on UI/UX optimization."
                  ]
                }
              ].map((job, i) => (
                <div key={i} className="glass p-6 md:p-8 rounded-xl relative border-l-4 border-l-primary group hover:border-l-secondary transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">{job.role}</h3>
                      <p className="text-gray-400 text-lg">{job.company}</p>
                    </div>
                    <span className="text-primary font-mono text-xs md:text-sm bg-primary/10 px-3 py-1 rounded whitespace-nowrap">{job.date}</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-400 text-sm md:text-base">
                    {job.desc.map((bullet, j) => <li key={j}>{bullet}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 mt-12 lg:mt-0">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <GraduationCap className="text-secondary w-6 h-6 md:w-8 md:h-8" />
              <h2 className="text-3xl md:text-4xl font-serif text-white uppercase glow-text">Education</h2>
            </div>
            <div className="space-y-4 md:space-y-6">
              {[
                { degree: "Master of Computer Application (MCA)", school: "L.j Institute / Gujarat Tech. University", year: "2014 — 2016" },
                { degree: "Bachelor of Computer Application (BCA)", school: "Sarvoday College / Saurashtra Univ.", year: "2011 — 2014" },
                { degree: "HSC", school: "Gujarat Higher Secondary", year: "2011" },
                { degree: "SSC", school: "Gujarat Secondary Board", year: "2009" },
              ].map((edu, i) => (
                <div key={i} className="glass p-6 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <p className="text-gray-400 text-sm my-2">{edu.school}</p>
                  <p className="text-primary font-mono text-xs">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-black opacity-[0.03] pointer-events-none uppercase whitespace-nowrap z-0">
            Portfolio
          </div>
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
              <Gamepad2 className="text-secondary w-6 h-6 md:w-8 md:h-8" />
              <h2 className="text-3xl md:text-4xl font-serif text-white uppercase glow-text text-center">Featured Projects</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { title: "8 Ball Pool Multiplayer", client: "3Plus Games", url: "https://www.3plusgames.com" },
                { title: "Kalash Nikavo (Mini Militia)", client: "3Plus Games", url: "https://www.3plusgames.com" },
                { title: "Sweep It Poker", client: "Gala Games", isHighlight: true },
                { title: "Hill Racing Multiplayer", client: "MPL", url: "https://www.mpl.live" },
                { title: "Home Makeover - Decorate House", client: "Games2Win", url: "https://play.google.com/store/apps/details?id=com.games2win.homemakeover" },
                { title: "Pool Multiplayer", client: "Dangal Games", url: "https://dangalgames.com" },
                { title: "Call Break", client: "Dangal Games", url: "https://dangalgames.com" },
                { title: "Pool Multiplayer", client: "Head Digital Works (A23)", url: "https://www.a23.com" },
                { title: "Zupee Ludo", client: "Zupee", url: "https://play.google.com/store/apps/details?id=com.zupee.free&hl=en_IN" },
                { title: "Epic Mini Games", client: "Artoon Casual", url: "https://play.google.com/store/apps/details?id=com.artoon.hyper.casual.games" },
                { title: "Teen Patti - 3Patti Cards Game", client: "Artoon", url: "https://play.google.com/store/apps/details?id=com.teenpattithreecardspoker" },
                { title: "Indian Local Train Simulator", client: "Kaooi", url: "https://play.google.com/store/apps/details?id=kaooi.oaii.indianlocaltraingame" },
                { title: "Kite Fly", client: "Simulator", url: "https://play.google.com/store/apps/details?id=com.esc.realkitesflyingsimulator" },
                { title: "Parking Playground", client: "Softonic", url: "https://parking-playground.en.softonic.com/android" },
                { title: "Clash of Modern Force", client: "Multiplayer Online", url: "https://modern-force-multiplayer-online.en.uptodown.com/android/" },
                { title: "Mini Shooters", client: "Battleground Shooting Game", url: "https://mini-shooters-battleground-shooting-game.en.uptodown.com/android" },
                { title: "Blood Rivals", client: "Shooter", url: "https://blood-rivals.en.uptodown.com/android" },
                { title: "Carom Multiplayer", client: "Offline & Online", isHighlight: false },
                { title: "Golf Multiplayer", client: "Unreleased", isHighlight: false },
              ].map((proj, i) => (
                <div key={i} className={`glass p-6 rounded-xl border ${proj.isHighlight ? 'border-secondary' : 'border-gray-800'} hover:border-primary/50 transition-all group flex flex-col justify-between`}>
                   <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{proj.title}</h3>
                    <p className="text-sm text-gray-400 mb-6">{proj.client}</p>
                   </div>
                   {proj.url && (
                    <a href={proj.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-mono text-secondary hover:text-white transition-colors max-w-max bg-secondary/10 px-3 py-1 rounded-full">
                      <ExternalLink size={14} /> LIVE LINK
                    </a>
                   )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16 md:py-24 px-4 md:px-6 pb-24 md:pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white uppercase mb-6 md:mb-8">Let's Connect</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12">Based in Ahmedabad, India. Open to discussing high-end AR/VR, dynamic architecture, and fresh multiplayer challenges anywhere.</p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6">
              <a href="mailto:aman0074ssj@gmail.com" className="flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 glass hover:bg-white/10 hover:-translate-y-1 transition-all rounded-full border border-gray-800 hover:border-primary text-gray-300 w-full sm:w-auto">
                <Mail className="text-primary"/> aman0074ssj@gmail.com
              </a>
              <a href="tel:+917405315414" className="flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 glass hover:bg-white/10 hover:-translate-y-1 transition-all rounded-full border border-gray-800 hover:border-primary text-gray-300 w-full sm:w-auto">
                <Phone className="text-primary"/> +91 7405315414
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 glass hover:bg-white/10 hover:-translate-y-1 transition-all rounded-full border border-gray-800 hover:border-primary text-gray-300 w-full sm:w-auto">
                <Globe className="text-primary"/> LinkedIn Profile
              </a>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
};

export default App;

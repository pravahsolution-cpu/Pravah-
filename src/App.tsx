import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, Target, Smartphone, Users, Globe, Megaphone, 
  CheckCircle2, ArrowRight, MessageSquare, Award, MapPin as MapPinIcon, Mail, Menu, X, ChevronRight, Phone
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 rounded-full px-6 py-3 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg shadow-slate-200/50 border border-slate-200/50' : 'bg-transparent'}`}>
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src="/logo.png" alt="Pravah Solution Logo" className="h-10 w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <span className={`font-extrabold text-xl tracking-tight hidden sm:block ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              Pravah<span className={scrolled ? 'text-teal-600' : 'text-teal-400'}>Solution</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-semibold transition-colors ${scrolled ? 'text-slate-600 hover:text-teal-600' : 'text-slate-300 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
             <a 
              href="#contact" 
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-1 ${scrolled ? 'bg-slate-900 hover:bg-slate-800 text-amber-500' : 'bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-900'}`}
            >
              Partner With Us <ChevronRight size={16} />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-1 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-teal-600 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-4">
                <a 
                  href="#contact" onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-slate-900 text-amber-500 px-5 py-3 rounded-xl font-bold"
                >
                  Partner With Us <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0B1121]">
      {/* Ambient Background Glows matching the logo */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-teal-400 font-semibold text-sm mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Political Campaign Strategy & Management
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8"
          >
            Strategic Election <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Campaign Management</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Team Pravah Solution specializes in designing impactful political campaigns that connect candidates directly with voters through data-driven strategies and grassroots outreach.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact" className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-900 px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-amber-500/20 hover:-translate-y-1 flex items-center justify-center gap-2">
              Start Your Campaign <ArrowRight size={20} />
            </a>
            <a href="#services" className="w-full sm:w-auto bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-teal-600 font-bold tracking-wider uppercase mb-3 text-sm">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Professional, Strategic, & <span className="text-amber-500">Technology-Driven</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Pravah Solution is a political consulting and election campaign management organization dedicated to delivering professional, strategic, and technology-driven campaign solutions. We bridge the gap between leaders and the electorate.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Data-driven insights', 
                'Ground-level engagement', 
                'Digital campaign expertise', 
                'Strategic communication'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="bg-teal-100 p-1.5 rounded-full text-teal-600 flex-shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-slate-800 font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-slate-900 mb-8">
                  <Award size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Experience</h3>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  We have worked with leaders across different political parties and regions, helping them strengthen voter engagement and build powerful political narratives.
                </p>
                <div className="space-y-4">
                  {[
                    'Cabinet Ministers', 
                    'Members of Parliament', 
                    'Members of Legislative Assembly', 
                    'Municipal Corporators', 
                    'First-time candidates'
                  ].map((role, idx) => (
                    <div key={idx} className="flex items-center gap-4 border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                      <div className="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-200 font-medium text-lg">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Smartphone size={24} />, title: 'Social Media Management', desc: 'High-quality content creation, narrative building, and engagement-driven strategy.', colSpan: 'md:col-span-2 lg:col-span-1' },
    { icon: <Users size={24} />, title: 'Ground Management', desc: 'Booth committee formation, voter mapping, and structured door-to-door canvassing.', colSpan: 'md:col-span-1 lg:col-span-1' },
    { icon: <Globe size={24} />, title: 'Digital Promotion', desc: 'Data-driven campaign planning and targeted advertisements across platforms.', colSpan: 'md:col-span-1 lg:col-span-1' },
    { icon: <Megaphone size={24} />, title: 'Election Production', desc: 'Design and production of campaign banners, posters, and branding materials.', colSpan: 'md:col-span-1 lg:col-span-1' },
    { icon: <BarChart3 size={24} />, title: 'Surveys & Research', desc: 'Socio-political surveys, voter sentiment analysis, and demographic profiling.', colSpan: 'md:col-span-1 lg:col-span-1' },
    { icon: <Target size={24} />, title: 'Additional Solutions', desc: 'Demand-driven strategies, political event planning, and perception building.', colSpan: 'md:col-span-2 lg:col-span-1' }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-600 font-bold tracking-wider uppercase mb-3 text-sm">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">End-to-End Campaign Solutions</h3>
          <p className="text-lg text-slate-600">Comprehensive strategies tailored to build your political narrative and secure electoral success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 group ${service.colSpan}`}
            >
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const campaigns = [
    { title: "Pune Municipal Corporation Elections", candidate: "Maruti Suman Shivaji Tupe", party: "BJP", result: "Decisive victory with a margin exceeding 6,000 votes." },
    { title: "Maharashtra Assembly Elections", candidate: "Prashant Sudamrao Jagtap", party: "NCP", result: "First Runner-Up. Significantly strengthened visibility and engagement." },
    { title: "Pimpri Assembly Campaign", candidate: "Adv. Gautam Chabukswar", party: "Shiv Sena (UBT)", result: "Extensive surveys and groundwork executed successfully." },
    { title: "Political Branding Campaign", candidate: "Dr. Hulgesh Mariappa Chalwadi", party: "BSP", result: "Statewide personal branding and podcast production." }
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-teal-600 font-bold tracking-wider uppercase mb-3 text-sm">Campaign Experience</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Proven Track Record</h3>
            <p className="text-slate-600 text-lg">Our strategic interventions have shaped electoral outcomes across municipal and assembly elections.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campaigns.map((campaign, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-50 rounded-[2rem] p-8 md:p-10 border border-slate-100 hover:border-teal-200 transition-colors group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="inline-block px-4 py-1.5 bg-white shadow-sm text-slate-900 text-xs font-bold uppercase rounded-full border border-slate-200">
                  {campaign.party}
                </span>
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={20} />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{campaign.title}</h4>
              <p className="text-amber-600 font-bold mb-4 text-lg">{campaign.candidate}</p>
              <div className="h-px w-full bg-slate-200 mb-4"></div>
              <p className="text-slate-600">{campaign.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-slate-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1555848962-6e79363ec58f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-amber-500 font-bold tracking-wider uppercase mb-4 text-sm">Partner With Us</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              Ready to Build Your Political Narrative?
            </h3>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Let's discuss how we can politically harness the connection between you and the people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:pravahsolution@gmail.com" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:scale-105">
                <Mail size={20} /> Email Us
              </a>
              <a href="tel:+919503931830" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:scale-105">
                <Phone size={20} /> +91 95039 31830
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Pravah Solution Logo" className="h-12 w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <span className="font-extrabold text-2xl tracking-tight text-slate-900">
                Pravah<span className="text-teal-600">Solution</span>
              </span>
            </div>
            <p className="text-slate-600 max-w-sm mb-8 text-lg leading-relaxed">
              Politically harnessing the connection between leaders and people through data-driven strategies.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              {[1, 2, 3].map((i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-teal-600 hover:border-teal-600 transition-colors shadow-sm">
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-4">
                {['Home', 'About Us', 'Services', 'Experience'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-slate-600 hover:text-teal-600 font-medium transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600 font-medium">
                  <MapPinIcon className="text-teal-600 mt-1 flex-shrink-0" size={18} /> 
                  <span>Available for campaigns nationwide across India</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <Mail className="text-teal-600 flex-shrink-0" size={18} /> 
                  <a href="mailto:pravahsolution@gmail.com" className="hover:text-teal-600 transition-colors">pravahsolution@gmail.com</a>
                </li>
                <li className="flex items-start gap-3 text-slate-600 font-medium">
                  <Phone className="text-teal-600 mt-1 flex-shrink-0" size={18} /> 
                  <div className="flex flex-col">
                    <a href="tel:+919503931830" className="hover:text-teal-600 transition-colors">+91 95039 31830</a>
                    <a href="tel:+918888999433" className="hover:text-teal-600 transition-colors">+91 88889 99433</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Team Pravah Solution. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-teal-200 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}




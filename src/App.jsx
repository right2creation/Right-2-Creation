import { useState, useEffect, useRef } from 'react'
import logoImg from './assets/logo.webp'
import heroBg from './assets/hero-bg.webp'
import pdfEditorMockup from './assets/pdf-editor-mockup.webp'
import tabLogo from './assets/tab-logo.png'
import emailjs from '@emailjs/browser'

/* ─── Inline SVG Icons ─── */
const Icon = {
  Menu: () => (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" /></svg>
  ),
  X: () => (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
  ),
  ArrowRight: () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="10" x2="16" y2="10" /><polyline points="11,5 16,10 11,15" /></svg>
  ),
  Code: () => (
    <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="8,6 2,14 8,22" /><polyline points="20,6 26,14 20,22" /></svg>
  ),
  Layers: () => (
    <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12,2 2,7 12,12 22,7" /><polyline points="2,12 12,17 22,12" /><polyline points="2,17 12,22 22,17" /></svg>
  ),
  Rocket: () => (
    <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.26-1.54 1.6-2.4C7.8 16.7 6.4 15.3 4.5 16.5z" /><path d="M12 15l-3-3m5.5 1.5c4-4 6-10 6-10s-6 2-10 6c-2.3 2.3-3.1 5.3-2.5 7.5L12 15z" /></svg>
  ),
  Zap: () => (
    <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,2 4,14 11,14 10,22 19,10 12,10" /></svg>
  ),
  Shield: () => (
    <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
  ),
  Globe: () => (
    <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
  ),
  FileText: () => (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
  ),
  Mail: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
  ),
  MapPin: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
  ),
  ExternalLink: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15,3 21,3 21,9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
  ),
  Star: () => (
    <svg width="17" height="17" fill="#E8673C" stroke="#E8673C" strokeWidth="1"><polygon points="8.5,1 10.7,6 16,6.7 12.2,10.5 13.2,15.7 8.5,13.1 3.8,15.7 4.8,10.5 1,6.7 6.3,6" /></svg>
  ),
}

/* ─── Scroll Observer ─── */
function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

/* ═══════════════════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════════════════ */
function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
      ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4'
      : 'bg-transparent py-6'
      }`}>
      <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between">

        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-4 group">
          <img
            src={logoImg}
            alt="Right 2 Creation Logo"
            className="h-10 sm:h-12 w-auto object-contain max-w-[180px] group-hover:scale-105 transition-transform duration-200"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white tracking-tight leading-none">
              Right <span className="text-[#E8673C]">2</span> Creation
            </span>
            <span className="text-[10px] text-gray-400 tracking-widest uppercase font-semibold mt-1"><span className="text-[#E8673C]">Creation Is Our Rights</span></span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-9 text-base font-medium">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#E8673C] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white text-xs font-bold uppercase tracking-wider
                       px-6 py-3 rounded-xl shadow-lg shadow-[#C4582A]/25 hover:shadow-xl hover:shadow-[#C4582A]/40
                       hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden text-gray-200 hover:text-white p-2.5 rounded-xl bg-white/5 border border-white/10"
        >
          {open ? <Icon.X /> : <Icon.Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-[#111111] border-b border-white/10 px-8 py-6 space-y-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-200 hover:text-[#E8673C] text-base font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider mt-4"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   HERO SECTION (WIDE FULL-BLEED ELEGANT LAYOUT)
   ═══════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-36 pb-28 flex items-center overflow-hidden bg-[#0A0A0A]">

      {/* Edge-to-Edge Glowing Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src={heroBg} alt="Abstract glowing background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        <div className="absolute top-1/4 left-1/6 w-[600px] h-[600px] bg-[#C4582A]/15 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/6 w-[650px] h-[650px] bg-[#4A1A0A]/40 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column — Big Headline & CTAs */}
          <div className="lg:col-span-6 space-y-8 text-left">



            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              We Build{' '}
              <span className="bg-gradient-to-r from-[#C4582A] via-[#E8673C] to-[#F08060] bg-clip-text text-transparent">
                Digital Products
              </span>{' '}
              That Matter.
            </h1>

            {/* Paragraph */}
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-normal">
              Right 2 Creation is a premier software company creating high-performance developer tools, AI applications, and SaaS platforms engineered for user delight and real utility.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href="#products"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#C4582A] to-[#E8673C]
                           text-white font-bold px-8 py-4 rounded-2xl text-base
                           shadow-xl shadow-[#C4582A]/25 hover:shadow-2xl hover:shadow-[#C4582A]/40
                           hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                Explore Products
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                  <Icon.ArrowRight />
                </span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-gray-200
                           font-semibold px-7 py-4 rounded-2xl text-base hover:bg-white/10 hover:text-white
                           transition-all duration-200"
              >
                Learn More
              </a>
            </div>

            {/* Stats Row */}
            <div className="pt-10 border-t border-white/10 flex flex-wrap gap-12 sm:gap-16">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">5+</div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Products</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#E8673C]">10K+</div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Active Users</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">99.9%</div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Uptime</div>
              </div>
            </div>

          </div>

          {/* Right Column — Large Prominent Product Mockup Showcase */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-[#141414]/90 border border-white/15 rounded-3xl overflow-hidden shadow-2xl shadow-black/90 hover:border-[#C4582A]/40 transition-all duration-300">

              {/* Window Bar Header */}
              <div className="bg-[#1E1E1E] px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-sm text-gray-200 font-semibold ml-2">Fast PDF Editor</span>
                </div>
                <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md font-bold uppercase tracking-wider">
                  Live Product
                </span>
              </div>

              {/* Product Screenshot */}
              <div className="p-6 bg-black/70">
                <img
                  src={pdfEditorMockup}
                  alt="Fast PDF Editor Studio"
                  className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
                />
              </div>

              {/* Window Footer Bar */}
              <div className="bg-[#141414] px-7 py-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C4582A] to-[#E8673C] flex items-center justify-center text-white">
                    <Icon.FileText />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Fast PDF Editor</div>
                    <div className="text-xs text-gray-400">AI-Powered Vector Studio</div>
                  </div>
                </div>

                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8673C] bg-[#4A1A0A]/50 border border-[#C4582A]/30 px-4 py-2 rounded-xl hover:bg-[#C4582A] hover:text-white transition-all duration-200"
                >
                  Coming Soon
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   ABOUT SECTION
   ═══════════════════════════════════════════════════════════════════ */
function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" ref={ref} className="relative py-32 bg-[#0A0A0A] border-t border-white/5">
      <div className={`max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>

        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[#E8673C] text-xs font-bold uppercase tracking-[0.2em]">Who We Are</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">About Right 2 Creation</h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            We are a software product studio building next-generation tools combining modern web design, vector graphic engines, and privacy-first client execution. Our core motive is to create powerful products that are <span className="text-[#E8673C] font-bold">completely free</span> to the user.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Icon.Rocket />,
              title: 'Innovation-Led',
              desc: 'Leveraging web standards, vector graphics, and intelligent AI models to deliver fast, delightful software tools.',
            },
            {
              icon: <Icon.Code />,
              title: 'Product Excellence',
              desc: 'Focusing strictly on solving real friction points for users with zero bloat and uncompromising application quality.',
            },
            {
              icon: <Icon.Globe />,
              title: 'Global Scale',
              desc: 'Designed for professionals, creators, and teams worldwide with secure in-browser document processing.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-white/10 rounded-3xl p-10 hover:border-[#C4582A]/40
                         hover:bg-[#161616] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#4A1A0A]/60 border border-[#C4582A]/30
                                flex items-center justify-center text-[#E8673C] mb-8">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   SERVICES SECTION
   ═══════════════════════════════════════════════════════════════════ */
function Services() {
  const [ref, inView] = useInView()

  const services = [
    {
      icon: <Icon.Layers />,
      title: 'Product Engineering',
      desc: 'Full product lifecycle engineering from architectural wireframing to high-performance production deployment.',
    },
    {
      icon: <Icon.Zap />,
      title: 'AI & Document AI',
      desc: 'Integrating document parsing, OCR scanning, and intelligent auto-text alignment engines.',
    },
    {
      icon: <Icon.Shield />,
      title: 'Privacy-First SaaS',
      desc: 'Architectures engineered for client-side processing, keeping user documents 100% private.',
    },
    {
      icon: <Icon.Code />,
      title: 'Developer Utilities',
      desc: 'Building high-utility tools, canvas suites, and web applications for modern professional workflows.',
    },
  ]

  return (
    <section id="services" ref={ref} className="relative py-32 bg-[#0E0E0E] border-t border-white/5">
      <div className={`max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>

        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[#E8673C] text-xs font-bold uppercase tracking-[0.2em]">What We Do</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Our Core Capabilities</h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Engineering domain expertise that powers our digital software products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#141414] border border-white/10 rounded-3xl p-8 hover:border-[#C4582A]/40
                         hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#4A1A0A] to-[#6B2E15]
                              flex items-center justify-center text-[#E8673C] mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   PRODUCTS SECTION
   ═══════════════════════════════════════════════════════════════════ */
function Products() {
  const [ref, inView] = useInView()

  return (
    <section id="products" ref={ref} className="relative py-32 bg-[#0A0A0A] border-t border-white/5">
      <div className={`max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>

        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[#E8673C] text-xs font-bold uppercase tracking-[0.2em]">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Our Software Products</h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Explore our flagship live products and upcoming software pipeline.
          </p>
        </div>

        {/* Flagship Product Showcase: Fast PDF Editor */}
        <div className="bg-[#121212] border border-white/15 rounded-3xl overflow-hidden shadow-2xl mb-16 hover:border-[#C4582A]/40 transition-all duration-300">
          <div className="grid lg:grid-cols-12 items-center">

            {/* Left Details Column */}
            <div className="lg:col-span-6 p-10 sm:p-14 space-y-7">
              <div className="inline-flex items-center gap-2.5 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Active Flagship Product
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Fast PDF Editor
              </h3>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                A free online PDF studio featuring vector canvas editing, AI text alignment, OCR scanning, signatures, and instant client-side document export.
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['AI Text Alignment', 'Vector Canvas', 'OCR Scanning', 'E-Signatures', 'PDF → Image', '100% Private'].map(tag => (
                  <span key={tag} className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3.5 py-1.5 rounded-xl">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-8">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow-xl shadow-[#C4582A]/25 hover:shadow-2xl hover:shadow-[#C4582A]/40 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Coming Soon
                </a>

                <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => <Icon.Star key={i} />)}
                  </div>
                  <span className="text-white font-bold ml-1">4.9 / 5</span> rating
                </div>
              </div>
            </div>

            {/* Right Mockup Display Column */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#4A1A0A]/40 to-black p-10 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-white/10">
              <img
                src={pdfEditorMockup}
                alt="Fast PDF Editor Studio Interface"
                className="w-full max-w-lg rounded-2xl border border-white/15 shadow-2xl"
              />
            </div>

          </div>
        </div>

        {/* Upcoming Product Pipeline */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Vector Design Studio', tag: 'In R&D', desc: 'Browser-based vector graphic editing engine optimized for extreme performance.' },
            { title: 'AI Document Summarizer', tag: 'Planned', desc: 'Privacy-focused LLM document parsing and structured insights generator.' },
            { title: 'Data Workflow Engine', tag: 'In Concept', desc: 'Visual flow builder for automated business logic and API integrations.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#121212] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8673C] bg-[#4A1A0A]/60 px-3 py-1 rounded-lg border border-[#C4582A]/30">
                  {item.tag}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   CONTACT SECTION
   ═══════════════════════════════════════════════════════════════════ */
function Contact() {
  const [ref, inView] = useInView()
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) return

    setIsSending(true)
    emailjs.sendForm('service_en4ueqg', 'template_ed9t5ym', formRef.current, '5wQ_5m2ipo7kjiTyq')
      .then((result) => {
        setSubmitted(true)
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 4000)
      }, (error) => {
        console.error(error.text)
        alert("Failed to send message, please try again later.")
      })
      .finally(() => {
        setIsSending(false)
      });
  }

  return (
    <section id="contact" ref={ref} className="relative py-32 bg-[#0E0E0E] border-t border-white/5">
      <div className={`max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>

        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[#E8673C] text-xs font-bold uppercase tracking-[0.2em]">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Contact Right 2 Creation</h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Have questions about our software products or interested in collaboration? Reach out to us.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-14 max-w-5xl mx-auto">

          {/* Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              {[
                { icon: <Icon.Mail />, label: 'Email Us', value: 'contact@right2creation.in' },
                { icon: <Icon.MapPin />, label: 'Location', value: 'India' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#181818] border border-white/10 flex items-center justify-center text-[#E8673C] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{item.label}</div>
                    <div className="text-white font-semibold text-base mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#141414] border border-white/10 rounded-2xl p-7 space-y-2">
              <h4 className="text-white font-bold text-lg">Product Partnerships</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We are actively expanding our software product portfolio and welcome user feedback, feature requests, and technical partnerships.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <form ref={formRef} onSubmit={handleSubmit} className="bg-[#141414] border border-white/10 rounded-3xl p-10 space-y-6">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#C4582A] text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#C4582A] text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  placeholder="Subject"
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#C4582A] text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we help?"
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#C4582A] text-sm transition-colors resize-none"
                />
              </div>

              {submitted && (
                <div className="bg-[#E8673C]/10 border border-[#E8673C]/20 text-[#E8673C] text-sm px-4 py-3 rounded-xl font-medium">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white font-bold py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-[#C4582A]/20 hover:shadow-xl transition-all duration-200 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/10 py-12 text-sm text-gray-400">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-4">
          <img
            src={logoImg}
            alt="Right 2 Creation Logo"
            className="h-8 sm:h-10 w-auto object-contain max-w-[140px]"
          />
          <div className="flex flex-col">
            <span className="text-white font-bold text-base leading-none">Right 2 Creation</span>
            <span className="text-[#E8673C] text-[10px] uppercase tracking-widest font-bold mt-1">Creation Is Our Rights</span>
          </div>
          <span className="text-gray-600 text-xs ml-4 border-l border-white/10 pl-4 py-1">© {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-8 text-sm text-gray-400 font-medium">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#products" className="hover:text-white transition-colors">Products</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

      </div>
    </footer>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════════════════════════════ */
export default function App() {
  useEffect(() => {
    document.querySelectorAll("link[rel*='icon']").forEach(e => e.remove())
    const link = document.createElement('link')
    link.rel = 'icon'
    link.type = 'image/png'
    link.href = tabLogo
    document.head.appendChild(link)
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C4582A] selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Contact />
      <Footer />
    </div>
  )
}

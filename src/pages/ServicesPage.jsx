import { Link, useSeo } from '../router'
import { Icon } from '../components/Icons'

export default function ServicesPage() {
  useSeo({
    title: 'Digital & Software Product Development Services | Right 2 Creation',
    description: 'Explore Right 2 Creation capabilities in software product development, digital product engineering, high-performance web application development, and AI integration.',
    canonicalUrl: 'https://right2creation.in/services'
  })

  const services = [
    {
      icon: <Icon.Code />,
      title: 'Software Product Development',
      badge: 'End-to-End',
      desc: 'From initial pain-point discovery and architectural spikes to production deployment, we build robust, scalable software products engineered to solve genuine user needs.',
      details: [
        'Modular system architecture & API design',
        'WebAssembly & client-side compute offloading',
        'Continuous integration & automated deployment pipelines',
        'Telemetry, error logging & performance monitoring'
      ]
    },
    {
      icon: <Icon.Layers />,
      title: 'Digital Product Development',
      badge: 'Product Strategy',
      desc: 'Holistic digital product strategy combining high-taste UI design, frictionless user onboarding, conversion optimization, and privacy-first architectural compliance.',
      details: [
        'Design systems & design token foundations',
        'Micro-interaction choreography & 60fps animations',
        'Zero-friction user onboarding workflows',
        'Data sovereignty & GDPR-compliant client architectures'
      ]
    },
    {
      icon: <Icon.Globe />,
      title: 'Web Application Development',
      badge: 'Modern Web Stack',
      desc: 'Building sub-second, highly responsive web applications using React 19, modern Vite build tooling, responsive canvas interfaces, and edge CDN distribution.',
      details: [
        'Hardware-accelerated HTML5 canvas & WebGL applications',
        'Core Web Vitals & sub-second latency optimization',
        'SEO architecture, structured schema & sitemaps',
        'Cross-platform responsive ergonomics (Desktop, Tablet, Mobile)'
      ]
    },
    {
      icon: <Icon.Zap />,
      title: 'Document AI & OCR Engines',
      badge: 'Intelligent Utilities',
      desc: 'Integrating on-device optical character recognition (OCR), intelligent typography matching, automated text reflow, and structured document parsing.',
      details: [
        'In-browser client OCR scanning engines',
        'Typographic font metric estimation & AI alignment',
        'Structured tabular data extraction from PDFs',
        'Automated document classification & indexing'
      ]
    }
  ]

  return (
    <div className="pt-32 pb-24 space-y-24 bg-[#0A0A0A]">

      {/* ─── HERO HEADER ─── */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#4A1A0A]/60 border border-[#C4582A]/30 text-[#E8673C] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            Engineering & Advisory
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Digital Product <span className="bg-gradient-to-r from-[#C4582A] via-[#E8673C] to-[#F08060] bg-clip-text text-transparent">Capabilities</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            Engineering domain expertise that powers our in-house software products and guides technical collaborations.
          </p>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-white/10 rounded-3xl p-8 sm:p-10 hover:border-[#C4582A]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4A1A0A] to-[#6B2E15] flex items-center justify-center text-[#E8673C]">
                    {svc.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8673C] bg-[#4A1A0A]/60 px-3 py-1 rounded-lg border border-[#C4582A]/30">
                    {svc.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{svc.title}</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">{svc.desc}</p>

                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Key Deliverables & Strengths</span>
                  <ul className="space-y-2 pt-2">
                    {svc.details.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2.5 text-sm text-gray-400">
                        <span className="text-[#E8673C] shrink-0"><Icon.Check /></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── DEVELOPMENT METHODOLOGY ─── */}
      <section className="bg-[#0E0E0E] py-20 border-y border-white/5">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#E8673C] text-xs font-bold uppercase tracking-[0.2em]">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">The Engineering Lifecycle</h2>
            <p className="text-gray-400 text-base sm:text-lg">
              How we take digital product development from concept to high-scale execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Problem Discovery', desc: 'Isolating specific workflow bottlenecks and validating product demand.' },
              { step: '02', title: 'Architecture Spike', desc: 'Prototyping core computational engines (Wasm/Canvas) for feasibility.' },
              { step: '03', title: 'Design & Engineering', desc: 'Crafting responsive UI tokens, state management, and edge pipelines.' },
              { step: '04', title: 'Continuous Delivery', desc: 'Automated CI/CD testing, telemetry monitoring, and rapid updates.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-[#141414] border border-white/10 rounded-2xl p-7 space-y-3">
                <div className="text-2xl font-extrabold text-[#E8673C]">{step.step}</div>
                <h4 className="text-lg font-bold text-white">{step.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
        <div className="bg-[#141414] border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Interested in Collaboration or Advisory?</h3>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Get in touch to discuss product engineering, web application development, or technical consulting.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white font-bold px-8 py-4 rounded-xl text-sm shadow-lg hover:scale-105 transition-all"
          >
            Start a Conversation <Icon.ArrowRight />
          </Link>
        </div>
      </section>

    </div>
  )
}

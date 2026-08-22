import { useState } from 'react'
import pdfEditorMockup from '../assets/pdf-editor-mockup.webp'
import { Link, useSeo } from '../router'
import { Icon } from '../components/Icons'

export default function FwdPdfProductPage() {
  useSeo({
    title: 'Fast PDF Editor (FWD PDF) | Free In-Browser Online PDF Editor Studio',
    description: 'Fast PDF Editor (FWD PDF) by Right 2 Creation: Free, 100% private in-browser online PDF editor. Edit text, annotate lecture slides, sign contracts, and merge pages with zero watermarks.',
    canonicalUrl: 'https://right2creation.in/products/fwd-pdf'
  })

  const [activeTab, setActiveTab] = useState('all')
  const [openFaq, setOpenFaq] = useState(0)

  const features = [
    {
      id: 'text-edit',
      category: 'editing',
      title: 'AI Smart Text Alignment',
      badge: 'Core Feature',
      desc: 'Modify text within existing documents with automatic typography, font metric calculation, and smart paragraph reflow.',
      icon: <Icon.PenTool />
    },
    {
      id: 'vector-canvas',
      category: 'editing',
      title: 'Hardware-Accelerated Vector Canvas',
      badge: 'High Precision',
      desc: 'Draw vector shapes, freehand annotations, highlight passages, and zoom smoothly at 60fps without pixelation.',
      icon: <Icon.Layers />
    },
    {
      id: 'student-tools',
      category: 'academic',
      title: 'Built for Academic Research & Students',
      badge: 'Free for Students',
      desc: 'Isolate textbook chapters, highlight research papers with color-coded tags, and assemble multi-part lab assignments.',
      icon: <Icon.GraduationCap />
    },
    {
      id: 'signatures',
      category: 'utility',
      title: 'Digital Signatures & Fillable Forms',
      badge: 'Business Ready',
      desc: 'Create transparent handwritten vector signatures, stamp company seals, and complete official government/university forms.',
      icon: <Icon.Shield />
    },
    {
      id: 'privacy',
      category: 'security',
      title: '100% In-Browser Client Privacy',
      badge: 'Zero Cloud Storage',
      desc: 'Your documents never touch a remote server. All parsing, editing, and compiling occur inside your device memory heap.',
      icon: <Icon.Lock />
    },
    {
      id: 'page-manager',
      category: 'utility',
      title: 'Page Organizer & Multi-PDF Merge',
      badge: 'Fast Workflow',
      desc: 'Drag and drop page thumbnails to reorder, delete blank pages, rotate orientations, or combine multiple slide decks into one.',
      icon: <Icon.FileText />
    }
  ]

  const filteredFeatures = activeTab === 'all'
    ? features
    : features.filter(f => f.category === activeTab)

  const faqs = [
    {
      q: 'Is Fast PDF Editor (FWD PDF) really 100% free with no watermarks?',
      a: 'Yes. At Right 2 Creation, our founding principle is "Creation Is Our Rights". FWD PDF is completely free for students, educators, and creators worldwide, with zero watermarks, no hidden fees, and no mandatory subscriptions.'
    },
    {
      q: 'How does FWD PDF protect my confidential documents and privacy?',
      a: 'Unlike traditional online PDF converters that upload your files to remote cloud servers, FWD PDF executes 100% locally inside your browser using WebAssembly and HTML5 Canvas. Your documents never leave your computer, and all memory is purged when you close the tab.'
    },
    {
      q: 'Can I use FWD PDF on a Chromebook, Mac, Windows, or tablet?',
      a: 'Yes. Because FWD PDF runs in standard modern web browsers (Chrome, Edge, Firefox, Safari), it is fully cross-platform and requires zero desktop installation.'
    },
    {
      q: 'How does the AI text alignment work?',
      a: 'When you select or insert text, the editor analyzes the surrounding typographic baseline, ascender, and descender metrics to automatically align your modifications with the original document style.'
    },
    {
      q: 'Can I combine multiple lecture PDFs or assignment files into one?',
      a: 'Yes. Our integrated Page Organizer allows you to drag and drop multiple PDF files, reorder pages visually, remove redundant slides, and export a clean unified document.'
    }
  ]

  return (
    <div className="pt-32 pb-24 space-y-28 bg-[#0A0A0A]">

      {/* ─── HERO SHOWCASE ─── */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="inline-flex items-center gap-2.5 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Online PDF Editor · Free & Private
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Fast PDF Editor{' '}
              <span className="bg-gradient-to-r from-[#C4582A] via-[#E8673C] to-[#F08060] bg-clip-text text-transparent">
                (FWD PDF)
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
              The high-performance, in-browser PDF editing studio. Modify text with smart AI alignment, annotate lecture slides, sign contracts, and merge documents without watermarks or server uploads.
            </p>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap gap-3 pt-1">
              <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3.5 py-1.5 rounded-xl flex items-center gap-1.5">
                <Icon.Check /> 100% In-Browser Privacy
              </span>
              <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3.5 py-1.5 rounded-xl flex items-center gap-1.5">
                <Icon.Check /> Zero Watermarks
              </span>
              <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3.5 py-1.5 rounded-xl flex items-center gap-1.5">
                <Icon.Check /> Free for Students & Creators
              </span>
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-5 pt-4">
              <span className="inline-flex items-center gap-2 bg-[#4A1A0A]/80 border border-[#C4582A]/40 text-[#E8673C] font-bold px-7 py-4 rounded-xl text-sm">
                Coming Soon to Web
              </span>

              <Link
                to="/blog/complete-free-pdf-editor-guide-for-students"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              >
                Read Student Workflow Guide <Icon.ArrowRight />
              </Link>
            </div>
          </div>

          {/* Right Product Mockup */}
          <div className="lg:col-span-6">
            <div className="bg-[#141414] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 hover:border-[#C4582A]/40 transition-all duration-300">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-gray-400 font-mono ml-2">fwd-pdf-studio.canvas</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-green-400 bg-green-500/10 px-2.5 py-1 rounded border border-green-500/20">
                  Client Sandbox Active
                </span>
              </div>
              <img
                src={pdfEditorMockup}
                alt="Fast PDF Editor (FWD PDF) Interface"
                className="w-full h-auto rounded-xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ─── INTERACTIVE FEATURES MATRIX ─── */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-[#E8673C] text-xs font-bold uppercase tracking-[0.2em]">Feature Suite</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Engineered for Every Document Workflow</h2>
          <p className="text-gray-400 text-base sm:text-lg">
            From quick form signatures to multi-chapter academic markups, FWD PDF gives you complete vector control.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Capabilities' },
              { id: 'editing', label: 'Vector & Text Editing' },
              { id: 'academic', label: 'Student & Research' },
              { id: 'utility', label: 'Signatures & Organization' },
              { id: 'security', label: 'Privacy Architecture' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#C4582A] text-white shadow-lg'
                    : 'bg-[#141414] text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFeatures.map((feat) => (
            <div
              key={feat.id}
              className="bg-[#121212] border border-white/10 rounded-3xl p-8 hover:border-[#C4582A]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#4A1A0A]/60 border border-[#C4582A]/30 flex items-center justify-center text-[#E8673C]">
                    {feat.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                    {feat.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── COMPARISON TABLE: FWD PDF VS ALTERNATIVES ─── */}
      <section className="bg-[#0E0E0E] py-20 border-y border-white/5">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#E8673C] text-xs font-bold uppercase tracking-[0.2em]">Honest Comparison</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">How FWD PDF Compares</h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Compare Fast PDF Editor against expensive desktop suites and ad-supported online converters.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 text-xs font-bold uppercase tracking-wider text-gray-400">
                  <th className="py-4 px-6">Feature / Metric</th>
                  <th className="py-4 px-6 text-[#E8673C] bg-[#4A1A0A]/30 rounded-t-2xl">Fast PDF Editor (FWD PDF)</th>
                  <th className="py-4 px-6">Legacy Desktop Suites</th>
                  <th className="py-4 px-6">Generic Cloud Converters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm text-gray-300">
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Pricing Model</td>
                  <td className="py-4 px-6 font-bold text-green-400 bg-[#4A1A0A]/20">100% Free Forever</td>
                  <td className="py-4 px-6 text-gray-400">$150 - $300 / year</td>
                  <td className="py-4 px-6 text-gray-400">Paywalls after 2 edits</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Document Privacy</td>
                  <td className="py-4 px-6 font-bold text-green-400 bg-[#4A1A0A]/20">100% In-Browser Memory</td>
                  <td className="py-4 px-6 text-gray-400">Local disk storage</td>
                  <td className="py-4 px-6 text-red-400">Uploaded to cloud servers</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Export Watermarks</td>
                  <td className="py-4 px-6 font-bold text-green-400 bg-[#4A1A0A]/20">Zero Watermarks</td>
                  <td className="py-4 px-6 text-gray-400">None</td>
                  <td className="py-4 px-6 text-red-400">Large intrusive watermarks</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Installation Footprint</td>
                  <td className="py-4 px-6 font-bold text-green-400 bg-[#4A1A0A]/20">0 MB (Web instant)</td>
                  <td className="py-4 px-6 text-gray-400">1.5 GB - 3.0 GB installer</td>
                  <td className="py-4 px-6 text-gray-400">0 MB (Web)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Rendering Speed</td>
                  <td className="py-4 px-6 font-bold text-green-400 bg-[#4A1A0A]/20">60fps Vector Canvas</td>
                  <td className="py-4 px-6 text-gray-400">Native speed</td>
                  <td className="py-4 px-6 text-yellow-400">Server queue delays</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── FREQUENTLY ASKED QUESTIONS ─── */}
      <section className="max-w-[1000px] mx-auto px-6 sm:px-12 space-y-8">
        <div className="text-center space-y-4">
          <span className="text-[#E8673C] text-xs font-bold uppercase tracking-[0.2em]">Questions & Answers</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Everything you need to know about Fast PDF Editor (FWD PDF).
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx
            return (
              <div
                key={idx}
                className="bg-[#121212] border border-white/10 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between text-white font-bold text-base hover:text-[#E8673C] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#E8673C]' : 'text-gray-400'}`}>
                    <Icon.ChevronDown />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
        <div className="bg-[#141414] border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Explore More Educational Guides</h3>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Read our in-depth guides on PDF editing software architecture, free student study hacks, and digital product development.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/blog"
              className="bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow-lg hover:scale-105 transition-all"
            >
              Browse Blog & Guides
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 text-gray-200 font-semibold px-7 py-3.5 rounded-xl text-sm hover:bg-white/15 transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

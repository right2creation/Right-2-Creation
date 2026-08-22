import pdfEditorMockup from '../assets/pdf-editor-mockup.webp'
import { Link, useSeo } from '../router'
import { Icon } from '../components/Icons'

export default function ProductsPage() {
  useSeo({
    title: 'Software Products & Tools | Right 2 Creation',
    description: 'Explore the software products suite from Right 2 Creation: Fast PDF Editor (FWD PDF), Vector Design Studio, AI Document Summarizer, and Data Workflow Engine.',
    canonicalUrl: 'https://right2creation.in/products'
  })

  return (
    <div className="pt-32 pb-24 space-y-24 bg-[#0A0A0A]">
      {/* ─── HERO HEADER ─── */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#4A1A0A]/60 border border-[#C4582A]/30 text-[#E8673C] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            Product Portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Our Software <span className="bg-gradient-to-r from-[#C4582A] via-[#E8673C] to-[#F08060] bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            High-utility, privacy-first software built with WebAssembly, modern vector graphics, and frictionless user interfaces.
          </p>
        </div>
      </section>

      {/* ─── FLAGSHIP PRODUCT SPOTLIGHT: FAST PDF EDITOR (FWD PDF) ─── */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="bg-[#121212] border border-white/15 rounded-3xl overflow-hidden shadow-2xl hover:border-[#C4582A]/40 transition-all duration-300">
          <div className="grid lg:grid-cols-12 items-center">

            {/* Left Details Column */}
            <div className="lg:col-span-6 p-8 sm:p-14 space-y-6">
              <div className="inline-flex items-center gap-2.5 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Active Flagship Tool
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Fast PDF Editor <span className="text-[#E8673C]">(FWD PDF)</span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                A free, full-featured online PDF editor engineered for speed, privacy, and precision. Edit text, draw vector annotations, merge academic slides, sign agreements, and extract pages without uploading your files to remote cloud servers.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {['AI Text Alignment', 'Vector Canvas', 'OCR Scanning', 'E-Signatures', '100% In-Browser Privacy', 'Free for Students'].map((tag) => (
                  <span key={tag} className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3.5 py-1.5 rounded-xl">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-5">
                <Link
                  to="/products/fwd-pdf"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow-xl shadow-[#C4582A]/25 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  View Product Showcase <Icon.ArrowRight />
                </Link>

                <Link
                  to="/blog/modern-pdf-editing-software-architecture"
                  className="text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                >
                  Read Architecture Breakdown →
                </Link>
              </div>
            </div>

            {/* Right Mockup Display Column */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#4A1A0A]/40 to-black p-8 sm:p-10 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-white/10">
              <Link to="/products/fwd-pdf" className="block group">
                <img
                  src={pdfEditorMockup}
                  alt="Fast PDF Editor Studio Interface"
                  className="w-full max-w-lg rounded-2xl border border-white/15 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ─── UPCOMING PRODUCT PIPELINE ─── */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="mb-12">
          <span className="text-[#E8673C] text-xs font-bold uppercase tracking-[0.2em]">R&D Pipeline</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Next-Gen Software Pipeline</h2>
          <p className="text-gray-400 text-base sm:text-lg mt-2">
            Tools actively in concept, prototyping, and engineering at Right 2 Creation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Vector Design Studio',
              tag: 'In R&D',
              tagColor: 'text-[#E8673C] bg-[#4A1A0A]/60 border-[#C4582A]/30',
              icon: <Icon.PenTool />,
              desc: 'High-performance browser vector graphics editor powered by WebGL shaders and GPU-accelerated bezier mathematics.'
            },
            {
              title: 'AI Document Summarizer',
              tag: 'Planned',
              tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
              icon: <Icon.Cpu />,
              desc: 'Privacy-focused on-device LLM document parser extracting structured tables, citations, and executive summaries.'
            },
            {
              title: 'Data Workflow Engine',
              tag: 'In Concept',
              tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
              icon: <Icon.Layers />,
              desc: 'Node-based visual workflow builder for automated data extraction, format normalization, and API piping.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E8673C]">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg border ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
        <div className="bg-[#141414] border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Have a Feature Request or Product Idea?</h3>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            We build software based on community feedback. Tell us what friction points you face in your daily workflow.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow-lg hover:scale-105 transition-all"
          >
            Submit Feedback <Icon.ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  )
}

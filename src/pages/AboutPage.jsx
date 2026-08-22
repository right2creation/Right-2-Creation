import { Link, useSeo } from '../router'
import { Icon } from '../components/Icons'

export default function AboutPage() {
  useSeo({
    title: 'About Right 2 Creation | Philosophy, Vision & Software Engineering',
    description: 'Learn about Right 2 Creation: our mission that "Creation Is Our Rights", our privacy-first engineering architecture, and how we build free, high-performance software tools.',
    canonicalUrl: 'https://right2creation.in/about'
  })

  return (
    <div className="pt-32 pb-24 space-y-24 bg-[#0A0A0A]">
      {/* ─── HERO HEADER ─── */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#4A1A0A]/60 border border-[#C4582A]/30 text-[#E8673C] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            Our Story & Values
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Creation Is Our <span className="bg-gradient-to-r from-[#C4582A] via-[#E8673C] to-[#F08060] bg-clip-text text-transparent">Rights</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            We believe the ability to create, edit, design, and share digital work is a fundamental right. Right 2 Creation was founded to challenge bloated, overpriced software and build fast, private, and accessible tools for everyone.
          </p>
        </div>
      </section>

      {/* ─── MISSION & PILLARS ─── */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#E8673C] text-xs font-bold uppercase tracking-[0.2em]">The Mission</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Democratizing Digital Productivity Through Web Standards
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Every day, millions of students, educators, researchers, and creators are held back by restrictive paywalls and clunky software. Simple tasks like annotating a lecture slide, signing an agreement, or formatting a document should not require $20/month enterprise subscriptions or uploading confidential files to insecure servers.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              By harnessing modern browser execution engines—HTML5 Canvas, WebGL, WebAssembly, and local JavaScript sandboxes—we engineer web applications that match or exceed desktop software speed while operating 100% free and private.
            </p>
          </div>

          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-7 space-y-3">
              <div className="text-3xl font-extrabold text-[#E8673C]">01</div>
              <h3 className="text-lg font-bold text-white">Client-First Privacy</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Documents stay in your browser’s local memory heap. Zero server uploads, zero logs, zero surveillance.
              </p>
            </div>

            <div className="bg-[#121212] border border-white/10 rounded-2xl p-7 space-y-3">
              <div className="text-3xl font-extrabold text-[#E8673C]">02</div>
              <h3 className="text-lg font-bold text-white">Zero Watermarks</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                We believe your output is yours. Our free tools never stamp promotional watermarks on your professional or academic work.
              </p>
            </div>

            <div className="bg-[#121212] border border-white/10 rounded-2xl p-7 space-y-3">
              <div className="text-3xl font-extrabold text-[#E8673C]">03</div>
              <h3 className="text-lg font-bold text-white">Instant Accessibility</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                No 2GB installers, no registry bloat. Open the URL on any device and begin creating immediately.
              </p>
            </div>

            <div className="bg-[#121212] border border-white/10 rounded-2xl p-7 space-y-3">
              <div className="text-3xl font-extrabold text-[#E8673C]">04</div>
              <h3 className="text-lg font-bold text-white">Uncompromising Speed</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Optimized WebAssembly rendering pipelines provide instant feedback and 60fps canvas performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ARCHITECTURAL COMPARISON: CLIENT-SIDE VS TRADITIONAL CLOUD ─── */}
      <section className="bg-[#0E0E0E] py-20 border-y border-white/5">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#E8673C] text-xs font-bold uppercase tracking-[0.2em]">Engineering Paradigm</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">How Our In-Browser Engine Works</h2>
            <p className="text-gray-400 text-base sm:text-lg">
              A transparent look at the architectural differences between traditional converters and Right 2 Creation products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Traditional Model */}
            <div className="bg-[#141414] border border-red-500/20 rounded-3xl p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-red-400">Legacy Online Converters</h3>
                <span className="text-xs bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full font-semibold">
                  High Risk & Latency
                </span>
              </div>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">✕</div>
                  <div><strong>Full Document Upload</strong>: Entire file is transmitted over the internet to a third-party server.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">✕</div>
                  <div><strong>Server Storage Vulnerability</strong>: Files are saved in temporary server storage, risking exposure.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">✕</div>
                  <div><strong>Queue Bottlenecks</strong>: Conversion queues delay simple 5-second edits into 3-minute waits.</div>
                </div>
              </div>
            </div>

            {/* Right 2 Creation Model */}
            <div className="bg-[#141414] border border-green-500/30 rounded-3xl p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl" />
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-green-400">Right 2 Creation (FWD PDF)</h3>
                <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full font-semibold">
                  100% In-Browser Sandbox
                </span>
              </div>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                  <div><strong>Zero Server Uploads</strong>: File stays entirely inside your browser’s local sandboxed memory.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                  <div><strong>Hardware Accelerated</strong>: Multi-core WebAssembly & Canvas engine runs at local CPU speed.</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                  <div><strong>Total Memory Purge</strong>: Closing the browser tab instantly erases all document data.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CALLOUT SECTION ─── */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
        <div className="bg-[#141414] border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Join Our Creator Ecosystem</h3>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Explore our software products, read our engineering guides, or connect with our team to discuss custom digital solutions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/products"
              className="bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow-lg hover:scale-105 transition-all"
            >
              Explore Products
            </Link>
            <Link
              to="/blog"
              className="bg-white/10 text-gray-200 font-semibold px-7 py-3.5 rounded-xl text-sm hover:bg-white/15 transition-all"
            >
              Read Engineering Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

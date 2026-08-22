import heroBg from '../assets/hero-bg.webp'
import pdfEditorMockup from '../assets/pdf-editor-mockup.webp'
import { Link, useSeo } from '../router'
import { Icon } from '../components/Icons'
import { BLOG_POSTS } from '../data/blogPosts'

export default function HomePage() {
  useSeo({
    title: 'Right 2 Creation',
    description: 'Right 2 Creation is an innovative software product company building next-generation digital tools, privacy-first PDF editing software, and modern web applications.',
    canonicalUrl: 'https://right2creation.in/'
  })

  const featuredPosts = BLOG_POSTS.slice(0, 3)

  return (
    <div className="space-y-0">
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-[92vh] pt-36 pb-24 flex items-center overflow-hidden bg-[#0A0A0A]">
        {/* Glowing Background */}
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
              <div className="inline-flex items-center gap-2.5 bg-[#4A1A0A]/60 border border-[#C4582A]/30 text-[#E8673C] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#E8673C] animate-pulse" />
                Software Product Studio
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
                Innovative{' '}
                <span className="bg-gradient-to-r from-[#C4582A] via-[#E8673C] to-[#F08060] bg-clip-text text-transparent">
                  Software Products
                </span>{' '}
                & Digital Solutions
              </h1>

              <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-normal">
                Right 2 Creation builds high-utility software products designed to make everyday tasks simpler, faster, and more productive — from in-browser privacy-first PDF editing tools to scalable web applications.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <Link
                  to="/products/fwd-pdf"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#C4582A] to-[#E8673C]
                             text-white font-bold px-8 py-4 rounded-2xl text-base
                             shadow-xl shadow-[#C4582A]/25 hover:shadow-2xl hover:shadow-[#C4582A]/40
                             hover:scale-[1.02] active:scale-95 transition-all duration-200"
                >
                  Explore Fast PDF Editor
                  <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                    <Icon.ArrowRight />
                  </span>
                </Link>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-gray-200
                             font-semibold px-7 py-4 rounded-2xl text-base hover:bg-white/10 hover:text-white
                             transition-all duration-200"
                >
                  View All Products
                </Link>
              </div>

              {/* Stats Row */}
              <div className="pt-10 border-t border-white/10 flex flex-wrap gap-10 sm:gap-16">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white">100%</div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Client Privacy</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#E8673C]">Free</div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">For Students & Creators</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white">0 MB</div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Desktop Install Needed</div>
                </div>
              </div>

            </div>

            {/* Right Column — Fast PDF Editor Mockup Showcase */}
            <div className="lg:col-span-6 w-full">
              <Link to="/products/fwd-pdf" className="block group">
                <div className="bg-[#141414]/90 border border-white/15 rounded-3xl overflow-hidden shadow-2xl shadow-black/90 group-hover:border-[#C4582A]/60 transition-all duration-300 transform group-hover:-translate-y-1">

                  {/* Window Bar Header */}
                  <div className="bg-[#1E1E1E] px-6 py-4 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="text-sm text-gray-200 font-semibold ml-2">Fast PDF Editor (FWD PDF)</span>
                    </div>
                    <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md font-bold uppercase tracking-wider">
                      Flagship Tool
                    </span>
                  </div>

                  {/* Product Screenshot */}
                  <div className="p-6 bg-black/70">
                    <img
                      src={pdfEditorMockup}
                      alt="Fast PDF Editor Studio Interface"
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
                        <div className="text-sm font-bold text-white group-hover:text-[#E8673C] transition-colors">Fast PDF Editor</div>
                        <div className="text-xs text-gray-400">In-Browser Vector Canvas & AI Alignment</div>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E8673C] bg-[#4A1A0A]/50 border border-[#C4582A]/30 px-4 py-2 rounded-xl group-hover:bg-[#C4582A] group-hover:text-white transition-all duration-200">
                      Learn More <Icon.ArrowRight />
                    </span>
                  </div>

                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES & VALUE PROPOSITION ─── */}
      <section className="py-28 bg-[#0E0E0E] border-t border-white/5">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-[#E8673C] text-xs font-bold uppercase tracking-[0.2em]">Why Right 2 Creation</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Engineering Next-Generation Digital Tools</h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              We combine deep client-side engineering, modern typography, and privacy-by-design principles to create software that feels instant and delightful.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Icon.Shield />,
                title: '100% In-Browser Privacy',
                desc: 'Your files and documents never leave your computer. Parsing, vector editing, and compiling run strictly in client memory.',
                link: '/products/fwd-pdf'
              },
              {
                icon: <Icon.Zap />,
                title: 'Sub-Second Web Performance',
                desc: 'Leveraging WebAssembly and optimized canvas renderers to eliminate cloud upload bottlenecks and rendering lag.',
                link: '/services'
              },
              {
                icon: <Icon.GraduationCap />,
                title: 'Free for Students & Creators',
                desc: 'We reject predatory subscriptions. Our tools are engineered to empower education and creator workflows with zero watermarks.',
                link: '/blog/complete-free-pdf-editor-guide-for-students'
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-[#141414] border border-white/10 rounded-3xl p-9 hover:border-[#C4582A]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4A1A0A] to-[#6B2E15] flex items-center justify-center text-[#E8673C] mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">{card.desc}</p>
                </div>
                <Link to={card.link} className="text-[#E8673C] text-sm font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <Icon.ArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCT: FAST PDF EDITOR ─── */}
      <section className="py-28 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="bg-gradient-to-br from-[#181210] to-[#0D0D0D] border border-white/15 rounded-3xl p-8 sm:p-14 lg:p-16">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[#E8673C] text-xs font-bold uppercase tracking-[0.2em]">Flagship Software Product</span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Fast PDF Editor <span className="text-[#E8673C]">(FWD PDF)</span>
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  An online PDF editor engineered for speed, privacy, and precision. Annotate research papers, merge slides, apply digital signatures, and edit typography directly inside your web browser without downloading heavy software.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-[#E8673C]"><Icon.Check /></span> AI Text Alignment
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-[#E8673C]"><Icon.Check /></span> Vector Shape Canvas
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-[#E8673C]"><Icon.Check /></span> OCR Recognition
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-[#E8673C]"><Icon.Check /></span> No Watermarks
                  </div>
                </div>
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/products/fwd-pdf"
                    className="bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow-xl shadow-[#C4582A]/25 hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    Deep Dive Into FWD PDF
                  </Link>
                  <Link
                    to="/blog/best-free-online-pdf-editors-tools-guide"
                    className="bg-white/5 border border-white/10 text-gray-300 hover:text-white font-semibold px-6 py-3.5 rounded-xl text-sm hover:bg-white/10 transition-all"
                  >
                    Compare PDF Tools
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-black/60 p-4 sm:p-6 rounded-2xl border border-white/10">
                  <img
                    src={pdfEditorMockup}
                    alt="Fast PDF Editor Interface Showcase"
                    className="w-full h-auto rounded-xl border border-white/10 shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LATEST BLOG POSTS & EDUCATIONAL CONTENT ─── */}
      <section className="py-28 bg-[#0E0E0E] border-t border-white/5">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[#E8673C] text-xs font-bold uppercase tracking-[0.2em]">Knowledge Hub</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">Latest Insights & Technical Guides</h2>
              <p className="text-gray-400 text-base sm:text-lg mt-2 max-w-2xl">
                Real architectural breakdowns, academic tutorials, and product development guides.
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#E8673C] hover:text-white transition-colors"
            >
              Browse All Articles ({BLOG_POSTS.length}) <Icon.ArrowRight />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-[#141414] border border-white/10 rounded-3xl p-8 hover:border-[#C4582A]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="bg-[#4A1A0A]/60 text-[#E8673C] font-semibold px-3 py-1 rounded-lg border border-[#C4582A]/30">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5"><Icon.Clock /> {post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#E8673C] transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-[#E8673C] text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
                  >
                    Read Article <Icon.ArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CALL TO ACTION BANNER ─── */}
      <section className="py-24 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <div className="bg-gradient-to-r from-[#1E110C] via-[#2A150E] to-[#1E110C] border border-[#C4582A]/30 rounded-3xl p-12 sm:p-16 max-w-4xl mx-auto space-y-6 shadow-2xl">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Experience Fast, Privacy-First Software?
            </h3>
            <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto">
              Explore our software portfolio or partner with Right 2 Creation for custom digital product development.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/products/fwd-pdf"
                className="bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white font-bold px-8 py-4 rounded-xl text-sm shadow-xl hover:scale-105 transition-all"
              >
                Explore Fast PDF Editor
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl text-sm border border-white/15 transition-all"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

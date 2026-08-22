import { useState, useEffect } from 'react'
import { Link, useRouter, useSeo } from '../router'
import { Icon } from '../components/Icons'
import { BLOG_POSTS } from '../data/blogPosts'

export default function BlogPostPage() {
  const { params } = useRouter()
  const [copied, setCopied] = useState(false)
  const slug = params.slug

  const post = BLOG_POSTS.find((p) => p.slug === slug)

  useSeo({
    title: post ? `${post.title} | Right 2 Creation` : 'Article Not Found | Right 2 Creation',
    description: post ? post.metaDescription || post.excerpt : 'Article not found on Right 2 Creation Knowledge Hub.',
    canonicalUrl: post ? `https://right2creation.in/blog/${post.slug}` : 'https://right2creation.in/blog'
  })

  // Scroll spy for active TOC item
  const [activeTocId, setActiveTocId] = useState('')

  useEffect(() => {
    if (!post) return
    const handleScroll = () => {
      const headings = post.tableOfContents.map(toc => document.getElementById(toc.id)).filter(Boolean)
      const scrollPos = window.scrollY + 180
      for (let i = headings.length - 1; i >= 0; i--) {
        if (headings[i].offsetTop <= scrollPos) {
          setActiveTocId(headings[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [post])

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    }
  }

  if (!post) {
    return (
      <div className="pt-40 pb-24 max-w-2xl mx-auto px-6 text-center space-y-6">
        <div className="text-4xl font-extrabold text-white">Article Not Found</div>
        <p className="text-gray-400 text-base">
          The requested article does not exist or may have been moved.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow-lg hover:scale-105 transition-all"
        >
          <Icon.ArrowLeft /> Back to Blog & Guides
        </Link>
      </div>
    )
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== post.slug && (p.category === post.category || p.tags.some(t => post.tags.includes(t)))).slice(0, 2)

  return (
    <div className="pt-32 pb-28 bg-[#0A0A0A]">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">

        {/* ─── BREADCRUMBS ─── */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-[#E8673C] font-semibold truncate max-w-xs">{post.title}</span>
        </div>

        {/* ─── ARTICLE HEADER ─── */}
        <div className="max-w-4xl space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
            <span className="bg-[#4A1A0A] text-[#E8673C] font-bold px-3 py-1 rounded-lg border border-[#C4582A]/40 uppercase tracking-wider">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Icon.Clock /> {post.readTime}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-normal">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-gray-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C4582A] to-[#E8673C] flex items-center justify-center text-white font-bold">
                R2C
              </div>
              <div>
                <div className="text-white font-bold">{post.author}</div>
                <div className="text-gray-500">Right 2 Creation Engineering</div>
              </div>
            </div>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gray-300 px-4 py-2 rounded-xl text-xs font-semibold border border-white/10 transition-all"
            >
              {copied ? 'Link Copied! ✓' : 'Share Article'}
            </button>
          </div>
        </div>

        {/* ─── ARTICLE BODY & TOC SIDEBAR ─── */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Main Article Content */}
          <main className="lg:col-span-8 space-y-12">

            {/* Key Takeaways Box */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <div className="bg-[#141414] border border-[#C4582A]/30 rounded-3xl p-8 space-y-4 shadow-xl">
                <div className="flex items-center gap-2.5 text-[#E8673C] font-bold text-sm uppercase tracking-wider">
                  <Icon.Zap /> Key Takeaways
                </div>
                <ul className="space-y-3">
                  {post.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                      <span className="text-[#E8673C] mt-0.5 shrink-0"><Icon.Check /></span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Sections */}
            {post.content.map((sec, idx) => (
              <section key={idx} id={sec.headingId} className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white pt-4 border-t border-white/5">
                  {sec.heading}
                </h2>

                {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {p}
                  </p>
                ))}

                {/* Optional Table */}
                {sec.table && (
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left border-collapse border border-white/10 rounded-2xl overflow-hidden min-w-[600px]">
                      <thead>
                        <tr className="bg-[#181818] text-xs font-bold uppercase tracking-wider text-gray-300 border-b border-white/10">
                          {sec.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="py-3.5 px-4">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-sm text-gray-300 bg-[#121212]">
                        {sec.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-white/[0.02]">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={`py-3.5 px-4 ${cIdx === 0 ? 'font-semibold text-white' : ''}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Optional Bullet List */}
                {sec.bulletList && (
                  <ul className="space-y-3.5 my-4 bg-[#121212] border border-white/5 rounded-2xl p-6">
                    {sec.bulletList.map((item, bIdx) => {
                      const parts = item.split('**')
                      return (
                        <li key={bIdx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                          <span className="text-[#E8673C] mt-1 shrink-0"><Icon.Check /></span>
                          <div>
                            {parts.length >= 3 ? (
                              <>
                                <strong className="text-white">{parts[1]}</strong>
                                {parts.slice(2).join('')}
                              </>
                            ) : (
                              item
                            )}
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                )}

                {/* Optional Subsections */}
                {sec.subsections && (
                  <div className="space-y-6 my-6">
                    {sec.subsections.map((sub, sIdx) => (
                      <div key={sIdx} className="bg-[#121212] border border-white/10 rounded-2xl p-6 space-y-2">
                        <h4 className="text-lg font-bold text-white text-[#E8673C]">{sub.title}</h4>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                          {sub.body}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* Tags Cloud */}
            <div className="pt-8 border-t border-white/10 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Related Topic Tags</div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="bg-[#141414] hover:bg-white/10 border border-white/10 text-gray-300 text-xs px-3.5 py-1.5 rounded-xl transition-all"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author Bio Box */}
            <div className="bg-[#121212] border border-white/10 rounded-3xl p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C4582A] to-[#E8673C] flex items-center justify-center text-white text-xl font-bold shrink-0">
                R2C
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="text-lg font-bold text-white">{post.author}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Right 2 Creation is dedicated to engineering high-performance software products, privacy-first web utilities, and democratizing digital creative capabilities under the motto "Creation Is Our Rights".
                </p>
              </div>
            </div>

          </main>

          {/* Sticky Sidebar: Table of Contents & Product Spotlight */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-8">

              {/* Table of Contents Box */}
              {post.tableOfContents && post.tableOfContents.length > 0 && (
                <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <Icon.BookOpen /> Table of Contents
                  </h4>
                  <nav className="space-y-2 text-xs">
                    {post.tableOfContents.map((item) => {
                      const isActive = activeTocId === item.id
                      return (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block py-1.5 transition-colors leading-normal ${
                            isActive
                              ? 'text-[#E8673C] font-bold pl-2 border-l-2 border-[#E8673C]'
                              : 'text-gray-400 hover:text-white pl-2 border-l-2 border-transparent'
                          }`}
                        >
                          {item.title}
                        </a>
                      )
                    })}
                  </nav>
                </div>
              )}

              {/* Sidebar Product Callout: FWD PDF */}
              <div className="bg-gradient-to-br from-[#1E110C] to-[#141414] border border-[#C4582A]/30 rounded-3xl p-6 space-y-4 text-left shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8673C] bg-[#4A1A0A] px-2.5 py-1 rounded border border-[#C4582A]/40">
                  Featured Product
                </span>
                <h4 className="text-lg font-bold text-white">Fast PDF Editor (FWD PDF)</h4>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Experience lightning-fast in-browser PDF editing with zero watermarks and 100% privacy.
                </p>
                <Link
                  to="/products/fwd-pdf"
                  className="block text-center bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider hover:shadow-lg transition-all"
                >
                  Explore Product
                </Link>
              </div>

            </div>
          </aside>

        </div>

        {/* ─── RELATED ARTICLES ─── */}
        {relatedPosts.length > 0 && (
          <section className="pt-24 mt-20 border-t border-white/10 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">Related Guides & Articles</h3>
              <Link to="/blog" className="text-sm font-bold text-[#E8673C] hover:underline flex items-center gap-1">
                View All <Icon.ArrowRight />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((rPost) => (
                <div
                  key={rPost.slug}
                  className="bg-[#121212] border border-white/10 rounded-3xl p-8 hover:border-[#C4582A]/40 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs text-[#E8673C] font-semibold">{rPost.category}</span>
                    <h4 className="text-xl font-bold text-white group-hover:text-[#E8673C] transition-colors leading-snug">
                      <Link to={`/blog/${rPost.slug}`}>
                        {rPost.title}
                      </Link>
                    </h4>
                    <p className="text-gray-400 text-sm line-clamp-2">{rPost.excerpt}</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                    <span>{rPost.readTime}</span>
                    <Link to={`/blog/${rPost.slug}`} className="text-[#E8673C] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-all">
                      Read <Icon.ArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  )
}

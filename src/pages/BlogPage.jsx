import { useState, useMemo } from 'react'
import { Link, useSeo } from '../router'
import { Icon } from '../components/Icons'
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogPosts'

export default function BlogPage() {
  useSeo({
    title: 'Knowledge Hub & Engineering Guides | Right 2 Creation',
    description: 'Explore technical deep-dives, academic student workflows, PDF editing software architecture, and modern digital product development guides.',
    canonicalUrl: 'https://right2creation.in/blog'
  })

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      const query = searchQuery.toLowerCase().trim()
      if (!query) return matchesCategory

      const matchesSearch =
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(t => t.toLowerCase().includes(query)) ||
        post.category.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0]

  return (
    <div className="pt-32 pb-24 space-y-20 bg-[#0A0A0A]">

      {/* ─── HERO HEADER ─── */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#4A1A0A]/60 border border-[#C4582A]/30 text-[#E8673C] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            Knowledge Hub & Guides
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Insights & <span className="bg-gradient-to-r from-[#C4582A] via-[#E8673C] to-[#F08060] bg-clip-text text-transparent">Engineering</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            In-depth architectural analysis, student productivity playbooks, PDF software comparisons, and web application best practices.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Icon.Search />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, keyword (e.g. PDF editor, student, React)..."
                className="w-full bg-[#141414] border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#C4582A] text-sm transition-colors shadow-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-gray-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#C4582A] text-white shadow-lg shadow-[#C4582A]/25'
                    : 'bg-[#141414] text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED POST SPOTLIGHT (If viewing All and no search) ─── */}
      {selectedCategory === 'All' && !searchQuery && featuredPost && (
        <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="bg-gradient-to-br from-[#1A110D] to-[#121212] border border-[#C4582A]/30 rounded-3xl p-8 sm:p-12 lg:p-14 space-y-6 shadow-2xl relative overflow-hidden group">
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
              <span className="bg-[#4A1A0A] text-[#E8673C] font-bold px-3 py-1 rounded-lg border border-[#C4582A]/40 uppercase tracking-wider">
                Featured Guide
              </span>
              <span className="text-gray-400">{featuredPost.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Icon.Clock /> {featuredPost.readTime}</span>
              <span>•</span>
              <span>{featuredPost.date}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-[#E8673C] transition-colors leading-tight">
              <Link to={`/blog/${featuredPost.slug}`}>
                {featuredPost.title}
              </Link>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-4xl">
              {featuredPost.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {featuredPost.tags.map((tag) => (
                <span key={tag} className="bg-black/40 border border-white/10 text-gray-300 text-xs px-3 py-1 rounded-lg">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow-lg hover:scale-105 transition-all"
              >
                Read Full Article <Icon.ArrowRight />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ─── ARTICLES GRID ─── */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <h3 className="text-xl font-bold text-white">
            {selectedCategory === 'All' ? 'All Guides & Articles' : `${selectedCategory}`} ({filteredPosts.length})
          </h3>
          {searchQuery && (
            <span className="text-xs text-gray-400">
              Matching "{searchQuery}"
            </span>
          )}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="bg-[#141414] border border-white/10 rounded-3xl p-16 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/5 mx-auto flex items-center justify-center text-gray-400">
              <Icon.Search />
            </div>
            <h4 className="text-lg font-bold text-white">No articles found</h4>
            <p className="text-gray-400 text-sm max-w-sm mx-auto">
              No content matched your search query. Try searching for "PDF", "student", or "software".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All') }}
              className="text-xs font-bold text-[#E8673C] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
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

                  <h4 className="text-xl font-bold text-white group-hover:text-[#E8673C] transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-white/5 text-[11px] text-gray-400 px-2.5 py-1 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>
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
        )}
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
        <div className="bg-[#141414] border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Experience Fast PDF Editor in Action</h3>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Discover our in-browser vector PDF studio designed for speed, privacy, and zero watermarks.
          </p>
          <Link
            to="/products/fwd-pdf"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white font-bold px-8 py-4 rounded-xl text-sm shadow-lg hover:scale-105 transition-all"
          >
            Explore Fast PDF Editor (FWD PDF) <Icon.ArrowRight />
          </Link>
        </div>
      </section>

    </div>
  )
}

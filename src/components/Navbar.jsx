import { useState, useEffect } from 'react'
import logoImg from '../assets/logo.webp'
import { Link, useRouter } from '../router'
import { Icon } from './Icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { currentPath } = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  const isLinkActive = (href) => {
    if (href === '/') return currentPath === '/'
    return currentPath.startsWith(href)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4'
        : 'bg-[#0A0A0A]/70 backdrop-blur-md border-b border-white/5 py-5'
    }`}>
      <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between">

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <img
            src={logoImg}
            alt="Right 2 Creation Logo"
            className="h-10 sm:h-11 w-auto object-contain max-w-[170px] group-hover:scale-105 transition-transform duration-200"
          />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold text-white tracking-tight leading-none">
              Right <span className="text-[#E8673C]">2</span> Creation
            </span>
            <span className="text-[10px] text-gray-400 tracking-widest uppercase font-semibold mt-1">
              <span className="text-[#E8673C]">Creation Is Our Rights</span>
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-9">
          <nav className="flex items-center gap-7 lg:gap-8 text-sm lg:text-base font-medium">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href)
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`transition-colors duration-200 relative py-1 ${
                    active
                      ? 'text-[#E8673C] font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E8673C] rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          <Link
            to="/contact"
            className="bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white text-xs font-bold uppercase tracking-wider
                       px-5 lg:px-6 py-2.5 lg:py-3 rounded-xl shadow-lg shadow-[#C4582A]/25 hover:shadow-xl hover:shadow-[#C4582A]/40
                       hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Get In Touch
          </Link>
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
        <div className="md:hidden bg-[#111111] border-b border-white/10 px-8 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href)
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`block text-base font-medium py-2 transition-colors ${
                  active ? 'text-[#E8673C] font-bold' : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider mt-4"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  )
}

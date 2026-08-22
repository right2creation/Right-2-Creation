import logoImg from '../assets/logo.webp'
import { Link } from '../router'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#070707] border-t border-white/10 pt-16 pb-12 text-sm text-gray-400">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">

          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3.5">
              <img
                src={logoImg}
                alt="Right 2 Creation Logo"
                className="h-9 w-auto object-contain max-w-[140px]"
              />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none">Right 2 Creation</span>
                <span className="text-[#E8673C] text-[10px] uppercase tracking-widest font-bold mt-1">Creation Is Our Rights</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Right 2 Creation is an innovative software product studio building privacy-first client tools, high-speed vector engines, and web applications that empower creators and students.
            </p>
            <div className="text-xs text-gray-500">
              Headquartered in India · Building for the world.
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest text-[#E8673C]">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Our Products</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Capabilities & Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest text-[#E8673C]">Software Products</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/products/fwd-pdf" className="hover:text-white transition-colors flex items-center gap-2">
                  <span>Fast PDF Editor (FWD PDF)</span>
                  <span className="text-[9px] bg-green-500/20 text-green-400 font-bold px-1.5 py-0.5 rounded">NEW</span>
                </Link>
              </li>
              <li><Link to="/products" className="hover:text-white transition-colors">Vector Design Studio</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">AI Document Summarizer</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Data Workflow Engine</Link></li>
            </ul>
          </div>

          {/* Col 4: Blog & Learning */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest text-[#E8673C]">Guides & Insights</h4>
            <ul className="space-y-2.5">
              <li><Link to="/blog/modern-pdf-editing-software-architecture" className="hover:text-white transition-colors">PDF Software Architecture</Link></li>
              <li><Link to="/blog/best-free-online-pdf-editors-tools-guide" className="hover:text-white transition-colors">Online & Free PDF Editors</Link></li>
              <li><Link to="/blog/complete-free-pdf-editor-guide-for-students" className="hover:text-white transition-colors">Free PDF Editor for Students</Link></li>
              <li><Link to="/blog/complete-guide-to-software-product-development" className="hover:text-white transition-colors">Software Product Development</Link></li>
              <li><Link to="/blog/modern-web-application-development-guide" className="hover:text-white transition-colors">Web Application Development</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {currentYear} Right 2 Creation. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-gray-400 transition-colors">Privacy Principles</Link>
            <Link to="/products/fwd-pdf" className="hover:text-gray-400 transition-colors">FWD PDF Security</Link>
            <Link to="/contact" className="hover:text-gray-400 transition-colors">Get In Touch</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

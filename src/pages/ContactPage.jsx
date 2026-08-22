import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useSeo } from '../router'
import { Icon } from '../components/Icons'

export default function ContactPage() {
  useSeo({
    title: 'Contact Right 2 Creation | Support & Partnerships',
    description: 'Get in touch with Right 2 Creation for product support, feature requests, software development inquiries, or partnership opportunities.',
    canonicalUrl: 'https://right2creation.in/contact'
  })

  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) return

    setIsSending(true)
    emailjs.sendForm('service_wyhwl8d', 'template_kizyqxr', formRef.current, 'f4nV13OenSc0AroXs')
      .then(() => {
        setSubmitted(true)
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }, (error) => {
        console.error(error.text)
        alert('Failed to send message, please try again later.')
      })
      .finally(() => {
        setIsSending(false)
      })
  }

  const contactFaqs = [
    {
      q: 'How fast can I expect a response?',
      a: 'Our product engineering and support team typically responds to inquiries within 24–48 business hours.'
    },
    {
      q: 'How can I submit a bug report or feature request for Fast PDF Editor (FWD PDF)?',
      a: 'You can submit feature requests directly through this contact form with the subject "FWD PDF Feedback". We prioritize features based on community feedback.'
    },
    {
      q: 'Does Right 2 Creation take on custom digital product development projects?',
      a: 'Yes. We occasionally partner with select startups and enterprises for custom software product development, Document AI integration, and high-performance web applications.'
    }
  ]

  return (
    <div className="pt-32 pb-24 space-y-24 bg-[#0A0A0A]">

      {/* ─── HERO HEADER ─── */}
      <section className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#4A1A0A]/60 border border-[#C4582A]/30 text-[#E8673C] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Contact <span className="bg-gradient-to-r from-[#C4582A] via-[#E8673C] to-[#F08060] bg-clip-text text-transparent">Right 2 Creation</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            Have questions about our software products, feature suggestions, or interested in technical collaboration? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* ─── FORM & INFO SECTION ─── */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#121212] border border-white/10 rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Communication</h3>
              <div className="space-y-5">
                {[
                  { icon: <Icon.Mail />, label: 'Email Us', value: 'contact@right2creation.in' },
                  { icon: <Icon.MapPin />, label: 'Location', value: 'India (Global Operations)' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#E8673C] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{item.label}</div>
                      <div className="text-white font-semibold text-sm sm:text-base mt-0.5">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1E110C] to-[#121212] border border-[#C4582A]/30 rounded-3xl p-8 space-y-3">
              <h4 className="text-white font-bold text-lg">Product Partnerships & Feedback</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We are actively building out our suite of free creator software tools. If you have recommendations for academic or PDF workflows, please send them our way!
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <form ref={formRef} onSubmit={handleSubmit} className="bg-[#121212] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Your Name <span className="text-[#E8673C]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#C4582A] text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Email Address <span className="text-[#E8673C]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="alex@domain.com"
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#C4582A] text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Subject <span className="text-[#E8673C]">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  placeholder="e.g. Question about Fast PDF Editor"
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#C4582A] text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Message <span className="text-[#E8673C]">*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="How can our team help you?"
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#C4582A] text-sm transition-colors resize-none"
                />
              </div>

              {submitted && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 text-sm px-4 py-3 rounded-xl font-medium">
                  Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-gradient-to-r from-[#C4582A] to-[#E8673C] text-white font-bold py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-[#C4582A]/20 hover:shadow-xl hover:shadow-[#C4582A]/40 transition-all duration-200 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ─── CONTACT FAQ ACCORDION ─── */}
      <section className="max-w-[1000px] mx-auto px-6 sm:px-12 space-y-8">
        <div className="text-center space-y-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">General Questions</h3>
          <p className="text-gray-400 text-sm">Quick answers to common questions about contacting our team.</p>
        </div>

        <div className="space-y-4">
          {contactFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx
            return (
              <div key={idx} className="bg-[#121212] border border-white/10 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between text-white font-bold text-sm sm:text-base hover:text-[#E8673C] transition-colors"
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

    </div>
  )
}

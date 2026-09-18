import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Phone,
  ArrowRight,
  RotateCcw,
  Building2,
  MapPin,
  CheckCircle2,
} from 'lucide-react'

interface Message {
  id: string
  sender: 'bot' | 'user'
  text: string
  quickReplies?: string[]
  linkCta?: {
    label: string
    url: string
    isExternal?: boolean
  }
  time: string
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'bot',
    text: 'Namaste! Welcome to Shri Balaji Builders & Developers. I am your Balaji Bentota Virtual Concierge. How can I help you today?',
    quickReplies: [
      '🏡 2 & 3 BHK Apartment Sizes',
      '📍 Location & Connectivity',
      '✨ Amenities & Facilities',
      '💰 Pricing & Bank Loans',
      '📅 Schedule Site Visit',
    ],
    time: 'Just now',
  },
]

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasUnread, setHasUnread] = useState(true)
  const [showNotificationBubble, setShowNotificationBubble] = useState(false)
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto scroll to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isTyping, isOpen])

  // Show friendly notification pill after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowNotificationBubble(true)
      }
    }, 3500)
    return () => clearTimeout(timer)
  }, [isOpen])

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false)
      setShowNotificationBubble(false)
      setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
    }
  }, [isOpen])

  const getCurrentTime = () => {
    const now = new Date()
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const generateBotReply = (userQuery: string): { text: string; quickReplies?: string[]; linkCta?: { label: string; url: string; isExternal?: boolean } } => {
    const q = userQuery.toLowerCase()

    if (q.includes('size') || q.includes('bhk') || q.includes('area') || q.includes('floor plan') || q.includes('dimension') || q.includes('sq.ft') || q.includes('sqft')) {
      return {
        text: 'Balaji Bentota features boutique 2 & 3 BHK corner residences designed by A.G. Associates:\n\n• 2 BHK Units: 1304 to 1340 sq.ft (Expansive 21\'0" living hall, 2 bathrooms, 2 private balconies)\n• 3 BHK Units: 1540 to 1595 sq.ft (3 spacious corner bedrooms, 3 bathrooms, dual balconies & dedicated dining hall)\n\nAll residences enjoy 3-sided open cross ventilation and 100% Vastu compliance.',
        quickReplies: ['📐 View Floor Plan Drawings', '💰 Pricing Details', '📍 Project Location'],
        linkCta: {
          label: 'Explore Interactive Floor Plans',
          url: '/project',
        },
      }
    }

    if (q.includes('location') || q.includes('where') || q.includes('address') || q.includes('indrali') || q.includes('kunjibettu') || q.includes('station') || q.includes('distance') || q.includes('manipal')) {
      return {
        text: 'Balaji Bentota is located at prime Indrali Railway Station Road, Kunjibettu, Udupi – 576102.\n\nKey Travel Distances:\n• 2 mins to Indrali Railway Station\n• 5 mins to Manipal University & KMC Hub\n• 5 mins to Udupi Sri Krishna Matha & City Bus Stand\n• Immediate access to NH-169A & national highways.',
        quickReplies: ['📅 Schedule Site Visit', '🏡 Apartment Sizes', '📞 Call Booking Desk'],
        linkCta: {
          label: 'Open Google Maps & Site Address',
          url: '/contact',
        },
      }
    }

    if (q.includes('amenit') || q.includes('facility') || q.includes('lift') || q.includes('generator') || q.includes('power') || q.includes('water') || q.includes('parking') || q.includes('cctv') || q.includes('gas')) {
      return {
        text: 'Balaji Bentota is equipped with top-tier modern residential infrastructure:\n\n• 8-Passenger Automatic SS Lift with ARD safety battery\n• Automatic Generator Backup for lift, common lights & pumps\n• Centralized Reticulated LPG Gas pipeline direct to kitchen\n• 24×7 Dual Water Supply (Municipal + High-yield borewell with underground sump)\n• 24×7 CCTV Security Surveillance\n• Covered Ground-floor Car Parking & Interlock Compound Paving\n• Covered Rooftop Terrace Lounge for gatherings.',
        quickReplies: ['🏡 2 & 3 BHK Sizes', '💰 Enquire Pricing', '📞 Speak with Builder'],
        linkCta: {
          label: 'See Complete Specifications',
          url: '/project',
        },
      }
    }

    if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('budget') || q.includes('payment') || q.includes('loan') || q.includes('emi') || q.includes('bank')) {
      return {
        text: 'We offer competitive and transparent pre-launch pricing with complete assistance for bank home loans from leading institutions (SBI, HDFC, Canara Bank, etc.).\n\nBecause units are fast-selling corner apartments, please connect directly with our sales desk for the latest floor-wise quotation and payment breakdown.',
        quickReplies: ['📞 Call +91 9740763625', '💬 WhatsApp Quote', '📅 Book Site Visit'],
        linkCta: {
          label: 'Request Official Price Sheet',
          url: '/contact',
        },
      }
    }

    if (q.includes('visit') || q.includes('book') || q.includes('call') || q.includes('contact') || q.includes('phone') || q.includes('number') || q.includes('whatsapp') || q.includes('meet')) {
      return {
        text: 'You can meet our executive directly at the project site or speak with Shri Balaji Builders desk:\n\n📞 Direct Hotlines: +91 9740763625 / +91 8660576288\n💬 WhatsApp: Instant brochure & floor plans\n📍 Site: Indrali Railway Station Road, Kunjibettu, Udupi.',
        quickReplies: ['💬 Open WhatsApp Chat', '🏡 View 2 & 3 BHK Layouts'],
        linkCta: {
          label: 'Chat on WhatsApp Now',
          url: 'https://wa.me/919740763625?text=Hello%20Shri%20Balaji%20Builders%2C%20I%20am%20interested%20in%20Balaji%20Bentota%20Apartments.',
          isExternal: true,
        },
      }
    }

    if (q.includes('architect') || q.includes('builder') || q.includes('who') || q.includes('company') || q.includes('developer') || q.includes('associates') || q.includes('a.g')) {
      return {
        text: 'Balaji Bentota is developed by Shri Balaji Builders & Developers, a trusted regional builder with decades of engineering excellence across Udupi and coastal Karnataka.\n\nArchitectural Planning & Town Planning is executed by A.G. Associates (ISO 9001:2015 Certified Organization) led by veteran architects and structural engineers.',
        quickReplies: ['🏡 See Building Plans', '📍 Location Details', '📞 Call Builder Desk'],
        linkCta: {
          label: 'Read Full Builder Story',
          url: '/about',
        },
      }
    }

    // Default friendly fallback
    return {
      text: 'Thank you for your interest in Balaji Bentota! We would be delighted to guide you with complete floor plan blueprints, pricing details, or arranging a site walkthrough at Indrali Station Road.',
      quickReplies: [
        '🏡 2 & 3 BHK Apartment Sizes',
        '📍 Project Location',
        '✨ Curated Amenities',
        '📞 Call Booking Desk: 9740763625',
      ],
      linkCta: {
        label: 'View Project Details',
        url: '/project',
      },
    }
  }

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || input).trim()
    if (!query) return

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: getCurrentTime(),
    }

    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    // Simulate smart agent thinking delay
    setTimeout(() => {
      const botResponse = generateBotReply(query)
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse.text,
        quickReplies: botResponse.quickReplies,
        linkCta: botResponse.linkCta,
        time: getCurrentTime(),
      }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 600)
  }

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES)
  }

  return (
    <aside aria-label="Balaji Bentota AI Assistant">
      {/* 1. Floating Notification Teaser Bubble (Bottom Right) */}
      {showNotificationBubble && !isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 bg-white text-navy px-4 py-3 rounded-2xl shadow-2xl border border-gold/30 max-w-[270px] cursor-pointer animate-in fade-in slide-in-from-bottom-3 duration-300 flex items-start gap-3 hover:scale-105 transition-transform group"
        >
          <div className="w-8 h-8 rounded-full bg-navy text-gold flex items-center justify-center shrink-0 shadow-md">
            <Sparkles className="w-4 h-4 text-gold animate-pulse" />
          </div>
          <div>
            <p className="text-xs font-bold text-navy group-hover:text-maroon transition-colors flex items-center gap-1.5">
              <span>Balaji Concierge</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            </p>
            <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
              Have questions on 2 &amp; 3 BHK floor plans or pricing? Tap to chat!
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setShowNotificationBubble(false)
            }}
            className="text-slate-400 hover:text-navy -mr-1 -mt-1 p-1"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 2. Floating Circular Launch Button (Bottom Right) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close Balaji AI Concierge' : 'Open Balaji AI Concierge'}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-navy via-navy to-maroon text-gold hover:text-white border-2 border-gold/70 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white transition-transform duration-200 rotate-90 group-hover:rotate-0" />
        ) : (
          <div className="relative flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
            <Sparkles className="w-3 h-3 text-gold-300 absolute -top-1.5 -right-1.5 animate-ping" />
            {hasUnread && (
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-maroon text-[9px] font-bold text-white rounded-full flex items-center justify-center border border-white">
                1
              </span>
            )}
          </div>
        )}
      </button>

      {/* 3. Luxury Chat Window Panel */}
      {isOpen && (
        <div className="fixed inset-x-3 bottom-20 top-20 sm:top-auto sm:inset-x-auto sm:right-6 sm:bottom-24 sm:w-[390px] sm:h-[560px] z-50 bg-white rounded-3xl shadow-2xl border border-navy/15 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-navy via-navy to-navy-950 text-white p-4 flex items-center justify-between border-b border-gold/20 shadow-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-gold/40 flex items-center justify-center text-gold shadow-inner">
                  <Building2 className="w-5 h-5 text-gold" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-navy" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-white leading-tight flex items-center gap-1.5">
                  <span>Balaji Assistant</span>
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                </h3>
                <p className="text-[11px] text-gold-200/90 font-light flex items-center gap-1">
                  <span>Indrali, Udupi • Instant Support</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-white/80">
              <button
                onClick={handleReset}
                title="Restart conversation"
                className="p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Restart conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat window"
                className="p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close chat window"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Status Bar */}
          <div className="bg-navy-50/90 px-4 py-1.5 border-b border-navy/5 flex items-center justify-between text-[11px] text-navy/70 shrink-0">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Brochure Data</span>
            </span>
            <a
              href="tel:+919740763625"
              className="font-semibold text-maroon hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>+91 9740763625</span>
            </a>
          </div>

          {/* Message Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-maroon text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-navy/10 rounded-bl-none'
                  }`}
                >
                  {msg.text}

                  {/* Optional Action CTA Button inside bot message */}
                  {msg.linkCta && (
                    <div className="mt-3 pt-2.5 border-t border-navy/10">
                      {msg.linkCta.isExternal ? (
                        <a
                          href={msg.linkCta.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200"
                        >
                          <span>{msg.linkCta.label}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <Link
                          to={msg.linkCta.url}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-maroon hover:text-maroon-800 transition-colors bg-maroon-50 px-3 py-1.5 rounded-lg border border-maroon-200"
                        >
                          <span>{msg.linkCta.label}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {msg.time}
                </span>

                {/* Quick Reply Chips (Only for Bot's latest message) */}
                {msg.sender === 'bot' &&
                  msg.quickReplies &&
                  msg.id === messages[messages.length - 1].id && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                      {msg.quickReplies.map((reply, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(reply)}
                          className="text-[11px] font-medium text-navy bg-white hover:bg-navy-50 hover:border-gold border border-navy/15 rounded-xl px-2.5 py-1 transition-all shadow-sm active:scale-95 text-left"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white border border-navy/10 rounded-2xl rounded-bl-none px-4 py-3 w-fit shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gold animate-bounce" />
                <span
                  className="w-2 h-2 rounded-full bg-gold animate-bounce"
                  style={{ animationDelay: '0.15s' }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-gold animate-bounce"
                  style={{ animationDelay: '0.3s' }}
                />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendMessage()
            }}
            className="p-3 bg-white border-t border-navy/10 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about 2/3 BHK, price, location..."
              className="flex-1 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-navy/20 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-all placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-10 h-10 rounded-xl bg-maroon hover:bg-maroon-800 disabled:opacity-40 text-white flex items-center justify-center transition-all shadow-md active:scale-95 shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </aside>
  )
}

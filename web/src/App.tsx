import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { WhatsAppButton } from './components/layout/WhatsAppButton'
import { ChatBot } from './components/layout/ChatBot'
import { Preloader } from './components/layout/Preloader'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Project } from './pages/Project'
import { Gallery } from './pages/Gallery'
import { Contact } from './pages/Contact'
import { useLenis } from './hooks/useLenis'

export const App: React.FC = () => {
  // Initialize Lenis smooth scroll tied with GSAP ScrollTrigger
  useLenis()

  return (
    <div className="flex flex-col min-h-screen selection:bg-maroon selection:text-white bg-bg">
      {/* Session-based animated Preloader */}
      <Preloader />

      {/* Global Navbar */}
      <Navbar />

      {/* Page Routing */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button (Left Corner) */}
      <WhatsAppButton phoneNumber="919740763625" />

      {/* Floating Interactive AI Concierge ChatBot (Right Corner) */}
      <ChatBot />
    </div>
  )
}

export default App

import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Impact from './components/Impact'
import DonateForm from './components/DonateForm'
import Stories from './components/Stories'
import ParallaxScene from './components/ParallaxScene'

function App() {
  const donateRef = useRef(null)
  const scrollToDonate = () => {
    const el = document.getElementById('donate')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-amber-50/70 via-white to-emerald-50/50">
      {/* Global parallax background */}
      <ParallaxScene />

      <Navbar />
      <main>
        <Hero onDonateClick={scrollToDonate} />
        <Impact />
        <DonateForm ref={donateRef} />
        <Stories />
        <footer className="py-10 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Paws & Hearts India. Together for India’s animals.</p>
          <p className="mt-1 text-xs">Donations eligible for 80G tax benefit in India.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
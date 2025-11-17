import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Impact from './components/Impact'
import DonateForm from './components/DonateForm'
import Stories from './components/Stories'

function App() {
  const donateRef = useRef(null)
  const scrollToDonate = () => {
    const el = document.getElementById('donate')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/60 via-amber-50/40 to-white">
      <Navbar />
      <main>
        <Hero onDonateClick={scrollToDonate} />
        <Impact />
        <DonateForm ref={donateRef} />
        <Stories />
        <footer className="py-10 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Paws & Hearts. Compassion in action.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
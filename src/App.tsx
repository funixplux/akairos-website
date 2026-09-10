import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-100 antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-akairos-600/25 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-akairos-400/15 blur-[130px]" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import Hero from './components/Hero'
import Objectifs from './components/Objectifs'
import AuditForm from './components/AuditForm'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-400 to-amber-500" />
            <span className="font-semibold">Agence IA</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#objectifs" className="hover:text-white">Objectifs</a>
            <a href="#audit" className="hover:text-white">Mini audit</a>
          </nav>
          <a href="#audit" className="inline-flex items-center justify-center rounded-lg bg-orange-500 hover:bg-orange-400 text-slate-900 font-semibold px-4 py-2 transition-colors">
            Démarrer</a>
        </div>
      </header>

      <main>
        <Hero />
        <Objectifs />
        <AuditForm />
      </main>

      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Agence IA — Tous droits réservés.</p>
          <p>Automatisation • Data • ROI</p>
        </div>
      </footer>
    </div>
  )
}

export default App

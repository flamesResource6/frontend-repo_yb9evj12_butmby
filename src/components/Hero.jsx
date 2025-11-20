import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(255,153,0,0.06),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-4">
            <span className="inline-block h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
            Agence IA • Automatisation • Data • ROI
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Accélérez votre croissance avec une agence IA orientée ROI
          </h1>
          <p className="mt-5 text-white/70 text-lg md:text-xl max-w-xl">
            Nous automatisons vos processus, fiabilisons votre data et maximisons votre retour sur investissement
            grâce à des solutions IA sur-mesure.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#audit" className="inline-flex items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-400 text-slate-900 font-semibold px-5 py-3 transition-colors">
              Démarrer le mini audit
            </a>
            <a href="#objectifs" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 transition-colors">
              Découvrir nos objectifs
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-3xl overflow-hidden border border-white/10 bg-black/60">
          <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      </div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 blur-3xl w-[60rem] h-[20rem] bg-orange-500/10 rounded-full" />
    </section>
  )
}

import React from 'react'
import { Target, Workflow, Database } from 'lucide-react'

export default function Objectifs() {
  const items = [
    {
      icon: Workflow,
      title: 'Automatiser les process',
      desc: "Réduisez les tâches répétitives et libérez du temps à forte valeur grâce à l'automatisation de bout en bout.",
    },
    {
      icon: Database,
      title: 'Fiabiliser la data',
      desc: 'Consolidez vos sources, améliorez la qualité et rendez vos données exploitables en continu.',
    },
    {
      icon: Target,
      title: 'Maximiser le ROI',
      desc: 'Des solutions IA pragmatiques et mesurables, conçues pour générer un impact business immédiat.',
    },
  ]

  return (
    <section id="objectifs" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 text-white/90">
              <Icon className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

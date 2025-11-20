import React, { useState } from 'react'

const backend = import.meta.env.VITE_BACKEND_URL || ''

export default function AuditForm() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const payload = {
      company_name: formData.get('company_name'),
      contact_email: formData.get('contact_email'),
      industry: formData.get('industry') || undefined,
      team_size: formData.get('team_size') || undefined,
      processes: formData.getAll('processes'),
      pain_points: formData.get('pain_points') || undefined,
      current_tools: formData.get('current_tools') || undefined,
      budget_range: formData.get('budget_range') || undefined,
      urgency: formData.get('urgency') || undefined,
    }

    try {
      const res = await fetch(`${backend}/api/audit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Une erreur est survenue.')
      setSent(true)
      e.currentTarget.reset()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <div className="text-2xl font-semibold text-white mb-2">Merci !</div>
        <p className="text-white/70">Votre mini audit a bien été envoyé. Nous revenons vers vous sous 24h.</p>
        <button className="mt-6 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20" onClick={() => setSent(false)}>Envoyer un autre</button>
      </div>
    )
  }

  return (
    <section id="audit" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Mini audit gratuit</h2>
            <p className="mt-3 text-white/70">Dites-nous où vous en êtes et ce que vous souhaitez automatiser. Nous vous proposons des pistes concrètes sous 24h.</p>
            <ul className="mt-6 space-y-2 text-white/70 text-sm">
              <li>• Analyse des processus prioritaires</li>
              <li>• Opportunités d'automatisation</li>
              <li>• Évaluation du ROI potentiel</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="md:col-span-3 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 text-white">
            {error && <div className="mb-4 text-sm text-red-300">{error}</div>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Entreprise</label>
                <input name="company_name" required className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500" placeholder="Votre entreprise" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Email</label>
                <input name="contact_email" type="email" required className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500" placeholder="vous@entreprise.com" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Secteur</label>
                <input name="industry" className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2" placeholder="Ex. e-commerce, SaaS..." />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Taille d'équipe</label>
                <select name="team_size" className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2">
                  <option value="">Sélectionner</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>200+</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm text-white/70 mb-1">Quels processus souhaitez-vous automatiser ?</label>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {['Prospection', 'Support client', 'Marketing', 'Facturation', 'Reporting', 'RH & recrutement'].map(p => (
                  <label key={p} className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-lg px-3 py-2">
                    <input type="checkbox" name="processes" value={p} className="accent-orange-500" />
                    <span>{p}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm text-white/70 mb-1">Points de friction actuels</label>
              <textarea name="pain_points" rows="3" className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2" placeholder="Décrivez vos problèmes actuels..." />
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Outils utilisés</label>
                <input name="current_tools" className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2" placeholder="CRM, ERP, tableurs..." />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Budget</label>
                <select name="budget_range" className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2">
                  <option value="">Sélectionner</option>
                  <option>- 5k€</option>
                  <option>5k€ - 20k€</option>
                  <option>20k€ - 100k€</option>
                  <option>100k€ +</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm text-white/70 mb-1">Urgence</label>
              <div className="flex gap-3">
                {['Immédiate', 'Ce trimestre', 'Cette année'].map(u => (
                  <label key={u} className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-lg px-3 py-2">
                    <input type="radio" name="urgency" value={u} className="accent-orange-500" />
                    <span>{u}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-white/60">Nous reviendrons avec des recommandations concrètes et un chiffrage estimatif.</p>
              <button disabled={loading} className="inline-flex items-center justify-center rounded-lg bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-slate-900 font-semibold px-5 py-2.5 transition-colors">
                {loading ? 'Envoi...' : 'Envoyer'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

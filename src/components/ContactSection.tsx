import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate reliable submission and create direct mailto fallback
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || `Prise de contact depuis le portfolio`
  )}&body=${encodeURIComponent(
    `Bonjour Kambale (Arkipo Serious),\n\n${formData.message}\n\nDe : ${formData.name} (${formData.email})`
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            <span>Communication &amp; Partenariats</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Échangeons ensemble</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display [text-wrap:balance]">
            Initier une Collaboration avec Arkipo Serious
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
            Disponible pour des projets web, des consultations d'audit de sécurité ou des opportunités de stage en informatique de gestion.
          </p>
        </div>

        {/* 2-Column Split: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact & Location info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Coordonnées Directes
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs text-slate-500 dark:text-slate-400 font-medium">Adresse Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-slate-900 dark:text-white font-mono-code font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="block mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
                    >
                      {copied ? "Email copié dans le presse-papier !" : "Copier l'adresse email"}
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 dark:text-slate-400 font-medium">Localisation &amp; Origine</span>
                    <p className="text-slate-900 dark:text-white font-medium">
                      Actuellement à Butembo (depuis oct. 2024)
                    </p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                      Étudiant en Licence IAG à l'UAC
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Originaire de Kirumba, Territoire de Lubero (Nord-Kivu, RDC)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <span className="text-xs text-slate-500 dark:text-slate-400 block mb-2">Disponibilité actuelle :</span>
                <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  <p>✓ Stages académiques et professionnels en IAG</p>
                  <p>✓ Développement d'applications web sur mesure</p>
                  <p>✓ Audits préliminaires de vulnérabilités et sensibilisation cyber</p>
                </div>
              </div>
            </div>

            {/* Direct Mailto shortcut card */}
            <div className="p-5 rounded-xl border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/50 dark:bg-emerald-950/20 text-xs">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                Besoin d'une réponse rapide ?
              </h4>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Vous pouvez ouvrir directement votre client de messagerie préféré avec les coordonnées pré-remplies.
              </p>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Contact%20Professionnel%20-%20Kambale%20Archipe`}
                className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 dark:text-emerald-300 hover:underline"
              >
                <span>Ouvrir l'application email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Message préparé avec succès !
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Merci <strong>{formData.name}</strong>. Cliquez ci-dessous pour envoyer directement votre message par email ou réinitialisez le formulaire.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <a
                      href={mailtoLink}
                      className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center gap-2 min-h-[44px]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Confirmer l'envoi via email</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 rounded-lg transition-colors min-h-[44px]"
                    >
                      Nouveau message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-1">
                    Envoyer un Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                    Remplissez ce formulaire pour entrer en relation directe avec Kambale Lwayivweka Archipe.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                        Votre Nom complet <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Jean Mukendi"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                        Votre Adresse Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Ex: jean@organisation.cd"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono-code"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                      Objet du message
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Ex: Proposition de projet web ou audit informatique"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                      Votre Message ou Cahier des charges <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez vos besoins, le contexte de votre structure ou vos questions..."
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-500 active:bg-slate-950 rounded-lg transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Envoyer ma demande</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

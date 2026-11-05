import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, MapPin, ShieldCheck, Code2, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHT_STATS } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="top" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unboxed kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4 flex-wrap">
              <span>Licence IAG · UAC Butembo</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Depuis Octobre 2024</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Originaire de Kirumba (Lubero)</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-[1.15] mb-6 [text-wrap:balance]">
              Kambale Lwayivweka Archipe
            </h1>

            {/* Sub-headline / Persona */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200 mb-4 flex items-center flex-wrap gap-2">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400 font-mono-code">
                {PERSONAL_INFO.alias}
              </span>
              <span className="text-slate-400">―</span>
              <span>Concepteur logiciel &amp; sentinelle cyber</span>
            </p>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              Actuellement à <strong>Butembo depuis octobre 2024</strong> à la poursuite de mes études supérieures en <strong>cycle de licence au sein de l'UAC (Université de l'Assomption au Congo)</strong> en <strong>Informatique Appliquée à la Gestion (IAG)</strong>. 
              Fier de mes origines à <strong>Kirumba (territoire de Lubero, RDC)</strong>, je combine la rigueur des systèmes de gestion d'entreprise, la puissance des technologies web modernes et la vigilance proactive de la cybersécurité.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-lg transition-colors flex items-center gap-2 shadow-sm min-h-[44px]"
              >
                <span>Découvrir mes projets</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#cyber-lab"
                className="px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2 min-h-[44px]"
              >
                <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Tester le Cyber Lab</span>
              </a>

              <button
                onClick={onOpenContact}
                className="px-6 py-3 text-sm font-semibold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 rounded-lg transition-colors border border-emerald-300 dark:border-emerald-800/60 min-h-[44px]"
              >
                Me contacter
              </button>
            </div>

            {/* Quick Contact & Verified Identity Bar */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="font-mono-code text-slate-700 dark:text-slate-300 select-all">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  title="Copier l'email"
                  className="p-1 hover:text-slate-900 dark:hover:text-white rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                {copied && <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copié !</span>}
              </div>

              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>Actuellement à Butembo (UAC, oct. 2024) · Originaire de Kirumba (Lubero)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait & Identity Anchor */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Outer container with single-elevation depth */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-md aspect-[3/4] sm:aspect-[4/5] max-h-[580px]">
                
                {/* Fallback container if image loading fails or while loading */}
                {(!imageLoaded || imageError) && (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col items-center justify-center p-6 text-center text-white">
                    <ShieldCheck className="w-16 h-16 text-emerald-400 mb-3" />
                    <span className="font-display font-bold text-xl">Kambale Lwayivweka Archipe</span>
                    <span className="text-xs text-slate-300 font-mono-code mt-1">Arkipo Serious · Développeur Web &amp; Cyber</span>
                    <span className="text-xs text-slate-400 mt-2">Lubero / Kirumba, Nord-Kivu</span>
                  </div>
                )}

                <img
                  src={PERSONAL_INFO.avatar}
                  alt="Portrait officiel de Kambale Lwayivweka Archipe (Arkipo Serious)"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover object-top transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true);
                    setImageLoaded(true);
                  }}
                />

                {/* Scrim overlay with identity info */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-5 text-white">
                  <div className="flex items-center justify-between text-xs text-emerald-400 font-mono-code mb-1">
                    <span>STATUS: ACTIF &amp; PASSIONNÉ</span>
                    <span>RDC · NORD-KIVU</span>
                  </div>
                  <p className="font-display font-semibold text-base text-white">
                    Kambale Lwayivweka Archipe
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Informatique Appliquée à la Gestion &amp; Cybersécurité
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width Metric Strip below the split as required by Portfolio Guidelines */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          {HIGHLIGHT_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                {stat.label}
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

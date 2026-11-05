import React from 'react';
import { PERSONAL_INFO, ROOT_VALUES, TIMELINE_EVENTS } from '../data/portfolioData';
import { MapPin, Mountain, Compass, Shield, HeartHandshake } from 'lucide-react';

export const RootsSection: React.FC = () => {
  return (
    <section id="roots" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            <span>Origines &amp; Identité</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Fierté du Terroir</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display [text-wrap:balance]">
            Enraciné à Kirumba, Étudiant à l'UAC Butembo, Tourné vers l'Avenir
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            Originaire de <strong>Kirumba (territoire de Lubero, Nord-Kivu)</strong> et actuellement établi à <strong>Butembo depuis octobre 2024</strong> pour poursuivre mon cycle de licence en <strong>Informatique Appliquée à la Gestion (IAG) à l'Université de l'Assomption au Congo (UAC)</strong>, 
            mon parcours technique est façonné par la résilience, la rigueur académique et une volonté inébranlable de contribuer au développement technologique de la RDC.
          </p>
        </div>

        {/* 2-Column Split: Story & Landscape Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left Column: Landscape Media */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-md h-full min-h-[320px]">
              <img
                src={PERSONAL_INFO.rootsImage}
                alt="Paysage majestueux des hauts plateaux de Lubero et Kirumba au Nord-Kivu"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono-code mb-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>KIRUMBA (LUBERO) → BUTEMBO (UAC) · NORD-KIVU · RDC</span>
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  Les Hauts Plateaux de Lubero &amp; le Grand Nord
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-md">
                  Du carrefour agricole et commercial de Kirumba jusqu'au pôle universitaire de Butembo à l'UAC, l'énergie d'une jeunesse déterminée à bâtir l'avenir numérique congolais.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Vision */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ROOT_VALUES.map((val, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40"
                >
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{val.title}</span>
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40">
              <h4 className="text-xs font-bold uppercase text-emerald-800 dark:text-emerald-300 tracking-wider mb-1">
                Pourquoi "Arkipo Serious" ?
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Le surnom « Serious » reflète mon éthique de travail : la programmation et la sécurité ne souffrent d'aucun compromis sur la qualité. Chaque projet, qu'il s'agisse d'un ERP de gestion financière ou d'un audit de vulnérabilités, est mené avec un sérieux méthodique et une détermination totale.
              </p>
            </div>
          </div>

        </div>

        {/* Academic & Journey Timeline */}
        <div className="pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
              Trajectoire &amp; Cursus
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Les étapes structurantes de ma formation en informatique de gestion et cybersécurité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIMELINE_EVENTS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="font-mono-code text-emerald-600 dark:text-emerald-400 font-semibold">{item.period}</span>
                    <span>{item.badge}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                    {item.institution}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

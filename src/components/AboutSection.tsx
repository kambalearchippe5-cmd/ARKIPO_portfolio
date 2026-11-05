import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BookOpen, Shield, Code, Cpu, Target, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            <span>Profil &amp; Vocation</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>À Propos</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display [text-wrap:balance]">
            L'Informatique de Gestion au Service de la Sécurité &amp; de l'Efficacité
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
            Comprendre les flux économiques pour mieux concevoir les logiciels et barricader les accès sensibles.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-2">
                1. Licence IAG à l'UAC Butembo
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Actuellement à <strong>Butembo depuis octobre 2024</strong>, je poursuis mon cycle de licence en <strong>Informatique Appliquée à la Gestion (IAG)</strong> au sein de l'<strong>Université de l'Assomption au Congo (UAC)</strong>. Cette formation rigoureuse m'enseigne la modélisation des systèmes d'information (Merise/UML), la gestion comptable OHADA, l'optimisation des flux de stock et la stratégie numérique d'entreprise.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-2">
                2. Le Développement Web Moderne
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                L'interface utilisateur est la vitrine de la productivité. Je m'attache à produire des applications web réactives, ultra-rapides, adaptées aux réalités des connexions locales avec des standards typographiques soignés et une accessibilité exemplaire.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-2">
                3. La Passion de la Cybersécurité
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                À l'ère où les données numériques représentent l'actif le plus précieux des entreprises, la sécurité n'est pas un luxe. De l'analyse des failles OWASP Top 10 à la protection des identifiants et à la robustesse du réseau, j'applique la culture de la défense en profondeur.
              </p>
            </div>
          </div>

        </div>

        {/* Vision Statement Quote */}
        <div className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-xs font-mono-code text-emerald-400 uppercase tracking-wider block mb-2">
                Engagements &amp; Ambition
              </span>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans">
                « Originaire de Kirumba dans les hauts plateaux de Lubero et poursuivant mon cycle de licence à l'UAC à Butembo, je suis convaincu que le talent, la discipline et la rigueur logicielle ne connaissent pas de frontières. Mon ambition est de concevoir des systèmes capables de moderniser les PME de notre pays tout en garantissant une étanchéité absolue face aux menaces numériques. »
              </p>
              <p className="text-xs text-slate-400 mt-4 font-mono-code">
                — Kambale Lwayivweka Archipe (Arkipo Serious) · UAC Butembo
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <span className="block text-xs text-slate-400">Études &amp; Origines</span>
                <span className="text-sm font-semibold text-emerald-400">UAC Butembo · Kirumba</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

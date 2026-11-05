import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { LayoutGrid, Shield, Database, Code, Cpu } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredCategories = selectedFilter === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.id === selectedFilter);

  return (
    <section id="skills" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              <span>Expertises &amp; Savoir-Faire</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Formation IAG</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display [text-wrap:balance]">
              Compétences Techniques &amp; Vision Métier
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
              L'alliance de l'analyse organisationnelle (IAG), de l'ingénierie web moderne et de la rigueur défensive de la cybersécurité.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons allowed for functional controls) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap min-h-[36px] ${
                selectedFilter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Tous les piliers
            </button>
            <button
              onClick={() => setSelectedFilter('web-dev')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap min-h-[36px] ${
                selectedFilter === 'web-dev'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Web Dev
            </button>
            <button
              onClick={() => setSelectedFilter('cybersecurity')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap min-h-[36px] ${
                selectedFilter === 'cybersecurity'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Cybersécurité
            </button>
            <button
              onClick={() => setSelectedFilter('gestion-iag')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap min-h-[36px] ${
                selectedFilter === 'gestion-iag'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Gestion (IAG)
            </button>
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat, idx) => (
            <div
              key={cat.id}
              className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-2 text-xs font-mono-code text-emerald-600 dark:text-emerald-400">
                  <span>0{idx + 1}.</span>
                  <span>DOMAINE MAJEUR</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {cat.subtitle}
                </p>

                {/* Individual Skills list */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-baseline justify-between text-xs">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {skill.name}
                        </span>
                        {/* Unboxed metadata tag */}
                        <div className="text-slate-500 dark:text-slate-400 text-xs flex items-center gap-1.5">
                          <span>{skill.focus}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono-code tabular-nums text-slate-700 dark:text-slate-300 font-medium">{skill.level}%</span>
                        </div>
                      </div>

                      {/* Clean progress bar */}
                      <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-600 dark:bg-emerald-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom quote / philosophy for this pillar */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400 italic">
                {cat.id === 'web-dev' && '« Écrire du code propre, maintenable et accessible à tous les terminaux. »'}
                {cat.id === 'cybersecurity' && '« La sécurité n’est pas un état figé mais une vigilance permanente. »'}
                {cat.id === 'gestion-iag' && '« Aligner l’outil logiciel sur les réalités économiques et comptables du terrain. »'}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

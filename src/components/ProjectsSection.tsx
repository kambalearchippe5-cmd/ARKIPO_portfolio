import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { ArrowUpRight, Github, ExternalLink, X, Check, Shield, Layers, Globe } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'cybersecurity' | 'gestion' | 'web'>('all');

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              <span>Réalisations &amp; Recherches</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Projets Phares</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display [text-wrap:balance]">
              Projets Conçus &amp; Systèmes Développés
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
              Une sélection d'applications alliant analyse financière d'entreprise, sécurité offensive/défensive et valorisation socio-économique locale.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 dark:bg-slate-800/80 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap min-h-[36px] ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Tous ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('cybersecurity')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap min-h-[36px] ${
                filter === 'cybersecurity'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Cybersécurité
            </button>
            <button
              onClick={() => setFilter('gestion')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap min-h-[36px] ${
                filter === 'gestion'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Gestion (ERP)
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap min-h-[36px] ${
                filter === 'web'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Web Communautaire
            </button>
          </div>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Featured Wide Card (col-span-7) */}
          {filteredProjects[0] && (
            <div
              onClick={() => setSelectedProject(filteredProjects[0])}
              className="lg:col-span-7 group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-200"
            >
              <div>
                {/* Media Container with Fallback */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 mb-5 border border-slate-100 dark:border-slate-800">
                  <img
                    src={filteredProjects[0].image}
                    alt={filteredProjects[0].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs text-white/90 font-mono-code">
                      {filteredProjects[0].metrics}
                    </span>
                  </div>
                </div>

                {/* Unboxed Metadata (no pills) */}
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    {filteredProjects[0].category.toUpperCase()}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{filteredProjects[0].techStack.slice(0, 3).join(' / ')}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {filteredProjects[0].title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                  {filteredProjects[0].summary}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                  Examiner la fiche complète <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-slate-400 font-mono-code">Détails techniques</span>
              </div>
            </div>
          )}

          {/* Right Column: Stacked Cards (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {filteredProjects.slice(1).map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-200 flex-1"
              >
                <div>
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 mb-4 border border-slate-100 dark:border-slate-800">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                      <span className="text-xs text-white/90 font-mono-code">
                        {proj.metrics}
                      </span>
                    </div>
                  </div>

                  {/* Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      {proj.category.toUpperCase()}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{proj.techStack.slice(0, 2).join(' / ')}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                    Voir la conception <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-slate-400 font-mono-code">Architecture</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Media */}
            <div className="relative aspect-video sm:aspect-[21/9] w-full bg-slate-950 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Fermer le dialogue"
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-emerald-600 dark:text-emerald-400 mb-2">
                  <span>Projet · {selectedProject.category.toUpperCase()}</span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span>{selectedProject.metrics}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>{selectedProject.description}</p>
              </div>

              {/* Functional Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                  Fonctionnalités &amp; Spécifications Clés
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Employées (unboxed text) */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                  Technologies &amp; Environnement
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-mono-code">
                  {selectedProject.techStack.join(' · ')}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-2 min-h-[40px]"
                    >
                      <Github className="w-4 h-4" />
                      <span>Voir le dépôt de code</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-500 rounded-lg transition-colors min-h-[40px]"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

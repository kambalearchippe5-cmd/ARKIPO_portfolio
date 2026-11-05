import React from 'react';
import { X, Printer, Download, Mail, MapPin, Globe, Award, BookOpen, Shield, Code, Check } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto print:shadow-none print:border-none print:m-0 print:p-0 print:max-h-none print:w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Actions */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase text-emerald-600 dark:text-emerald-400">
              Curriculum Vitae Officiel
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-xs text-slate-500 font-mono-code">v2026.1</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 min-h-[36px]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimer / PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Fermer le CV"
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Content Area */}
        <div className="p-6 sm:p-10 space-y-8 text-slate-800 dark:text-slate-200 print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.fullName}
                referrerPolicy="no-referrer"
                className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl object-cover object-top border border-slate-200 dark:border-slate-800 shrink-0 shadow-sm"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                  {PERSONAL_INFO.fullName}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {PERSONAL_INFO.role} · Spécialisation Dév Web &amp; Cybersécurité
                </p>
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1 font-mono-code">
                  {PERSONAL_INFO.alias}
                </p>
              </div>
            </div>

            <div className="text-xs space-y-1 text-slate-600 dark:text-slate-400 sm:text-right">
              <div className="flex sm:justify-end items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-600" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>Actuellement à Butembo (UAC, oct. 2024)</span>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                <span>Originaire de Kirumba, Lubero · RDC</span>
              </div>
            </div>
          </div>

          {/* Profil & Synthèse */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
              Profil Professionnel
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Étudiant en <strong>cycle de licence en Informatique Appliquée à la Gestion (IAG) à l'Université de l'Assomption au Congo (UAC) à Butembo depuis octobre 2024</strong>. Originaire de Kirumba (territoire de Lubero), je suis doté d'une double compétence recherchée : l'analyse des processus organisationnels et financiers (comptabilité, gestion des stocks, modélisation SI) et l'ingénierie technique moderne (développement web réactif, audit de sécurité OWASP, durcissement système).
            </p>
          </div>

          {/* Formation & Diplômes */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Formation Académique
            </h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-900 dark:text-white font-display text-sm">
                    Cycle de Licence en Informatique Appliquée à la Gestion (IAG)
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono-code font-bold">Depuis Octobre 2024 (En cours)</span>
                </div>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  Université de l'Assomption au Congo (UAC) · Campus de Butembo, Nord-Kivu, RDC
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  Matières fondamentales : Modélisation des SI (Merise / UML), Bases de données relationnelles (SQL, Normalisation 3NF), Programmation Orientée Objet, Comptabilité Générale &amp; Analytique (OHADA), Sécurité des Systèmes d'Information, Recherche Opérationnelle et Droit Informatique.
                </p>
              </div>
            </div>
          </div>

          {/* Grille des Compétences Clés */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Compétences &amp; Connaissances Opérationnelles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/30">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-2">
                    {cat.title}
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {cat.skills.map((s, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>{s.name}</strong></span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Langues & Qualités Personnelles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                Compétences Linguistiques
              </h3>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                <li>• <strong>Français</strong> : Courant (langue d'enseignement et de travail)</li>
                <li>• <strong>Swahili</strong> : Langue maternelle / véhiculaire régionale</li>
                <li>• <strong>Anglais technique</strong> : Bonne compréhension écrite (documentation tech, CVE, RFC)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                Atouts &amp; Soft Skills
              </h3>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Éthique du travail rigoureuse ("Serious") et soif d'apprendre continue</li>
                <li>• Sens de l'analyse cartésienne et de la modélisation rigoureuse</li>
                <li>• Forte adaptabilité aux contraintes techniques et d'infrastructure</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

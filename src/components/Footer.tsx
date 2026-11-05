import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/80">
          <div>
            <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
              {PERSONAL_INFO.fullName}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Arkipo Serious · Licence IAG à l'UAC Butembo (depuis oct. 2024) · Originaire de Kirumba (Lubero, RDC)
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">À Propos</a>
            <a href="#skills" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Compétences</a>
            <a href="#projects" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Projets</a>
            <a href="#roots" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Origines</a>
            <button
              onClick={onOpenResume}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Curriculum Vitae
            </button>
            <button
              onClick={onOpenContact}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} Kambale Lwayivweka Archipe (Arkipo Serious). Tous droits réservés.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-mono-code">Butembo (UAC) · Kirumba (Lubero) · Nord-Kivu, RDC</span>
            <button
              onClick={scrollToTop}
              aria-label="Retour en haut de page"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-xs">Haut</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

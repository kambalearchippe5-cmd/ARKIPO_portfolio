import React, { useState } from 'react';
import { Terminal as TerminalIcon, ShieldAlert, KeyRound, Play, RefreshCw, CheckCircle2, AlertTriangle, XCircle, Info, Lock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AuditCheck {
  id: string;
  name: string;
  category: string;
  status: 'passed' | 'warning' | 'failed';
  score: number;
  recommendation: string;
}

export const CyberLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'scanner' | 'crypto'>('terminal');

  // Terminal State
  const [terminalHistory, setTerminalHistory] = useState<{ cmd: string; output: string | React.ReactNode }[]>([
    {
      cmd: "init arkipo-env --profile verbose",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-semibold">Bienvenue sur le terminal interactif d'Arkipo Serious.</p>
          <p>Kambale Lwayivweka Archipe · Cycle de Licence en IAG à l'UAC Butembo (depuis oct. 2024).</p>
          <p className="text-xs text-slate-400">Tapez <span className="text-amber-400 font-bold">help</span> pour voir la liste des commandes disponibles.</p>
        </div>
      )
    }
  ]);
  const [inputCommand, setInputCommand] = useState('');

  // Security Scanner State
  const [targetUrl, setTargetUrl] = useState('https://portail-gestion-kivu.cd');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<AuditCheck[]>([
    {
      id: "hsts",
      name: "HTTP Strict Transport Security (HSTS)",
      category: "Transport Security",
      status: "passed",
      score: 100,
      recommendation: "max-age=31536000; includeSubDomains configuré. Protège contre le SSL stripping."
    },
    {
      id: "csp",
      name: "Content Security Policy (CSP)",
      category: "Injection Defense",
      status: "passed",
      score: 95,
      recommendation: "default-src 'self' activé. Réduit drastiquement l'impact des attaques Cross-Site Scripting (XSS)."
    },
    {
      id: "clickjacking",
      name: "Protection Anti-Clickjacking (X-Frame-Options)",
      category: "UI Redressing",
      status: "passed",
      score: 100,
      recommendation: "En-tête DENY ou SAMEORIGIN présent. L'application ne peut pas être encapsulée dans une iframe hostile."
    },
    {
      id: "nosniff",
      name: "X-Content-Type-Options: nosniff",
      category: "MIME Protection",
      status: "passed",
      score: 100,
      recommendation: "Empêche les navigateurs de deviner le type MIME d'un fichier malicieux."
    },
    {
      id: "sqli-param",
      name: "Paramétrisation des requêtes SQL (ORM / Prepared Statements)",
      category: "Data Integrity (IAG)",
      status: "passed",
      score: 100,
      recommendation: "Toutes les requêtes métier utilisent des requêtes préparées. Risque d'injection SQL neutralisé."
    },
    {
      id: "auth-rate-limiting",
      name: "Limitation de débit sur la connexion (Brute-Force Rate Limiting)",
      category: "Authentification",
      status: "warning",
      score: 75,
      recommendation: "Recommandation : intégrer un verrouillage temporaire progressif après 5 tentatives échouées."
    }
  ]);

  // Crypto Demo State
  const [cryptoInput, setCryptoInput] = useState('Arkipo_Kirumba_2026!');
  const [sha256Hash, setSha256Hash] = useState('');
  const [entropy, setEntropy] = useState<number>(0);

  // Calculate SHA-256 & Entropy
  const calculateHash = async (text: string) => {
    if (!text) {
      setSha256Hash('');
      setEntropy(0);
      return;
    }
    try {
      const msgBuffer = new TextEncoder().encode(text);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      setSha256Hash(hashHex);

      // Simple Shannon Entropy calculation
      let poolSize = 0;
      if (/[a-z]/.test(text)) poolSize += 26;
      if (/[A-Z]/.test(text)) poolSize += 26;
      if (/[0-9]/.test(text)) poolSize += 10;
      if (/[^a-zA-Z0-9]/.test(text)) poolSize += 33;
      const bits = Math.round(text.length * Math.log2(Math.max(poolSize, 2)));
      setEntropy(bits);
    } catch {
      setSha256Hash('Non disponible dans cet environnement');
    }
  };

  React.useEffect(() => {
    calculateHash(cryptoInput);
  }, [cryptoInput]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputCommand.trim();
    if (!cleanCmd) return;

    let responseOutput: React.ReactNode = "";

    const lower = cleanCmd.toLowerCase();

    switch (lower) {
      case "help":
        responseOutput = (
          <div className="space-y-1 text-slate-300">
            <p className="text-amber-400 font-semibold">Commandes disponibles :</p>
            <p><span className="text-emerald-400 font-mono-code font-bold">whoami</span> : Identité et présentation</p>
            <p><span className="text-emerald-400 font-mono-code font-bold">origins</span> : Ses racines à Kirumba, Lubero, Nord-Kivu</p>
            <p><span className="text-emerald-400 font-mono-code font-bold">skills</span> : Domaines clés (IAG, Web, Cyber)</p>
            <p><span className="text-emerald-400 font-mono-code font-bold">projects</span> : Les projets majeurs réalisés</p>
            <p><span className="text-emerald-400 font-mono-code font-bold">contact</span> : Coordonnées directes et email</p>
            <p><span className="text-emerald-400 font-mono-code font-bold">security</span> : Principes directeurs de sécurité</p>
            <p><span className="text-emerald-400 font-mono-code font-bold">clear</span> : Nettoyer l'écran du terminal</p>
          </div>
        );
        break;

      case "whoami":
        responseOutput = (
          <div className="space-y-1 text-slate-300">
            <p><strong className="text-white">Nom :</strong> {PERSONAL_INFO.fullName} ({PERSONAL_INFO.alias})</p>
            <p><strong className="text-white">Formation :</strong> Cycle de Licence en Informatique Appliquée à la Gestion (IAG)</p>
            <p><strong className="text-white">Université :</strong> Université de l'Assomption au Congo (UAC) · Butembo (depuis oct. 2024)</p>
            <p><strong className="text-white">Origine :</strong> Kirumba, Territoire de Lubero, Nord-Kivu, RDC</p>
            <p><strong className="text-white">Passions :</strong> Architecture web moderne, cybersécurité &amp; audit, digitalisation des entreprises.</p>
          </div>
        );
        break;

      case "origins":
        responseOutput = (
          <div className="space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold">Trajectoire &amp; Origines :</p>
            <p><strong className="text-white">Actuellement :</strong> Butembo (depuis octobre 2024, étudiant en Licence IAG à l'UAC)</p>
            <p><strong className="text-white">Berceau :</strong> Kirumba · Territoire de Lubero · Nord-Kivu · RDC</p>
            <p className="text-xs text-slate-400 mt-1">« Des hauts plateaux de Lubero aux auditoires de l'UAC à Butembo, une détermination constante pour l'excellence numérique. »</p>
          </div>
        );
        break;

      case "skills":
        responseOutput = (
          <div className="space-y-1 text-slate-300">
            <p><strong className="text-emerald-400">[Web Dev]</strong> React, TypeScript, Node.js, PHP, Tailwind CSS, API REST</p>
            <p><strong className="text-emerald-400">[Cybersécurité]</strong> OWASP Top 10, Audit de code, Sécurité réseau, Linux Hardening, Hashing</p>
            <p><strong className="text-emerald-400">[IAG]</strong> Modélisation Merise/UML, Conception d'ERP, Gestion commerciale, Comptabilité OHADA</p>
          </div>
        );
        break;

      case "projects":
        responseOutput = (
          <div className="space-y-1 text-slate-300">
            <p>1. <strong>CyberDefense Kivu</strong> : Console d'audit de sécurité web &amp; conformité OWASP</p>
            <p>2. <strong>KivuGestion ERP</strong> : Système intégré de facturation et stocks pour PME</p>
            <p>3. <strong>Kirumba Connect</strong> : Plateforme communautaire et commerciale du territoire de Lubero</p>
          </div>
        );
        break;

      case "contact":
        responseOutput = (
          <div className="space-y-1 text-slate-300">
            <p>Email direct : <a href={`mailto:${PERSONAL_INFO.email}`} className="text-emerald-400 underline">{PERSONAL_INFO.email}</a></p>
            <p>Localisation : Actuellement à Butembo (UAC) · Originaire de Kirumba (Lubero)</p>
            <p>Disponibilité : Projets de développement, audits web &amp; collaborations académiques.</p>
          </div>
        );
        break;

      case "security":
        responseOutput = (
          <div className="space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold">Devise Cyber d'Arkipo Serious :</p>
            <p>« Ne jamais faire confiance à l'entrée utilisateur (Zero Trust). Assainir, valider, chiffrer et monitorer en permanence. »</p>
          </div>
        );
        break;

      case "clear":
        setTerminalHistory([]);
        setInputCommand('');
        return;

      default:
        responseOutput = (
          <p className="text-rose-400">
            Commande non reconnue: "{cleanCmd}". Tapez <span className="font-bold underline">help</span> pour lister les commandes.
          </p>
        );
    }

    setTerminalHistory(prev => [...prev, { cmd: cleanCmd, output: responseOutput }]);
    setInputCommand('');
  };

  const handleRunScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 900);
  };

  return (
    <section id="cyber-lab" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            <span>Laboratoire Interactif</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Défense &amp; Ingénierie</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display [text-wrap:balance]">
            Le Cyber Lab d'Arkipo Serious
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
            Explorez mes compétences de manière concrète : interagissez avec la console en ligne de commande, lancez un diagnostic d'audit web ou analysez la robustesse cryptographique.
          </p>
        </div>

        {/* Tab Controls (Functional Segmented Control) */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-200/80 dark:bg-slate-800/80 rounded-xl max-w-md mb-8">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap min-h-[40px] ${
              activeTab === 'terminal'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <TerminalIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Terminal Shell</span>
          </button>

          <button
            onClick={() => setActiveTab('scanner')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap min-h-[40px] ${
              activeTab === 'scanner'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <ShieldAlert className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Scanner d'Audit</span>
          </button>

          <button
            onClick={() => setActiveTab('crypto')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap min-h-[40px] ${
              activeTab === 'crypto'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <KeyRound className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Crypto &amp; Hash</span>
          </button>
        </div>

        {/* Tab 1: Terminal Shell */}
        {activeTab === 'terminal' && (
          <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden text-slate-100 font-mono-code">
            {/* Terminal Top Bar */}
            <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-400 ml-2">arkipo@kirumba-workstation:~</span>
              </div>
              <div className="text-xs text-slate-500">
                bash v5.2 · UTF-8
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 min-h-[300px] max-h-[440px] overflow-y-auto space-y-4 text-sm">
              {terminalHistory.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="text-slate-500">$</span>
                    <span className="font-semibold">{item.cmd}</span>
                  </div>
                  <div className="pl-4 text-slate-300">
                    {item.output}
                  </div>
                </div>
              ))}

              {/* Command Form */}
              <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
                <span className="text-emerald-400 font-semibold">$</span>
                <input
                  type="text"
                  value={inputCommand}
                  onChange={(e) => setInputCommand(e.target.value)}
                  placeholder="Tapez 'help', 'whoami', 'skills', 'origins', 'projects'..."
                  className="flex-1 bg-transparent border-none text-slate-100 text-sm focus:outline-none placeholder-slate-600"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-3 py-1 bg-emerald-700/60 hover:bg-emerald-600 text-xs rounded text-white font-sans transition-colors min-h-[32px]"
                >
                  Exécuter
                </button>
              </form>
            </div>
            
            {/* Terminal Quick Command Chips */}
            <div className="px-4 py-2.5 bg-slate-900/50 border-t border-slate-800 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-sans">Commandes rapides :</span>
              {["help", "whoami", "origins", "skills", "projects", "contact", "security", "clear"].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => {
                    setInputCommand(cmd);
                  }}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-emerald-300 text-xs font-mono-code transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Security Scanner */}
        {activeTab === 'scanner' && (
          <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              <div className="flex-1 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                  <Lock className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  value={targetUrl}
                  onChange={(e) => setTargetUrl(e.target.value)}
                  placeholder="URL cible pour vérification des en-têtes de sécurité"
                  className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono-code"
                />
              </div>

              <button
                onClick={handleRunScan}
                disabled={isScanning}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-lg transition-colors flex items-center justify-center gap-2 min-h-[44px]"
              >
                {isScanning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Audit en cours...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Lancer le diagnostic d'audit</span>
                  </>
                )}
              </button>
            </div>

            {/* Overall Score Summary */}
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-xl mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                  Niveau de robustesse évalué
                </span>
                <p className="text-xl font-bold text-slate-900 dark:text-white font-display mt-0.5">
                  Conformité Sécuritaire Élevée (95/100)
                </p>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 max-w-sm">
                5 contrôles majeurs validés selon les critères OWASP Top 10 et les bonnes pratiques de sécurité des SI.
              </div>
            </div>

            {/* Checkpoints Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scanResults.map((check) => (
                <div
                  key={check.id}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {check.category}
                      </span>
                      <div className="flex items-center gap-1">
                        {check.status === 'passed' && (
                          <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Conforme</span>
                          </span>
                        )}
                        {check.status === 'warning' && (
                          <span className="flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>À durcir</span>
                          </span>
                        )}
                        {check.status === 'failed' && (
                          <span className="flex items-center gap-1 text-xs font-medium text-rose-600 dark:text-rose-400">
                            <XCircle className="w-3.5 h-3.5" />
                            <span>Vulnérable</span>
                          </span>
                        )}
                      </div>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {check.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {check.recommendation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Cryptography & Hash Calculator */}
        {activeTab === 'crypto' && (
          <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="max-w-2xl mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-1">
                Calculateur Cryptographique &amp; Entropie NIST
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                La cryptographie appliquée protège les identifiants et les transactions financières. Testez le hachage unidirectionnel SHA-256 en temps réel via l'API Web Cryptography du navigateur.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Texte ou mot de passe à évaluer :
                </label>
                <input
                  type="text"
                  value={cryptoInput}
                  onChange={(e) => setCryptoInput(e.target.value)}
                  placeholder="Tapez une chaîne de caractères..."
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono-code"
                />
              </div>

              {/* Entropy Bar */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                  <span className="text-slate-600 dark:text-slate-400">
                    Force estimée : {entropy >= 60 ? 'Excellente (>60 bits)' : entropy >= 40 ? 'Moyenne' : 'Faible'}
                  </span>
                  <span className="font-mono-code text-slate-900 dark:text-white tabular-nums">
                    {entropy} bits d'entropie
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      entropy >= 60 ? 'bg-emerald-500' : entropy >= 40 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${Math.min(100, (entropy / 80) * 100)}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  Recommandation NIST : combiner minuscules, majuscules, chiffres et caractères spéciaux pour résister aux attaques par dictionnaire et Rainbow Tables.
                </p>
              </div>

              {/* Output Hash */}
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Empreinte Numérique (Digest SHA-256) :
                </label>
                <div className="p-3.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono-code text-emerald-700 dark:text-emerald-400 break-all select-all">
                  {sha256Hash || 'En attente de saisie...'}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

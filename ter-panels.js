/**
 * ter-panels.js — Données et rendu des panneaux Terminale
 * Dépend de ter-icons.js (chargé avant) et styles.css (existant)
 */

/* ─────────────────────────────────────────────
   DONNÉES
   Chaque séquence :
   { id, num, titre, sous_titre, icone, iconSuffix?,
     headerBg?,   ← image de fond du panel header
     tabs: [ { id, label, actif?, desactive?, items: [...] } ]
   }
   Chaque item :
   { type: 'link'|'image'|'disabled',
     icon, label, sub?, href?, cta? }
─────────────────────────────────────────────── */
const TER_SEQUENCES = [

  /* ── Séq. 00 ── */
  {
    id: 0, num: '00',
    titre: 'Les incontournables',
    sous_titre: 'Rappels de notions mathématiques utiles en physique-chimie',
    icone: 'bulb',
    tabs: [
      {
        id: 'cours', label: 'Cours', actif: true,
        items: [
          { type:'link', icon:'📄', label:'Fiches — Les incontournables',
            sub:'Notation scientifique, chiffres significatifs, incertitudes…',
            href:'seq00/Fiches_incontournables.pdf' },
          { type:'link', icon:'💡', label:'Cours interactif — Les incontournables',
            href:'seq00/sequence00_incontournables.html' },
        ]
      },
      { id:'exercices', label:'Exercices', items:[] }
    ]
  },

  /* ── Séq. 01 ── */
  {
    id: 1, num: '01',
    titre: 'Évolution d\'un système chimique',
    sous_titre: 'Taux d\'avancement · Critère d\'évolution · Constante d\'équilibre',
    icone: 'pile',
    headerBg: 'seq01/image1.jpg',
    tabs: [
      {
        id: 'Cours', label: 'Cours', actif: true,
        items: [
          { type:'link', icon:'📖', label:'Cours interactif',
            sub:'Séquence 1 — Évolution d\'un système chimique',
            href:'seq01/seq01-cours_interactif.html' },
          { type:'link', icon:'📖', label:'Fiche de révision',
            sub:'Réalisée par Yousra et Victor',
            href:'seq01/seq01_Fiche de révision.html' },
        ]
      },
      {
        id: 'Flashcards', label: 'Flashcards',
        items: [
          { type:'link', icon:'🃏', label:'Flashcards',
            sub:'Réalisées par Victor et Yousra',
            href:'seq01/seq01_Flashcards.html' },
        ]
      },
      {
        id: 'Quiz', label: 'Quiz',
        items: [
          { type:'link', icon:'✅', label:'Quiz',
            sub:'Réalisé par Victor et Yousra',
            href:'seq01/seq01_Quiz.html' },
        ]
      },
      {
        id: 'Jeu', label: '🎮 Jeu',
        items: [
          { type:'link', icon:'🔐', label:'Escape game — L\'Héritage de Volta',
            sub:'Séquence 01 — Évolution d\'un système chimique',
            href:'seq01/seq01-escape-volta.html',
            imgSrc:'seq01/imajeu/pile-volta.jpeg',
            cta:'Jouer →' },
        ]
      },
    ]
  },

  /* ── Séq. 02 ── */
  {
    id: 2, num: '02',
    titre: 'Acide Base',
    sous_titre: 'pH · pKa · Réactions acido-basiques · Indicateurs',
    icone: 'ph',
    headerBg: 'seq02/image2.jpg',
    tabs: [
      {
        id:'Cours', label:'Cours', actif: true,
        items: [
          { type:'link', icon:'🎓', label:'Cours interactif — Acides et bases',
            sub:'Théorie de Brønsted-Lowry · pH · pKa · Réactions acido-basiques',
            href:'seq02/seq02-cours_interactif.html' },
        ]
      },
      { id:'Fiche de révision', label:'Fiche de révision', desactive:true,  items:[] },
      {
        id:'flashcards', label:'Flashcards et Quiz',
        items: [
          { type:'link', icon:'🃏✅', label:'Flashcards et Quiz',
            sub:'Réalisés par Aly et Nessim',
            href:'seq02/seq02_Flashcard et quiz.html' },
        ]
      },
    ]
  },

  /* ── Séq. 03 ── */
  {
    id: 3, num: '03',
    titre: 'Bases de la mécanique newtonienne',
    sous_titre: 'Lois de Newton · Forces · Énergie · Cinématique',
    icone: 'runner',
    headerBg: 'seq03/image3.jpg',
    tabs: [
      {
        id:'Fiche de révision', label:'Fiche de révision', actif: true,
        items: [
          { type:'image', label:'Fiche de révision — Bases de la mécanique newtonienne',
            src:'seq03/seq03_Fiche de révision.png',
            alt:'Fiche de révision mécanique newtonienne' },
        ]
      },
      {
        id:'flashcards', label:'Flashcards',
        items: [
          { type:'image-group', cards: [
            { label:'Cartes #1 → #5 · Forces · Cinématique',       src:'seq03/Flashcards 1-5.jpg' },
            { label:'Cartes #6 → #8 · Types de mouvement',         src:'seq03/Flashcards 6-8.jpg' },
            { label:'Cartes #11 → #15 · Lois de Newton · Énergie', src:'seq03/Flashcards 11-15.jpg' },
            { label:'Cartes #16 → #20 · Énergie · Chute libre',    src:'seq03/Flashcards 16-20.jpg' },
          ]}
        ]
      },
      {
        id:'quiz', label:'Quiz',
        items: [
          { type:'link', icon:'✅', label:'Quiz',
            sub:'Séquence 3 — Bases de la mécanique newtonienne',
            href:'seq03/seq03_Quiz.html' },
        ]
      },
    ]
  },

  /* ── Séq. 04 ── */
  {
    id: 4, num: '04',
    titre: 'Lois de Kepler',
    sous_titre: 'Orbites · Périodes · Gravitation · 3ème loi',
    icone: 'planet',
    headerBg: 'seq04/image4.jpg',
    tabs: [
      {
        id:'Animations', label:'Animations', actif: true,
        items: [
          { type:'link', icon:'▶️', label:'Notebook Python — 3ème loi de Kepler',
            sub:'Exécuter en ligne sur Basthon — Peser Jupiter',
            href:'https://notebook.basthon.fr/?from=https://raw.githubusercontent.com/CSAPG/EDS-Physique-Chimie/main/seq04/seq04-animation.ipynb',
            cta:'Ouvrir ↓' },
        ]
      },
      {
        id:'Fiche de révision', label:'Fiche de révision',
        items: [
          { type:'link', icon:'📖', label:'Fiche de révision',
            sub:'Réalisée par Lou et Lou',
            href:'seq04/seq04_Fiche de révision.pdf' },
        ]
      },
      {
        id:'Flashcards', label:'Flashcards',
        items: [
          { type:'link', icon:'🃏', label:'Flashcards',
            sub:'Réalisées par Lou et Lou',
            href:'seq04/seq04_Flashcards.html' },
        ]
      },
      {
        id:'Quiz', label:'Quiz',
        items: [
          { type:'link', icon:'✅', label:'Quiz',
            sub:'Séquence 4 — Lois de Kepler',
            href:'seq04/seq04_Quiz.html' },
        ]
      },
    ]
  },

  /* ── Séq. 05 ── */
  {
    id: 5, num: '05',
    titre: 'Contrôle de qualité',
    sous_titre: 'Titrage · Dosage · Spectrophotométrie · Incertitudes',
    icone: 'burette',
    headerBg: 'seq05/image5.jpg',
    tabs: [
      {
        id:'Fiche de révision', label:'Fiche de révision', actif: true,
        items: [
          { type:'link', icon:'📖', label:'Fiche de révision',
            sub:'Réalisée par Jules et Léandro',
            href:'seq05/seq05_Fiche de révision.html' },
        ]
      },
      {
        id:'Flashcards', label:'Flashcards',
        items: [
          { type:'link', icon:'🃏', label:'Flashcards',
            sub:'Réalisées par Jules et Léandro',
            href:'seq05/seq05_Flashcards.html' },
        ]
      },
      {
        id:'Quiz', label:'Quiz',
        items: [
          { type:'link', icon:'✅', label:'Quiz',
            sub:'Séquence 5 — Contrôle de qualité',
            href:'seq05/seq05_Quiz.html' },
        ]
      },
    ]
  },

  /* ── Séq. 06 ── */
  {
    id: 6, num: '06',
    titre: 'Diffraction des ondes et interférences',
    sous_titre: 'Diffraction · Interférences · Fentes de Young · Réseau',
    icone: 'interference',
    headerBg: 'seq06/image6.jpg',
    tabs: [
      {
        id:'Fiche de révision', label:'Fiche de révision', actif: true,
        items: [
          { type:'link', icon:'📖', label:'Fiche de révision',
            sub:'Réalisée par Alexandre et Emilien',
            href:'seq06/seq6_Fiche de révision.html' },
        ]
      },
      {
        id:'Flashcards', label:'Flashcards',
        items: [
          { type:'link', icon:'🃏', label:'Flashcards',
            sub:'Réalisées par Alexandre et Emilien',
            href:'seq06/seq6_Flashcards.html' },
        ]
      },
      {
        id:'Quiz', label:'Quiz',
        items: [
          { type:'link', icon:'✅', label:'Quiz',
            sub:'Séquence 6 — Diffraction et interférences',
            href:'seq06/seq6_Quiz.html' },
        ]
      },
    ]
  },

  /* ── Séq. 07 ── */
  {
    id: 7, num: '07',
    titre: 'Atténuations et Effet Doppler',
    sous_titre: 'Atténuation · Décibels · Effet Doppler · Signaux',
    icone: 'doppler',
    headerBg: 'seq07/image7.png',
    tabs: [
      {
        id:'fiche-flash-quiz', label:'Fiche · Flashcards · Quiz', actif: true,
        items: [
          { type:'link', icon:'📖', label:'Fiche de révision — Flashcards — Quiz',
            sub:'Réalisés par Lucas et Ruben',
            href:'seq07/sqe07_Fiche de révision-Flashcards-Quiz.html' },
        ]
      },
    ]
  },

  /* ── Séq. 08 ── */
  {
    id: 8, num: '08',
    titre: 'Formation d\'images par une lunette astronomique',
    sous_titre: 'Lentilles · Grossissement · Lunette afocale · Rayons',
    icone: 'lens',
    headerBg: 'seq08/image8.jpg',
    tabs: [
      {
        id:'Animations', label:'Animations', actif: true,
        items: [
          { type:'link', icon:'🔭', label:'Lunette astronomique — formation d\'image',
            sub:'Terminale spécialité · Optique',
            href:'seq08/animations/lunette_interactive/lunette_interactive.html' },
        ]
      },
      { id:'Fiche de révision', label:'Fiche de révision', desactive:true, items:[] },
      { id:'Flashcards',        label:'Flashcards',        desactive:true, items:[] },
      { id:'Quiz',              label:'Quiz',              desactive:true, items:[] },
    ]
  },

  /* ── Séq. 09 ── */
  {
    id: 9, num: '09',
    titre: 'L\'énergie — Conversions et transferts',
    sous_titre: 'Énergie cinétique · Travail · Puissance · Rendement · Moteur',
    icone: 'motor',
    headerBg: 'seq09/image9.jpg',
    tabs: [
      {
        id:'Fiche de révision', label:'Fiche de révision', actif: true,
        items: [
          { type:'link', icon:'📖', label:'Fiche de révision — Partie A',
            sub:'Réalisée par David, Ambre, Morgane et Salma',
            href:'seq09/seq09_Fiche de révision partie A.html' },
          { type:'link', icon:'📖', label:'Fiche de révision — Partie B',
            sub:'Réalisée par David, Ambre, Morgane et Salma',
            href:'seq09/seq09_Fiche de révision partie B.html' },
        ]
      },
      { id:'Flashcards', label:'Flashcards', desactive:true, items:[] },
      {
        id:'Quiz', label:'Quiz',
        items: [
          { type:'link', icon:'✅', label:'Quiz',
            sub:'Séquence 9 — L\'énergie',
            href:'seq09/seq09_Quiz.html' },
        ]
      },
    ]
  },

  /* ── Séq. 10 ── */
  {
    id: 10, num: '10',
    titre: 'Systèmes électriques capacitifs',
    sous_titre: 'Condensateur · Circuit RC · Constante de temps τ · Charge/décharge',
    icone: 'touchscreen',
    headerBg: 'seq10/image10.jpg',
    tabs: [
      {
        id:'Animations', label:'Animations', actif: true,
        items: [
          { type:'link', icon:'⚡', label:'Système capacitif — circuit RC série',
            sub:'Terminale spécialité · Physique-Chimie',
            href:'seq10/animations/Systeme capacitif - circuit rc serie.html' },
          { type:'link', icon:'🔋', label:'CapaPhysique',
            sub:'Réalisé par Houssine, Lenny et Yohann',
            href:'seq10/animations/CapaPhysique.html' },
        ]
      },
      { id:'Fiche de révision', label:'Fiche de révision', desactive:true, items:[] },
      { id:'Flashcards',        label:'Flashcards',        desactive:true, items:[] },
      { id:'Quiz',              label:'Quiz',              desactive:true, items:[] },
    ]
  },

  /* ── Séq. 11 ── */
  {
    id: 11, num: '11',
    titre: 'Cinétique chimique',
    sous_titre: 'Vitesse de réaction · Ordre · t½ · Facteurs cinétiques',
    icone: 'kinetics',
    headerBg: 'seq11/image11.jpg',
    tabs: [
      {
        id:'Animations', label:'Animations', actif: true,
        items: [
          { type:'link', icon:'⚗️', label:'Cinétique chimique',
            sub:'Réalisée par Mme Poirault-Gauvin',
            href:'seq11/animations/cinetique chimique.html' },
        ]
      },
      { id:'Fiche de révision', label:'Fiche de révision', desactive:true, items:[] },
      {
        id:'Flashcards', label:'Flashcards',
        items: [
          { type:'link', icon:'🃏', label:'Flashcards',
            sub:'Réalisées par Alexis et Noé',
            href:'seq11/seq11_flashcards.html' },
        ]
      },
      {
        id:'Quiz', label:'Quiz',
        items: [
          { type:'link', icon:'✅', label:'Quiz',
            sub:'Réalisé par Alexis et Noé',
            href:'seq11/seq11_quiz.html' },
        ]
      },
    ]
  },

  /* ── Séq. 12 ── */
  {
    id: 12, num: '12',
    titre: 'Stratégie de synthèse',
    sous_titre: 'Rétrosynthèse · Rendement · Mécanismes · Chimie verte',
    icone: 'reflux', iconSuffix: 'seq12',
    headerBg: 'seq12/image12.png',
    tabs: [
      {
        id:'Fiche de révision', label:'Fiche de révision', actif: true,
        items: [
          { type:'link', icon:'📖', label:'Fiche de révision',
            sub:'Réalisée par Thomas et Gabriel',
            href:'seq12/seq12_Fiche de révision.pdf' },
        ]
      },
      {
        id:'Flashcards', label:'Flashcards',
        items: [
          { type:'link', icon:'🃏', label:'Flashcards — Feuille 1/3',
            sub:'Étapes, Rendement',
            href:'seq12/seq12_Flashcards.pdf' },
          { type:'link', icon:'🃏', label:'Flashcards — Feuilles 2/3 & 3/3',
            sub:'Vitesse, Mécanismes, Réactions, Chimie verte',
            href:'seq12/seq12_Flashcard2.pdf' },
        ]
      },
      {
        id:'Quiz', label:'Quiz',
        items: [
          { type:'link', icon:'✅', label:'Quiz',
            sub:'Séquence 12 — Stratégie de synthèse',
            href:'seq12/seq12_Quiz.pdf' },
        ]
      },
    ]
  },

  /* ── Séq. 13 ── */
  {
    id: 13, num: '13',
    titre: 'Mouvement d\'un fluide',
    sous_titre: 'Écoulement · Équation de Bernoulli · Débit · Viscosité',
    icone: 'fluid',
    headerBg: 'seq13/image13.jpg',
    tabs: [
      {
        id:'Fiche de révision', label:'Fiche de révision', actif: true,
        items: [
          { type:'link', icon:'📖', label:'Fiche de révision',
            sub:'Réalisée par Yugo, Noa et Baptiste',
            href:'seq13/seq13_fiche de révision.html' },
        ]
      },
      {
        id:'Flashcards', label:'Flashcards',
        items: [
          { type:'link', icon:'🃏', label:'Flashcards',
            sub:'Séquence 13 — Mouvement d\'un fluide',
            href:'seq13/seq13_Flashcards.html' },
        ]
      },
      {
        id:'Quiz', label:'Quiz',
        items: [
          { type:'link', icon:'✅', label:'Quiz',
            sub:'Séquence 13 — Mouvement d\'un fluide',
            href:'seq13/seq13_Quiz.pdf' },
        ]
      },
    ]
  },

  /* ── Séq. 14 ── */
  {
    id: 14, num: '14',
    titre: 'Transformation nucléaire',
    sous_titre: 'Radioactivité · Désintégration · Fission · Fusion · Bilan énergétique',
    icone: 'nuclear', iconSuffix: 'seq14',
    headerBg: 'seq14/image14.png',
    tabs: [
      {
        id:'Fiche de révision', label:'Fiche de révision', actif: true,
        items: [
          { type:'link', icon:'📖', label:'Fiche de révision',
            sub:'Réalisée par Clément et Martin',
            href:'seq14/seq14_Fiche de révision.png' },
        ]
      },
      {
        id:'Quiz', label:'Quiz',
        items: [
          { type:'link', icon:'✅', label:'Quiz',
            sub:'Séquence 14 — Transformation nucléaire',
            href:'seq14/seq14_Quiz.pdf' },
        ]
      },
      { id:'Flashcards', label:'Flashcards', desactive:true, items:[] },
    ]
  },

  /* ── Séq. 15 ── */
  {
    id: 15, num: '15',
    titre: 'La lumière — Un flux de photons',
    sous_titre: 'Photon · Effet photoélectrique · Jonction PN · E = hν',
    icone: 'photon',
    headerBg: 'seq15/image15.png',
    tabs: [
      { id:'Fiche de révision', label:'Fiche de révision', desactive:true, items:[] },
      {
        id:'Flashcards', label:'Flashcards', actif: true,
        items: [
          { type:'link', icon:'🃏', label:'Flashcards',
            sub:'Réalisées par Valence et Loïc',
            href:'seq15/seq15_Flashcards.pdf' },
        ]
      },
      {
        id:'Quiz', label:'Quiz',
        items: [
          { type:'link', icon:'✅', label:'Quiz',
            sub:'Séquence 15 — La lumière : un flux de photons',
            href:'seq15/seq15_QCM.pdf' },
        ]
      },
    ]
  },
];


/* ─────────────────────────────────────────────
   RENDU HTML
─────────────────────────────────────────────── */

function renderTerItem(item) {
  if (item.type === 'image') {
    return `<div style="display:flex;flex-direction:column;gap:12px;align-items:center;">
      <img src="${item.src}" alt="${item.alt}"
           style="max-width:100%;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.12);"/>
    </div>`;
  }
  if (item.type === 'image-group') {
    return item.cards.map(c => `
      <div style="width:100%;background:white;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);margin-bottom:16px;">
        <div style="background:#eff6ff;border-bottom:1px solid #dbeafe;padding:10px 18px;font-size:0.8rem;font-weight:700;color:#1d4ed8;letter-spacing:0.08em;text-transform:uppercase;">${c.label}</div>
        <img src="${c.src}" alt="${c.label}" style="width:100%;display:block;">
      </div>`).join('');
  }
  // Lien standard (avec image optionnelle à la place de l'icône)
  const cta = item.cta || '→';
  const iconHtml = item.imgSrc
    ? `<img src="${item.imgSrc}" alt="" style="width:56px;height:56px;object-fit:cover;border-radius:8px;flex-shrink:0;">`
    : `<div class="ter-res-icon">${item.icon}</div>`;
  return `
    <a href="${item.href}" target="_blank" class="ter-resource-link">
      ${iconHtml}
      <div style="text-align:left;flex:1;">
        <p class="ter-res-label">${item.label}</p>
        ${item.sub ? `<p class="ter-res-sub">${item.sub}</p>` : ''}
      </div>
      <span class="ter-res-cta">${cta}</span>
    </a>`;
}

function renderTerTab(seq, tab, index) {
  const tabId   = `t${seq.id}-sub-${tab.id}`;
  const btnId   = `t${seq.id}-btn-${tab.id}`;
  const isActif = tab.actif || (!seq.tabs.some(t => t.actif) && index === 0);

  if (tab.desactive) {
    return {
      btn: `<li><button class="btn-disabled-tab" disabled title="Ressource à venir">${tab.label} <span class="soon">(à venir)</span></button></li>`,
      panel: ''
    };
  }

  const btn = `<li>
    <button onclick="showSubTab('t${seq.id}','${tab.id}')"
            id="${btnId}" class="t${seq.id}-sub-btn ter-tab-btn ${isActif ? 'ter-tab-active' : ''}">
      ${tab.label}
    </button>
  </li>`;

  const panel = `
    <div id="${tabId}" class="sub-content ${isActif ? 'active' : ''}" style="margin-top:24px;">
      <p style="color:#4b5563;margin-bottom:20px;">Clique sur la ressource pour l'ouvrir :</p>
      <div style="display:flex;flex-direction:column;gap:12px;align-items:center;max-width:900px;margin:0 auto;">
        ${tab.items.map(renderTerItem).join('')}
      </div>
    </div>`;

  return { btn, panel };
}

function renderTerPanel(seq) {
  const el = document.getElementById('terminale-seq-' + seq.id);
  if (!el) return;

  const bgStyle = seq.headerBg
    ? `background-image:url('${seq.headerBg}');background-size:55%;background-position:center bottom;background-repeat:no-repeat;`
    : '';

  const iconHtml = getIconTer(seq.icone, seq.iconSuffix || ('p' + seq.id));

  const rendered = seq.tabs.map((tab, i) => renderTerTab(seq, tab, i));
  const btnHtml   = rendered.map(r => r.btn).join('');
  const panelHtml = rendered.map(r => r.panel).join('');

  el.innerHTML = `
    <div class="seq-bg" style="${bgStyle}">
      <div style="background:rgba(255,255,255,0.88);border-radius:10px;padding:16px;">
        <div class="ter-panel-header">
          <div class="ter-panel-icon">${iconHtml}</div>
          <div style="flex:1;">
            <p class="ter-panel-num">Séquence ${seq.num}</p>
            <h2 class="ter-panel-title">${seq.titre}</h2>
            <p class="ter-panel-sub">${seq.sous_titre}</p>
          </div>
        </div>
        <nav style="border-bottom:2px solid #e5e7eb;margin-bottom:0;">
          <ul style="display:flex;flex-wrap:wrap;justify-content:center;gap:4px;list-style:none;padding:0;margin:0;">
            ${btnHtml}
          </ul>
        </nav>
      </div>
      ${panelHtml}
    </div>`;
}

/* Point d'entrée */
document.addEventListener('DOMContentLoaded', () => {
  TER_SEQUENCES.forEach(renderTerPanel);
});

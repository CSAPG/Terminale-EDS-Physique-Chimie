/**
 * ter-icons.js — Icônes animées des séquences Terminale
 * Usage : getIconTer('pile') → innerHTML à injecter
 */

const TER_ICONS = {

  /* ── Séq. 00 — Ampoule Eureka (identique Seconde) ── */
  bulb: `
    <div class="bulb-icon">
      <div class="bulb-glow"></div>
      <svg class="bulb-svg" viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
        <g class="bulb-rays">
          <line x1="30" y1="2"  x2="30" y2="8"  />
          <line x1="6"  y1="10" x2="13" y2="16" />
          <line x1="54" y1="10" x2="47" y2="16" />
          <line x1="0"  y1="32" x2="8"  y2="32" />
          <line x1="60" y1="32" x2="52" y2="32" />
        </g>
        <ellipse class="bulb-glass" cx="30" cy="32" rx="19" ry="25"/>
        <text class="bulb-filament-text" x="30" y="35">eureka</text>
        <rect class="bulb-base-cap"  x="24" y="54" width="12" height="6"/>
        <rect class="bulb-base-ring" x="23" y="60" width="14" height="4"/>
        <rect class="bulb-base-ring" x="23" y="65" width="14" height="4"/>
        <rect class="bulb-base-tip"  x="24" y="70" width="12" height="6" rx="2"/>
      </svg>
    </div>`,

  /* ── Séq. 01 — Pile électrochimique ── */
  pile: `
    <style>
      @keyframes pile-bubble-1 { 0%,100%{transform:translateY(0);opacity:0.9;} 50%{transform:translateY(-12px);opacity:0.3;} }
      @keyframes pile-bubble-2 { 0%,100%{transform:translateY(0);opacity:0.7;} 50%{transform:translateY(-10px);opacity:0.2;} }
      @keyframes pile-spark    { 0%,90%,100%{opacity:0;} 92%,98%{opacity:1;} }
      @media(prefers-reduced-motion:reduce){
        .pile-b1,.pile-b2,.pile-spark-el{animation:none;}
      }
    </style>
    <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg" width="64" height="80">
      <!-- Corps gauche (zinc) -->
      <rect x="6" y="28" width="26" height="52" rx="3" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
      <rect x="6" y="28" width="26" height="10" rx="3" fill="#cbd5e1"/>
      <text x="19" y="42" text-anchor="middle" font-size="7" fill="#1e293b" font-weight="700">Zn</text>
      <!-- Corps droit (cuivre) -->
      <rect x="48" y="28" width="26" height="52" rx="3" fill="#d97706" stroke="#b45309" stroke-width="1.5"/>
      <rect x="48" y="28" width="26" height="10" rx="3" fill="#fbbf24"/>
      <text x="61" y="42" text-anchor="middle" font-size="7" fill="#fff" font-weight="700">Cu</text>
      <!-- Solution entre les électrodes -->
      <rect x="32" y="38" width="16" height="42" fill="#bae6fd" opacity="0.8"/>
      <text x="40" y="56" text-anchor="middle" font-size="5.5" fill="#0369a1" font-weight="600">SO₄</text>
      <text x="40" y="64" text-anchor="middle" font-size="5.5" fill="#0369a1">CuSO₄</text>
      <!-- Bulles dans la solution -->
      <circle class="pile-b1" cx="37" cy="72" r="2.5" fill="none" stroke="#7dd3fc" stroke-width="1"
        style="animation:pile-bubble-1 2.1s ease-in-out infinite;"/>
      <circle class="pile-b2" cx="43" cy="68" r="2" fill="none" stroke="#7dd3fc" stroke-width="1"
        style="animation:pile-bubble-2 1.7s ease-in-out 0.5s infinite;"/>
      <!-- Fil de connexion -->
      <path d="M19,28 L19,14 L61,14 L61,28" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Étincelle -->
      <g class="pile-spark-el" style="animation:pile-spark 3s ease-in-out infinite;">
        <line x1="37" y1="14" x2="40" y2="10" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
        <line x1="40" y1="10" x2="43" y2="14" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
        <line x1="40" y1="10" x2="40" y2="6"  stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
      </g>
      <!-- Bornes +/- -->
      <text x="19" y="24" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="800">−</text>
      <text x="61" y="24" text-anchor="middle" font-size="9" fill="#16a34a" font-weight="800">+</text>
    </svg>`,

  /* ── Séq. 02 — Papier pH (cercle chromatique fidèle à la photo) ── */
  ph: `
    <style>
      @keyframes ph-spin { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
      .ph-disc { animation: ph-spin 16s linear infinite; transform-origin: 40px 40px; }
      @media(prefers-reduced-motion:reduce){ .ph-disc{animation:none;} }
    </style>
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
      <defs>
        <clipPath id="ph-clip2"><circle cx="40" cy="40" r="32"/></clipPath>
      </defs>
      <!-- Fond blanc du disque -->
      <circle cx="40" cy="40" r="32" fill="white"/>
      <!-- 14 secteurs pH 1→14 — sens horaire depuis le haut, couleurs fidèles photo -->
      <!-- Chaque secteur ≈ 25.7° -->
      <g class="ph-disc" clip-path="url(#ph-clip2)">
        <!-- pH 1 : rouge vif -->
        <path d="M40,40 L40,8 A32,32 0 0,1 53.9,11.7 Z"         fill="#e32b2b"/>
        <!-- pH 2 : rouge-orange -->
        <path d="M40,40 L53.9,11.7 A32,32 0 0,1 65.6,21.2 Z"    fill="#e8501a"/>
        <!-- pH 3 : orange vif -->
        <path d="M40,40 L65.6,21.2 A32,32 0 0,1 72,34.6 Z"      fill="#f07820"/>
        <!-- pH 4 : jaune-orange -->
        <path d="M40,40 L72,34.6 A32,32 0 0,1 72,45.4 Z"        fill="#f5b800"/>
        <!-- pH 5 : jaune -->
        <path d="M40,40 L72,45.4 A32,32 0 0,1 65.6,58.8 Z"      fill="#e8d800"/>
        <!-- pH 6 : jaune-vert -->
        <path d="M40,40 L65.6,58.8 A32,32 0 0,1 53.9,68.3 Z"    fill="#a8c800"/>
        <!-- pH 7 : vert -->
        <path d="M40,40 L53.9,68.3 A32,32 0 0,1 40,72 Z"        fill="#38b000"/>
        <!-- pH 8 : vert-cyan -->
        <path d="M40,40 L40,72 A32,32 0 0,1 26.1,68.3 Z"        fill="#00a878"/>
        <!-- pH 9 : cyan-bleu -->
        <path d="M40,40 L26.1,68.3 A32,32 0 0,1 14.4,58.8 Z"    fill="#0090c8"/>
        <!-- pH 10 : bleu -->
        <path d="M40,40 L14.4,58.8 A32,32 0 0,1 8,45.4 Z"       fill="#1060d0"/>
        <!-- pH 11 : bleu-violet -->
        <path d="M40,40 L8,45.4 A32,32 0 0,1 8,34.6 Z"          fill="#3838c8"/>
        <!-- pH 12 : violet -->
        <path d="M40,40 L8,34.6 A32,32 0 0,1 14.4,21.2 Z"       fill="#6020b0"/>
        <!-- pH 13 : violet foncé -->
        <path d="M40,40 L14.4,21.2 A32,32 0 0,1 26.1,11.7 Z"    fill="#8010a0"/>
        <!-- pH 14 : rose-magenta -->
        <path d="M40,40 L26.1,11.7 A32,32 0 0,1 40,8 Z"         fill="#c01880"/>
      </g>
      <!-- Séparations noires fines entre secteurs (comme la photo) -->
      <g stroke="#1a1a1a" stroke-width="1" opacity="0.6" clip-path="url(#ph-clip2)">
        <line x1="40" y1="40" x2="40"    y2="8"    />
        <line x1="40" y1="40" x2="53.9"  y2="11.7" />
        <line x1="40" y1="40" x2="65.6"  y2="21.2" />
        <line x1="40" y1="40" x2="72"    y2="34.6" />
        <line x1="40" y1="40" x2="72"    y2="45.4" />
        <line x1="40" y1="40" x2="65.6"  y2="58.8" />
        <line x1="40" y1="40" x2="53.9"  y2="68.3" />
        <line x1="40" y1="40" x2="40"    y2="72"   />
        <line x1="40" y1="40" x2="26.1"  y2="68.3" />
        <line x1="40" y1="40" x2="14.4"  y2="58.8" />
        <line x1="40" y1="40" x2="8"     y2="45.4" />
        <line x1="40" y1="40" x2="8"     y2="34.6" />
        <line x1="40" y1="40" x2="14.4"  y2="21.2" />
        <line x1="40" y1="40" x2="26.1"  y2="11.7" />
      </g>
      <!-- Anneau central blanc avec texte -->
      <circle cx="40" cy="40" r="13" fill="white"/>
      <text x="40" y="38" text-anchor="middle" font-size="7.5" font-weight="800" fill="#1a1a1a">pH</text>
      <text x="40" y="48" text-anchor="middle" font-size="6"   font-weight="600" fill="#64748b">1-14</text>
      <!-- Contour extérieur -->
      <circle cx="40" cy="40" r="32" fill="none" stroke="#334155" stroke-width="2"/>
    </svg>`,

  /* ── Séq. 03 — Coureur (SVG autonome, transform classique) ── */
  runner: `
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="70" height="70">
      <defs>
        <style>
          @keyframes ra-arm-f{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}}
          @keyframes ra-arm-b{0%,100%{transform:rotate(30deg)}50%{transform:rotate(-30deg)}}
          @keyframes ra-leg-f{0%,100%{transform:rotate(-35deg)}50%{transform:rotate(35deg)}}
          @keyframes ra-leg-b{0%,100%{transform:rotate(35deg)}50%{transform:rotate(-35deg)}}
          @keyframes ra-body{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
          @keyframes ra-cloud{0%{transform:translateX(30px);opacity:0}20%{opacity:0.6}80%{opacity:0.4}100%{transform:translateX(-10px);opacity:0}}
          .ra-bg{animation:ra-body 0.4s ease-in-out infinite}
          .ra-af{animation:ra-arm-f 0.4s ease-in-out infinite;transform-origin:50px 39px}
          .ra-ab{animation:ra-arm-b 0.4s ease-in-out infinite;transform-origin:50px 39px}
          .ra-lf{animation:ra-leg-f 0.4s ease-in-out infinite;transform-origin:50px 53px}
          .ra-lb{animation:ra-leg-b 0.4s ease-in-out infinite;transform-origin:50px 53px}
          .ra-c1{animation:ra-cloud 2s linear infinite}
          .ra-c2{animation:ra-cloud 2s linear 0.65s infinite}
          .ra-c3{animation:ra-cloud 2s linear 1.3s infinite}
          @media(prefers-reduced-motion:reduce){
            .ra-bg,.ra-af,.ra-ab,.ra-lf,.ra-lb{animation:none}
            .ra-c1,.ra-c2,.ra-c3{animation:none;opacity:0.4}
          }
        </style>
      </defs>
      <line x1="4" y1="70" x2="76" y2="70" stroke="#cbd5e1" stroke-width="2"/>
      <ellipse class="ra-c1" cx="18" cy="18" rx="11" ry="4" fill="#e2e8f0"/>
      <ellipse class="ra-c2" cx="48" cy="12" rx="8"  ry="3" fill="#e2e8f0"/>
      <ellipse class="ra-c3" cx="34" cy="22" rx="7"  ry="3" fill="#e2e8f0"/>
      <g class="ra-bg">
        <circle cx="50" cy="30" r="7" fill="#0f766e"/>
        <rect x="46" y="37" width="9" height="14" rx="3" fill="#0f766e"/>
        <g class="ra-ab"><rect x="41" y="38" width="4" height="11" rx="2" fill="#0f766e"/></g>
        <g class="ra-af"><rect x="55" y="38" width="4" height="11" rx="2" fill="#0f766e"/></g>
        <g class="ra-lb"><rect x="44" y="51" width="4.5" height="13" rx="2" fill="#134e4a"/></g>
        <g class="ra-lf"><rect x="52" y="51" width="4.5" height="13" rx="2" fill="#134e4a"/></g>
      </g>
    </svg>`,

  /* ── Séq. 04 — Planète en orbite ── */
  planet: `
    <style>
      @keyframes ter-orbit { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
      @keyframes ter-planet-glow { 0%,100%{opacity:0.6;} 50%{opacity:1;} }
      .ter-orbit-ring { animation: ter-orbit 4s linear infinite; transform-origin: 40px 40px; }
      .ter-star-glow  { animation: ter-planet-glow 2s ease-in-out infinite; }
      @media(prefers-reduced-motion:reduce){.ter-orbit-ring,.ter-star-glow{animation:none;}}
    </style>
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="70" height="70">
      <!-- Étoile centrale -->
      <circle cx="40" cy="40" r="13" fill="#fbbf24"/>
      <circle cx="40" cy="40" r="16" fill="none" stroke="#fde68a" stroke-width="1" opacity="0.5" class="ter-star-glow"/>
      <!-- Orbite elliptique -->
      <ellipse cx="40" cy="40" rx="30" ry="14" fill="none" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
      <!-- Planète en orbite -->
      <g class="ter-orbit-ring">
        <circle cx="70" cy="40" r="6" fill="#3b82f6"/>
        <circle cx="70" cy="40" r="4" fill="#60a5fa"/>
        <!-- Anneau de la planète -->
        <ellipse cx="70" cy="40" rx="9" ry="3" fill="none" stroke="#93c5fd" stroke-width="1.2" opacity="0.7"/>
      </g>
    </svg>`,

  /* ── Séq. 05 — Burette de titrage (contrôle qualité) ── */
  burette: `
    <style>
      @keyframes bur-drop  { 0%{transform:translateY(0);opacity:1;} 80%{transform:translateY(18px);opacity:0.8;} 100%{transform:translateY(22px);opacity:0;} }
      @keyframes bur-color { 0%,60%{fill:#bae6fd;} 80%,100%{fill:#f0abfc;} }
      .bur-drop-el { animation: bur-drop  1.8s ease-in infinite; }
      .bur-liquid  { animation: bur-color 5s ease-in-out infinite; }
      @media(prefers-reduced-motion:reduce){.bur-drop-el,.bur-liquid{animation:none;}}
    </style>
    <svg viewBox="0 0 60 110" xmlns="http://www.w3.org/2000/svg" width="48" height="88">
      <!-- Support vertical -->
      <rect x="28" y="4" width="4" height="72" rx="1" fill="#94a3b8"/>
      <!-- Support horizontal -->
      <rect x="4" y="62" width="22" height="3" rx="1" fill="#94a3b8"/>
      <!-- Pied de support -->
      <rect x="4" y="100" width="52" height="6" rx="2" fill="#94a3b8"/>
      <!-- Corps burette -->
      <rect x="24" y="8" width="12" height="55" rx="2" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1.5"/>
      <!-- Liquide dans burette -->
      <rect x="25.5" y="9.5" width="9" height="34" rx="1" class="bur-liquid"/>
      <!-- Graduations -->
      <line x1="36" y1="18" x2="39" y2="18" stroke="#0369a1" stroke-width="1"/>
      <line x1="36" y1="26" x2="39" y2="26" stroke="#0369a1" stroke-width="1"/>
      <line x1="36" y1="34" x2="39" y2="34" stroke="#0369a1" stroke-width="1"/>
      <line x1="36" y1="42" x2="39" y2="42" stroke="#0369a1" stroke-width="1"/>
      <!-- Robinet -->
      <rect x="22" y="60" width="16" height="6" rx="3" fill="#475569"/>
      <rect x="28" y="57" width="4" height="12" rx="1" fill="#64748b"/>
      <!-- Pointe effilée -->
      <path d="M28,66 L28,78 L30,82 L32,78 L32,66 Z" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1.2"/>
      <!-- Goutte animée -->
      <ellipse class="bur-drop-el" cx="30" cy="84" rx="2.5" ry="3" fill="#7dd3fc"/>
      <!-- Bécher en bas -->
      <path d="M12,80 L12,103 Q12,107 16,107 L44,107 Q48,107 48,103 L48,80 Z"
            fill="#f0fdf9" stroke="#7dd3fc" stroke-width="1.5"/>
      <!-- Solution dans bécher (change de couleur) -->
      <clipPath id="bur-becher"><path d="M13,90 L13,103 Q13,106 16,106 L44,106 Q47,106 47,103 L47,90 Z"/></clipPath>
      <rect x="13" y="90" width="34" height="16" class="bur-liquid" clip-path="url(#bur-becher)" opacity="0.7"/>
    </svg>`,



  /* ── Séq. 06 — Interférences / diffraction ── */
  interference: `
    <style>
      @keyframes wave-propagate {
        0%   { stroke-dashoffset: 60; opacity: 0; }
        20%  { opacity: 1; }
        100% { stroke-dashoffset: 0; opacity: 0.3; }
      }
      .iw1 { animation: wave-propagate 2s linear infinite; }
      .iw2 { animation: wave-propagate 2s linear 0.4s infinite; }
      .iw3 { animation: wave-propagate 2s linear 0.8s infinite; }
      .iw4 { animation: wave-propagate 2s linear 1.2s infinite; }
      @media(prefers-reduced-motion:reduce){.iw1,.iw2,.iw3,.iw4{animation:none;stroke-dashoffset:0;opacity:0.6;}}
    </style>
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="70" height="70">
      <!-- Fente double -->
      <rect x="34" y="5"  width="4" height="26" fill="#1e293b"/>
      <rect x="34" y="35" width="4" height="8"  fill="#1e293b"/>
      <rect x="34" y="47" width="4" height="28" fill="#1e293b"/>
      <!-- Source -->
      <circle cx="10" cy="40" r="5" fill="#fbbf24"/>
      <line x1="15" y1="40" x2="34" y2="40" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,2"/>
      <!-- Ondes depuis fente 1 (y=31) -->
      <g stroke="#3b82f6" stroke-width="1.5" fill="none" stroke-dasharray="60" stroke-linecap="round">
        <path class="iw1" d="M38,31 Q52,20 70,15"/>
        <path class="iw2" d="M38,31 Q52,31 70,31"/>
        <path class="iw3" d="M38,31 Q52,42 70,47"/>
      </g>
      <!-- Ondes depuis fente 2 (y=43) -->
      <g stroke="#f43f5e" stroke-width="1.5" fill="none" stroke-dasharray="60" stroke-linecap="round">
        <path class="iw1" d="M38,43 Q52,33 70,31"/>
        <path class="iw2" d="M38,43 Q52,43 70,43"/>
        <path class="iw4" d="M38,43 Q52,54 70,57"/>
      </g>
      <!-- Écran avec franges -->
      <rect x="72" y="5" width="4" height="70" fill="#f1f5f9" stroke="#e2e8f0" stroke-width="1"/>
      <rect x="72" y="28" width="4" height="6" fill="#fbbf24" opacity="0.9"/>
      <rect x="72" y="37" width="4" height="6" fill="#fbbf24" opacity="0.6"/>
      <rect x="72" y="19" width="4" height="4" fill="#fbbf24" opacity="0.4"/>
      <rect x="72" y="47" width="4" height="4" fill="#fbbf24" opacity="0.4"/>
    </svg>`,

  /* ── Séq. 07 — Effet Doppler ── */
  doppler: `
    <style>
      @keyframes dop-move  { 0%{transform:translateX(-20px);} 100%{transform:translateX(20px);} }
      @keyframes dop-wave  { 0%{r:2;opacity:1;} 100%{r:28;opacity:0;} }
      .dop-src  { animation: dop-move 2s ease-in-out infinite alternate; }
      .dop-w1   { animation: dop-wave 2s ease-out infinite; }
      .dop-w2   { animation: dop-wave 2s ease-out 0.5s infinite; }
      .dop-w3   { animation: dop-wave 2s ease-out 1s infinite; }
      .dop-w4   { animation: dop-wave 2s ease-out 1.5s infinite; }
      @media(prefers-reduced-motion:reduce){
        .dop-src{animation:none;transform:none;}
        .dop-w1,.dop-w2,.dop-w3,.dop-w4{animation:none;r:14;opacity:0.5;}
      }
    </style>
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="70" height="70">
      <g class="dop-src" style="transform-origin:40px 40px;">
        <!-- Source sonore (voiture stylisée) -->
        <rect x="30" y="34" width="20" height="12" rx="3" fill="#0f766e"/>
        <rect x="33" y="29" width="14" height="8"  rx="2" fill="#134e4a"/>
        <circle cx="34" cy="47" r="3.5" fill="#1e293b"/>
        <circle cx="46" cy="47" r="3.5" fill="#1e293b"/>
      </g>
      <!-- Ondes compressées à l'avant (bleu) -->
      <circle class="dop-w1" cx="52" cy="40" r="2" fill="none" stroke="#3b82f6" stroke-width="1.5" style="transform-origin:52px 40px; clip-path:inset(0 0 0 50%)"/>
      <circle class="dop-w2" cx="52" cy="40" r="2" fill="none" stroke="#3b82f6" stroke-width="1.5" style="transform-origin:52px 40px; clip-path:inset(0 0 0 50%)"/>
      <!-- Ondes étirées à l'arrière (rouge) -->
      <circle class="dop-w3" cx="28" cy="40" r="2" fill="none" stroke="#f43f5e" stroke-width="1.5" style="transform-origin:28px 40px; clip-path:inset(0 50% 0 0)"/>
      <circle class="dop-w4" cx="28" cy="40" r="2" fill="none" stroke="#f43f5e" stroke-width="1.5" style="transform-origin:28px 40px; clip-path:inset(0 50% 0 0)"/>
      <!-- Labels -->
      <text x="62" y="28" font-size="7" fill="#3b82f6" font-weight="700">f↑</text>
      <text x="8"  y="28" font-size="7" fill="#f43f5e" font-weight="700">f↓</text>
    </svg>`,

  /* ── Séq. 08 — Lentilles / lunette ── */
  lens: `
    <style>
      @keyframes ray-travel { 0%{stroke-dashoffset:80;opacity:0.3;} 100%{stroke-dashoffset:0;opacity:1;} }
      .ray-anim { animation: ray-travel 1.5s linear infinite; stroke-dasharray:80; }
      @media(prefers-reduced-motion:reduce){.ray-anim{animation:none;stroke-dashoffset:0;opacity:0.8;}}
    </style>
    <svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg" width="80" height="54">
      <!-- Lentille convergente 1 (objectif) -->
      <path d="M22,10 Q32,30 22,50 Q12,30 22,10 Z" fill="#bae6fd" stroke="#0369a1" stroke-width="1.5" opacity="0.8"/>
      <!-- Lentille convergente 2 (oculaire) -->
      <path d="M68,16 Q76,30 68,44 Q60,30 68,16 Z" fill="#bae6fd" stroke="#0369a1" stroke-width="1.5" opacity="0.8"/>
      <!-- Corps tube -->
      <rect x="22" y="27" width="46" height="6" rx="1" fill="#94a3b8" opacity="0.5"/>
      <!-- Rayon principal -->
      <line class="ray-anim" x1="2"  y1="20" x2="22" y2="20" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
      <line class="ray-anim" x1="22" y1="20" x2="45" y2="30" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
      <line class="ray-anim" x1="45" y1="30" x2="68" y2="30" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
      <line class="ray-anim" x1="68" y1="30" x2="88" y2="18" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
      <!-- Rayon parallèle -->
      <line class="ray-anim" x1="2"  y1="30" x2="22" y2="30" stroke="#f97316" stroke-width="1.5" stroke-linecap="round" style="animation-delay:0.3s"/>
      <line class="ray-anim" x1="22" y1="30" x2="45" y2="30" stroke="#f97316" stroke-width="1.5" stroke-linecap="round" style="animation-delay:0.3s"/>
      <line class="ray-anim" x1="45" y1="30" x2="68" y2="30" stroke="#f97316" stroke-width="1.5" stroke-linecap="round" style="animation-delay:0.3s"/>
      <line class="ray-anim" x1="68" y1="30" x2="88" y2="30" stroke="#f97316" stroke-width="1.5" stroke-linecap="round" style="animation-delay:0.3s"/>
    </svg>`,

  /* ── Séq. 09 — Moteur qui tourne ── */
  motor: `
    <style>
      @keyframes motor-spin   { from{transform:rotate(0deg);}  to{transform:rotate(360deg);}  }
      @keyframes motor-spin-r { from{transform:rotate(0deg);}  to{transform:rotate(-360deg);} }
      @keyframes motor-spark  { 0%,85%,100%{opacity:0;} 90%,95%{opacity:1;} }
      .motor-rotor { animation: motor-spin   1.2s linear infinite; transform-origin: 40px 40px; }
      .motor-fan   { animation: motor-spin-r 0.8s linear infinite; transform-origin: 68px 40px; }
      .motor-spark { animation: motor-spark  1.5s ease-in-out infinite; }
      @media(prefers-reduced-motion:reduce){
        .motor-rotor,.motor-fan{animation:none;}
        .motor-spark{animation:none;opacity:0;}
      }
    </style>
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="70" height="70">
      <!-- Corps moteur -->
      <rect x="10" y="24" width="50" height="32" rx="4" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
      <rect x="10" y="28" width="50" height="4" fill="#94a3b8" opacity="0.6"/>
      <rect x="10" y="48" width="50" height="4" fill="#94a3b8" opacity="0.6"/>
      <!-- Rotor (croix tournante) -->
      <g class="motor-rotor">
        <circle cx="40" cy="40" r="10" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
        <rect x="38" y="30" width="4" height="20" rx="1" fill="#64748b"/>
        <rect x="30" y="38" width="20" height="4" rx="1" fill="#64748b"/>
        <circle cx="40" cy="40" r="3" fill="#0f766e"/>
      </g>
      <!-- Axe sortant -->
      <rect x="60" y="37" width="12" height="6" rx="2" fill="#475569"/>
      <!-- Ventilateur (hélice) -->
      <g class="motor-fan">
        <ellipse cx="68" cy="40" rx="5" ry="2" fill="#7dd3fc" transform="rotate(0,  68,40)" opacity="0.8"/>
        <ellipse cx="68" cy="40" rx="5" ry="2" fill="#7dd3fc" transform="rotate(60, 68,40)" opacity="0.8"/>
        <ellipse cx="68" cy="40" rx="5" ry="2" fill="#7dd3fc" transform="rotate(120,68,40)" opacity="0.8"/>
        <circle cx="68" cy="40" r="2" fill="#0369a1"/>
      </g>
      <!-- Bornes électriques -->
      <rect x="14" y="18" width="8" height="8" rx="2" fill="#dc2626"/>
      <rect x="38" y="18" width="8" height="8" rx="2" fill="#1d4ed8"/>
      <line x1="18" y1="18" x2="18" y2="24" stroke="#dc2626" stroke-width="2"/>
      <line x1="42" y1="18" x2="42" y2="24" stroke="#1d4ed8" stroke-width="2"/>
      <!-- Étincelle -->
      <g class="motor-spark">
        <line x1="26" y1="16" x2="29" y2="12" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
        <line x1="29" y1="12" x2="32" y2="16" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
      </g>
    </svg>`,

  /* ── Séq. 10 — Écran tactile ── */
  touchscreen: `
    <style>
      @keyframes touch-ripple { 0%{r:4;opacity:1;stroke-width:2;} 100%{r:14;opacity:0;stroke-width:0.5;} }
      @keyframes touch-tap    { 0%,100%{transform:translate(0,0) scale(1);} 40%{transform:translate(-4px,-4px) scale(0.9);} 60%{transform:translate(-4px,-4px) scale(0.95);} }
      @keyframes ts-pixel     { 0%,100%{opacity:0.4;} 50%{opacity:1;} }
      .ts-ripple { animation: touch-ripple 1.8s ease-out infinite; }
      .ts-finger { animation: touch-tap    1.8s ease-in-out infinite; transform-origin: 50px 38px; }
      .ts-px1    { animation: ts-pixel 1.8s 0.1s infinite; }
      .ts-px2    { animation: ts-pixel 1.8s 0.3s infinite; }
      .ts-px3    { animation: ts-pixel 1.8s 0.5s infinite; }
      @media(prefers-reduced-motion:reduce){
        .ts-ripple,.ts-finger,.ts-px1,.ts-px2,.ts-px3{animation:none;}
      }
    </style>
    <svg viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg" width="60" height="68">
      <!-- Tablette -->
      <rect x="8"  y="6"  width="64" height="78" rx="6" fill="#1e293b" stroke="#334155" stroke-width="2"/>
      <rect x="12" y="12" width="56" height="60" rx="3" fill="#e0f2fe"/>
      <!-- Bouton home -->
      <circle cx="40" cy="80" r="3" fill="#334155"/>
      <!-- Contenu écran — molécule simplifiée -->
      <circle cx="30" cy="30" r="5"  fill="#0f766e" class="ts-px1"/>
      <circle cx="50" cy="25" r="4"  fill="#0f766e" class="ts-px2"/>
      <circle cx="46" cy="42" r="4"  fill="#0f766e" class="ts-px3"/>
      <line x1="35" y1="30" x2="46" y2="27" stroke="#475569" stroke-width="2"/>
      <line x1="50" y1="29" x2="48" y2="38" stroke="#475569" stroke-width="2"/>
      <!-- Courbe RC sur l'écran -->
      <path d="M16,58 Q24,44 36,42 Q48,41 56,42 L56,58 Z" fill="#bae6fd" opacity="0.5"/>
      <path d="M16,58 Q24,44 36,42 Q48,41 56,42" fill="none" stroke="#0369a1" stroke-width="1.5"/>
      <!-- Doigt qui appuie -->
      <g class="ts-finger">
        <path d="M52,42 L54,32 Q54,28 58,28 Q62,28 62,32 L62,44 Q62,48 58,50 L54,50 Z"
              fill="#fcd9b0" stroke="#d97706" stroke-width="1"/>
        <!-- Ripple au toucher -->
        <circle cx="50" cy="38" r="4" fill="none" stroke="#0f766e" stroke-width="2" class="ts-ripple"/>
      </g>
    </svg>`,

  /* ── Séq. 11 — Cinétique chimique (courbe + chrono) ── */
  kinetics: `
    <style>
      @keyframes kin-draw { 0%{stroke-dashoffset:120;} 100%{stroke-dashoffset:0;} }
      @keyframes kin-hand { 0%{transform:rotate(-30deg);} 100%{transform:rotate(210deg);} }
      .kin-curve { stroke-dasharray:120; animation: kin-draw 3s linear infinite; }
      .kin-hand  { animation: kin-hand 3s linear infinite; transform-origin: 62px 30px; }
      @media(prefers-reduced-motion:reduce){
        .kin-curve{animation:none;stroke-dashoffset:0;}
        .kin-hand{animation:none;}
      }
    </style>
    <svg viewBox="0 0 80 70" xmlns="http://www.w3.org/2000/svg" width="72" height="63">
      <!-- Graphique cinétique -->
      <rect x="4" y="6" width="52" height="58" rx="4" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
      <!-- Axes -->
      <line x1="12" y1="54" x2="52" y2="54" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="12" y1="10" x2="12" y2="54" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- Labels axes -->
      <text x="30" y="63" text-anchor="middle" font-size="6" fill="#64748b">temps</text>
      <text x="6" y="32" text-anchor="middle" font-size="6" fill="#64748b" transform="rotate(-90,6,32)">[A]</text>
      <!-- Courbe décroissante (ordre 1) -->
      <path class="kin-curve"
        d="M12,14 Q18,20 24,32 Q32,44 40,50 Q46,53 52,54"
        fill="none" stroke="#0f766e" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Chronomètre -->
      <circle cx="62" cy="30" r="14" fill="white" stroke="#94a3b8" stroke-width="2"/>
      <circle cx="62" cy="30" r="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <circle cx="62" cy="30" r="1.5" fill="#1e293b"/>
      <!-- Aiguille -->
      <line class="kin-hand" x1="62" y1="30" x2="62" y2="20" stroke="#0f766e" stroke-width="2" stroke-linecap="round"/>
      <!-- Couronne -->
      <rect x="60" y="15" width="4" height="4" rx="1" fill="#94a3b8"/>
      <!-- Ticks -->
      <line x1="62" y1="18" x2="62" y2="20" stroke="#1e293b" stroke-width="1.5"/>
      <line x1="74" y1="30" x2="72" y2="30" stroke="#1e293b" stroke-width="1.5"/>
      <line x1="62" y1="42" x2="62" y2="40" stroke="#1e293b" stroke-width="1.5"/>
      <line x1="50" y1="30" x2="52" y2="30" stroke="#1e293b" stroke-width="1.5"/>
    </svg>`,

  /* ── Séq. 12 — Montage reflux (identique Seconde séq.07) ── */
  reflux: (suffix = 'rf') => `
    <div class="reflux-icon">
      <svg class="reflux-svg" viewBox="0 0 100 135" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="ballonClip-${suffix}"><circle cx="50" cy="94" r="25"/></clipPath>
        </defs>
        <line x1="50" y1="4" x2="50" y2="58" stroke="#7dd3fc" stroke-width="3"/>
        <circle class="reflux-glass" cx="50" cy="14" r="9"/>
        <circle class="reflux-glass" cx="50" cy="32" r="9"/>
        <circle class="reflux-glass" cx="50" cy="50" r="9"/>
        <circle class="reflux-vapor reflux-vapor-1" cx="50" cy="60" r="3.5"/>
        <circle class="reflux-vapor reflux-vapor-2" cx="50" cy="60" r="3"/>
        <circle class="reflux-drop" cx="50" cy="54" r="3"/>
        <path class="reflux-glass" d="M42,60 L42,72 L58,72 L58,60"/>
        <circle class="reflux-glass" cx="50" cy="94" r="26"/>
        <rect class="reflux-liquid" clip-path="url(#ballonClip-${suffix})" x="24" y="86" width="52" height="34"/>
        <circle class="reflux-bubble reflux-bubble-1" cx="42" cy="110" r="3"/>
        <circle class="reflux-bubble reflux-bubble-2" cx="54" cy="113" r="2.5"/>
        <circle class="reflux-bubble reflux-bubble-3" cx="62" cy="108" r="3"/>
        <rect x="14" y="124" width="72" height="7" rx="2" fill="#94a3b8"/>
      </svg>
    </div>`,

  /* ── Séq. 13 — Fluide en écoulement ── */
  fluid: `
    <style>
      @keyframes fluid-flow {
        0%   { transform: translateX(-30px); opacity: 0; }
        20%  { opacity: 1; }
        80%  { opacity: 1; }
        100% { transform: translateX(30px);  opacity: 0; }
      }
      @keyframes fluid-swirl { 0%{transform:rotate(0deg);} 100%{transform:rotate(360deg);} }
      .fl-p1 { animation: fluid-flow 2s ease-in-out infinite; }
      .fl-p2 { animation: fluid-flow 2s ease-in-out 0.5s infinite; }
      .fl-p3 { animation: fluid-flow 2s ease-in-out 1s infinite; }
      .fl-p4 { animation: fluid-flow 2s ease-in-out 1.5s infinite; }
      .fl-vortex { animation: fluid-swirl 3s linear infinite; transform-origin: 60px 40px; }
      @media(prefers-reduced-motion:reduce){
        .fl-p1,.fl-p2,.fl-p3,.fl-p4{animation:none;transform:none;opacity:0.7;}
        .fl-vortex{animation:none;}
      }
    </style>
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="70" height="70">
      <!-- Tuyau principal -->
      <path d="M4,28 L50,28 Q60,28 64,36 Q68,44 64,52 L4,52 Z" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1.5"/>
      <!-- Paroi intérieure -->
      <path d="M4,32 L48,32 Q57,32 60,40 Q57,48 48,48 L4,48 Z" fill="#bfdbfe" opacity="0.5"/>
      <!-- Particules de fluide animées -->
      <g style="transform-origin:30px 40px;">
        <circle class="fl-p1" cx="15" cy="36" r="3" fill="#3b82f6" opacity="0.8"/>
        <circle class="fl-p2" cx="25" cy="40" r="3" fill="#0f766e" opacity="0.8"/>
        <circle class="fl-p3" cx="15" cy="44" r="3" fill="#3b82f6" opacity="0.8"/>
        <circle class="fl-p4" cx="35" cy="38" r="2.5" fill="#0f766e" opacity="0.7"/>
      </g>
      <!-- Vortex / tourbillon à la sortie -->
      <g class="fl-vortex">
        <path d="M60,40 Q64,36 68,40 Q64,44 60,40 Z" fill="none" stroke="#0369a1" stroke-width="1.5" opacity="0.8"/>
        <path d="M60,40 Q62,34 67,37 Q65,43 60,40 Z" fill="none" stroke="#0369a1" stroke-width="1" opacity="0.5"/>
      </g>
      <!-- Flèches de vitesse (profil parabolique) -->
      <line x1="8"  y1="40" x2="18" y2="40" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr)"/>
      <line x1="8"  y1="35" x2="15" y2="35" stroke="#1d4ed8" stroke-width="1.5"/>
      <line x1="8"  y1="45" x2="15" y2="45" stroke="#1d4ed8" stroke-width="1.5"/>
      <defs>
        <marker id="arr" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
          <path d="M0,0 L4,2 L0,4 Z" fill="#1d4ed8"/>
        </marker>
      </defs>
    </svg>`,

  /* ── Séq. 14 — Noyau radioactif (identique Seconde séq.09) ── */
  nuclear: (suffix = 'nuc') => `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="64" height="64" style="overflow:visible;">
      <defs>
        <radialGradient id="ng1-${suffix}" cx="40%" cy="35%">
          <stop offset="0%"   stop-color="#e8a07a"/>
          <stop offset="100%" stop-color="#c9622a"/>
        </radialGradient>
        <radialGradient id="ng2-${suffix}" cx="40%" cy="35%">
          <stop offset="0%"   stop-color="#9dc8f0"/>
          <stop offset="100%" stop-color="#2D5F8A"/>
        </radialGradient>
        <style>
          @keyframes nuc-pulse-${suffix}{0%,100%{transform:scale(1);}50%{transform:scale(0.92);}}
          @keyframes alpha-out-${suffix}{0%{transform:translate(0,0) scale(1);opacity:1;}70%{transform:translate(22px,-18px) scale(0.9);opacity:0.8;}100%{transform:translate(34px,-28px) scale(0.7);opacity:0;}}
          .nuc-core-${suffix}{animation:nuc-pulse-${suffix} 2.4s ease-in-out infinite;transform-origin:28px 38px;}
          .alpha-${suffix}{animation:alpha-out-${suffix} 2.4s ease-in infinite;transform-origin:50px 14px;}
          @media(prefers-reduced-motion:reduce){.nuc-core-${suffix},.alpha-${suffix}{animation:none;}}
        </style>
      </defs>
      <g class="nuc-core-${suffix}">
        <circle cx="28" cy="38" r="14" fill="url(#ng1-${suffix})" opacity="0.9"/>
        <circle cx="24" cy="34" r="4.5" fill="#d1495b" opacity="0.85"/>
        <circle cx="32" cy="34" r="4.5" fill="#8d99ae" opacity="0.85"/>
        <circle cx="24" cy="42" r="4.5" fill="#8d99ae" opacity="0.85"/>
        <circle cx="32" cy="42" r="4.5" fill="#d1495b" opacity="0.85"/>
        <circle cx="20" cy="38" r="4"   fill="#d1495b" opacity="0.75"/>
        <circle cx="36" cy="38" r="4"   fill="#8d99ae" opacity="0.75"/>
      </g>
      <g class="alpha-${suffix}">
        <circle cx="50" cy="14" r="7"   fill="url(#ng2-${suffix})" opacity="0.92"/>
        <circle cx="47.5" cy="12"   r="2.8" fill="#d1495b" opacity="0.9"/>
        <circle cx="52.5" cy="12"   r="2.8" fill="#8d99ae" opacity="0.9"/>
        <circle cx="47.5" cy="16.5" r="2.8" fill="#8d99ae" opacity="0.9"/>
        <circle cx="52.5" cy="16.5" r="2.8" fill="#d1495b" opacity="0.9"/>
      </g>
      <g opacity="0.5">
        <line x1="10" y1="20" x2="6"  y2="16" stroke="#f4c430" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="6"  y1="20" x2="10" y2="16" stroke="#f4c430" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="14" y1="22" x2="10" y2="18" stroke="#f4c430" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="10" y1="22" x2="14" y2="18" stroke="#f4c430" stroke-width="1.5" stroke-linecap="round"/>
      </g>
    </svg>`,

  /* ── Séq. 15 — Photon / onde lumineuse ── */
  photon: `
    <style>
      @keyframes ph-wave-move { 0%{transform:translateX(-20px);opacity:0;} 20%{opacity:1;} 100%{transform:translateX(20px);opacity:0;} }
      @keyframes ph-glow      { 0%,100%{r:5;opacity:0.6;} 50%{r:8;opacity:1;} }
      @keyframes ph-spectrum  { 0%{stop-color:#f43f5e;} 20%{stop-color:#f97316;} 40%{stop-color:#eab308;} 60%{stop-color:#22c55e;} 80%{stop-color:#3b82f6;} 100%{stop-color:#8b5cf6;} }
      .ph-wave-g { animation: ph-wave-move 2s ease-in-out infinite; }
      .ph-dot    { animation: ph-glow      2s ease-in-out infinite; }
      .ph-c1 { animation: ph-spectrum 3s linear infinite; }
      @media(prefers-reduced-motion:reduce){
        .ph-wave-g{animation:none;transform:none;opacity:0.8;}
        .ph-dot{animation:none;}
        .ph-c1{animation:none;}
      }
    </style>
    <svg viewBox="0 0 80 70" xmlns="http://www.w3.org/2000/svg" width="72" height="63">
      <defs>
        <linearGradient id="spectrum-grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%"   stop-color="#f43f5e" class="ph-c1"/>
          <stop offset="33%"  stop-color="#eab308"/>
          <stop offset="66%"  stop-color="#22c55e"/>
          <stop offset="100%" stop-color="#8b5cf6"/>
        </linearGradient>
      </defs>
      <!-- Bande de spectre -->
      <rect x="6" y="52" width="68" height="8" rx="4" fill="url(#spectrum-grad)" opacity="0.85"/>
      <!-- Onde sinusoïdale animée -->
      <g class="ph-wave-g">
        <path d="M10,35 Q17,20 24,35 Q31,50 38,35 Q45,20 52,35 Q59,50 66,35 Q73,20 80,35"
              fill="none" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round"/>
      </g>
      <!-- Photon (point lumineux) -->
      <circle cx="40" cy="35" r="5" fill="#fbbf24" class="ph-dot"/>
      <!-- Flèche de propagation -->
      <line x1="14" y1="43" x2="64" y2="43" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
      <polygon points="64,40 70,43 64,46" fill="#94a3b8"/>
      <!-- Label E=hν -->
      <text x="40" y="16" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="800">E = hν</text>
    </svg>`,
};

/**
 * Retourne le HTML d'une icône Terminale.
 * Les icônes avec clipPath/gradients nécessitent un suffix unique.
 */
function getIconTer(name, suffix) {
  const icon = TER_ICONS[name];
  if (!icon) return '';
  return (typeof icon === 'function') ? icon(suffix || name) : icon;
}

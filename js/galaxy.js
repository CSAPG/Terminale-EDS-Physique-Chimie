/* ===== galaxy.js — Animation Voie Lactée (2 galaxies latérales) ===== */

(function () {
  const canvas = document.getElementById('galaxy-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, stars = [], dust = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function rand(min, max) { return min + Math.random() * (max - min); }

  /* Génère les étoiles d'une galaxie centrée en (cx, cy) avec un rayon max r */
  function addGalaxy(cx, cy, maxR, count) {
    const arms = 2;
    for (let a = 0; a < arms; a++) {
      const armOffset = (a / arms) * Math.PI * 2;
      for (let i = 0; i < count; i++) {
        const t      = i / count;
        const r      = t * maxR;
        const angle  = t * Math.PI * 1.8 + armOffset + rand(-0.4, 0.4);
        const spread = rand(-1, 1) * r * 0.38;
        const sx     = cx + Math.cos(angle) * r + Math.cos(angle + Math.PI / 2) * spread;
        const sy     = cy + Math.sin(angle) * r * 0.52 + Math.sin(angle + Math.PI / 2) * spread * 0.52;
        stars.push({
          x: sx, y: sy,
          r: rand(0.5, 2.4) * (1 - t * 0.3),
          brightness: rand(0.40, 0.95),
          hue: rand(180, 260),
          twinkle: rand(0, Math.PI * 2),
          speed: rand(0.005, 0.02)
        });
      }
    }
    /* Noyau chaud */
    for (let i = 0; i < Math.round(count * 0.15); i++) {
      const r     = rand(0, maxR * 0.12);
      const angle = rand(0, Math.PI * 2);
      stars.push({
        x: cx + Math.cos(angle) * r,
        y: cy + Math.sin(angle) * r * 0.42,
        r: rand(0.8, 2.2),
        brightness: rand(0.55, 0.95),
        hue: rand(40, 80),
        twinkle: rand(0, Math.PI * 2),
        speed: rand(0.01, 0.03)
      });
    }
    /* Poussière */
    for (let i = 0; i < Math.round(count * 0.08); i++) {
      const t      = rand(0, 1);
      const arm    = Math.floor(rand(0, arms));
      const aOff   = (arm / arms) * Math.PI * 2;
      const r      = t * maxR * 0.9;
      const angle  = t * Math.PI * 1.8 + aOff + rand(-0.6, 0.6);
      const spread = rand(-1, 1) * r * 0.45;
      dust.push({
        x: cx + Math.cos(angle) * r + Math.cos(angle + Math.PI / 2) * spread,
        y: cy + Math.sin(angle) * r * 0.42 + Math.sin(angle + Math.PI / 2) * spread * 0.42,
        r: rand(10, 45),
        alpha: rand(0.05, 0.16),
        hue: rand(200, 280)
      });
    }
  }

  function initGalaxy() {
    stars = [];
    dust  = [];
    const maxR = Math.min(W, H) * 0.48;
    /* Galaxie gauche — centrée à 15% de la largeur, milieu du header */
    addGalaxy(W * 0.13, H * 0.5, maxR, 500);
    /* Galaxie droite — centrée à 85% de la largeur, milieu du header */
    addGalaxy(W * 0.87, H * 0.5, maxR, 500);
  }

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);

    /* Halos centraux pour chaque galaxie */
    for (const [gx, gy] of [[W * 0.13, H * 0.5], [W * 0.87, H * 0.5]]) {
      const grd = ctx.createRadialGradient(gx, gy, 0, gx, gy, Math.min(W, H) * 0.20);
      grd.addColorStop(0,   'rgba(255,240,180,0.22)');
      grd.addColorStop(0.5, 'rgba(200,180,255,0.10)');
      grd.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);
    }

    /* Poussière */
    for (const d of dust) {
      const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r);
      g.addColorStop(0, `hsla(${d.hue},60%,70%,${d.alpha})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }

    /* Étoiles */
    for (const s of stars) {
      const twinkle = 0.7 + 0.3 * Math.sin(t * s.speed * 60 + s.twinkle);
      const alpha   = s.brightness * twinkle;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${s.hue},70%,90%,${alpha})`;
      ctx.fill();
      if (s.r > 1.4) {
        const g2 = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3);
        g2.addColorStop(0, `hsla(${s.hue},60%,90%,${alpha * 0.28})`);
        g2.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g2;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    t++;
    requestAnimationFrame(draw);
  }

  resize();
  initGalaxy();
  draw();
  window.addEventListener('resize', () => { resize(); initGalaxy(); });
})();

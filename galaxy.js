/* ===== galaxy.js — Animation Voie Lactée ===== */

(function () {
  const canvas = document.getElementById('galaxy-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, stars = [], dust = [], cx, cy;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    cx = W / 2;
    cy = H * 0.7;
  }

  function rand(min, max) { return min + Math.random() * (max - min); }

  function initGalaxy() {
    stars = [];
    dust  = [];

    const arms = 2;
    for (let a = 0; a < arms; a++) {
      const armOffset = (a / arms) * Math.PI * 2;
      for (let i = 0; i < 1200; i++) {
        const t = i / 1200;
        const r = t * Math.min(W, H) * 0.55;
        const angle = t * Math.PI * 1.8 + armOffset + rand(-0.4, 0.4);
        const spread = rand(-1, 1) * r * 0.38;
        const sx = cx + Math.cos(angle) * r + Math.cos(angle + Math.PI / 2) * spread;
        const sy = cy + Math.sin(angle) * r * 0.52 + Math.sin(angle + Math.PI / 2) * spread * 0.52;
        const brightness = rand(0.35, 0.90);
        const size = rand(0.6, 2.8) * (1 - t * 0.3);
        const hue = rand(180, 260);
        stars.push({ x: sx, y: sy, r: size, brightness, hue, twinkle: rand(0, Math.PI * 2), speed: rand(0.005, 0.02) });
      }
    }

    for (let i = 0; i < 400; i++) {
      const r = rand(0, Math.min(W, H) * 0.12);
      const angle = rand(0, Math.PI * 2);
      const sx = cx + Math.cos(angle) * r;
      const sy = cy + Math.sin(angle) * r * 0.42;
      const brightness = rand(0.5, 0.95);
      stars.push({ x: sx, y: sy, r: rand(0.8, 2.8), brightness, hue: rand(40, 80), twinkle: rand(0, Math.PI * 2), speed: rand(0.01, 0.03) });
    }

    for (let i = 0; i < 200; i++) {
      const t = rand(0, 1);
      const arm = Math.floor(rand(0, arms));
      const armOffset = (arm / arms) * Math.PI * 2;
      const r = t * Math.min(W, H) * 0.4;
      const angle = t * Math.PI * 1.8 + armOffset + rand(-0.6, 0.6);
      const spread = rand(-1, 1) * r * 0.45;
      dust.push({
        x: cx + Math.cos(angle) * r + Math.cos(angle + Math.PI / 2) * spread,
        y: cy + Math.sin(angle) * r * 0.42 + Math.sin(angle + Math.PI / 2) * spread * 0.42,
        r: rand(15, 60),
        alpha: rand(0.04, 0.14),
        hue: rand(200, 280)
      });
    }
  }

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);

    ctx.fillStyle = 'rgba(240,245,255,0.08)';
    ctx.fillRect(0, 0, W, H);

    const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(W, H) * 0.22);
    grd.addColorStop(0, 'rgba(255,240,180,0.30)');
    grd.addColorStop(0.5, 'rgba(200,180,255,0.15)');
    grd.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, W, H);

    for (const d of dust) {
      const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r);
      g.addColorStop(0, `hsla(${d.hue},60%,70%,${d.alpha})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }

    for (const s of stars) {
      const twinkle = 0.7 + 0.3 * Math.sin(t * s.speed * 60 + s.twinkle);
      const alpha = s.brightness * twinkle;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${s.hue},70%,90%,${alpha})`;
      ctx.fill();

      if (s.r > 1.5) {
        const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3);
        g.addColorStop(0, `hsla(${s.hue},60%,90%,${alpha * 0.3})`);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
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

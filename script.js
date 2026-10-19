/* ==========================================================================
   ULTRA-LUXURY ROMANTIC LOVE CONTROLLER - DÀNH TẶNG NGUYỄN THỊ KIM NGÂN ❤️
   Kỷ Niệm Tình Yêu Từ: 07/11/2021 · Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10
   Hoàn toàn mượt mà 60 FPS · Hiệu ứng hạt Toán học · Đa hợp âm Polyphonic
   ========================================================================== */

// 1. CỘT MỐC ĐỊNH MỆNH: 07/11/2021
const LOVE_START_DATE = new Date(2021, 10, 7, 0, 0, 0);

// 2. KHO 15 LỜI CHÚC IT & NGÔN TÌNH DÀNH RIÊNG CHO NGUYỄN THỊ KIM NGÂN
const IT_ROMANCE_WISHES = [
    {
        tag: "HTTP 200 OK",
        icon: "💖",
        title: "Status: 200 OK Trọn Đời",
        msg: "Chúc công chúa <strong>Nguyễn Thị Kim Ngân</strong> ngày 20/10 nụ cười luôn trả về mã <strong>HTTP 200 OK</strong>! Cuộc sống luôn suôn sẻ, không bao giờ phải chịu cảnh 404 Not Found niềm vui hay 500 Internal Error mệt mỏi!"
    },
    {
        tag: "Deploy To Heart",
        icon: "🚀",
        title: "Deploy Thành Công Lên Production",
        msg: "Kể từ ngày <strong>07/11/2021</strong>, dự án mang tên <em>'Yêu Kim Ngân'</em> đã được Deploy thành công lên cụm Server trái tim anh với thời gian Uptime <strong>100% vĩnh cửu</strong>, không bao giờ Downtime!"
    },
    {
        tag: "Unlimited Bandwidth",
        icon: "🌐",
        title: "Băng Thông Yêu Thương Vô Hạn",
        msg: "Băng thông yêu thương và sự quan tâm anh dành cho <strong>Kim Ngân</strong> luôn ở mức <strong>Unlimited Bandwidth</strong>. Dù ngoài kia cáp quang có đứt thì đường truyền nối thẳng tới tim em vẫn mượt mà 0ms!"
    },
    {
        tag: "Bug-Free Life",
        icon: "✨",
        title: "Cuộc Sống Sạch Bóng Zero Bug",
        msg: "Chúc người yêu của anh ngày 20/10 nhận được cơn mưa quà tặng! Chúc mọi kế hoạch, ước mơ và công việc của em đều chạy trơn tru mượt mà, sạch bóng <strong>Zero Bug & Zero Warning</strong>!"
    },
    {
        tag: "Love Repository",
        icon: "📦",
        title: "Git Commit: #07112021 Forever",
        msg: "Nhánh <code>feature/forever-with-kim-ngan</code> đã được merge hoàn toàn vào nhánh <code>main</code> của cuộc đời anh. Không thể <code>revert</code>, không thể <code>cherry-pick</code> ai khác ngoài em!"
    },
    {
        tag: "Database Persistence",
        icon: "💾",
        title: "Dữ Liệu Bất Biến Trong Tim",
        msg: "Hình bóng và nụ cười của <strong>Kim Ngân</strong> đã được lưu trữ vĩnh viễn vào hệ cơ sở dữ liệu quan trọng nhất. Không một dòng lệnh <code>DROP DATABASE</code> hay thời gian nào có thể xóa nhòa!"
    },
    {
        tag: "Realtime Priority Thread",
        icon: "⚡",
        title: "Độ Ưu Tiên Cao Nhất: REALTIME",
        msg: "Trong hệ điều hành cuộc sống của anh, mọi tiến trình liên quan đến <strong>Kim Ngân</strong> đều được gán cờ <strong>Priority = REALTIME_URGENT</strong> và chiếm quyền CPU cao nhất để phục vụ công chúa mọi lúc mọi nơi!"
    },
    {
        tag: "Zero Latency",
        icon: "📡",
        title: "Độ Trễ 0ms - Luôn Kề Bên",
        msg: "Chỉ cần Kim Ngân gửi một tín hiệu (ping), anh sẽ lập tức phản hồi (pong) với độ trễ <strong>0ms</strong>! Luôn sẵn sàng lắng nghe, ôm em thật chặt và dỗ dành mỗi khi em cần."
    },
    {
        tag: "End-to-End Encryption",
        icon: "🔐",
        title: "Mã Hóa Tình Cảm Đầu-Cuối",
        msg: "Trọn vẹn tấm chân tình anh trao gửi cho <strong>Nguyễn Thị Kim Ngân</strong> được mã hóa bằng thuật toán chân thành nhất, và chỉ có duy nhất chiếc chìa khóa trong tim em mới mở được!"
    },
    {
        tag: "Auto Garbage Collector",
        icon: "🧹",
        title: "Dọn Sạch Mọi Buồn Phiền",
        msg: "Cầu mong cơ chế <strong>Garbage Collector</strong> của vũ trụ sẽ tự động quét sạch mọi áp lực, mệt mỏi hay âu lo trong lòng Ngân, chỉ giữ lại bộ nhớ chứa chan tiếng cười và hạnh phúc!"
    },
    {
        tag: "Infinite Loop of Love",
        icon: "♾️",
        title: "Vòng Lặp Vô Tận: while(true)",
        msg: "<code>while (true) { anhYeuKimNgan(Infinity); }</code> — Thuật toán này không có điểm dừng và sẽ chạy mãi mãi chừng nào nhịp tim anh còn đập!"
    },
    {
        tag: "Single Source of Truth",
        icon: "💎",
        title: "Chân Lý Duy Nhất Của Anh",
        msg: "Trong kiến trúc thế giới của anh, <strong>Nguyễn Thị Kim Ngân</strong> là <em>Single Source of Truth</em> duy nhất cho mọi quyết định yêu thương và che chở!"
    },
    {
        tag: "20/10 Special Release",
        icon: "🌹",
        title: "Phiên Bản 20/10 Hoàn Hảo Nhất",
        msg: "Chúc em ngày 20/10 thật hạnh phúc! Cảm ơn định mệnh ngày <strong>07/11/2021</strong> đã mang người con gái tuyệt vời, xinh đẹp và đáng yêu nhất đến bên anh!"
    },
    {
        tag: "Overclock Heartbeat",
        icon: "💓",
        title: "Tăng Tốc Phần Cứng Con Tim",
        msg: "Mỗi lần nhìn vào ánh mắt của Kim Ngân, nhịp tim anh như được <strong>Overclock</strong> tăng xung nhịp tối đa, tràn ngập cảm giác ngọt ngào và rung động như thuở ban đầu!"
    },
    {
        tag: "Cloud Sync Destiny",
        icon: "☁️",
        title: "Đồng Bộ Định Mệnh Lên Mây",
        msg: "Tình yêu của chúng mình từ <strong>07/11/2021</strong> đã được đồng bộ lên Cloud của vũ trụ, được nhân bản qua ngàn dải ngân hà và trường tồn vĩnh viễn cùng thời gian!"
    }
];

let currentWishIndex = 0;

// 3. KHO CÂU YÊU THƯƠNG NGẮN HIỆN TRÊN TRÁI TIM BAY
const SHORT_LOVE_MESSAGES = [
    { icon: "❤️",  text: "Em là tất cả của anh" },
    { icon: "💖",  text: "Yêu em mãi mãi nhé!" },
    { icon: "🌸",  text: "Em xinh nhất thế giới" },
    { icon: "💕",  text: "Anh nhớ em nhiều lắm" },
    { icon: "✨",  text: "Em là hạnh phúc của anh" },
    { icon: "🤗",  text: "Muốn ôm em thật chặt" },
    { icon: "😊",  text: "Em cười là anh vui ngay" },
    { icon: "♾️",  text: "Yêu Kim Ngân vô tận" },
    { icon: "💝",  text: "Mãi bên em, không rời" },
    { icon: "👑",  text: "Em là công chúa của anh" },
    { icon: "🌹",  text: "Cảm ơn em đã xuất hiện" },
    { icon: "🥰",  text: "Em thật đáng yêu quá!" },
    { icon: "💞",  text: "Kim Ngân ơi, anh thương em" },
    { icon: "💎",  text: "Em quý giá hơn mọi thứ" },
    { icon: "☀️",  text: "Em là ánh sáng của anh" },
    { icon: "🫂",  text: "Ôm em hoài không thôi" },
    { icon: "🏆",  text: "Em giỏi lắm, anh tự hào" },
    { icon: "🌙",  text: "Ngủ ngon, em yêu của anh" },
    { icon: "😍",  text: "Em đẹp nhất khi em cười" },
    { icon: "💫",  text: "Định mệnh cho anh gặp em" },
    { icon: "🌟",  text: "Em làm anh hạnh phúc lắm" },
    { icon: "💌",  text: "Mỗi ngày anh đều nhớ em" },
    { icon: "🎀",  text: "Em ngọt ngào như kẹo ấy" },
    { icon: "🦋",  text: "Em là điều kỳ diệu nhất" },
    { icon: "🌺",  text: "Trái tim anh chỉ có em" },
    { icon: "💓",  text: "Tim anh đập vì mình em" },
    { icon: "🥺",  text: "Đừng bao giờ rời xa anh" },
    { icon: "🎵",  text: "Em là giai điệu của anh" },
    { icon: "⭐",  text: "Em sáng nhất bầu trời anh" },
    { icon: "🌈",  text: "Bên em, anh đủ mọi màu" },
];


/* ==========================================================
   3. MATHEMATICAL HEART PARTICLE SYSTEM (60 FPS, ZERO LAG)
   Formula:
   x = 16 * sin^3(t)
   y = -(13*cos(t) - 5*cos(2t) - 2*cos(3t) - cos(4t))
   ========================================================== */
const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d', { alpha: true });
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

// Pre-render glowing particle sprites on offscreen canvas for GPU-accelerated 60 FPS
function createGlowSprite(c1, c2, c3) {
    const sCanvas = document.createElement('canvas');
    sCanvas.width = 36;
    sCanvas.height = 36;
    const sCtx = sCanvas.getContext('2d');
    const grad = sCtx.createRadialGradient(18, 18, 0, 18, 18, 18);
    grad.addColorStop(0, c3);
    grad.addColorStop(0.25, c1);
    grad.addColorStop(0.65, c2);
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    sCtx.fillStyle = grad;
    sCtx.beginPath();
    sCtx.arc(18, 18, 18, 0, Math.PI * 2);
    sCtx.fill();
    return sCanvas;
}

const redGlowSprite = createGlowSprite('#ff1744', '#ff5252', '#ff8a80');
const rubyGlowSprite = createGlowSprite('#f50057', '#ff4081', '#ff80ab');
const goldGlowSprite = createGlowSprite('#ffd700', '#ffe57f', '#ffffff');
const diamondGlowSprite = createGlowSprite('#00e5ff', '#80d8ff', '#ffffff');

// Mathematical Heart Curve Function
function getHeartPosition(t) {
    const sinT = Math.sin(t);
    const x = 16 * Math.pow(sinT, 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    return { x, y };
}

// 2,400 Glowing Multi-Layer Heart Particles
const TOTAL_HEART_PARTICLES = 2400;
const heartParticles = [];
let heartState = 'BEATING'; // 'BEATING', 'EXPLODED', 'REFORMING'
let explosionTimestamp = 0;

function initHeartParticles() {
    heartParticles.length = 0;
    for (let i = 0; i < TOTAL_HEART_PARTICLES; i++) {
        const t = Math.random() * Math.PI * 2;
        const pos = getHeartPosition(t);

        const layerRand = Math.random();
        let r;
        if (layerRand < 0.35) {
            // Tier 1: Crisp contour perimeter
            r = 1.0 + (Math.random() - 0.5) * 0.05;
        } else if (layerRand < 0.88) {
            // Tier 2: Swirling stellar nebula interior
            r = Math.pow(Math.random(), 0.65);
        } else {
            // Tier 3: Outer stardust aura
            r = 1.05 + Math.random() * 0.25;
        }

        const relX = pos.x * r;
        const relY = pos.y * r;

        let sprite = redGlowSprite;
        const sRand = Math.random();
        if (sRand < 0.35) sprite = rubyGlowSprite;
        else if (sRand < 0.55) sprite = goldGlowSprite;
        else if (sRand < 0.65) sprite = diamondGlowSprite;

        heartParticles.push({
            relX: relX,
            relY: relY,
            x: 0,
            y: 0,
            vx: 0,
            vy: 0,
            size: Math.random() * 5.5 + 3.2,
            baseAlpha: Math.random() * 0.35 + 0.65,
            alpha: 1,
            pulseOffset: Math.random() * Math.PI * 2,
            driftSpeed: Math.random() * 0.04 + 0.015,
            driftRadius: Math.random() * 2.2 + 0.8,
            sprite: sprite,
            spiralAngle: Math.random() * Math.PI * 2
        });
    }
}
initHeartParticles();

// Find center & dynamic scale of heart based on #heartStage
function getHeartCenterAndScale() {
    const stage = document.getElementById('heartStage');
    if (stage) {
        const rect = stage.getBoundingClientRect();
        const scale = Math.max(7.2, Math.min(13.5, rect.width / 43));
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height * 0.46,
            scale: scale
        };
    }
    return {
        x: width / 2,
        y: height * 0.36,
        scale: Math.max(7.5, Math.min(13.5, width / 85))
    };
}

// Systole Shockwave Rings
const shockwaveRings = [];
function addShockwaveRing(x, y, maxR) {
    shockwaveRings.push({
        x: x,
        y: y,
        r: 10,
        maxR: maxR,
        alpha: 0.55
    });
}

// Shooting Stars / Meteors
const shootingStars = [];
function spawnShootingStar() {
    shootingStars.push({
        x: Math.random() * width * 0.8 + width * 0.1,
        y: Math.random() * height * 0.3,
        len: Math.random() * 120 + 80,
        speed: Math.random() * 9 + 8,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
        alpha: 1,
        width: Math.random() * 2 + 1
    });
}
setInterval(() => {
    if (Math.random() < 0.65) spawnShootingStar();
}, 2400);

// Mouse & Touch Magnetic Stardust Trail
const mousePos = { x: -2000, y: -2000 };
const cursorSparkles = [];

window.addEventListener('mousemove', (e) => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
    if (Math.random() < 0.4) {
        cursorSparkles.push({
            x: e.clientX,
            y: e.clientY,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2 - 0.5,
            alpha: 1,
            size: Math.random() * 3 + 1,
            color: '#fcd34d'
        });
    }
});

window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        mousePos.x = e.touches[0].clientX;
        mousePos.y = e.touches[0].clientY;
    }
}, { passive: true });

// Ambient Floating Stars & Hearts
const ambientParticles = [];
const numAmbient = Math.min(50, Math.floor(width / 26));
for (let i = 0; i < numAmbient; i++) {
    ambientParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 10 + 6,
        speedY: -(Math.random() * 0.8 + 0.3),
        speedX: Math.random() * 0.8 - 0.4,
        swayClock: Math.random() * Math.PI * 2,
        alpha: Math.random() * 0.45 + 0.2,
        icon: ['❤️', '💖', '✨', '💕', '🌸'][Math.floor(Math.random() * 5)]
    });
}

// Active Fireworks Particles
const fireworks = [];

function getThemeColors() {
    if (typeof currentThemeIdx !== 'undefined') {
        if (currentThemeIdx === 1) { // Sakura
            return ['#fb7185', '#f472b6', '#fda4af', '#fde047', '#f43f5e', '#ffd1dc'];
        } else if (currentThemeIdx === 2) { // Galaxy
            return ['#c084fc', '#d8b4fe', '#a855f7', '#818cf8', '#38bdf8', '#ffffff'];
        } else if (currentThemeIdx === 3) { // Diamond
            return ['#ec4899', '#f472b6', '#67e8f9', '#a855f7', '#c084fc', '#ffffff'];
        }
    }
    // Default: Velvet Rose & Imperial Gold
    return ['#ff2a6d', '#ff758c', '#f43f5e', '#fb7185', '#c084fc', '#fcd34d', '#fda4af'];
}

function addFireworkBurst(startX, startY, count = 70) {
    const heartIcons = ['❤️', '💖', '💗', '💕', '🌸', '✨', '🌹'];
    const colors = getThemeColors();

    for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const vx = 16 * Math.pow(Math.sin(angle), 3);
        const vy = -(13 * Math.cos(angle) - 5 * Math.cos(2*angle) - 2 * Math.cos(3*angle) - Math.cos(4*angle));
        const speed = Math.random() * 0.38 + 0.22;

        fireworks.push({
            x: startX,
            y: startY,
            vx: vx * speed + (Math.random() - 0.5) * 1.5,
            vy: vy * speed + (Math.random() - 0.5) * 1.5,
            gravity: 0.08,
            friction: 0.965,
            alpha: 1,
            decay: Math.random() * 0.015 + 0.01,
            color: colors[Math.floor(Math.random() * colors.length)],
            icon: heartIcons[Math.floor(Math.random() * heartIcons.length)],
            size: Math.random() * 15 + 12
        });
    }
}

// Unified 60 FPS Render Loop (Hardware Accelerated, No Software shadowBlur)
let animTime = 0;
let lastShockwavePulse = 0;

function mainRenderLoop() {
    animTime += 0.02;
    ctx.clearRect(0, 0, width, height);

    // 1. Draw Shooting Stars / Meteors
    for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.014;

        if (s.alpha <= 0) {
            shootingStars.splice(i, 1);
            continue;
        }

        ctx.save();
        ctx.globalAlpha = s.alpha;
        const grad = ctx.createLinearGradient(
            s.x, s.y,
            s.x - Math.cos(s.angle) * s.len,
            s.y - Math.sin(s.angle) * s.len
        );
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.3, '#ff758c');
        grad.addColorStop(1, 'rgba(255, 117, 140, 0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.width;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - Math.cos(s.angle) * s.len, s.y - Math.sin(s.angle) * s.len);
        ctx.stroke();
        ctx.restore();
    }

    // 2. Draw Ambient Floating Stars & Hearts
    for (let p of ambientParticles) {
        p.swayClock += 0.02;
        p.y += p.speedY;
        p.x += Math.sin(p.swayClock) * 0.5;

        if (p.y < -20) {
            p.y = height + 20;
            p.x = Math.random() * width;
        }

        ctx.globalAlpha = p.alpha;
        ctx.font = `${p.size}px serif`;
        ctx.fillText(p.icon, p.x, p.y);
    }

    // 3. Draw Mathematical Particle Heart System
    const center = getHeartCenterAndScale();
    const lubDub = (animTime * 2.5) % (Math.PI * 2);
    // Double pulse: lub-dub
    const p1 = Math.pow(Math.max(0, Math.sin(lubDub)), 14) * 0.16;
    const p2 = Math.pow(Math.max(0, Math.sin(lubDub - 0.45)), 10) * 0.09;
    const currentHeartPulse = 1 + p1 + p2;

    // Trigger Shockwave at peak systole
    if (heartState === 'BEATING' && p1 > 0.14 && animTime - lastShockwavePulse > 1.2) {
        lastShockwavePulse = animTime;
        addShockwaveRing(center.x, center.y, center.scale * 22);
    }

    // Draw Shockwave Rings
    for (let i = shockwaveRings.length - 1; i >= 0; i--) {
        const ring = shockwaveRings[i];
        ring.r += 2.2;
        ring.alpha -= 0.016;
        if (ring.alpha <= 0 || ring.r >= ring.maxR) {
            shockwaveRings.splice(i, 1);
            continue;
        }
        ctx.save();
        ctx.globalAlpha = ring.alpha;
        ctx.strokeStyle = 'rgba(255, 42, 109, 0.45)';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }

    // Draw 2,400 Heart Particles with Additive Blending
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';

    for (let i = 0; i < heartParticles.length; i++) {
        const p = heartParticles[i];

        if (heartState === 'BEATING') {
            const particlePulse = currentHeartPulse + Math.sin(animTime * 3 + p.pulseOffset) * 0.02;
            const targetX = center.x + p.relX * center.scale * particlePulse;
            const targetY = center.y + p.relY * center.scale * particlePulse;

            const driftX = Math.cos(animTime * p.driftSpeed * 10 + p.pulseOffset) * p.driftRadius;
            const driftY = Math.sin(animTime * p.driftSpeed * 10 + p.pulseOffset) * p.driftRadius;

            // Mouse / Touch magnetic interaction
            const dxMouse = (targetX + driftX) - mousePos.x;
            const dyMouse = (targetY + driftY) - mousePos.y;
            const distMouse = Math.hypot(dxMouse, dyMouse);
            let repelX = 0, repelY = 0;
            if (distMouse < 80) {
                const force = (80 - distMouse) / 80;
                repelX = (dxMouse / distMouse) * force * 16;
                repelY = (dyMouse / distMouse) * force * 16;
            }

            p.x = targetX + driftX + repelX;
            p.y = targetY + driftY + repelY;
            p.alpha = p.baseAlpha * (0.8 + currentHeartPulse * 0.2 + (distMouse < 80 ? 0.3 : 0));

        } else if (heartState === 'EXPLODED') {
            p.vx *= 0.96;
            p.vy *= 0.96;
            p.vy += 0.06; // gentle gravity
            p.x += p.vx;
            p.y += p.vy;
            p.alpha *= 0.993;

        } else if (heartState === 'REFORMING') {
            // Spiral vortex return
            p.spiralAngle += 0.05;
            const targetX = center.x + p.relX * center.scale;
            const targetY = center.y + p.relY * center.scale;

            const dx = targetX - p.x;
            const dy = targetY - p.y;

            p.vx += dx * 0.05;
            p.vy += dy * 0.05;
            p.vx *= 0.85;
            p.vy *= 0.85;

            p.x += p.vx;
            p.y += p.vy;

            if (p.alpha < p.baseAlpha) p.alpha += 0.03;

            // When particles arrive, switch back to beating
            if (i === 0 && Math.abs(dx) < 3 && Math.abs(dy) < 3) {
                heartState = 'BEATING';
                showToast("💖 Trái tim tình yêu đã tái hiện trọn vẹn!");
                const reformBtn = document.getElementById('reformHeartBtn');
                if (reformBtn) reformBtn.style.display = 'none';
            }
        }

        if (p.alpha > 0.01) {
            ctx.globalAlpha = Math.min(1, Math.max(0, p.alpha));
            const sz = p.size;
            ctx.drawImage(p.sprite, p.x - sz, p.y - sz, sz * 2, sz * 2);
        }
    }
    ctx.restore();

    // 4. Draw Cursor Stardust Sparkles
    for (let i = cursorSparkles.length - 1; i >= 0; i--) {
        const c = cursorSparkles[i];
        c.x += c.vx;
        c.y += c.vy;
        c.alpha -= 0.03;
        if (c.alpha <= 0) {
            cursorSparkles.splice(i, 1);
            continue;
        }
        ctx.save();
        ctx.globalAlpha = c.alpha;
        ctx.fillStyle = c.color;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    // 5. Draw Fireworks Particles
    for (let i = fireworks.length - 1; i >= 0; i--) {
        const f = fireworks[i];
        f.vx *= f.friction;
        f.vy *= f.friction;
        f.vy += f.gravity;
        f.x += f.vx;
        f.y += f.vy;
        f.alpha -= f.decay;

        if (f.alpha <= 0) {
            fireworks.splice(i, 1);
            continue;
        }

        ctx.globalAlpha = f.alpha;
        ctx.font = `${f.size}px serif`;
        ctx.fillText(f.icon, f.x, f.y);
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(mainRenderLoop);
}
mainRenderLoop();

// Canvas click detector for the Heart
canvas.addEventListener('click', (e) => {
    if (heartState === 'BEATING') {
        const center = getHeartCenterAndScale();
        const dist = Math.hypot(e.clientX - center.x, e.clientY - center.y);
        if (dist < center.scale * 19) {
            triggerHeartExplosion();
        }
    }
});


/* ==========================================================
   4. INTERACTIVE EXPLOSION & FLOATING HEARTS
   ========================================================== */
function triggerHeartExplosion() {
    if (heartState === 'EXPLODED') return;
    heartState = 'EXPLODED';
    explosionTimestamp = Date.now();

    playCelebrationFanfare();
    showToast("🎆 BÙNG NỔ TRÁI TIM YÊU THƯƠNG DÀNH TẶNG NGUYỄN THỊ KIM NGÂN!");

    const center = getHeartCenterAndScale();

    // Supernova Outward spiral vortex explosion
    for (let p of heartParticles) {
        const dx = p.x - center.x;
        const dy = p.y - center.y;
        const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.7;
        const dist = Math.hypot(dx, dy);
        const speed = Math.random() * 15 + 7 + (dist / 20);

        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed;
    }

    // Companion fireworks bursts
    addFireworkBurst(center.x, center.y, 90);
    setTimeout(() => addFireworkBurst(center.x - 160, center.y + 40, 60), 180);
    setTimeout(() => addFireworkBurst(center.x + 160, center.y + 40, 60), 340);

    // Spawn 22 interactive floating hearts
    setTimeout(spawnInteractiveFloatingHearts, 500);

    // Show reform button
    const reformBtn = document.getElementById('reformHeartBtn');
    if (reformBtn) reformBtn.style.display = 'inline-flex';
}


function reformHeart() {
    if (heartState === 'BEATING') return;
    heartState = 'REFORMING';
    playCrystalTone(920);
    showToast("✨ Đang gom ngàn hạt ánh sáng tái hiện trái tim...");
    const reformBtn = document.getElementById('reformHeartBtn');
    if (reformBtn) reformBtn.style.display = 'none';
}

const floatingZone = document.getElementById('floatingHeartsZone');

function spawnInteractiveFloatingHearts() {
    if (!floatingZone) return;
    floatingZone.innerHTML = '';

    // Shuffle để mỗi lần thứ tự khác nhau
    const shuffled = [...SHORT_LOVE_MESSAGES].sort(() => Math.random() - 0.5);

    shuffled.forEach((msg, i) => {
        // Stagger: mỗi tim xuất hiện cách nhau 600ms
        setTimeout(() => spawnSingleFloatingHeart(msg), i * 600);
    });
}

function spawnSingleFloatingHeart(msg) {
    if (!floatingZone) return;

    const heartEl = document.createElement('div');
    heartEl.className = 'interactive-heart floating-auto';

    // Emoji
    const emojiSpan = document.createElement('span');
    emojiSpan.innerText = msg.icon;

    // Câu yêu thương hiện ngay khi bay
    const labelSpan = document.createElement('span');
    labelSpan.className = 'heart-love-label';
    labelSpan.innerText = msg.text;

    heartEl.appendChild(emojiSpan);
    heartEl.appendChild(labelSpan);

    // Vị trí xuất phát: ngẫu nhiên theo chiều ngang, bắt đầu gần đáy màn hình
    const leftPercent = Math.random() * 78 + 10;
    const floatDuration = Math.random() * 2.5 + 4; // 4–6.5 giây
    const sway = (Math.random() - 0.5) * 80; // lắc sang phải/trái lúc bay

    heartEl.style.cssText = `
        left: ${leftPercent}vw;
        bottom: 2vh;
        top: auto;
        --sway: ${sway}px;
        animation: heartFloatUp ${floatDuration}s ease-in forwards;
    `;

    // Click sớm để vỡ ngay
    heartEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const rect = heartEl.getBoundingClientRect();
        burstHeart(heartEl, rect.left + rect.width / 2, rect.top + rect.height / 2, msg);
    });

    floatingZone.appendChild(heartEl);

    // Tự động vỡ khi gần đỉnh
    const burstAt = (floatDuration * 0.88) * 1000;
    setTimeout(() => {
        if (!heartEl.parentNode) return; // đã bị click vỡ rồi
        const rect = heartEl.getBoundingClientRect();
        burstHeart(heartEl, rect.left + rect.width / 2, rect.top + rect.height / 2, msg);
    }, burstAt);
}

function burstHeart(element, px, py, msg) {
    if (!element.parentNode) return;

    playCrystalTone(Math.random() * 200 + 700);
    addFireworkBurst(px, py, 28);

    // Tim bợt đồng rồi biến mất
    element.style.transition = 'transform 0.25s ease, opacity 0.25s ease';
    element.style.animation = 'none';
    element.style.transform = 'scale(2.8)';
    element.style.opacity = '0';
    setTimeout(() => {
        if (element.parentNode) element.parentNode.removeChild(element);
    }, 250);

    // Câu yêu thương nổi lên rồi tan
    showLoveBurstText(msg, px, py);
}

function showLoveBurstText(msg, x, y) {
    const el = document.createElement('div');
    el.className = 'love-burst-msg';
    el.innerHTML = `${msg.icon} ${msg.text} ${msg.icon}`;
    el.style.left = `${x}px`;
    el.style.top  = `${y}px`;
    document.body.appendChild(el);

    // Tự xóa sau khi animation kết thúc (3.2s)
    setTimeout(() => {
        if (el.parentNode) el.parentNode.removeChild(el);
    }, 3200);
}


function displayWishPopup(wish) {
    const overlay = document.getElementById('wishPopupOverlay');
    const tagEl = document.getElementById('popupTag');
    const titleEl = document.getElementById('popupTitle');
    const iconEl = document.getElementById('popupIcon');
    const msgEl = document.getElementById('popupMessage');

    if (!overlay) return;

    tagEl.innerText = `[${wish.tag}]`;
    iconEl.innerText = wish.icon;
    titleEl.innerText = wish.title;
    msgEl.innerHTML = wish.msg;

    overlay.style.display = 'flex';
}

function closeWishPopup() {
    playCrystalTone(440);
    const overlay = document.getElementById('wishPopupOverlay');
    if (overlay) overlay.style.display = 'none';
}



/* ==========================================================
   5. FAST & EFFICIENT TERMINAL CODE TYPING (NO DOM LAG)
   Dòng code hiển thị:
   async function love() { await heart.deployTo("Nguyễn Thị Kim Ngân"); }
   ========================================================== */
const terminalLines = [
    { text: "/**", type: "syntax-comment" },
    { text: " * @target: Nguyễn Thị Kim Ngân ❤️ (Yêu từ 07/11/2021)", type: "syntax-comment" },
    { text: " * @release: Special 20/10 Deployment to Production", type: "syntax-comment" },
    { text: " */", type: "syntax-comment" },
    { text: "async function love() {", type: "line" },
    { text: "  const mySweetheart = \"Nguyễn Thị Kim Ngân\";", type: "line" },
    { text: "", type: "empty" },
    { text: "  // Kích hoạt đường truyền yêu thương với độ trễ 0ms", type: "syntax-comment" },
    { text: "  await heart.deployTo(\"Nguyễn Thị Kim Ngân\", {", type: "line" },
    { text: "    occasion: \"Ngày Phụ Nữ Việt Nam 20/10\",", type: "line" },
    { text: "    established: \"07/11/2021\",", type: "line" },
    { text: "    status: \"HTTP 200 OK (Mãi Hạnh Phúc)\",", type: "line" },
    { text: "    loveBandwidth: Infinity,", type: "line" },
    { text: "    uptime: \"100% Forever\",", type: "line" },
    { text: "    bugsInLife: 0,", type: "line" },
    { text: "    foreverWithKimNgan: true", type: "line" },
    { text: "  });", type: "line" },
    { text: "", type: "empty" },
    { text: "  console.log(\"🚀 Deploy hoàn tất! Chúc Kim Ngân 20/10 ngập tràn nụ cười ❤️\");", type: "line" },
    { text: "  return heart.sendInfiniteHugsAndKisses();", type: "line" },
    { text: "}", type: "line" },
    { text: "", type: "empty" },
    { text: "love(); // Executing with infinite priority...", type: "syntax-comment" }
];

function highlightCodeLine(lineStr) {
    return lineStr
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/\b(async|function|const|new|await|return|Promise)\b/g, '<span class="syntax-keyword">$1</span>')
        .replace(/\b(love|deployTo|sendInfiniteHugsAndKisses)\b/g, '<span class="syntax-function">$1</span>')
        .replace(/\b(heart|console|Infinity)\b/g, '<span class="syntax-type">$1</span>')
        .replace(/(".*?"|'.*?')/g, '<span class="syntax-string">$1</span>')
        .replace(/\b(occasion|established|status|loveBandwidth|uptime|bugsInLife|foreverWithKimNgan)\b/g, '<span class="syntax-prop">$1</span>')
        .replace(/\b(true|false|0)\b/g, '<span class="syntax-constant">$1</span>');
}

let curLineIdx = 0;
let curCharIdx = 0;
const terminalBody = document.getElementById('terminalCode');
let currentLineElem = null;
let cursorElem = null;

function initTerminalTyping() {
    if (!terminalBody) return;
    terminalBody.innerHTML = '';
    curLineIdx = 0;
    curCharIdx = 0;
    currentLineElem = null;

    cursorElem = document.createElement('span');
    cursorElem.className = 'typing-cursor';
    terminalBody.appendChild(cursorElem);

    typeNextToken();
}

function typeNextToken() {
    if (curLineIdx >= terminalLines.length) {
        return; // Finished!
    }

    const lineObj = terminalLines[curLineIdx];

    if (!currentLineElem) {
        currentLineElem = document.createElement('div');
        if (lineObj.type === 'syntax-comment') {
            currentLineElem.className = 'syntax-comment';
        }
        terminalBody.insertBefore(currentLineElem, cursorElem);
    }

    if (lineObj.type === 'empty') {
        currentLineElem.innerHTML = '&nbsp;';
        curLineIdx++;
        currentLineElem = null;
        setTimeout(typeNextToken, 40);
        return;
    }

    const chunk = Math.min(3, lineObj.text.length - curCharIdx);
    curCharIdx += chunk;
    const currentSub = lineObj.text.substring(0, curCharIdx);

    if (lineObj.type === 'syntax-comment') {
        currentLineElem.innerText = currentSub;
    } else {
        currentLineElem.innerHTML = highlightCodeLine(currentSub);
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;

    if (curCharIdx >= lineObj.text.length) {
        curLineIdx++;
        curCharIdx = 0;
        currentLineElem = null;
        setTimeout(typeNextToken, Math.random() * 25 + 20);
    } else {
        setTimeout(typeNextToken, Math.random() * 15 + 12);
    }
}
setTimeout(initTerminalTyping, 400);

// Copy Love Code to Clipboard
function copyLoveCode() {
    const codeText = `async function love() {\n  await heart.deployTo("Nguyễn Thị Kim Ngân", {\n    occasion: "Ngày Phụ Nữ Việt Nam 20/10",\n    established: "07/11/2021",\n    status: "HTTP 200 OK",\n    loveBandwidth: Infinity,\n    foreverTogether: true\n  });\n}\nlove();`;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(codeText);
        playCrystalTone(880);
        showToast("📋 Đã sao chép mã tình yêu dành tặng Kim Ngân!");
    } else {
        showToast("❤️ async function love() { await heart.deployTo('Kim Ngân'); }");
    }
}


/* ==========================================================
   6. MAGIC 3D GIFT BOX & CERTIFICATE MODAL
   ========================================================== */
function openMagicGift() {
    playCelebrationFanfare();
    const box = document.getElementById('giftBox3d');
    if (box) {
        box.style.transform = 'scale(1.2) rotate(15deg)';
    }

    // Explode confetti & fireworks
    addFireworkBurst(width / 2, height * 0.45, 90);
    setTimeout(() => {
        addFireworkBurst(width / 2 - 120, height * 0.35, 50);
        addFireworkBurst(width / 2 + 120, height * 0.35, 50);
    }, 200);

    // Open Certificate Modal
    setTimeout(() => {
        const certModal = document.getElementById('certificateModal');
        if (certModal) certModal.style.display = 'flex';
        showToast("👑 BẢNG VÀNG DANH DỰ ĐÃ ĐƯỢC TRAO CHO KIM NGÂN!");
    }, 450);
}

function closeCertificateModal(e) {
    if (e && e.target !== e.currentTarget) return;
    playCrystalTone(520);
    const certModal = document.getElementById('certificateModal');
    if (certModal) certModal.style.display = 'none';
}


/* ==========================================================
   7. CINEMATIC SHOWCASE MODE (TOÀN CẢNH)
   ========================================================== */
let isCinematic = false;
function toggleCinematicMode() {
    isCinematic = !isCinematic;
    document.body.classList.toggle('cinematic-mode', isCinematic);

    if (isCinematic) {
        if (!isMelodyPlaying) toggleAudio();
        addFireworkBurst(width / 2, height * 0.3, 70);
        showToast("✨ Đã bật Chế Độ Chiêm Ngưỡng Toàn Cảnh!");
    } else {
        showToast("Đã trở về giao diện đầy đủ.");
    }
}


/* ==========================================================
   8. INTERACTIVE TABS & EXPRESS LOVE MODULES
   ========================================================== */
function switchExpressTab(tabId, btn) {
    playCrystalTone(560);
    document.querySelectorAll('.tab-pill-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

    if (btn) btn.classList.add('active');
    const target = document.getElementById(tabId);
    if (target) target.classList.add('active');
}

// Send a warm hug
function sendHugFeedback() {
    playCelebrationFanfare();
    addFireworkBurst(width / 2, height * 0.4, 90);
    setTimeout(() => {
        spawnInteractiveFloatingHearts();
    }, 200);
    showToast("🤗 Đã gửi một cái ôm thật chặt và ấm áp đến Kim Ngân!");
}

// Redeem Love Voucher
function redeemVoucher(id, msg) {
    playCrystalTone(880);
    const card = document.getElementById(id);
    if (card) {
        card.classList.add('used');
        const btn = card.querySelector('.btn-popup-close');
        if (btn) {
            btn.innerText = 'Đã Kích Hoạt ✓';
            btn.style.background = '#10b981';
        }
    }
    addFireworkBurst(width / 2, height * 0.5, 45);
    showToast(msg);
}

// Love Note Form (Hộp Tâm Sự với LocalStorage)
let selectedEmoji = "🥰";
function selectNoteEmoji(emoji, btn) {
    selectedEmoji = emoji;
    document.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
}

function loadSavedLoveNotes() {
    const list = document.getElementById('sentNotesList');
    if (!list) return;
    try {
        const saved = JSON.parse(localStorage.getItem('kim_ngan_love_notes') || '[]');
        list.innerHTML = '';
        saved.forEach(note => {
            const item = document.createElement('div');
            item.className = 'sent-note-pill';
            item.innerHTML = `<span style="font-size: 1.4rem;">${note.emoji}</span> <span>${note.text}</span> <em style="margin-left: auto; font-size: 0.75rem; color: #fcd34d;">${note.time}</em>`;
            list.appendChild(item);
        });
    } catch(e) {}
}

function submitLoveNote() {
    const textarea = document.getElementById('loveNoteInput');
    const text = textarea ? textarea.value.trim() : '';

    if (!text) {
        showToast("Kim Ngân ơi, hãy viết vài dòng tâm tư gửi cho anh nhé! ❤️");
        return;
    }

    playCelebrationFanfare();
    addFireworkBurst(width / 2, height * 0.55, 60);

    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')} - 20/10`;

    // Save to localStorage
    try {
        const saved = JSON.parse(localStorage.getItem('kim_ngan_love_notes') || '[]');
        saved.unshift({ emoji: selectedEmoji, text: text, time: timeStr });
        localStorage.setItem('kim_ngan_love_notes', JSON.stringify(saved.slice(0, 15)));
    } catch(e) {}

    loadSavedLoveNotes();

    if (textarea) textarea.value = '';
    showToast("💌 Anh đã nhận được tin nhắn ngọt ngào của Kim Ngân rồi nhé! Yêu em 3000! 🥰");
}
setTimeout(loadSavedLoveNotes, 300);


/* ==========================================================
   9. WEB AUDIO API SYNTHESIZER (POLYPHONIC BALLAD CHORDS)
   ========================================================== */
let audioCtx = null;
let isMelodyPlaying = false;
let melodyInterval = null;

// Harmonic Chords Progression: Cmaj9 -> Am9 -> Fmaj7 -> Gsus4
const romanticChords = [
    [261.63, 329.63, 392.00, 493.88, 587.33], // Cmaj9 (C4, E4, G4, B4, D5)
    [220.00, 261.63, 329.63, 392.00, 493.88], // Am9 (A3, C4, E4, G4, B4)
    [174.61, 220.00, 261.63, 329.63, 440.00], // Fmaj7 (F3, A3, C4, E4, A4)
    [196.00, 261.63, 293.66, 392.00, 523.25]  // Gsus4 (G3, C4, D4, G4, C5)
];
let chordIndex = 0;
let noteIndex = 0;

function getAudioContext() {
    if (!audioCtx) {
        const AudioClass = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioClass();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

function playLofiNote(freq, duration = 0.9, gainVal = 0.08) {
    try {
        const ctx = getAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1400, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(gainVal, ctx.currentTime + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + duration);
    } catch(e) {}
}

function playCrystalTone(freq = 660) {
    try {
        const ctx = getAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.25, ctx.currentTime + 0.35);

        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.5);
    } catch(e) {}
}

function playCelebrationFanfare() {
    try {
        const ctx = getAudioContext();
        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
        notes.forEach((freq, idx) => {
            setTimeout(() => {
                playLofiNote(freq, 1.4, 0.11);
            }, idx * 100);
        });
    } catch(e) {}
}

function toggleAudio() {
    const ctx = getAudioContext();
    const eq = document.getElementById('equalizer');
    const label = document.getElementById('audioLabel');

    if (isMelodyPlaying) {
        isMelodyPlaying = false;
        clearInterval(melodyInterval);
        if (eq) eq.classList.remove('playing');
        if (label) label.innerText = 'Bật Nhạc';
        showToast("Đã tắt âm nhạc");
    } else {
        isMelodyPlaying = true;
        if (eq) eq.classList.add('playing');
        if (label) label.innerText = 'Đang Phát...';

        melodyInterval = setInterval(() => {
            if (!isMelodyPlaying) return;
            const currentChord = romanticChords[chordIndex % romanticChords.length];
            const freq = currentChord[noteIndex % currentChord.length];

            playLofiNote(freq, 1.1, 0.08);

            noteIndex++;
            if (noteIndex >= currentChord.length) {
                noteIndex = 0;
                chordIndex++;
            }
        }, 360);

        showToast("🎵 Đang phát hợp âm Ballad lãng mạn dành riêng cho Kim Ngân");
    }
}


/* ==========================================================
   10. REAL-TIME ANNIVERSARY COUNTER & LIVE HEARTBEAT TICKER
   Cột mốc định mệnh: 07/11/2021
   ========================================================== */
function updateAnniversaryCounter() {
    const now = new Date();
    const diffMs = now.getTime() - LOVE_START_DATE.getTime();

    if (diffMs > 0) {
        const totalSeconds = Math.floor(diffMs / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        const daysEl = document.getElementById('liveDays');
        const hoursEl = document.getElementById('liveHours');
        const minsEl = document.getElementById('liveMins');
        const secsEl = document.getElementById('liveSecs');

        if (daysEl) daysEl.innerText = `${days} Ngày`;
        if (hoursEl) hoursEl.innerText = `${String(hours).padStart(2, '0')} Giờ`;
        if (minsEl) minsEl.innerText = `${String(minutes).padStart(2, '0')} Phút`;
        if (secsEl) secsEl.innerText = `${String(seconds).padStart(2, '0')} Giây`;

        // Live Heartbeats (~72 bpm average)
        const heartbeats = Math.floor(totalSeconds * 1.2);
        const beatsEl = document.getElementById('liveHeartbeats');
        if (beatsEl) beatsEl.innerText = heartbeats.toLocaleString('vi-VN');

        const nightsEl = document.getElementById('liveNights');
        if (nightsEl) nightsEl.innerText = days.toLocaleString('vi-VN');
    }
}
setInterval(updateAnniversaryCounter, 1000);
updateAnniversaryCounter();


/* ==========================================================
   11. TOAST NOTIFICATION
   ========================================================== */
let toastTimer;
function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 3200);
}

document.body.addEventListener('click', () => {
    getAudioContext();
}, { once: true });


/* ==========================================================
   12. 4 LUXURY THEME PALETTES MANAGER
   ========================================================== */
const THEMES = [
    { id: 'default', label: 'Hoa Hồng Hoàng Gia', toast: '🌹 Đã đổi tone: Hoa Hồng Hoàng Gia (Imperial Velvet Rose & Gold)!' },
    { id: 'sakura', label: 'Anh Đào Mộng Mơ', toast: '🌸 Đã đổi tone: Anh Đào Mộng Mơ (Pastel Sakura & Peach)!' },
    { id: 'galaxy', label: 'Cực Quang Tinh Tú', toast: '🌌 Đã đổi tone: Cực Quang Tinh Tú (Galaxy Nebula & Cyber Starlight)!' },
    { id: 'diamond', label: 'Pha Lê Dạ Nguyệt', toast: '💎 Đã đổi tone: Pha Lê Dạ Nguyệt (Diamond Ice & Royal Violet)!' }
];
let currentThemeIdx = 0;

function toggleThemePalette() {
    currentThemeIdx = (currentThemeIdx + 1) % THEMES.length;
    const theme = THEMES[currentThemeIdx];

    if (theme.id === 'default') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', theme.id);
    }

    const btnLabel = document.getElementById('themeBtnLabel');
    if (btnLabel) btnLabel.innerText = theme.label;

    playCrystalTone(880);
    showToast(theme.toast);

    // Launch celebration burst with the new theme colors
    addFireworkBurst(width * 0.5, height * 0.3, 60);
}

// ==========================================
// SPLITTING.JS – Buchstaben-Animationen
// ==========================================
Splitting();

// ==========================================
// GSAP – Registrierung
// ==========================================
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// HERO – Animationen
// ==========================================
gsap.fromTo('.hero-content',
    { opacity: 0, y: 60, scale: 0.96 },
    { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'power3.out', delay: 0.1 }
);

gsap.fromTo('.hero h1',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
);

gsap.fromTo('.hero p',
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.5 }
);

gsap.fromTo('.hero .btn-main',
    { opacity: 0, y: 20, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.5)', delay: 0.7 }
);

// ==========================================
// HEADER – schrumpft beim Scrollen
// ==========================================
ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: { className: 'header-scrolled', targets: 'header' }
});

// ==========================================
// SECTION TITLE – Splitting Wort-Animation
// ==========================================
const sectionTitles = document.querySelectorAll('.section-title');
sectionTitles.forEach(title => {
    const result = Splitting({ target: title, by: 'words' });
    const words = result[0].words;
    gsap.fromTo(words,
        { opacity: 0, y: 40 },
        {
            opacity: 1, y: 0,
            duration: 0.6, ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: { trigger: title, start: 'top 88%' }
        }
    );
});

// ==========================================
// SERVICE CARDS – Stagger Einblendung
// ==========================================
gsap.fromTo('.service-card',
    { opacity: 0, y: 60, scale: 0.95 },
    {
        opacity: 1, y: 0, scale: 1,
        duration: 0.7, ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: '.service-grid', start: 'top 80%' }
    }
);

// ==========================================
// STATS COUNTER – CountUp.js
// ==========================================
const statEls = document.querySelectorAll('.stat-number');
if (statEls.length) {
    const statsTriggered = { done: false };
    ScrollTrigger.create({
        trigger: '.stats-section',
        start: 'top 80%',
        onEnter: () => {
            if (statsTriggered.done) return;
            statsTriggered.done = true;
            statEls.forEach(el => {
                const target = parseInt(el.dataset.target, 10);
                const cu = new countUp.CountUp(el, target, {
                    duration: 2.5,
                    easingFn: (t, b, c, d) => {
                        t /= d; t--; return c * (t * t * t + 1) + b;
                    }
                });
                cu.start();
            });
            // GSAP Einfade-Animation für die gesamte Stats-Sektion
            gsap.fromTo('.stat-item',
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12 }
            );
        }
    });
}



// ==========================================
// VORTEILE SEKTION
// ==========================================
gsap.fromTo('.vorteile-badge, .vorteile-title, .vorteile-subtitle',
    { opacity: 0, y: 40 },
    {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: '.vorteile', start: 'top 80%' }
    }
);

gsap.fromTo('.vorteil-card',
    { opacity: 0, y: 70, scale: 0.93 },
    {
        opacity: 1, y: 0, scale: 1,
        duration: 0.75, ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.vorteile-grid', start: 'top 82%' }
    }
);

gsap.fromTo('.btn-blue',
    { opacity: 0, y: 30 },
    {
        opacity: 1, y: 0, duration: 0.7, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: '.vorteile-cta-container', start: 'top 88%' }
    }
);

// ==========================================
// QUALITÄTSGARANTIE SEKTION – Parallax
// ==========================================
gsap.fromTo('.qualitaetsgarantie-content',
    { opacity: 0, x: -60 },
    {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.qualitaetsgarantie-section', start: 'top 75%' }
    }
);

gsap.fromTo('.qualitaetsgarantie-image',
    { opacity: 0, x: 60, scale: 0.95 },
    {
        opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.qualitaetsgarantie-section', start: 'top 75%' }
    }
);

// Parallax-Effekt auf Bild
gsap.to('.qualitaetsgarantie-image img', {
    yPercent: -12,
    ease: 'none',
    scrollTrigger: {
        trigger: '.qualitaetsgarantie-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});

// ==========================================
// FOOTER
// ==========================================
gsap.fromTo('footer',
    { opacity: 0, y: 40 },
    {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: 'footer', start: 'top 88%' }
    }
);

// ==========================================
// MODAL DATA – Leistungen
// ==========================================
const modalData = {
    'maler': {
        title: 'Malerarbeiten & Design',
        intro: 'Ein sauberer Anstrich oder eine perfekt tapezierte Wand verändern das gesamte Wohngefühl. Wir übernehmen für Sie alle klassischen Malerarbeiten im Innen- und Außenbereich. Dabei legen wir besonderen Wert auf eine gründliche Vorbereitung des Untergrunds – denn nur so entsteht ein langlebiges und gleichmäßiges Ergebnis. Wir arbeiten absolut sauber, termingerecht und ausschließlich mit hochwertigen Qualitätsfarben.',
        bullets: [
            'Innen- & Außenanstriche mit langlebigen Qualitätsfarben',
            'Fachgerechtes Tapezieren von Vlies-, Papier- und Mustertapeten',
            'Moderne Spachteltechniken (z.B. Betonoptik) für exklusive Wände',
            'Gründliches Spachteln und Schleifen für perfekt glatte Wände',
            'Professionelle Farbberatung direkt bei Ihnen vor Ort',
            'Zuverlässiger Schutz von Möbeln und Böden vor Arbeitsbeginn'
        ],
        image: 'img/modal-maler.jpg'
    },
    'trockenbau': {
        title: 'Moderner Trockenbau',
        intro: 'Trockenbau ist die flexibelste Lösung, um Räume neu aufzuteilen, Heizkosten zu sparen oder ungenutzten Wohnraum nutzbar zu machen. Egal ob Deckenabhängung, Raumtrennung oder Dachbodenausbau: Wir realisieren Ihren Innenausbau fachgerecht. Dabei achten wir penibel auf optimalen Schallschutz, korrekten Brandschutz und eine saubere Verspachtelung der Gipsplatten, damit die Wände direkt bereit für den Maler sind.',
        bullets: [
            'Erstellung von Trennwänden für eine flexible Raumaufteilung',
            'Abhängen von Decken (z.B. zur Integration von LED-Spots)',
            'Kompletter Dachbodenausbau inklusive moderner Dämmung',
            'Schallschutz- und Brandschutzlösungen nach aktuellen Standards',
            'Fachgerechtes Verspachteln (Q1 bis Q4) für malerfertige Wände',
            'Verkleidung von Rohren und Installation von Vorwandelementen'
        ],
        image: 'img/modal-trockenbau.jpg'
    },
    'fussboden': {
        title: 'Bodenverlegung',
        intro: 'Ein guter Fußboden muss nicht nur optisch überzeugen, sondern auch den täglichen Belastungen standhalten. Wir verlegen für Sie Laminat, modernen Vinylboden, Teppich oder Parkett fachgerecht und präzise. Die Qualität fängt beim Untergrund an: Wir prüfen und nivellieren Ihren Estrich sorgfältig, um Unebenheiten und späteres Knarzen zu verhindern. Zum Abschluss sorgen wir für perfekt eingepasste Fußleisten und saubere Übergangsschienen.',
        bullets: [
            'Fachgerechte Verlegung von Vinyl (Klick & Klebe-Vinyl)',
            'Präzises Verlegen von Laminat und Fertigparkett',
            'Prüfung, Reinigung und professionelles Ausgleichen des Untergrunds',
            'Montage von passgenauen Sockel- und Fußleisten (Gehrungsschnitt)',
            'Erstellung von sauberen Übergängen und Dehnungsfugen',
            'Beratung zur Trittschalldämmung und Eignung für Fußbodenheizungen'
        ],
        image: 'img/modal-fussboden.jpg'
    }
};

// ==========================================
// MODAL – Öffnen / Schließen
// ==========================================
function openModal(serviceKey) {
    const data = modalData[serviceKey];

    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalImage').src = data.image;
    document.getElementById('modalBodyTop').innerHTML = `<p class="modal-intro">${data.intro}</p>`;

    const bulletHTML = data.bullets.map(b => `<li><i class="fas fa-check"></i> ${b}</li>`).join('');
    document.getElementById('modalBodyBottom').innerHTML = `<ul class="modal-bullets">${bulletHTML}</ul>`;
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // GSAP Modal-Animation
    gsap.fromTo('.fullscreen-modal-content',
        { opacity: 0, y: 40, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out' }
    );
}

function closeModal() {
    gsap.to('.fullscreen-modal-content', {
        opacity: 0, y: 30, scale: 0.97, duration: 0.3, ease: 'power2.in',
        onComplete: () => {
            document.getElementById('serviceModal').style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

// Schließen bei Klick außerhalb
window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('serviceModal')) closeModal();
});

// ==========================================
// COOKIES
// ==========================================
function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
}

window.addEventListener('load', () => {
    if (localStorage.getItem('cookiesAccepted')) {
        const banner = document.getElementById('cookie-banner');
        if (banner) banner.style.display = 'none';
    }
});

// ==========================================
// KONTAKTFORMULAR – AJAX (nur auf kontakt.html)
// ==========================================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const btn = this.querySelector('.submit-btn');
        const originalBtnText = btn.innerHTML;

        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Wird gesendet...';
        btn.style.opacity = '0.7';
        btn.style.pointerEvents = 'none';

        const formData = new FormData(this);

        fetch(this.action, { method: 'POST', body: formData })
        .then(() => {
            showSuccessModal();
            this.reset();
            btn.innerHTML = originalBtnText;
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'all';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Es gab einen Fehler beim Versenden. Bitte versuchen Sie es erneut.');
            btn.innerHTML = originalBtnText;
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'all';
        });
    });
}

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) modal.style.display = 'block';
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) modal.style.display = 'none';
}
// Hier starten wir die Animations-Bibliothek
AOS.init({
    // Dauer der Animation in Millisekunden (1000ms = 1 Sekunde)
    duration: 1000, 
    
    // Animation wird nur einmal abgespielt, nicht bei jedem hoch/runter scrollen
    once: true, 
    
    // Startet die Animation etwas früher/später im Bildschirm
    offset: 100 
});
// Daten für die Modal-Fenster
const modalData = {
    'maler': {
        title: 'Malerarbeiten & Design',
        body: 'Wir bieten professionelle Anstriche, tapezieren hochwertige Vliestapeten und beherrschen moderne Spachteltechniken für glatte, edle Wände.',
        image: 'img/modal-maler.jpg' // Pfad zum generierten KI-Bild
    },
    'trockenbau': {
        title: 'Moderner Trockenbau',
        body: 'Individueller Innenausbau: Von abgehängten Decken mit LED-Spots bis hin zu schallisolierten Trennwänden und Dachbodenausbau.',
        image: 'img/modal-trockenbau.jpg' // Pfad zum generierten KI-Bild
    },
    'fussboden': {
        title: 'Bodenverlegung',
        body: 'Egal ob Laminat, hochwertiges Vinyl oder PVC – wir sorgen für einen perfekt ebenen Untergrund und saubere Leisten.',
        image: 'img/modal-fussboden.jpg' // Pfad zum generierten KI-Bild
    }
};

// Funktion zum Öffnen des Modals
function openModal(serviceKey) {
    const data = modalData[serviceKey];
    
    // Elemente im Modal befüllen
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalBody').innerHTML = `<p>${data.body}</p>`;
    document.getElementById('modalImage').src = data.image; // Das Bild setzen
    
    // Modal sichtbar machen
    document.getElementById('serviceModal').style.display = "block";
}

// Funktion zum Schließen
function closeModal() {
    document.getElementById('serviceModal').style.display = "none";
}

// Schließen, wenn man außerhalb klickt
window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target == modal) {
        closeModal();
    }
}
function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
}

// Beim Laden prüfen
window.onload = function() {
    if (localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'none';
    }
}
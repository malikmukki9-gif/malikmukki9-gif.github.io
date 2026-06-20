<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Honeypot Check (Spam-Schutz)
    if (!empty($_POST['_honey'])) {
        die("Spam erkannt.");
    }

    // 2. Daten sammeln & Validieren
    $vorname   = strip_tags(trim($_POST['vorname']));
    $nachname  = strip_tags(trim($_POST['nachname']));
    $email     = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $telefon   = strip_tags(trim($_POST['telefon']));
    $anliegen  = strip_tags(trim($_POST['anliegen']));
    $nachricht = strip_tags(trim($_POST['nachricht']));

    // Pflichtfelder-Check
    if (empty($vorname) || empty($email) || empty($nachricht)) {
        echo "Bitte füllen Sie alle Pflichtfelder aus.";
        exit;
    }

    // 3. E-Mail Einstellungen
    $to = "info@asabau-hannover.de"; 
    $subject = "ASA BAU Kontaktanfrage: $anliegen von $vorname $nachname";
    
    $body = "==========================================\n";
    $body .= "   NEUE ANFRAGE ÜBER DIE WEBSEITE\n";
    $body .= "==========================================\n\n";
    $body .= "KONTAKTDATEN:\n";
    $body .= "------------------------------------------\n";
    $body .= "Name:      $vorname $nachname\n";
    $body .= "E-Mail:    $email\n";
    $body .= "Telefon:   $telefon\n";
    $body .= "Anliegen:  $anliegen\n\n";
    $body .= "NACHRICHT:\n";
    $body .= "------------------------------------------\n";
    $body .= "$nachricht\n\n";
    $body .= "==========================================\n";

    // 4. Prüfung: Lokal oder Online?
    $isLocal = in_array($_SERVER['REMOTE_ADDR'], ['127.0.0.1', '::1']) || $_SERVER['SERVER_NAME'] == 'localhost';

    if ($isLocal) {
        // LOKAL: Nur simulieren und in Datei schreiben, damit kein Fehler kommt
        file_put_contents("mail_test_log.txt", "--- TEST-MAIL ---\n" . $body, FILE_APPEND);
        header("Location: danke.html"); 
        exit;
    } else {
        // ONLINE: Echter Versand
        $headers = "From: ASA BAU Website <info@asabau-hannover.de>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        if (@mail($to, $subject, $body, $headers)) {
            header("Location: danke.html"); 
            exit;
        } else {
            echo "Fehler beim Senden. Bitte schreiben Sie uns direkt an info@asabau-hannover.de";
        }
    }
} else {
    header("Location: kontakt.html");
    exit;
}
?>

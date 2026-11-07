# Entwicklerportfolio – Thomas Brakutt

Mein persönliches Entwicklerportfolio. Die Website stellt mich, meine technischen Kenntnisse und ausgewählte Projekte aus der Web- und Android-Entwicklung vor.

**Live ansehen:** [Mein Portfolio](https://thomas-brakutt.github.io/Thomas-Portfolio/)

## Über das Portfolio

Die Website wurde mit **HTML, CSS und JavaScript** ohne Frontend-Framework umgesetzt.

Im Mittelpunkt stehen eine übersichtliche Darstellung meiner Projekte, ein responsives Layout und eine unkomplizierte Kontaktmöglichkeit.

### Funktionen

- **Startseite:** Persönliche Vorstellung und Überblick über verwendete Technologien
- **Projekte:** Drei Projektkarten mit Screenshots, Quellcode-Links und – soweit verfügbar – Live-Demos
- **Über mich:** Mein bisheriger Weg in die Softwareentwicklung und persönliche Interessen
- **Kontakt:** Kontaktformular mit Pflichtfeldprüfung, Versand über FormSubmit sowie Erfolgs- und Fehlermeldungen
- **Responsive Design:** Anpassung an Desktop, Tablet und Smartphone
- **Barrierearme Bedienung:** Semantisches HTML, sichtbare Tastaturfokus-Markierungen und Berücksichtigung reduzierter Animationen
- **Lokale Schriftart:** Manrope wird direkt aus dem Projekt geladen, nicht von Google Fonts

## Vorgestellte Projekte

### 1. B & A Archery Club

Responsive Vereinswebsite für einen fiktiven Bogensportverein, entwickelt mit **Vue 3, JavaScript, CSS und Vue Router**.

Die Anwendung umfasst verschiedene Informationsseiten, eine mobile Navigation, eine interaktive Bildergalerie mit Lightbox und ein Demo-Kontaktformular.

**Links:**

- [Live-Demo ansehen](https://thomas-brakutt.github.io/AbschlussProjekt/#/)
- [Quellcode auf GitHub](https://github.com/thomas-brakutt/AbschlussProjekt)

### 2. Hangman-Spiel

Interaktives Hauptstädte-Ratespiel, entwickelt mit **HTML, CSS und Vanilla JavaScript**.

Das Spiel bietet eine Buchstabentastatur, zehn mögliche Fehlversuche, eine Gewinn- und Verlustanzeige sowie ein responsives Design.

**Links:**

- [Hangman spielen](https://thomas-brakutt.github.io/hangman-kata/)
- [Quellcode auf GitHub](https://github.com/thomas-brakutt/hangman-kata)

### 3. Android-Einkaufsliste

Native Android-App zur Verwaltung einer persönlichen Einkaufsliste, entwickelt mit **Java und XML**.

Artikel können hinzugefügt, als erledigt oder nicht verfügbar markiert und gelöscht werden. Bereits verwendete Artikel werden zur Autovervollständigung vorgeschlagen.

Die Liste und ihre Statusinformationen bleiben durch lokale Speicherung mit **SharedPreferences und JSON** auch nach einem Neustart erhalten.

**Link:**

- [Quellcode auf GitHub](https://github.com/thomas-brakutt/Einkaufsliste-App-Android)

## Verwendete Technologien

- **HTML5** – Seitenstruktur und semantische Elemente
- **CSS3** – Gestaltung, Flexbox, Grid und Media Queries
- **JavaScript** – Formularvalidierung, Versand und Statusmeldungen
- **Git und GitHub** – Versionsverwaltung
- **GitHub Pages** – Hosting der Website
- **FormSubmit** – Weiterleitung von Kontaktanfragen per E-Mail

_Vue.js und Java kommen in den vorgestellten Projekten zum Einsatz, nicht im Portfolio selbst._

## Projektstruktur

```text
Thomas-Portfolio/
├── assets/
│   ├── fonts/
│   │   ├── Manrope.ttf
│   │   └── OFL.txt
│   └── images/
│       ├── profilbild.png
│       ├── profilbild_2.jpg
│       ├── startseite-abschlussprojekt.png
│       ├── screenshot_hangman.png
│       ├── screenshot_einkaufsapp.png
│       └── footer1.jpg
├── index.html
├── projekte.html
├── ueber-mich.html
├── kontakt.html
├── impressum.html
├── datenschutz.html
├── style.css
├── script.js
└── README.md
```

## Lokal starten

Das Portfolio benötigt keinen Build-Schritt und keine Paketinstallation.

**1. Repository klonen**

```bash
git clone https://github.com/thomas-brakutt/Thomas-Portfolio.git
```

**2. Projekt öffnen**

Den Projektordner `Thomas-Portfolio` in Visual Studio Code öffnen.

**3. Website starten**

Die Datei `index.html` im Browser öffnen, am besten über die VS-Code-Erweiterung **Live Server**.

**Hinweis:** Für den Versand über das Kontaktformular ist eine Internetverbindung erforderlich. Die E-Mail-Zieladresse muss für FormSubmit aktiviert sein.

## Gestaltung und technische Umsetzung

Die Website verwendet eine gemeinsame CSS-Datei mit allgemeinen Regeln, seitenspezifischen Abschnitten und Media Queries.

Die Projektkarten werden mit CSS Grid responsiv dargestellt. Flexbox kommt unter anderem bei Navigation, Buttons und Seitenlayouts zum Einsatz.

Die Schriftart **Manrope** wird lokal aus dem Ordner `assets/fonts/` geladen. Die zugehörige Lizenz ist in der Datei `OFL.txt` enthalten.

Das Kontaktformular verarbeitet Eingaben mit JavaScript und versendet Nachrichten über FormSubmit. Der Benutzer erhält eine Rückmeldung über den Erfolg oder Misserfolg des Versands.

Die Website wurde bewusst ohne zusätzliches Frontend-Framework aufgebaut, damit HTML-Struktur, CSS-Gestaltung und JavaScript-Verhalten direkt nachvollziehbar bleiben.

## Autor

Entwickelt von **[Thomas Brakutt](https://github.com/thomas-brakutt)** als persönliches Entwicklerportfolio.

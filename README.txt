TEMPO – Běžecký klub & kavárna

Mým cílem bylo vytvořit webovou stránku pro kamarádku, jejímž snem je podnikat. Tempo je běžecký klub spojený s kavárnou. Design webové stránky jsem si načrtla do iPadu a po konzultaci s kamarádkou a doladění pár drobností jsem se dala do práce.

Použité technologie:

- HTML (sémantická struktura)
- CSS (Flexbox, Grid, responsive design, efekty)
- JavaScript (tlačítka, formulář, zvětšení obrázků, video přehrávač)
- Google Fonts (Poppins, Open Sans)


Struktura projektu:

/itw_proj2
│
├── index.html
├── style.css
├── script.js
└── /obrazky


Funkcionalita:

- Navigace
	- Sticky navbar
	- Smooth scroll mezi sekcemi

- Sekce
  - Hero
	- Logo kavárny
	- Navigační tlačítka

  - Kdo jsme
	- Flexbox layout (text + obrázek)
	- Responsivní přepínání layoutu

  - Kavárna
	- Obrázky s hover efektem

  - Projekty
	- Opakující se komponenty (text + obrázek)
	- Responsivní přizpůsobení

  - Strava
	- Přepínání (tlačítka) mezi:
          -> Snídaně
          -> Obědy
	  -> Večeře
	- Implementace pomocí JavaScriptu

  - Komunita
	- Formulář
	- Validace vstupů (jméno, příjmení, email - regex)
	- Popup po odeslání
	- Dynamická změna tlačítka
	- Video přehrávač

  - Image Modal (zvětšení obrázků)
	- Kliknutím na obrázek se otevře overlay
	- Obrázek se dynamicky vloží do modalu pomocí JS:
	  ```js
	  modalImg.src = this.src;
	  ```


Design & UX:

- Barevná paleta: růžová + neutrální barvy
- Blur efekty (backdrop-filter v navbaru a hero sekci)
- Hover animace (transform + box-shadow u obrázků)
- Responsivní design (media queries)


AI nástroje:

- AI bylo využito jako podpůrný nástroj:
	- hledání a opravení chyb
	- generování textů a některých obrázků
	- konzultace vhodného řešení pro můj navržený vzhled webové stránky
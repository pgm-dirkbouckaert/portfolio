export const navItems = [
  { href: 'index.html', text: '<img src="images/logo.png" alt="logo">' },
  { href: 'index.html', text: 'Home' },
  { href: 'projects.html', text: 'Projecten' },
  { href: 'contact.html', text: 'Contact' },
];

export const projects = [
  {
    id: 1,
    category: 'HTML/CSS/JS',
    title: 'iLeren',
    image: 'ileren.png',
    link: 'https://ileren.be/',
    summary: 'Edutools en online apps',
    details: `Website met educatieve online tools.
    | Bv. kruiswoordpuzzel, woordzoeker, galgje, waagstuk, mindmaps, ...'
    | HTML, CSS, Bootstrap, Javascript, JQuery.`,
  },
  {
    id: 2,
    category: 'HTML/CSS/JS',
    title: 'Schuilplaats',
    image: 'schuilplaats.png',
    link: 'https://schuilplaats.be/',
    summary: 'Muziekstreaming',
    details: `Website waarop online muziek gestreamd wordt.
    | De albums kunnen gedownload worden.
    | Er kunnen ook een aantal teksten en partituren gedownload worden.
    | HTML, CSS, Bootstrap, Javascript.`,
  },
  {
    id: 3,
    category: 'HTML/CSS/JS',
    title: 'Grammatica',
    image: 'nt2grammatica.png',
    link: 'https://cvogent.be/nt2grammatica',
    summary: 'Grammatica voor anderstaligen',
    details: `Website met een online grammatica voor anderstalligen.
    | Voor de cursisten van CVO GENT.
    | HTML, CSS, Bootstrap, Javascript`,
  },
  {
    id: 4,
    category: 'HTML/CSS/JS',
    title: 'Digiboek',
    image: 'nt2digiboek.png',
    link: 'projects/nt2digiboek-sample/',
    summary: 'Online handboeken',
    details: `Digiboek voor de leerkrachten van CVO GENT. 
    | Voor dit portfolio kan je een extract bekijken met één handboek.
    | Het origineel biedt alle handboeken aan.
    | HTML, CSS, Bootstrap, Javascript, JQuery, canvas`,
  },
  {
    id: 5,
    category: 'PHP & SQL',
    title: 'Mimosa',
    image: 'mimosa.png',
    link: 'https://dirkb.be/mimosa',
    summary: 'Fotogallerij',
    details: `Op deze website wordt een fotogallerij aangeboden.
    | Eigen MVC met PHP, Bootstrap 5, MySQL, gebruikersbeheer.`,
  },
  {
    id: 6,
    category: 'PHP & SQL',
    title: 'Farmstand',
    image: 'farmstand.png',
    link: 'https://dirkb.be/farmstand',
    summary: 'Oefenproject met eigen MVC-framework.',
    details: `Gebaseerd op de NodeJS versie van Colt Steele.
    | Eigen MVC met PHP, Bootstrap 5, MySQL, gebruikersbeheer.`,
  },
  {
    id: 7,
    category: 'PHP & SQL',
    title: 'CVO Voeding',
    image: 'bestellingen-voeding.png',
    link: 'https://cvogent.be/bestellingen-voeding',
    summary: 'Oefenproject met eigen MVC-framework.',
    details: `Ontwerp voor CVO GENT.
    | Geen toegang zonder cvogent-account.
    | Eigen MVC met PHP, Bootstrap 5, MySQL, gebruikersbeheer.`,
  },
  {
    id: 8,
    category: 'PHP & SQL',
    title: 'CVO BIB',
    image: 'cvobib.png',
    link: 'https://cvogent.be/cvobib/',
    summary: 'Bibliotheekapplicatie',
    details: `App voor de bibliotheek van CVO GENT.
    | Publiek gedeelte voor de cursisten.
    | Afgeschermd gedeelte enkel voor personeel van CVO GENT.
    | PHP MVC met CodeIgniter 4.`,
  },
  {
    id: 9,
    category: 'Android Apps',
    title: 'NT2 Grammatica',
    image: 'nt2grammatica-android.png',
    link: 'https://play.google.com/store/apps/details?id=be.ileren.grammatica',
    summary: 'Grammatica voor anderstaligen',
    details: `Android app die een grammatica voor anderstalligen aanbiedt.
    | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
  },
  {
    id: 10,
    category: 'Android Apps',
    title: 'NT2 Werkwoorden',
    image: 'nt2werkwoorden.png',
    link: 'https://play.google.com/store/apps/details?id=be.ileren.werkwoorden',
    summary: 'Studeer onregelmatige werkwoorden',
    details: `Android app waarmee je de onregelmatige werkwoorden kan studeren.
    | Bedoeld voor anderstaligen.
    | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
  },
  {
    id: 11,
    category: 'Android Apps',
    title: 'NT2 Voorzetsels',
    image: 'nt2voorzetsels.png',
    link: 'https://play.google.com/store/apps/details?id=be.ileren.voorzetsels',
    summary: 'Studeer voorzetsels',
    details: `Android app waarmee je de vaste voorzetsels kan inoefenen.
    | Bedoeld voor anderstaligen.
    | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
  },
  {
    id: 12,
    category: 'Android Apps',
    title: 'NT2 Eten en Drinken',
    image: 'nt2etenendrinken.png',
    link: 'https://play.google.com/store/apps/details?id=ileren.be.nt2etenendrinken',
    summary: 'Studeer woordenschat',
    details: `Met deze app kan je nieuwe woorden leren over eten en drinken.
    | Inclusief audio.
    | Bedoeld voor anderstaligen.
    | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
  },
  {
    id: 13,
    category: 'Android Apps',
    title: 'Medisch Rekenen',
    image: 'medischrekenen.png',
    link: 'https://play.google.com/store/apps/details?id=appinventor.ai_diboma.MedischRekenen',
    summary: 'Maak medische berekeningen',
    details: `Met deze app kan je verschillende medische berekeningen maken.
    | App Inventor, Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
  },
  {
    id: 14,
    category: 'Android Apps',
    title: 'Zuur-Base Lijst',
    image: 'zuurbase.png',
    link: 'https://play.google.com/store/apps/details?id=be.ileren.zuurbase',
    summary: 'Voedingslijst met zuur-base waarden',
    details: `Deze app biedt een lijst aan waarin je de zuur-base waarden kan raadplegen.
    | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
  },
  {
    id: 15,
    category: 'Cloud Installaties',
    title: 'Canvas LMS',
    image: 'canvas.png',
    link: 'https://canvas.dirkb.cyou/',
    summary: 'Testomgeving',
    details: `Testomgeving met de open source versie van Canvas LMS.
    | Oracle Cloud Instance.
    | Virtualhost met toekenning domeinnaam.`,
  },
  {
    id: 16,
    category: 'Cloud Installaties',
    title: 'Just Do IT',
    image: 'justdoit.png',
    link: 'https://gcp.dirkb.cyou:3000/',
    summary: 'Todo applicatie',
    details: `Opdracht voor Arteveldehogeschool. 
    | Een todo-applicatie met Express, TypeORM (sqlite3), Handlebars, authenticatie met JSON Web Token.
    | Staat online op een Google Cloud Instance`,
  },
];

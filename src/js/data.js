export const navItems = [
  // { href: 'index.html', text: '<img src="images/logo.png" alt="logo">' },
  { href: 'index.html', text: '<i class="fa-solid fa-code"></i>' },
  { href: 'index.html', text: 'Portfolio' },
  { href: 'contact.html', text: 'Contact' },
];

export const info = {
  en: `
    <span>
       Programming for the web is my passion. Once a hobby, now an education
       Graduate Programming at Arteveldehogeschool (Ghent, Belgium).
     </span>
     <span>
       I am familiar with technologies such as HTML, CSS, Javascript, PHP, MYSQL,
       NodeJS, ExpressJS, React, Google Apps Script, ...
     </span>`,
  nl: `
    <span>
      Programmeren voor het web is mijn passie. Vroeger een hobby, nu een opleiding
      Graduaat Programmeren aan Arteveldehogeschool (Gent, België).
    </span>
    <span>
      Ik ben vertrouwd met technologieën als HTML, CSS, Javascript, PHP, MYSQL,
      NodeJS, ExpressJS, React, Google Apps Script, ...
    </span>`,
};

export const projects = [
  {
    id: 1,
    image: 'ileren.png',
    url: 'https://ileren.be/',
    nl: {
      linkText: 'Bekijk het project',
      category: 'HTML/CSS/JS',
      title: 'iLeren',
      summary: 'Edutools en online apps',
      details: `Website met educatieve online tools.
      | Bv. kruiswoordpuzzel, woordzoeker, galgje, waagstuk, mindmaps, ...'
      | HTML, CSS, Bootstrap, Javascript, JQuery.`,
    },
    en: {
      linkText: 'View the project',
      category: 'HTML/CSS/JS',
      title: 'iLearning',
      summary: 'Edutools and online apps',
      details: `Website with educational online tools.
       | Eg. crossword puzzle, word search, hangman, jeopardy, mind maps, ...'
       | HTML, CSS, Bootstrap, Javascript, JQuery.`,
    },
  },
  {
    id: 2,
    image: 'schuilplaats.png',
    url: 'https://schuilplaats.be/',
    nl: {
      linkText: 'Bekijk het project',
      category: 'HTML/CSS/JS',
      title: 'Schuilplaats',
      summary: 'Muziekstreaming',
      details: `Website waarop online muziek gestreamd wordt.
      | De albums kunnen gedownload worden.
      | Er kunnen ook een aantal teksten en partituren gedownload worden.
      | HTML, CSS, Bootstrap, Javascript.`,
    },
    en: {
      linkText: 'View the project',
      category: 'HTML/CSS/JS',
      title: 'Hiding Place',
      summary: 'Music streaming',
      details: `Website with online music streaming.
       | The albums can be downloaded.
       | Some lyrics and sheet music can also be downloaded.
       | HTML, CSS, Bootstrap, Javascript.`,
    },
  },
  {
    id: 3,
    image: 'nt2grammatica.png',
    url: 'https://cvogent.be/nt2grammatica',
    nl: {
      linkText: 'Bekijk het project',
      category: 'HTML/CSS/JS',
      title: 'Grammatica',
      summary: 'Grammatica voor anderstaligen',
      details: `Website met een online grammatica voor anderstalligen.
      | Voor de cursisten van CVO GENT.
      | HTML, CSS, Bootstrap, Javascript`,
    },
    en: {
      linkText: 'View the project',
      category: 'HTML/CSS/JS',
      title: 'Grammar',
      summary: 'Grammar for Dutch as a second language',
      details: `Website with an online Dutch grammar for non-native speakers.
       | For the students of CVO GENT.
       | HTML, CSS, Bootstrap, Javascript`,
    },
  },
  {
    id: 4,
    image: 'nt2digiboek.png',
    url: 'projects/nt2digiboek-sample/',
    nl: {
      linkText: 'Bekijk het project',
      category: 'HTML/CSS/JS',
      title: 'Digiboek',
      summary: 'Online handboeken',
      details: `Digiboek voor de leerkrachten van CVO GENT. 
      | Voor dit portfolio kan je een extract bekijken met één handboek.
      | Het origineel biedt alle handboeken aan.
      | HTML, CSS, Bootstrap, Javascript, JQuery, canvas`,
    },
    en: {
      linkText: 'View the project',
      category: 'HTML/CSS/JS',
      title: 'Digibook',
      summary: "Online teachers' books",
      details: `Digital books for the teachers of CVO GENT.
       | For this portfolio you can view an extract with one handbook.
       | The original digibook offers all handbooks for the teachers.
       | HTML, CSS, Bootstrap, Javascript, JQuery, canvas`,
    },
  },
  {
    id: 5,
    image: 'mimosa.png',
    url: 'https://dirkb.be/mimosa',
    nl: {
      linkText: 'Bekijk het project',
      category: 'PHP & SQL',
      title: 'Mimosa',
      summary: 'Fotogallerij',
      details: `Op deze website wordt een fotogallerij aangeboden.
      | Eigen MVC met PHP, Bootstrap 5, MySQL, gebruikersbeheer.`,
    },
    en: {
      linkText: 'View the project',
      category: 'PHP & SQL',
      title: 'Mimosa',
      summary: 'Photo gallery',
      details: `This website presents a photo gallery of jewellery.
       | My own MVC framework with PHP, Bootstrap 5, MySQL, user management.`,
    },
  },
  {
    id: 6,
    image: 'farmstand.png',
    url: 'https://dirkb.be/farmstand',
    nl: {
      linkText: 'Bekijk het project',
      category: 'PHP & SQL',
      title: 'Farmstand',
      summary: 'Oefenproject met eigen MVC-framework.',
      details: `Gebaseerd op de NodeJS versie van Colt Steele.
      | Eigen MVC met PHP, Bootstrap 5, MySQL, gebruikersbeheer.
      | <a href="https://github.com/pgm-dirkbouckaert/farmstand-medoo-mvc" target="_blank">GitHub Repo</a>`,
    },
    en: {
      linkText: 'View the project',
      category: 'PHP & SQL',
      title: 'Farm stand',
      summary: 'Training project with my own MVC framework.',
      details: `Based on Colt Steele's NodeJS version.
       | My own MVC framework with PHP, Bootstrap 5, MySQL, user management.
       | <a href="https://github.com/pgm-dirkbouckaert/farmstand-medoo-mvc" target="_blank">GitHub Repo</a>`,
    },
  },
  {
    id: 7,
    image: 'bestellingen-voeding.png',
    url: 'https://cvogent.be/bestellingen-voeding',
    nl: {
      linkText: 'Bekijk het project',
      category: 'PHP & SQL',
      title: 'CVO Voeding',
      summary: 'Oefenproject met eigen MVC-framework.',
      details: `Ontwerp voor CVO GENT.
      | Geen toegang zonder cvogent-account.
      | Eigen MVC met PHP, Bootstrap 5, MySQL, gebruikersbeheer.`,
    },
    en: {
      linkText: 'View the project',
      category: 'PHP & SQL',
      title: 'CVO Food',
      summary: 'Training project with my own MVC framework.',
      details: `Design for CVO GENT.
       | No access without cvogent account.
       | My own MVC framework with PHP, Bootstrap 5, MySQL, user management.`,
    },
  },
  {
    id: 8,
    image: 'cvobib.png',
    url: 'https://cvogent.be/cvobib/',
    nl: {
      linkText: 'Bekijk het project',
      category: 'PHP & SQL',
      title: 'CVO BIB',
      summary: 'Bibliotheekapplicatie',
      details: `App voor de schoolbibliotheek van CVO GENT.
      | Publiek gedeelte voor de cursisten.
      | Afgeschermd gedeelte enkel voor personeel van CVO GENT.
      | PHP MVC met CodeIgniter 4.
      | <a href="https://github.com/pgm-dirkbouckaert/ci4-school-library-system" target="_blank">GitHub Repo</a>`,
    },
    en: {
      linkText: 'View the project',
      category: 'PHP & SQL',
      title: 'CVO LIBRARY',
      summary: 'Library application',
      details: `App for the school library of CVO GENT.
       | Public area for the students.
       | Logged in area only for CVO GENT staff.
       | PHP MVC with CodeIgniter 4.
       | <a href="https://github.com/pgm-dirkbouckaert/ci4-school-library-system" target="_blank">GitHub Repo</a>`,
    },
  },
  {
    id: 9,
    image: 'nt2grammatica-android.png',
    url: 'https://play.google.com/store/apps/details?id=be.ileren.grammatica',
    nl: {
      linkText: 'Bekijk het project',
      category: 'Android Apps',
      title: 'NT2 Grammatica',
      summary: 'Grammatica voor anderstaligen',
      details: `Android app die een grammatica voor anderstalligen aanbiedt.
      | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
    en: {
      linkText: 'View the project',
      category: 'Android Apps',
      title: 'NT2 Grammar',
      summary: 'Grammar for Dutch as a second language',
      details: `Android app that offers a Dutch grammar for non-native speakers.
       | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
  },
  {
    id: 10,
    image: 'nt2werkwoorden.png',
    url: 'https://play.google.com/store/apps/details?id=be.ileren.werkwoorden',
    nl: {
      linkText: 'Bekijk het project',
      category: 'Android Apps',
      title: 'NT2 Werkwoorden',
      summary: 'Studeer onregelmatige werkwoorden',
      details: `Android app waarmee je de onregelmatige werkwoorden kan studeren.
      | Bedoeld voor anderstaligen.
      | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
    en: {
      linkText: 'View the project',
      category: 'Android Apps',
      title: 'NT2 Verbs',
      summary: 'Practice Dutch irregular verbs',
      details: `Android app for studying the Dutch irregular verbs.
       | Intended for non-native speakers.
       | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
  },
  {
    id: 11,
    image: 'nt2voorzetsels.png',
    url: 'https://play.google.com/store/apps/details?id=be.ileren.voorzetsels',
    nl: {
      linkText: 'Bekijk het project',
      category: 'Android Apps',
      title: 'NT2 Voorzetsels',
      summary: 'Studeer voorzetsels',
      details: `Android app waarmee je de vaste voorzetsels kan inoefenen.
      | Bedoeld voor anderstaligen.
      | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
    en: {
      linkText: 'View the project',
      category: 'Android Apps',
      title: 'NT2 Prepositions',
      summary: 'Practice Dutch prepositions',
      details: `Android app for studying the Dutch fixed prepositions.
       | Intended for non-native speakers.
       | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
  },
  {
    id: 12,
    image: 'nt2etenendrinken.png',
    url: 'https://play.google.com/store/apps/details?id=ileren.be.nt2etenendrinken',
    nl: {
      linkText: 'Bekijk het project',
      category: 'Android Apps',
      title: 'NT2 Eten en Drinken',
      summary: 'Studeer woordenschat',
      details: `Met deze app kan je nieuwe woorden leren over eten en drinken.
      | Inclusief audio.
      | Bedoeld voor anderstaligen.
      | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
    en: {
      linkText: 'View the project',
      category: 'Android Apps',
      title: 'NT2 Food and Drinks',
      summary: 'Practice Dutch words about food and drinks',
      details: `With this app you can learn new Dutch words about food and drink.
       | Including audio.
       | Intended for non-native speakers.
       | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
  },
  {
    id: 13,
    image: 'medischrekenen.png',
    url: 'https://play.google.com/store/apps/details?id=appinventor.ai_diboma.MedischRekenen',
    nl: {
      linkText: 'Bekijk het project',
      category: 'Android Apps',
      title: 'Medisch Rekenen',
      summary: 'Maak medische berekeningen',
      details: `Met deze app kan je verschillende medische berekeningen maken.
      | App Inventor, Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
    en: {
      linkText: 'View the project',
      category: 'Android Apps',
      title: 'Medical Calculation',
      summary: 'App for medical calculations',
      details: `With this app you can make various medical calculations.
       | App Inventor, Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
  },
  {
    id: 14,
    image: 'zuurbase.png',
    url: 'https://play.google.com/store/apps/details?id=be.ileren.zuurbase',
    nl: {
      linkText: 'Bekijk het project',
      category: 'Android Apps',
      title: 'Zuur-Base Lijst',
      summary: 'Voedingslijst met zuur-base waarden',
      details: `Deze app biedt een lijst aan waarin je de zuur-base waarden kan raadplegen.
      | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
    en: {
      linkText: 'View the project',
      category: 'Android Apps',
      title: 'Acid-Base List',
      summary: 'Food list with acid-base values',
      details: `This app provides a list where you can consult the acid-base values.
       | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
  },
  {
    id: 15,
    image: 'canvas.png',
    url: 'https://canvas.dirkb.cyou/',
    nl: {
      linkText: 'Bekijk het project',
      category: 'Cloud Installaties',
      title: 'Canvas LMS',
      summary: 'Testomgeving',
      details: `Testomgeving met de open source versie van Canvas LMS.
      | Oracle Cloud Instance.
      | Virtualhost met toekenning domeinnaam.
      | <a href="https://github.com/instructure/canvas-lms" target="_blank">GitHub Repo</a>`,
    },
    en: {
      linkText: 'View the project',
      category: 'Cloud Installations',
      title: 'Canvas LMS',
      summary: 'Test environment',
      details: `Test environment with the open source version of Canvas LMS.
       | Oracle Cloud Instance.
       | Virtualhost with domain name assignment.
       | <a href="https://github.com/instructure/canvas-lms" target="_blank">GitHub Repo</a>`,
    },
  },
  {
    id: 16,
    image: 'justdoit.png',
    url: 'https://gcp.dirkb.cyou:3000/',
    nl: {
      linkText: 'Bekijk het project',
      category: 'Cloud Installaties',
      title: 'Just Do IT',
      summary: 'Todo applicatie',
      details: `Opdracht voor Arteveldehogeschool. 
      | Een todo-applicatie met Express, TypeORM (sqlite3), Handlebars, authenticatie met JSON Web Token.
      | Staat online op een Google Cloud Instance.`,
    },
    en: {
      linkText: 'View the project',
      category: 'Cloud Installations',
      title: 'Just Do IT',
      summary: 'Todo application',
      details: `Assignment for Arteveldehogeschool (Ghent, Belglium).
       | A todo application with Express, TypeORM (sqlite3), Handlebars, authentication with JSON Web Token.
       | You can find the app online on a Google Cloud Instance.`,
    },
  },
];

export const contactFormInputs = [
  { type: 'text', name: 'firstname', required: true },
  { type: 'text', name: 'lastname', required: true },
  { type: 'text', name: 'company', required: false },
  { type: 'email', name: 'email', required: true },
  { type: 'text', name: 'phone', required: false },
  { type: 'textarea', name: 'message', required: true },
  { type: 'submit', name: 'submit' },
];

export const contacFormLabels = {
  firstname: {
    en: 'First Name',
    nl: 'Voornaam',
  },
  lastname: {
    en: 'Last Name',
    nl: 'Familienaam',
  },
  company: {
    en: 'Company',
    nl: 'Bedrijf',
  },
  email: {
    en: 'Email',
    nl: 'E-mail',
  },
  phone: {
    en: 'Phone',
    nl: 'Telefoon',
  },
  message: {
    en: 'Your question or message',
    nl: 'Jouw vraag of bericht',
  },
  submit: {
    en: 'Submit',
    nl: 'Verzenden',
  },
};

export const contactFormMessages = {
  success: {
    en: 'Thanks for your message. I will contact you as soon as possible.',
    nl: 'Bedankt voor je bericht. Ik neem zo snel mogelijk contact met jou op.',
  },
  error: {
    en: 'Sorry, something went wrong. Try again.',
    nl: 'Sorry, er ging iets fout. Probeer opnieuw.',
  },
};

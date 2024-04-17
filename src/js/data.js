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
       Associate Degree in Computer Programming at Arteveldehogeschool (Ghent, Belgium).
     </span>
     <span>
       I am familiar with technologies such as HTML, CSS, Bootstrap, Javascript, PHP, MYSQL,
       NodeJS, ExpressJS, React, Google Apps Script, ...
     </span>`,
  nl: `
    <span>
      Programmeren voor het web is mijn passie. Vroeger een hobby, nu een opleiding
      Graduaat Programmeren aan Arteveldehogeschool (Gent, België).
    </span>
    <span>
      Ik ben vertrouwd met technologieën als HTML, CSS, Bootstrap, Javascript, PHP, MYSQL,
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
      categoryIcons: ['html.png', 'css.png', 'bootstrap.png', 'js.png', 'jquery.png'],
      title: 'iLeren',
      summary: 'Edutools en online apps',
      details: `Website met educatieve online tools.
      | Bv. kruiswoordpuzzel, woordzoeker, galgje, waagstuk, mindmaps, ...'
      | HTML, CSS, Bootstrap, Javascript, JQuery.`,
    },
    en: {
      linkText: 'View the project',
      category: 'HTML/CSS/JS',
      categoryIcons: ['html.png', 'css.png', 'bootstrap.png', 'js.png', 'jquery.png'],
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
      categoryIcons: ['html.png', 'css.png', 'bootstrap.png', 'js.png'],
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
      categoryIcons: ['html.png', 'css.png', 'bootstrap.png', 'js.png'],
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
      categoryIcons: ['html.png', 'css.png', 'bootstrap.png', 'js.png'],
      title: 'Grammatica',
      summary: 'Grammatica voor anderstaligen',
      details: `Website met een online grammatica voor anderstalligen.
      | Voor de cursisten van CVO GENT.
      | HTML, CSS, Bootstrap, Javascript`,
    },
    en: {
      linkText: 'View the project',
      category: 'HTML/CSS/JS',
      categoryIcons: ['html.png', 'css.png', 'bootstrap.png', 'js.png'],
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
      categoryIcons: ['html.png', 'css.png', 'bootstrap.png', 'js.png', 'jquery.png'],
      title: 'Digiboek',
      summary: 'Online handboeken',
      details: `Digiboek voor de leerkrachten van CVO GENT. 
      | HTML, CSS, Bootstrap, Javascript, JQuery, canvas
      | Voor dit portfolio kan je een versie bekijken met één handboek.`,
    },
    en: {
      linkText: 'View the project',
      category: 'HTML/CSS/JS',
      categoryIcons: ['html.png', 'css.png', 'bootstrap.png', 'js.png', 'jquery.png'],
      title: 'Digibook',
      summary: "Online teachers' books",
      details: `Digital books for the teachers of CVO GENT.
      | HTML, CSS, Bootstrap, Javascript, JQuery, canvas
      | For this portfolio you can view an extract with one handbook.`,
    },
  },
  {
    id: 5,
    image: 'mimosa.png',
    // url: 'https://dirkb.be/mimosa',
    nl: {
      linkText: 'Bekijk het project',
      category: 'PHP & SQL',
      categoryIcons: [
        'php.png',
        'sql.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
      title: 'Mimosa',
      summary: 'Fotogallerij',
      details: `Op deze website wordt een fotogallerij aangeboden.
      | Eigen MVC met PHP, Bootstrap 5, MySQL, gebruikersbeheer.
      | Dit project staat niet meer online.`,
    },
    en: {
      linkText: 'View the project',
      category: 'PHP & SQL',
      categoryIcons: [
        'php.png',
        'sql.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
      title: 'Mimosa',
      summary: 'Photo gallery',
      details: `This website presents a photo gallery of jewellery.
      | Custom MVC framework with PHP, Bootstrap 5, MySQL, user management.
      | This project is no longer online.`,
    },
  },
  {
    id: 6,
    image: 'farmstand.png',
    url: 'https://dirkb.be/farmstand',
    nl: {
      linkText: 'Bekijk het project',
      category: 'PHP & SQL',
      categoryIcons: [
        'php.png',
        'sql.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
      title: 'Farmstand',
      summary: 'Oefenproject met eigen MVC-framework.',
      details: `Gebaseerd op de NodeJS versie van Colt Steele.
      | Eigen MVC met PHP, Bootstrap 5, MySQL, gebruikersbeheer.
      | <a href="https://github.com/pgm-dirkbouckaert/farmstand-medoo-mvc" target="_blank">GitHub Repo</a>`,
    },
    en: {
      linkText: 'View the project',
      category: 'PHP & SQL',
      categoryIcons: [
        'php.png',
        'sql.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
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
    // url: 'https://cvogent.be/bestellingen-voeding',
    nl: {
      linkText: 'Bekijk het project',
      category: 'PHP & SQL',
      categoryIcons: [
        'php.png',
        'sql.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
      title: 'CVO Voeding',
      summary: 'Oefenproject met eigen MVC-framework.',
      details: `Eigen MVC met PHP, Bootstrap 5, MySQL, gebruikersbeheer.
      | Ontwerp voor CVO GENT. Geen toegang zonder cvogent-account.
      | Dit project staat niet meer online.`,
    },
    en: {
      linkText: 'View the project',
      category: 'PHP & SQL',
      categoryIcons: [
        'php.png',
        'sql.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
      title: 'CVO Food',
      summary: 'Training project with my own MVC framework.',
      details: `Custom MVC framework with PHP, Bootstrap 5, MySQL, user management.
      | Design for CVO GENT. No access without cvogent account.
      | This project is no longer online.`,
    },
  },
  {
    id: 8,
    image: 'cvobib.png',
    url: 'https://cvogent.be/cvobib/',
    nl: {
      linkText: 'Bekijk het project',
      category: 'PHP & SQL',
      categoryIcons: [
        'php.png',
        'sql.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
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
      categoryIcons: [
        'php.png',
        'sql.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
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
      categoryIcons: [
        'android.png',
        'java.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
      title: 'NT2 Grammatica',
      summary: 'Grammatica voor anderstaligen',
      details: `Android app die een grammatica voor anderstalligen aanbiedt.
      | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
    en: {
      linkText: 'View the project',
      category: 'Android Apps',
      categoryIcons: [
        'android.png',
        'java.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
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
      categoryIcons: [
        'android.png',
        'java.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
      title: 'NT2 Werkwoorden',
      summary: 'Studeer onregelmatige werkwoorden',
      details: `Android app waarmee je de onregelmatige werkwoorden kan studeren.
      | Bedoeld voor anderstaligen.
      | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
    en: {
      linkText: 'View the project',
      category: 'Android Apps',
      categoryIcons: [
        'android.png',
        'java.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
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
      categoryIcons: [
        'android.png',
        'java.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
      title: 'NT2 Voorzetsels',
      summary: 'Studeer voorzetsels',
      details: `Android app waarmee je de vaste voorzetsels kan inoefenen.
      | Bedoeld voor anderstaligen.
      | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
    en: {
      linkText: 'View the project',
      category: 'Android Apps',
      categoryIcons: [
        'android.png',
        'java.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
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
      categoryIcons: [
        'android.png',
        'java.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
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
      categoryIcons: [
        'android.png',
        'java.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
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
      categoryIcons: [
        'android.png',
        'java.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
      title: 'Medisch Rekenen',
      summary: 'Maak medische berekeningen',
      details: `Met deze app kan je verschillende medische berekeningen maken.
      | App Inventor, Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
    en: {
      linkText: 'View the project',
      category: 'Android Apps',
      categoryIcons: [
        'android.png',
        'java.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
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
      categoryIcons: [
        'android.png',
        'java.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
      title: 'Zuur-Base Lijst',
      summary: 'Voedingslijst met zuur-base waarden',
      details: `Deze app biedt een lijst aan waarin je de zuur-base waarden kan raadplegen.
      | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
    en: {
      linkText: 'View the project',
      category: 'Android Apps',
      categoryIcons: [
        'android.png',
        'java.png',
        'html.png',
        'css.png',
        'bootstrap.png',
        'js.png',
      ],
      title: 'Acid-Base List',
      summary: 'Food list with acid-base values',
      details: `This app provides a list where you can consult the acid-base values.
       | Android Studio, Cordova, HTML, CSS, Bootstrap, Javascript`,
    },
  },
  {
    id: 15,
    image: 'canvas.png',
    // url: 'https://canvas.dirkb.cyou/',
    nl: {
      linkText: 'Bekijk het project',
      category: 'Cloud Installaties',
      categoryIcons: ['ruby.png'],
      title: 'Canvas LMS',
      summary: 'Testomgeving',
      details: `Testomgeving met de open source versie van Canvas LMS.
      | Oracle Cloud Instance.
      | Virtualhost met toekenning domeinnaam.
      | <a href="https://github.com/instructure/canvas-lms" target="_blank">GitHub Repo</a>
      | Dit project staat niet meer online.`,
    },
    en: {
      linkText: 'View the project',
      category: 'Cloud Installations',
      categoryIcons: ['ruby.png'],
      title: 'Canvas LMS',
      summary: 'Test environment',
      details: `Test environment with the open source version of Canvas LMS.
       | Oracle Cloud Instance.
       | Virtualhost with domain name assignment.
       | <a href="https://github.com/instructure/canvas-lms" target="_blank">GitHub Repo</a>
       | This project is no longer online.`,
    },
  },
  {
    id: 16,
    image: 'justdoit.png',
    // url: 'https://gcp.dirkb.cyou:3000/',
    nl: {
      linkText: 'Bekijk het project',
      category: 'Cloud Installaties',
      categoryIcons: [
        'nodejs.png',
        'express.png',
        'typeorm.png',
        'handlebars.png',
        'css.png',
        'js.png',
      ],
      title: 'Just Do IT',
      summary: 'Todo applicatie',
      details: `Opdracht voor Arteveldehogeschool. 
      | Een todo-applicatie met Express, TypeORM (sqlite3), Handlebars, authenticatie met JSON Web Token.
      | Dit project staat niet meer online.`,
    },
    en: {
      linkText: 'View the project',
      category: 'Cloud Installations',
      categoryIcons: [
        'nodejs.png',
        'express.png',
        'typeorm.png',
        'handlebars.png',
        'css.png',
        'js.png',
      ],
      title: 'Just Do IT',
      summary: 'Todo application',
      details: `Assignment for Arteveldehogeschool (Ghent, Belglium).
       | A todo application with Express, TypeORM (sqlite3), Handlebars, authentication with JSON Web Token.
       | This project is no longer online.`,
    },
  },
];

export const contactFormInputs = [
  { type: 'text', name: 'firstname', required: true },
  { type: 'text', name: 'lastname', required: true },
  { type: 'text', name: 'company', required: false },
  { type: 'text', name: 'phone', required: false },
  { type: 'email', name: 'email', required: true },
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
  phone: {
    en: 'Phone',
    nl: 'Telefoon',
  },
  email: {
    en: 'Email',
    nl: 'E-mail',
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
  simulation: {
    en: 'This is a simulation. Your message will not be sent.',
    nl: 'Dit is een simulatie. Jouw bericht wordt niet verzonden.',
  },
};

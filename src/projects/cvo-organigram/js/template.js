// Node template
// -------------
// const myColors = ["meteorite", "red", "green", "blue", "wine", "brown", "pink", "tomato", "amethyst", "babyblue"];
const myColors = {
  "#462282": "meteorite",
  "#9966cc": "amethyst",
  "#d121c2": "magenta",
  "#ff69b4": "pink",
  "#8f185e": "wine",
  "#b71c1c": "red",
  "#ff4500": "tomato",
  "#f29200": "orange",
  "#207599": "blue",
  "#89cff0": "babyblue",
  "#27874b": "green",
  "#9b9d16": "kaki",
  "#7dcaac": "turquoise",
  "#8f5b1e": "brown",
  "#bc8f8f": "rosybrown"
}

const fotoUrl = "https://cvogent.be/images/organigram/"

// const myImages = ["aldine-aaten.png", "alice-delvigne.png", "ann-deras.png", "arabella-weyts.png", "aude-gryson.png", "bie-boxstaele.png", "bruno-noel.png", "caroline-vossen.png", "conan-martens.png", "david-duseuil.png", "dir.txt", "dirk-bouckaert.png", "eline-buysse.png", "eline-demoor.png", "elsje-vandewiele.png", "heleen-roelandts.png", "helene-vandenheede.png", "hilde-vankerkhove.png", "ilse-verheecken.png", "isabel-vanzieleghem.png", "jan-vanolmen.png", "johan-vanbree.png", "karin-david.png", "liedewei-duquet.png", "logo1.png", "logo2.png", "mike-vincke.png", "nathalie-logghe.png", "nathalie-muyllaert.png", "nick-zwart.png", "onbekend-man.png", "onbekend-vrouw.png", "paul-vandecotte.png", "peter-debosschere.png", "peter-peyskens.png", "saar-deroo.png", "saar-vandenbossche.png", "sabrina-dossche.png", "sarah-merchiers.png", "selena-bastiaens.png", "sophie-peelman.png", "steffi-vandriessche.png", "ulrique-dhondt.png", "valerie-marescau.png", "veronique-remmery.png", "veronique-vervinckt.png", "wim-janssens.png",];

let myImages = [];
const url = "https://cvogent.be/images/organigram/index.php";
fetch(url, { mode: 'cors', "Access-Control-Allow-Origin": "*" })
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    for (let img of data) myImages.push(img);
  })
  .catch(function (error) {
    console.log(error);
  });;


const myNodeTemplate = function (data) {

  // EDIT MODE
  // --------
  if (this.editMode) {

    // root node
    if (data.id == "rootNode") {
      return `
          <img alt="logo" src="https://cvogent.be/images/organigram/logo1.png" class="img-fluid" width="125">
          <i class="oci oci-info-circle show-info-icon" role="button" data-node-id="${data.id}"></i>
          <span class="material-icons show-node-menu-icon" role="button" data-node-id="${data.id}">more_horiz</span>
          <div class="nodeMenu d-none" id="nodeMenu-${data.id}">
            <div class="btnNodeMenu noUserSelect clearfix" id="btnAddNode" data-node-id="${data.id}" role="button">
              <span class="material-icons float-start w-25">add</span>
              <span class="float-start ms-1">Toevoegen</span>
            </div>
          </div>
          `;
    }
    // child nodes
    return `
        <div class="functie fw-light small text-end">${data.functie}</div>
        <div class="naam mt-3 mb-2 text-center">${data.naam}</div>
        <i class="oci oci-info-circle show-info-icon" role="button" data-node-id="${data.id}"></i>
        <span class="material-icons show-node-menu-icon" role="button" data-node-id="${data.id}">more_horiz</span>
        <div class="nodeMenu d-none" id="nodeMenu-${data.id}">
          <div class="btnNodeMenu noUserSelect clearfix" id="btnEditNode" data-node-id="${data.id}" role="button">
            <span class="material-icons float-start w-25">edit</span>
            <span class="float-start ms-1">Bewerken</span>
          </div>
          <div class="btnNodeMenu noUserSelect clearfix" id="btnAddNode" data-node-id="${data.id}" role="button">
            <span class="material-icons float-start w-25">add</span>
            <span class="float-start ms-1">Toevoegen</span>
          </div>
          <div class="btnNodeMenu noUserSelect clearfix" id="btnDeleteNode" data-node-id="${data.id}" role="button">
            <span class="material-icons float-start w-25">delete</span>
            <span class="float-start ms-1">Verwijderen</span>
          </div>
        </div>
        `;

  }

  // READ MODE
  // ---------
  if (!this.editMode) {

    // root node
    if (data.id == "rootNode") {
      return `
        <img alt="logo" src="https://cvogent.be/images/organigram/logo1.png" class="img-fluid" width="125">
        <i class="oci oci-info-circle show-info-icon" role="button" data-node-id="${data.id}"></i>
        `;
    }
    // child nodes
    return `
        <div class="functie fw-light small text-end">${data.functie}</div>
        <div class="naam mt-3 mb-2 text-center">${data.naam}</div>
        <i class="oci oci-info-circle show-info-icon" role="button" data-node-id="${data.id}"></i>
        `;
  }

};




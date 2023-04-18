// -----------------------------------
// CALLBACK FUNCTION ON CREATING NODES
// -----------------------------------
function myCreateNodeCallback($node, data) {
  $node.on('click', function (event) {
    // when Ctrl+click: center on node
    if (event.ctrlKey && !$(event.target).is('.edge, .toggleBtn')) {
      var $this = $(this);
      var $chart = $this.closest('.orgchart');
      var newX = window.parseInt(($chart.outerWidth(true) / 2) - ($this.offset().left - $chart.offset().left) - ($this.outerWidth(true) / 2));
      var newY = window.parseInt(($chart.outerHeight(true) / 3) - ($this.offset().top - $chart.offset().top) - ($this.outerHeight(true) / 3));
      $chart.css({
        'transform': 'matrix(1, 0, 0, 1, ' + newX + ', ' + newY + ')',
        "transition": "transform 1s",
      });
      setTimeout(function () {
        $(".orgchart").css({ "transition": "" });
      }, 1000);
    }
  });
}


// ---------------
// SEARCH FUNCTION
// ---------------
function search(chart, value) {
  const foundNodes = chart.searchNodes(value);
  const foundIds = foundNodes.map(node => node.id);
  // console.log('foundIds:', foundIds)
  if (foundIds.length > 0) {
    chart.clearFilterResult();
    chart.showSearchResults(foundIds);
    if ($("#search-noresults").css("display") == "block") $("#search-noresults").toggle(300);
  } else {
    $("#search-noresults").toggle(300);
  }
}


// --------------------------
// EVENT LISTENER FOR TOOLBAR
// --------------------------
function setToolbarListener(chart, btn) {

  btn.addEventListener("click", (e) => {
    const btnId = e.target.id;
    // Expand all
    if (btnId == "btnExpand") { chart.expandAll(); }
    // Collapse all
    else if (btnId == "btnCollapse") {
      chart.$chart.removeClass('noncollapsable');
      chart.hideChildren(chart.$chart.find('.node:first'));
    }
    // Fit
    else if (btnId == "btnFit") { chart.fit() }
    // Refresh
    else if (btnId == "btnRefresh") { chart.refresh() }
    // Zoom in
    else if (btnId == "btnZoomIn") { chart.zoomInOnClick(e) }
    // Zoom out
    else if (btnId == "btnZoomOut") { chart.zoomOutOnClick(e) }
  });
}


// ------------------------------------------------
// EVENT LISTENER FOR OFFCANVAS MENU (save, export)
// ------------------------------------------------
function setOffcanvasMenuListener(chart, btn, editMode) {
  btn.addEventListener("click", (e) => {
    const nodeData = chart.options.data;
    // const nodeData = chart.getHierarchy(true);
    const btnId = e.target.id;
    if (btnId == "btnSave") { saveDataSource(chart) }
    else if (btnId == "btnExportJSON") { chart.exportJSON(nodeData, "organigram"); }
    else if (btnId == "btnExportPDF") { exportPDF("organigram") /* chart.export("Organigram", "pdf"); */ }
    else if (btnId == "btnExportPNG") { exportPNG("organigram") /* chart.export("Organigram", "png"); */ }
    document.getElementById("btnCloseMenu").click();
  });
}


// --------------------------------------------------------------
// EVENT LISTENER FOR SHOWING INFO (show-info-icon in nodes)
// --------------------------------------------------------------
function setInfoIconListener(chart, icon) {

  const navbarMenu = document.getElementById("navbarMenu");

  icon.addEventListener("click", (e) => {
    // Show navbar info
    if (navbarMenu) navbarMenu.classList.add("d-none");
    document.getElementById("navbarInfo").classList.remove("d-none");
    document.getElementById("btnShowInfo").click();

    // Get node details
    const nodeId = e.target.dataset.nodeId;
    const node = chart.getNode(nodeId);

    // Show foto (in offcanvas-header)
    if (node.foto != "" && node.id != "rootNode") {
      document.getElementById("info-foto").innerHTML = `<img src="${fotoUrl}${node.foto}" class="img-thumbnail rounded-circle" width="100" alt="logo">`;
    } else {
      document.getElementById("info-foto").innerHTML = `<img src="${fotoUrl}logo2.png" width="100" alt="logo">`;
    }

    // Construct & add html (in navbarInfo-body)
    let html = "";
    if (node.functie != "") { html += `<div id="info-functie">${node.functie}</div>` }
    if (node.naam != "") { html += `<div id="info-naam">${node.naam}</div>` }
    if (node.email != "") { html += `<div id="info-email"><a href="mailto:${node.email}">${node.email}</a></div>` }
    // if (node.taken != "") { html += `<div id="info-taken"><a href="${node.taken}" target="_blank">Taakomschrijving</a></div>` }
    // if (node.taken != "") { html += `<div id="info-taken>${node.taken}</div>` }
    if (node.taken != "") { html += `<div id="info-taken class="trix-content">Taken:<br>${node.taken}</div>` }
    document.getElementById("navbarInfo-body").innerHTML = html;

    // When the navbar is hidden
    document.getElementById('navbarInfo').addEventListener('hidden.bs.offcanvas', event => {
      if (navbarMenu) navbarMenu.classList.remove("d-none");
      document.getElementById("navbarInfo").classList.add("d-none");
      document.getElementById("navbarInfo-body").innerHTML = "";
    })
  });

}


// -------------------------------------------------------------------
// EVENT LISTENER FOR SHOWING NODE MENU (show-node-menu-icon in nodes)
// -------------------------------------------------------------------
function setNodeMenuIconListener(chart, icon) {
  icon.addEventListener("click", (e) => {
    // Hide all node menus
    chart.$chart.find('.nodeMenu').addClass('d-none');
    // Show current node menu
    const nodeId = e.target.dataset.nodeId;
    document.getElementById(`nodeMenu-${nodeId}`).classList.toggle("d-none");
  })
}


// --------------------------------------------------------
// EVENT LISTENER FOR NODE MENU ACTIONS (add, edit, delete)
// --------------------------------------------------------
function setNodeMenuActionListener(chart, btn) {

  btn.addEventListener("click", (e) => {

    // Hide all node menus
    // -------------------
    chart.$chart.find('.nodeMenu').addClass('d-none');

    // Get data
    // --------
    const btnId = e.target.id;
    const currentNodeId = e.target.dataset.nodeId;
    const currentNodeInfo = chart.getNode(currentNodeId);
    // console.log('currentNodeInfo:', currentNodeInfo)
    const elCurrentNode = $("#" + currentNodeId);
    // console.log('elCurrentNode:', elCurrentNode)
    let className = currentNodeInfo.className;
    if (currentNodeId == "rootNode") className = getRandomColor(Object.values(myColors));

    // ADD NEW NODE
    // ------------
    if (btnId == "btnAddNode") {
      const newNodeId = getUniqueId();
      const newNode = getEmptyNode(newNodeId, className);
      // Add new node to chart DOM
      const nodeVals = [newNode];
      if (!elCurrentNode.siblings('.nodes').length) {
        var rel = nodeVals.length > 1 ? '110' : '100';
        newNode.relationship = "rel";
        chart.addChildren(elCurrentNode, nodeVals.map(function (item) {
          return newNode;
        }));
        chart.showChildren(elCurrentNode);

      } else {
        newNode.relationship = "110";
        chart.addSiblings(elCurrentNode.siblings('.nodes').find('.node:first'), nodeVals.map(function (newNode) {
          return newNode;
        }));
        chart.showChildren(elCurrentNode);
      }

      // Add new node to chart data
      // --------------------------
      chart.addNode(currentNodeId, newNode);

      // Set event listeners for new node
      // --------------------------------
      // info icon
      const newInfoIcon = document.querySelector("#" + newNodeId + " .show-info-icon");
      setInfoIconListener(chart, newInfoIcon);
      // node menu icon
      const newNodeMenuIcon = document.querySelector("#" + newNodeId + " .show-node-menu-icon");
      setNodeMenuIconListener(chart, newNodeMenuIcon)
      // node menu actions
      document.querySelectorAll("#nodeMenu-" + newNodeId + " .btnNodeMenu").forEach(btn => {
        setNodeMenuActionListener(chart, btn);
      });
    }

    // SHOW FORM TO EDIT CURRENT NODE
    // ------------------------------
    else if (btnId == "btnEditNode") {

      // Set info in form
      // ----------------
      // id (= verborgen veld)
      document.getElementById("currentNodeId").value = currentNodeInfo.id;
      // className (= verborgen veld = huidige kleur)
      document.getElementById("currentClassName").value = currentNodeInfo.className;
      // naam
      document.getElementById("modalEdit-nodeNaam").innerText = currentNodeInfo.naam;
      document.getElementById("naam").value = currentNodeInfo.naam;
      // functie
      document.getElementById("functie").value = currentNodeInfo.functie;
      // email
      document.getElementById("email").value = currentNodeInfo.email;
      // foto
      // document.getElementById("foto").value = currentNodeInfo.foto;
      let optionsHtml = `<option value=""></option>`;
      for (let image of myImages) {
        optionsHtml += `<option value="${image}" ${currentNodeInfo.foto == image ? "selected" : ""}>${image}</option>`
      }
      document.getElementById("foto").innerHTML = optionsHtml;
      // kleur
      document.getElementById("kleur").value = getColorName(myColors, currentNodeInfo.className);
      document.getElementById('kleur').dispatchEvent(new Event('input', { bubbles: true }));
      // taken
      document.querySelector("trix-editor").innerHTML = currentNodeInfo.taken;
      // Alternatieve manier om de bestaande taken naar de trix-editor te schrijven:
      // const editor = document.querySelector("trix-editor").editor;
      // const doc = editor.getDocument();
      // editor.setSelectedRange([0, doc.toString().length]);
      // editor.insertHTML(currentNodeInfo.taken);

      // Show modal
      // ----------
      const modalEdit = new bootstrap.Modal('#modalEdit');
      modalEdit.show();
    }

    // DELETE CURRENT NODE
    // -------------------
    else if (btnId == "btnDeleteNode") {
      // Show modal
      const modalDelete = new bootstrap.Modal('#modalDelete');
      modalDelete.show();
      // Set info in modal
      document.getElementById("modalDelete-nodeNaam").innerText = currentNodeInfo.naam;
      // Handle delete node
      const btnDelete = document.getElementById("modalDelete-btnDelete");
      btnDelete.addEventListener("click", function (e) {
        chart.removeNodes(elCurrentNode); // remove from DOM
        chart.deleteNode(currentNodeId);
        modalDelete.hide();
      });
    }
  })
}


// ---------------------------------------------
// HANDLE FORM SUBMISSION FOR SAVING EDITED NODE
// ---------------------------------------------
function handleFormSubmit(chart, form) {

  // Get data
  // --------
  const formData = new FormData(form);
  // for (let [key, value] of formData.entries()) {
  //   console.log(`${key}: ${value}`);
  // }

  const currentNodeId = formData.get("currentNodeId");
  const currentClassName = formData.get("currentClassName");

  const dataObj = {
    naam: formData.get("naam") || "",
    functie: formData.get("functie") || "",
    email: formData.get("email") || "",
    foto: formData.get("foto") || "",
    taken: formData.get("taken") || "",
    className: myColors[formData.get("kleur")] || ""
  }
  // console.log('dataObj:', dataObj)

  // Edit node
  // ---------
  const editedNode = chart.updateNode(currentNodeId, dataObj);
  // console.log('editedNode:', editedNode);

  // Change node data in DOM
  // -----------------------
  document.querySelector(`#${currentNodeId} .naam`).innerHTML = dataObj.naam;
  document.querySelector(`#${currentNodeId} .functie`).innerHTML = dataObj.functie;
  if (editedNode.className != currentClassName) {
    const currentNode = document.getElementById(currentNodeId);
    currentNode.classList.remove(currentClassName);
    currentNode.classList.add(editedNode.className);
  }

  // Reset form and hide modal
  // ------------------------
  form.reset();
  document.getElementById("modalEdit-btnClose").click();

}


// ----------
// UTILITIES
// ----------

// Get unique ID
// -------------
function getUniqueId() {
  // return (new Date().getTime()) * 1000 + Math.floor(Math.random() * 1001);
  return "n" + Date.now();

};

//  Get random integer
//  ------------------
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//  Get random color from array of colors
//  -------------------------------------
function getRandomColor(arrColors, exclude = null) {
  if (exclude) {
    const newArrColors = arrColors.filter(color => color != exclude);
    const randomIndex = getRandomInt(0, newArrColors.length);
    return newArrColors[randomIndex];
  }
  const randomIndex = getRandomInt(0, arrColors.length)
  return arrColors[randomIndex];
}

// Get color name from object (by value = by color name)
// -----------------------------------------------------
function getColorName(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}

// Get an empty node
// -----------------
function getEmptyNode(id, className) {
  return {
    id: id, collapsed: false, naam: "Naam", functie: "Functie", email: "", foto: "", taken: "",
    className: className, relationship: "", children: []
  }
}

// Export chart as PNG
// -------------------
function exportPNG(fileName = "export") {
  // Show spinner 
  let spinner = document.querySelector('#spinner');
  if (!spinner) {
    $("body").append('<div id="spinner" class="myMask"><i class="oci oci-spinner spinner"></i></div>');
  }
  // Create PNG 
  const canvas = document.getElementById('chart-container');
  domtoimage.toPng(canvas, {
    quality: 1,
    filter: function (node) {
      if (node.classList && node.classList.contains("material-icons")) return false
      else return true;
    }
  }).then(function (dataUrl) {
    // Download PNG - does not need FileSaver
    const link = document.createElement('a');
    link.download = fileName + '.png';
    link.href = dataUrl;
    link.click();
    link.remove();
    document.querySelector('#spinner').remove();
  });
}

// Export chart as PDF
// -------------------
function exportPDF(fileName = "export") {
  // Show spinner 
  let spinner = document.querySelector('#spinner');
  if (!spinner) {
    $("body").append('<div id="spinner" class="myMask"><i class="oci oci-spinner spinner"></i></div>');
  }
  // Create PNG 
  const canvas = document.getElementById('chart-container');
  domtoimage.toPng(canvas, {
    quality: 1,
    filter: function (node) {
      if (node.classList && node.classList.contains("material-icons")) return false
      else return true;
    }
  }).then(function (dataUrl) {
    // Download PDF - needs jsPDF
    let doc = {};
    const docWidth = Math.floor(canvas.clientWidth);
    const docHeight = Math.floor(canvas.clientHeight);
    if (!window.jsPDF) {
      window.jsPDF = window.jspdf.jsPDF;
    }
    if (docWidth > docHeight) {
      doc = new jsPDF({ orientation: 'landscape', unit: 'px', format: [docWidth, docHeight] });
    } else {
      doc = new jsPDF({ orientation: 'portrait', unit: 'px', format: [docHeight, docWidth] });
    }
    // doc.addImage(canvas.toDataURL(), 'png', 0, 0);
    doc.addImage(dataUrl, 'png', 0, 0, docWidth, docHeight, "NONE");
    doc.save(fileName + '.pdf');
    document.querySelector('#spinner').remove();
  });
}

// Save the chart's data source
// ----------------------------
function saveDataSource(chart, silent = false) {
  const nodeData = chart.options.data;
  // console.log('nodeData:', nodeData);
  if (silent) {
    // save dataSource silently
    console.log("saving silently...");
  } else {
    try {
      // save dataSource with toast
      // toastSuccess();
      alert("OPGELET: 'Opslaan' werkt niet. Exporteer als JSON om te bewaren!")
    } catch (e) {
      toastError();
    }
  }
}

// Toast
// -----
function toastSuccess() {
  tata.success('Gelukt!', 'Succesvol opgeslagen', {
    position: "tm",
  });
}
function toastError() {
  tata.error('Mislukt!', 'Opslaan niet gelukt.', {
    position: "tm",
  });
}

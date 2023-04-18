/**************** DOM functies *******************/

/* Leeg node */
function leegNode(objNode) {
    /* verwijdert alle inhoud/children van een Node
         @ objNode: node, verplicht, de node die geleegd wordt
    */
    while (objNode.hasChildNodes()) {
        objNode.removeChild(objNode.firstChild)
    }
}

/* Show modal kladblok */
function showModalKladblok() {
    // Hide canvas and drawing tools
    var canvas = document.getElementById("drawingCanvas");
    var drawingTools = document.getElementById("drawingTools");
    if (canvas) { canvas.style.display = "none"; }
    if (drawingTools) { drawingTools.style.display = "none"; }
    // Show modal and set nav z-index to 0
    var nav = document.querySelector("nav");
    var modal = document.getElementById("myModalKladblok");
    modal.style.display = "block";
    nav.style.zIndex = "0";
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        nav.style.zIndex = "1001";
    }


}

/* View in fullscreen */
function openFullscreen() {
    /* Get the documentElement (<html>) to display the page in fullscreen */
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
    }
}


/**************** DIGIBOEK functies *******************/

/**
 * Initialize page
 */
function initPage() {

    // Set boekenlijst
    let selectBook = document.getElementById("boekenlijst");
    for (var i = 0; i < arrBoeken.length; i++) {
        let value = arrBoeken[i][0];
        let title = arrBoeken[i][1].replace("<br>", " ");
        let option = document.createElement("option");
        option.value = value;
        option.appendChild(document.createTextNode(title));
        selectBook.appendChild(option);
        selectBook.value = boek;
    }
    // Set event listener for boekenlijst
    selectBook.addEventListener("change", function(e) {
        // Clear userImage
        userImage = false;
        // Load book
        var newBook = e.target.value;
        location.href = htmlPrefix + newBook + ".html";
    });

    // Set event listener for page number input
    let inputPageNum = document.getElementById("inputPageNum");
    inputPageNum.addEventListener("keypress", function onEvent(event) {
        // event.preventDefault();
        if (event.key === "Enter") {
            // Clear userImage
            userImage = false;
            // Load page
            var newPage = parseInt(inputPageNum.value, 10);
            if (newPage < 1 || newPage > numImg) {
                alert("De gevraagde pagina bestaat niet.")
                return;
            }
            pageNum = newPage;
            renderPage(pageNum);
        }
    });

    // Set inhoudsopgave
    let inhoudsopgave = document.getElementById("inhoudsopgave");
    var arrOpgave = arrInhoud[boek];
    for (var y = 0; y < arrOpgave.length; y++) {
        let value = arrOpgave[y][0];
        let title = arrOpgave[y][1];
        let option = document.createElement("option");
        option.value = value;
        option.appendChild(document.createTextNode(title));
        inhoudsopgave.appendChild(option);
    }
    inhoudsopgave.value = arrOpgave[0][0];

    // Set event listener for inhoudsopgave
    inhoudsopgave.addEventListener("change", function(e) {
        // Clear userImage
        userImage = false;
        // Load page
        var newPage = parseInt(inhoudsopgave.value);
        pageNum = newPage;
        renderPage(pageNum);
    });

    // Set event listener for fullscreen zoom
    var eZoom = document.getElementById("zoomFullscreen");
    eZoom.addEventListener("click", function(e) {
        var text = eZoom.innerText;
        if (text == "fullscreen") {
            openFullscreen();
            eZoom.innerText = "fullscreen_exit";
            eZoom.title = "Sluit volledig scherm";
        } else if (text == "fullscreen_exit") {
            closeFullscreen();
            eZoom.innerText = "fullscreen";
            eZoom.title = "Open volledig scherm";
        }
    });

    // Render first page
    renderPage(pageNum);

    // Load drawing tools
    $("#drawingTools").load("../../drawingTools.html");

}

/**
 * Render page
 * Load image, set scale, update page counters, update inhoudsopgave, hide spinner, resize canvas
 * @param num Page number.
 */
function renderPage(num) {
    // Load image
    var currentImg = document.getElementById("currentImg");
    var imageUrl;
    if (userImage == true) {
        imageUrl = document.getElementById("currentImg").src;
    } else {
        imageUrl = imgFolder + num + imgExt;
    }
    currentImg.src = imageUrl;
    currentImg.style.display = "inline-block";
    currentImg.style.height = "auto";
    if (imgOrientation == "portrait") {
        currentImg.style.width = "520px";
    } else if (imgOrientation == "landscape") {
        currentImg.style.height = "720px";
    }
    // Set scale
    currentImg.style.transform = "scale(" + scale + ")";
    var containerClassList = document.getElementById("currentImgContainer").classList;
    if (containerClassList.contains("rot90")) {
        // currentImg.style.transformOrigin = "left bottom";
        currentImg.style.transformOrigin = "left top";
    } else if (containerClassList.contains("rot-90")) {
        currentImg.style.transformOrigin = "right top";
    } else {
        // currentImg.style.transformOrigin = "left top";
        currentImg.style.transformOrigin = "center top";
    }
    // Update page counters
    document.getElementById('inputPageNum').value = num;
    document.getElementById('page_count').innerText = numImg;
    // Update inhoudsopgave
    changeInhoudsopgave(num);
    // Hide spinner
    document.getElementById("spinner").style.display = "none";
    // Resize canvas (if present)
    if (document.getElementById("drawingCanvas")) {
        resizeCanvas();
    }
}

/**
 * change the value of inhoudsopgave when navigating pages
 */
function changeInhoudsopgave(number) {
    var elmtInhoud = document.getElementById("inhoudsopgave");
    var arrOpgave = arrInhoud[boek];
    for (var x = 0; x < arrOpgave.length; x++) {
        var arrValue = arrOpgave[x][0];
        var nextIndex = (x + 1);
        if (nextIndex < arrOpgave.length) {
            var nextArrValue = arrOpgave[(x + 1)][0];
            if (number >= arrValue && number < nextArrValue) {
                elmtInhoud.value = arrValue;
            }
        } else if (number >= arrOpgave[arrOpgave.length - 1][0]) {
            elmtInhoud.value = arrValue;
        }
    }
}


/**
 * Go to previous page.
 */
function loadPreviousPage() {
    if (pageNum <= 1) {
        return;
    }
    // Clear userImage
    userImage = false;
    // Load previous page
    pageNum--;
    renderPage(pageNum);
}

/**
 * Go to next page.
 */
function loadNextPage() {
    if (pageNum >= numImg) {
        return;
    }
    // Clear userImage in local storage
    userImage = false;
    // Load next page
    pageNum++;
    renderPage(pageNum);
}

/**
 * Zoom in.
 */
function zoomIn() {
    scale = scale + 0.25;
    renderPage(pageNum);
}

/**
 * Zoom out.
 */
function zoomOut() {
    scale = scale - 0.25;
    renderPage(pageNum);
}

/**
 * Rotate right.
 */
function rotateRight() {
    var container = document.getElementById("currentImgContainer");
    var containerClassList = container.classList;
    if (containerClassList.contains("rot90") || containerClassList.contains("rot-90")) {
        container.classList.remove("rot-90")
        container.classList.remove("rot90")
        document.getElementById("currentImg").style.transformOrigin = "center top"
    } else {
        container.classList.add("rot90");
        document.getElementById("currentImg").style.transformOrigin = "left top"
    }
}

/**
 * Rotate left.
 */
function rotateLeft() {
    var container = document.getElementById("currentImgContainer");
    var containerClassList = container.classList;
    if (containerClassList.contains("rot90") || containerClassList.contains("rot-90")) {
        container.classList.remove("rot-90")
        container.classList.remove("rot90")
        document.getElementById("currentImg").style.transformOrigin = "center top"
    } else {
        container.classList.add("rot-90");
        document.getElementById("currentImg").style.transformOrigin = "right top"
    }
}
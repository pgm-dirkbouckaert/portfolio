/******************  DRAWING CANVAS functies ************************/

var canvas, tempCanvas;
var context, tempContext;
var drawingTools;
var drawingSurfaceImageData;
var sizePicker, chosenWidth, colorPicker, chosenColor;
var defaultColor = "#000";
var defaultShape = "round";
var defaultWidth = 5;

function toggleCanvas() {

    if (document.getElementById("drawingCanvas")) {
        canvas = document.getElementById("drawingCanvas");
        drawingTools = document.getElementById("drawingTools");
        if (canvas.style.display == "none") {
            canvas.style.display = "block";
            drawingTools.style.display = "block";
            // Set line width
            sizePicker = document.getElementById("sizePicker");
            setSize(sizePicker.value);
            // Set color
            colorPicker = document.getElementById("colorPicker");
            setColor(colorPicker.value);
            // Resize canvas
            resizeCanvas();
            // Show text inputs (if present)
            var allInputs = document.querySelectorAll(".myCanvasInput");
            for (i = 0; i < allInputs.length; i++) {
                allInputs[i].style.display = "block";
            }
        } else {
            canvas.style.display = "none";
            drawingTools.style.display = "none";
            // Hide text inputs (if present)
            var allInputs = document.querySelectorAll(".myCanvasInput");
            for (i = 0; i < allInputs.length; i++) {
                allInputs[i].style.display = "none";
            }
        }
    } else {
        tempCanvas = document.createElement("canvas");
        tempCanvas.setAttribute("id", "tempCanvas");
        document.body.appendChild(tempCanvas);

        canvas = document.createElement("canvas");
        canvas.setAttribute("id", "drawingCanvas");
        document.body.appendChild(canvas);

        if (canvas.getContext) {
            // Get context
            context = canvas.getContext('2d');
            tempContext = tempCanvas.getContext('2d');
            // Resize canvas
            canvas.width = tempCanvas.width = document.body.scrollWidth;
            canvas.height = tempCanvas.height = document.body.scrollHeight;
            // Show canvas drawing tools
            document.getElementById("drawingTools").style.display = "block";

            // Set default drawing shape
            context.lineJoin = tempContext.lineJoin = defaultShape;

            // Set line width
            sizePicker = document.getElementById("sizePicker");
            setSize(sizePicker.value);
            // Add event listeners for size picker 
            sizePicker.addEventListener("change", function(e) {
                setSize(this.value);
                document.getElementById("spanSize").innerText = this.value;
            });
            sizePicker.oninput = function() {
                document.getElementById("spanSize").innerText = this.value;
            };

            // Set color
            colorPicker = document.getElementById("colorPicker");
            setColor(colorPicker.value);
            // Add event listener for color picker
            colorPicker.addEventListener("change", function(e) {
                setColor(this.value);
            });

        }
        startCursor();
    }
}

/*********************** CURSOR ******************************/

function startCursor() {
    // Set control look
    setControlLook("selectCursor");
    // Stop create input
    stopCreateInput();
    // Remove event listeners
    $("#drawingCanvas").off();
    $("body").off();
    // Add eventlistener for cursor
    let pointerOn = false;
    $("body").keydown((e) => {
        if (e.ctrlKey) {
            if (pointerOn == false) {
                document.body.style.cursor = "url(../../img/cursor-hand-64.png) 25 10, auto";
                pointerOn = true;
            } else if (pointerOn == true) {
                document.body.style.cursor = "auto";
                pointerOn = false;
            }
        }
    });
}

/*********************** DRAW WITH PEN ******************************/
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var painting = false;

function startDrawPen() {
    // Stop create input
    stopCreateInput();
    // Remove event listeners
    $("#drawingCanvas").off();
    $("body").off();
    // Add event listeners for drawing with pen
    addEventListenersDrawPen();
    // Save canvas
    saveDrawingSurface();
}

// Add event listeners for drawing with pen
//-----------------------------------------
function addEventListenersDrawPen() {
    $("#drawingCanvas").mousedown(function(e) {
        painting = true; // start painting
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        redraw();
    });
    $("#drawingCanvas").mousemove(function(e) {
        if (painting) {
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
            redraw();
        }
    });
    $("#drawingCanvas").mouseup(function(e) {
        painting = false;
        clickX = new Array();
        clickY = new Array();
        clickDrag = new Array();
    });
    $("#drawingCanvas").mouseout(function(e) {
        painting = false;
    });

    // Add support for touch events
    $("#drawingCanvas").on("touchstart", function(e) {
        if (e.originalEvent.targetTouches.length == 1) { //one finger touch
            if (e.target == canvas) { e.preventDefault(); }
            painting = true; // start painting
            var touch = e.originalEvent.targetTouches[0];
            addClick(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop);
            redraw();
        }
    });
    $("#drawingCanvas").on("touchmove", function(e) {
        // if(e.target == canvas) { e.preventDefault(); }
        if (painting) {
            var touch = e.originalEvent.targetTouches[0];
            addClick(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop, true);
            redraw();
        }
    });
    $("#drawingCanvas").on("touchend", function(e) {
        painting = false;
    });
}

// This function pushes to the three dot arrays
//---------------------------------------------
function addClick(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
}

// This is where actual drawing happens: we add dots to the canvas
//----------------------------------------------------------------
function redraw() {
    for (var i = 0; i < clickX.length; i++) {
        context.beginPath();
        if (clickDrag[i] && i) {
            context.moveTo(clickX[i - 1], clickY[i - 1]);
        } else {
            context.moveTo(clickX[i] - 1, clickY[i]);
        }
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.stroke();
    }
    // saveDrawingSurface();
}


/*********************** DRAW A SHAPE ******************************/

var startX, startY, mouseX, mouseY;
var isDown = false;

function startDrawShape(id) {
    // Stop create input
    stopCreateInput();
    // Remove event listeners
    $("#drawingCanvas").off();
    $("body").off();
    // Add event listeners for drawing a circle
    addEventListenersDrawShape(id);
    // Save canvas
    saveDrawingSurface();
}

function drawShape(id, toX, toY, ctx) {
    if (id == "selectLine") {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(toX, toY);
        ctx.stroke();
        ctx.closePath();
        // saveDrawingSurface();
    } else if (id == "selectArrow") {
        // Draw line
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(toX, toY);
        ctx.stroke();
        ctx.closePath();
        // Draw arrow head
        let objFrom = { x: startX, y: startY };
        let objTo = { x: toX, y: toY };
        let radius = ctx.lineWidth * 2;
        drawArrowhead(ctx, objFrom, objTo, radius);
    } else if (id == "selectRectangle") {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.rect(startX, startY, toX - startX, toY - startY);
        ctx.stroke();
        ctx.closePath();
        // saveDrawingSurface();    
    } else if (id == "selectCircle") {
        ctx.beginPath();
        ctx.moveTo(startX, startY + (toY - startY) / 2);
        ctx.bezierCurveTo(startX, startY, toX, startY, toX, startY + (toY - startY) / 2);
        ctx.bezierCurveTo(toX, toY, startX, toY, startX, startY + (toY - startY) / 2);
        ctx.stroke();
        ctx.closePath();
        // saveDrawingSurface();
    }
}



function addEventListenersDrawShape(id) {

    $("#drawingCanvas").mousedown(function(e) {
        startX = parseInt(e.pageX);
        startY = parseInt(e.pageY);
        tempContext.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
        $("#tempCanvas").css({ left: 0, top: 0 });
        isDown = true;
    });
    $("#drawingCanvas").mousemove(function(e) {
        if (!isDown) { return; }
        mouseX = parseInt(e.pageX);
        mouseY = parseInt(e.pageY);
        tempContext.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
        drawShape(id, mouseX, mouseY, tempContext);
    });
    $("#drawingCanvas").mouseup(function(e) {
        if (!isDown) { return; }
        mouseX = parseInt(e.pageX);
        mouseY = parseInt(e.pageY);
        $("#tempCanvas").css({ left: "-1500px", top: 0 });
        drawShape(id, mouseX, mouseY, context);
        isDown = false;
    });
    $("#drawingCanvas").mouseout(function(e) {
        if (!isDown) { return; }
        mouseX = parseInt(e.pageX);
        mouseY = parseInt(e.pageY);
        $("#tempCanvas").css({ left: "-1500px", top: 0 });
        drawShape(id, mouseX, mouseY, context);
        isDown = false;
    });

    // Add support for touch events
    $("#drawingCanvas").on("touchstart", function(e) {
        if (e.targetTouches.length == 1) { //one finger touch
            if (e.target == canvas) {
                e.preventDefault();
                e.stopPropagation();
            }
            var touch = e.touches[0];
            startX = parseInt(touch.pageX);
            startY = parseInt(touch.pageY);
            tempContext.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
            $("#tempCanvas").css({ left: 0, top: 0 });
            isDown = true;
        }
    });
    $("#drawingCanvas").on("touchmove", function(e) {
        if (!isDown) { return; }
        e.preventDefault();
        e.stopPropagation();
        var touch = e.touches[0];
        mouseX = parseInt(touch.pageX);
        mouseY = parseInt(touch.pageY);
        tempContext.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
        drawShape(id, mouseX, mouseY, tempContext);
    });

    $("#drawingCanvas").on("touchend touchcancel", function(e) {
        if (!isDown) { return; }
        e.preventDefault();
        e.stopPropagation();
        var touch = e.changedTouches[0];
        mouseX = parseInt(touch.pageX);
        mouseY = parseInt(touch.pageY);
        $("#tempCanvas").css({ left: "-1500px", top: 0 });
        drawShape(id, mouseX, mouseY, context);
        isDown = false;
    });

}


/**
 * Draw an arrowhead on a line on an HTML5 canvas.
 * @param context   The drawing context on which to put the arrowhead.
 * @param from      A point, specified as an object with 'x' and 'y' properties, where the arrow starts (not the arrowhead, the arrow itself).
 * @param to        A point, specified as an object with 'x' and 'y' properties, where the arrow ends (not the arrowhead, the arrow itself).
 * @param radius    The radius of the arrowhead. This controls how "thick" the arrowhead looks.
 */
function drawArrowhead(context, from, to, radius) {
    var x_center = to.x;
    var y_center = to.y;

    var angle;
    var x;
    var y;

    context.beginPath();

    angle = Math.atan2(to.y - from.y, to.x - from.x)
    x = radius * Math.cos(angle) + x_center;
    y = radius * Math.sin(angle) + y_center;

    context.moveTo(x, y);

    angle += (1.0 / 3.0) * (2 * Math.PI)
    x = radius * Math.cos(angle) + x_center;
    y = radius * Math.sin(angle) + y_center;

    context.lineTo(x, y);

    angle += (1.0 / 3.0) * (2 * Math.PI)
    x = radius * Math.cos(angle) + x_center;
    y = radius * Math.sin(angle) + y_center;

    context.lineTo(x, y);
    context.closePath();
    //context.stroke();
    context.fillStyle = chosenColor;
    context.fill();
}


/*********************** CREATE TEXT INPUTS ******************************/

// Start create text input
//------------------------
function startCreateInput() {
    // Hide size container
    $("#sizeContainer").css("display", "none");
    // Show input options 
    $("#inputOptions").css("display", "block");
    $("#selectText").css("height", "150px");
    // Remove event listeners
    $("#drawingCanvas").off();
    $("body").off();
    // Add event listeners for drawing a circle
    addEventListenerCreateInput();
    // Make already existing inputs draggable
    makeInputsDraggable();
    // Save canvas
    saveDrawingSurface();
}

// Add event listeners
//--------------------
function addEventListenerCreateInput() {
    document.body.addEventListener("click", createInput);
}


// Create input
//--------------
var clicks = 0;

function createInput(e) {

    if (clicks == 0) {
        // first click
    } else {
        // second click
        if (e.target.nodeName.toLowerCase() == "canvas") {

            // OUDE VERSIE: TEXTAREA - NIET 'DRAGGABLE'
            // var inputWidth = $("#inputWidth").val();
            // var inputFontSize = $("#inputFontSize").val();
            // // var input = document.createElement("input");
            // // input.setAttribute("type", "text");
            // var input = document.createElement("textarea");
            // input.setAttribute("class", "myCanvasInput");
            // input.style.position = "absolute"
            // input.style.left = e.pageX - 7 + "px";
            // input.style.top = e.pageY - 15 + "px";
            // input.style.zIndex = 2000;
            // input.style.fontFamily = "inherit";
            // input.style.fontSize = inputFontSize + "px";
            // input.style.height = parseInt(inputFontSize) + 4 + "px";
            // input.style.width = inputWidth + "px";
            // input.style.border = "1px solid lightgrey";
            // input.style.borderRadius = "5px";
            // input.style.color = "#" + document.getElementById("colorPicker").value;
            // $("body").append(input);

            var inputWidth = $("#inputWidth").val();
            var inputFontSize = $("#inputFontSize").val();
            var textareaHeight = parseInt(inputFontSize) + 4;
            var color = "#" + $("#colorPicker").val();
            var textareaHtml = '<div class="inputDragHandle"><span class="material-icons icon-dragHandle">control_point</span></div>';
            textareaHtml += '<textarea type="text" style="font-size:' + inputFontSize + 'px; height:' + textareaHeight + 'px; width:' + inputWidth + 'px; color:' + color + ';"></textarea>';

            var input = document.createElement("div");
            input.setAttribute("class", "myCanvasInput");
            input.style.position = "absolute"
            input.style.left = e.pageX - 7 + "px";
            input.style.top = e.pageY - 15 + "px";
            input.style.zIndex = 2000;
            input.innerHTML = textareaHtml;
            $("body").append(input);
            makeInputsDraggable();
        }
    }
    ++clicks;
}

// Make inputs draggable
//----------------------
function makeInputsDraggable() {

    var inputs = document.getElementsByClassName("myCanvasInput");
    for (i = 0; i < inputs.length; i++) {
        dragElement(inputs[i]);
    }

    function dragElement(elmnt) {
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
        var dragHandle = elmnt.firstElementChild;
        dragHandle.onmousedown = dragMouseDown;
        dragHandle.ontouchstart = dragTouchStart;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }

        // Add touch support
        function dragTouchStart(e) {
            if (e.targetTouches.length == 1) { //one finger touch
                // e = e || window.event;
                // e.preventDefault();
                // get the mouse cursor position at startup:
                var touch = e.touches[0];
                pos3 = touch.clientX;
                pos4 = touch.clientY;
                document.ontouchend = closeDragElementByTouch;
                document.ontouchmove = elementDragByTouch;
            }
        }

        function elementDragByTouch(e) {
            // e = e || window.event;
            // e.preventDefault();
            // calculate the new cursor position:
            var touch = e.touches[0];
            pos1 = pos3 - touch.clientX;
            pos2 = pos4 - touch.clientY;
            pos3 = touch.clientX;
            pos4 = touch.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElementByTouch() {
            document.ontouchend = null;
            document.onmousemove = null;
        }
    }
}

// Stop create input
//------------------
function stopCreateInput() {
    // Show size container
    $("#sizeContainer").css("display", "block");
    // Hide input options 
    $("#inputOptions").css("display", "none");
    $("#selectText").css("height", "50px");
    // Remove event listener for creating inputs
    document.body.removeEventListener("click", createInput);
}


/*********************** LOAD USER IMAGE  ******************************/

// Load image
//-----------
var userImage = false;
function uploadImage(event) {
    console.log('event.target.files:', event.target.files)
    if (event.target.files.length > 0) {
        // Read uploaded file
        let toegelaten = ["image/jpg", "image/jpeg", "image/png", "image/gif", "image/bmp"]
        let type = event.target.files[0].type;
        // let size = event.target.files[0].size / 1024 / 1024; // in MB;
        var reader = new FileReader();
        reader.addEventListener("load", function() {
            if (this.result) {
                if (toegelaten.indexOf(type) == -1) {
                    alert("Je kan enkel afbeeldingen opladen (jpg, jpeg, png, bmp, gif).")
                }
                // else if (size > 5) {
                //     alert("De afbeelding mag niet groter zijn dan 5 MB.")
                // } 
                else {
                    userImage = true;
                    document.getElementById("currentImg").src = this.result;
                }
            } else {
                alert("Er ging iets fout!");
            }
        });
        reader.readAsDataURL(event.target.files[0]);
    }
}


/*********************** GLOBAL CANVAS FUNCTIONS ******************************/

// Set control look
//-----------------
function setControlLook(id) {
    let tools = document.querySelectorAll(".tools li");
    for (i = 0; i < tools.length; i++) {
        let tool = tools[i];
        if (tool.id == id && tool.id != "selectClear") {
            tool.style.background = "#CCCCCC";
        } else {
            tool.style.background = "#FFFFFF";
        }
    }
}

// Set color
//----------
function setColor(value) {
    chosenColor = "#" + value;
    context.strokeStyle = tempContext.strokeStyle = chosenColor;
    saveDrawingSurface();
}

// Set size
//---------
function setSize(value) {
    chosenWidth = value;
    context.lineWidth = tempContext.lineWidth = chosenWidth;
    saveDrawingSurface();
}

// Resize canvas
//--------------
function resizeCanvas() {
    // Resize
    canvas.width = tempCanvas.width = document.body.scrollWidth;
    canvas.height = tempCanvas.height = document.body.scrollHeight;
    // Set chosen color
    context.strokeStyle = tempCanvas.strokeStyle = chosenColor;
    // Get and set chosen line width
    context.lineWidth = tempCanvas.lineWidth = chosenWidth;
    // Restore drawing surface (eerder markeringen herstellen)
    restoreDrawingSurface();
}

// Clear canvas
//-------------
function clearCanvas() {
    // Select cursor
    startCursor();
    // First get chosen lineWidth
    chosenWidth = context.lineWidth;
    chosenColor = context.strokeStyle;
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    tempContext.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    canvas.width = canvas.width;
    tempCanvas.width = tempCanvas.width;
    // Reset color and line width
    context.strokeStyle = tempContext.strokeStyle = chosenColor;
    context.lineWidth = tempContext.lineWidth = chosenWidth;
    // Flush the arrays (draw with pen)
    clickX = new Array();
    clickY = new Array();
    clickDrag = new Array();
    // Remove text inputs
    var allInputs = document.querySelectorAll(".myCanvasInput");
    for (i = 0; i < allInputs.length; i++) {
        allInputs[i].parentNode.removeChild(allInputs[i]);
    }
    // Save drawing surface
    saveDrawingSurface();
}

// Save drawing surface
//---------------------
function saveDrawingSurface() {
    drawingSurfaceImageData = context.getImageData(0, 0, canvas.width, canvas.height);
}

// Restore drawing surface
//------------------------
function restoreDrawingSurface() {
    if (drawingSurfaceImageData) {
        context.putImageData(drawingSurfaceImageData, 0, 0);
    }
}
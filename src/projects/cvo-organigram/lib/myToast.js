/**
 * Simple toast function.
 * Dependency: Bootstrap 5 (needs to added to your website)
 *
 * @param {string} type - Possible types from bootstrap 5: primary, secondary, success, danger, warning, info, light, dark
 * @param {string} message 
 * @param {integer} fade - milliseconds, time after which the toast will be hidden
 */
function myToast(type = "info", message = "Hello!", fade = 3000) {
  // Html
  const alert = `
    <div class="alert alert-{{type}} alert-dismissible fade show" role="alert">
      {{message}}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
  // Create div
  const divWidth = 350;
  const div = document.createElement("div");
  div.id = "myToast";
  div.setAttribute("style", `width: 350px; position: absolute; top: 25px; left: ${(window.innerWidth / 2) - (divWidth / 2)}px; z-index: 2000;`)
  div.innerHTML = alert.replace("{{type}}", type).replace("{{message}}", message);
  // Append div to body
  document.getElementsByTagName("body")[0].appendChild(div);
  // Set timeout to hide toast
  setTimeout(() => { document.getElementById("myToast").remove() }, fade);
}

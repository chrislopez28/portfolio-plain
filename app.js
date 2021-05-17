/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/particles.json", function () {
  // console.log("callback - particles.js config loaded");
});

function toggleMenu(el) {
  if (!window.matchMedia("(min-width: 601").matches) {
    if (el.nodeName !== "LI") {
      el.classList.toggle("open");
    } else {
      document.getElementsByClassName("sandwich")[0].classList.toggle("open");
    }
    document.getElementsByClassName("nav-items")[0].classList.toggle("change");
  }
}

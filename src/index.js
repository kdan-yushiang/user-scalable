// Holds the scale state. doesn't have to be in a global var,
// just for the clarity of the explanation
let allowScale = true;

// Just to show the state
// You do not need this function
function showViewportState() {
  const viewportState = document.getElementById("viewport-state");
  viewportState.innerHTML = allowScale ? "Can Scale" : "Can not Scale";
}
showViewportState();

const btn = document.getElementById("toggle");
btn.addEventListener("click", toggleViewport);

// The toggle view port updates the
function toggleViewport() {
  let viewport = document.querySelector("meta[name=viewport]");
  if (!viewport) {
    // in case there is no view port meta tag creates one and add it to the head
    viewport = document.createElement("meta");
    viewport.name = "viewport";
    document.getElementsByTagName("head")[0].appendChild(viewport);
  }

  const content = allowScale
    ? "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    : "width=device-width, initial-scale=1.0, user-scalable=yes";
  // this is where the magic happens by changing the vewport meta tag
  viewport.setAttribute("content", content);
  allowScale = !allowScale;
  showViewportState();
}

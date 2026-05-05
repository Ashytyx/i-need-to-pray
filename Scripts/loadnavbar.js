document.addEventListener("DOMContentLoaded", () => {
  fetch("../other/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#main-nav").innerHTML = data;
    })
    .catch((error) => console.error("error loading the navigation bar", error));
});

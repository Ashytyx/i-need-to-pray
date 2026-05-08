document.addEventListener("DOMContentLoaded", () => {
  fetch("../other/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#load-foot").innerHTML = data;
    })
    .catch((error) => console.error("error loading the footer bar", error));
});

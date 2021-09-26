function titleOverImage(element) {
  element.classList.add("imageHover");
}
function oldItemImage(element) {
  element.classList.remove("imageHover");
}
function openModal() {
    console.log("hi")
     var modal = document.getElementById("modals");
     modal.classList.add("openModal");
}
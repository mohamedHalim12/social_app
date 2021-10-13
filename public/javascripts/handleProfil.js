const idOppener = "logo-profile";
const img = document.getElementById(idOppener);
img.addEventListener("click", dropProfileItem);

function dropProfileItem() {
  document.getElementById("myDropdown")?.classList.toggle("show");
}
window.addEventListener("click", function (event) {
  if (event.target.matches(`#${idOppener}`)) return;
  const dropdownContent = document.querySelector(".dropdown-content");
  if (dropdownContent.matches(".show")) {
    dropdownContent.classList.remove("show");
  }
});

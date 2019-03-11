

console.log('Looking for something??');

function onMenuItemClick() {
    if(window.screen.width <= 420) { 
        toggleMenu();
    }

}

function toggleMenu() {
    var header = document.getElementById("header");
    var mobileMenuIcon = document.getElementById("mobile-menu-icon");

    header.classList.toggle("menu-revealed")
    mobileMenuIcon.classList.toggle("mobile-menu__icon--opened");
}

function openProjectDetails() {
  let el = this;
  let slug = el.firstElementChild.firstElementChild.id;
  window.location.href = '/projects/'+ slug;
}
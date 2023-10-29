// ! variables
// get the burger button :
const burgerMenu = document.querySelector(".navbar-toggler");
// get the class to display bg :
const backgroundColor = document.querySelector(".navbar-collapse");

// ! functions
// add my custom bg class :
const displayBgOnBurgerMenu = () => {
    backgroundColor.classList.toggle("navbar-collapse--active");     // .toggle is used to create a tilting mechanism
}

// ! events
// display my custom bg class on click at the burger button :
burgerMenu.addEventListener("click", displayBgOnBurgerMenu);
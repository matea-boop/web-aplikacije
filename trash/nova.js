
/*animation on scroll*/
let elementsArray = document.querySelectorAll(".tile");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();

/*sicky navbar */
window.addEventListener('scroll', (event) => {
    const navBar = document.querySelector('.navBar');
    console.log(window.scrollY);
    navBar.classList.toggle('stickie', window.scrollY > 0);
});

/*mobile button*/
const primaryNav = document.querySelector(".navLinks");
const navToggle = document.querySelector(".mobileMenu");
const titleDel = document.querySelector(".title");

navToggle.addEventListener("click", () =>{
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        titleDel.setAttribute("aria-deleted", true);
    } else if(visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        titleDel.setAttribute("aria-deleted", false);
    }
});
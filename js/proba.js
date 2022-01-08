/*desktop/mobile managment*/
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



/*tile animation */
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


/*sticky nav bar*/
window.addEventListener('scroll', (event) => {
    const navBar = document.querySelector('.navBar');
    console.log(window.scrollY);
    navBar.classList.toggle('stickie', window.scrollY > 0);
});


/*line animation */
let elementsLine = document.querySelectorAll(".line");
console.log(elementsLine);
window.addEventListener('scroll', lineIn ); 
function lineIn() {
    for (var i = 0; i < elementsLine.length; i++) {
        var elem = elementsLine[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("onScrollLine");
        } else {
            elem.classList.remove("onScrollLine");
        }
    }
}
lineIn();
/*line1 animation */
let elementsLine1 = document.querySelectorAll(".line1");
console.log(elementsLine1);
window.addEventListener('scroll', lineIn1 ); 
function lineIn1() {
    for (var i = 0; i < elementsLine1.length; i++) {
        var elem = elementsLine1[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("onScrollLine1");
        } else {
            elem.classList.remove("onScrollLine1");
        }
    }
}
lineIn1();



/*join button*/
window.addEventListener("load", function(){
    this.setTimeout(
        function open(event){
            document.querySelector(".join").style.transform="translateX(0)";
        },
        500
    )
})




/*form input validation*/
/*function validation()
{
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "nice";
        text.style.display = "none";
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please enter valid e-mail address";
        text.style.visibility = "visible";
        text.style.color = "red";

    }
}*/
const form = document.getElementById('form');
const surname = document.getElementById('surname');
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const countries = document.getElementById('countries');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const surnameValue = surname.value.trim();
    const name1Value = name1.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const countriesValue = countries.value;

    if(surnameValue === ''){
        setErrorFor(surname, 'Last name cannot be blank');
    } else {
        setSuccessFor(surname);
    }

    if(name1Value === ''){
        setErrorFor(name1, 'Fisrt name cannot be blank');
    } else {
        setSuccessFor(name1);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if(phoneValue === '') {
        setErrorFor(phone, 'Phone number cannot be blank');
    } else if(!isNumber(phoneValue)){
        setErrorFor(phone, 'Phone number is not valid');
    } else {
        setSuccessFor(phone);
    }

    if(countriesValue === '') {
        setErrorFor(countries, 'You must select your country');
    } else {
        setSuccessFor(countries);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'input-box error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'input-box success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isNumber(phone) {
    return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(phone);
}



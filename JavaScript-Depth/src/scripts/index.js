"use strict";

function PrintPage() {
    return window.print();
}

// JavaScript can take controls over html elements

// DOM hierarchy
function loadDocuments() {
    let image = window.document.images[0];
    let register_form = window.document.forms[0];
    let login_form = window.document.forms[1];

    image.src="https://cdn.pixabay.com/photo/2024/05/09/06/52/ai-generated-8750001_640.png";
    image.border=1;
    image.width = 300;
    image.height = 300;

    register_form.elements[1].textContent = "Register";
    register_form.elements[0].value = "imranxc@yandex.com";
    login_form.elements[1].textContent = "Login";
    login_form.elements[0].value = "+8801741237446";

    window.document.images[1].src = "https://miro.medium.com/v2/resize:fit:700/1*yIb1Gl7YZaWruj-RDXUSGA.jpeg";
}

// JS can refer elements by using "name" attribute
function loadDocuments2() {
    pic.src = "https://miro.medium.com/v2/resize:fit:700/1*yIb1Gl7YZaWruj-RDXUSGA.jpeg";
    pic2.src = "https://cdn.pixabay.com/photo/2024/05/09/06/52/ai-generated-8750001_640.png";

    formRegister.btn_register.textContent = "Register";
}

// refer HTML elements by using ID
function loadDocuments3() {
    let phn = document.getElementById("phn");
    phn.value = "+8801741237446";

    let login = document.getElementById("btn-login");
    let register = document.getElementById("btn-register");
    register.textContent="Registration";
    login.textContent="Login";

    let pic = document.getElementById("pic");
    let pic2 = document.getElementById("pic2");
    pic.src = "https://miro.medium.com/v2/resize:fit:700/1*yIb1Gl7YZaWruj-RDXUSGA.jpeg";
    pic2.src = "https://cdn.pixabay.com/photo/2024/05/09/06/52/ai-generated-8750001_640.png";
}
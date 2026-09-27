window.addEventListener("scroll",function(){

const nav=document.querySelector(".navbar");

if(window.scrollY>80){

nav.classList.add("scroll-nav");

}else{

nav.classList.remove("scroll-nav");

}

});

// ================= LOGIN MODAL =================

const openLogin = document.getElementById("openLogin");
const openRegister = document.getElementById("openRegister");
const registerModal = document.getElementById("registerModal");
const closeRegister = document.getElementById("closeRegister");
const closeLogin = document.getElementById("closeLogin");
const loginModal = document.getElementById("loginModal");
const openLoginHero = document.getElementById("openLoginHero");

function showLogin(e){

    e.preventDefault();

    loginModal.classList.add("active");

    document.body.style.overflow = "hidden";

}

openLogin.addEventListener("click", showLogin);
openLoginHero.addEventListener("click", showLogin);

closeLogin.addEventListener("click", function () {

    loginModal.classList.remove("active");

    document.body.style.overflow = "auto";

});

// Klik area luar card

loginModal.addEventListener("click", function (e) {

    if (e.target === loginModal) {

        loginModal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});

// Tekan ESC

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        loginModal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});

// ================= SHOW PASSWORD =================

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        password.type = "password";

        this.innerHTML = '<i class="fa-solid fa-eye"></i>';

    }

});

// ================= NAVBAR SCROLL =================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.classList.add("scroll-nav");

    } else {

        navbar.classList.remove("scroll-nav");

    }

});

// ================= REGISTER MODAL =================
const backLogin = document.getElementById("backLogin");
const toRegister = document.getElementById("toRegister");
// Tombol Daftar di Navbar
openRegister.addEventListener("click", function (e) {

    e.preventDefault();

    registerModal.classList.add("active");

    document.body.style.overflow = "hidden";

});

// Tombol "Daftar Sekarang" di Login
toRegister.addEventListener("click", function (e) {

    e.preventDefault();

    loginModal.classList.remove("active");

    registerModal.classList.add("active");

});

backLogin.addEventListener("click", function (e) {

    e.preventDefault();

    registerModal.classList.remove("active");

    loginModal.classList.add("active");

});

closeRegister.addEventListener("click", function () {

    registerModal.classList.remove("active");

    document.body.style.overflow = "auto";

});

registerModal.addEventListener("click", function (e) {

    if (e.target === registerModal) {

        registerModal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});

// SHOW PASSWORD REGISTER

const registerPassword = document.getElementById("registerPassword");

const toggleRegisterPassword = document.getElementById("toggleRegisterPassword");

toggleRegisterPassword.addEventListener("click", function () {

    if (registerPassword.type === "password") {

        registerPassword.type = "text";

        this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        registerPassword.type = "password";

        this.innerHTML = '<i class="fa-solid fa-eye"></i>';

    }

});

const confirmPassword = document.getElementById("confirmPassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

toggleConfirmPassword.addEventListener("click", function () {

    if (confirmPassword.type === "password") {

        confirmPassword.type = "text";
        this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        confirmPassword.type = "password";
        this.innerHTML = '<i class="fa-solid fa-eye"></i>';

    }

});

// ===============================
// PASSWORD TOGGLE
// ===============================

function togglePassword() {

const password = document.getElementById("password");

const icon = document.querySelector(".eye-btn i");

if(password.type === "password"){

password.type = "text";

icon.classList.remove("bi-eye");

icon.classList.add("bi-eye-slash");

}

else{

password.type = "password";

icon.classList.remove("bi-eye-slash");

icon.classList.add("bi-eye");

}

}

// ===============================
// DARK MODE
// ===============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

const icon = themeBtn.querySelector("i");

if(document.body.classList.contains("dark-mode")){

icon.classList.remove("bi-moon-stars-fill");

icon.classList.add("bi-sun-fill");

}

else{

icon.classList.remove("bi-sun-fill");

icon.classList.add("bi-moon-stars-fill");

}

});

// ===============================
// SCROLL REVEAL
// ===============================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},
{
threshold:0.15
});

document.querySelectorAll(".feature-card,.stat-box,.login-card")
.forEach(el=>observer.observe(el));

// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const circle = document.createElement("span");

const size = Math.max(this.clientWidth,this.clientHeight);

circle.style.width = size + "px";

circle.style.height = size + "px";

circle.style.left = e.offsetX - size/2 + "px";

circle.style.top = e.offsetY - size/2 + "px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

// ===============================
// FLOATING ANIMATION
// ===============================

document.querySelectorAll(".floating-card").forEach((card,index)=>{

card.style.animationDelay = index + "s";

});

// ===============================
// HERO TEXT ANIMATION
// ===============================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});
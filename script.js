document.addEventListener("DOMContentLoaded", function () {

const links = document.querySelectorAll(".menu a");

links.forEach(link => {

link.addEventListener("click", function (e) {

e.preventDefault();

alert("این بخش در نسخه بعدی فعال خواهد شد.");

});

});

});

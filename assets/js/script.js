var registration = document.getElementById("registration");
var login = document.getElementById("login");
var regModal = document.getElementById("regModal");
var logModal = document.getElementById("logModal");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];

registration.onclick = function () {
    regModal.style.display = "block";
}

span.onclick = function () {
    regModal.style.display = "none";
}

login.onclick = function () {
    logModal.style.display = "block";
}

span2.onclick = function () {
    logModal.style.display = "none";
}
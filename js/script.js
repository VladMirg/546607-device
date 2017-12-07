var link = document.querySelector(".write_us");

var popup = document.querySelector(".modal_feedback");
var close = popup.querySelector(".modal_close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=user_name]");
var email = popup.querySelector("[name=e-mail]");

var storage = localStorage.getItem("login");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal_show");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal_show");
  popup.classList.remove("modal_error");

});

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if (!name.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal_error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal_error");

  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal_show")) {
      popup.classList.remove("modal_show");
      popup.classList.remove("modal_error");
    }
  }
});







var mapLink = document.querySelector(".button_map_popup");

var mapPopup = document.querySelector(".modal_map");
var mapClose = mapPopup.querySelector(".modal_close");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal_show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal_show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal_show")) {
      mapPopup.classList.remove("modal_show");
    }
  }
})

let btnConnect = document.querySelector("#btn-connect");
let btnClose = document.querySelector("#btn-close");
let submitForm = document.querySelector("#form-contact");

btnClose.addEventListener("click", () => {
  document.body.style.overflowY = "initial";
  document.querySelector("#modal").style.display = "none";
  document.querySelector("#modal").classList.remove("show");
});

btnConnect.addEventListener("click", () => {
  document.body.style.overflowY = "hidden";
  document.querySelector("#modal").style.display = "block";
  document.querySelector("#modal").classList.add("show");
});

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  location.reload();
});

const $ = document;
const modal = $.querySelector("#modal");

// if (modal.style.display === "block") {
//   $.body.style.overflowY = "hidden";
// }

// const btnClose = $.querySelector("#btn-close");

// btnClose.addEventListener("click", () => {
//   $.body.style.overflowY = "initial";
//   formMessage.innerHTML = "";
//   modal.style.display = "none";
//   modal.classList.remove("show");
// });

$.addEventListener("DOMContentLoaded", () => {
  const form = $.querySelector("#form-contact");
  const btnConnect = $.querySelector("#btn-connect");
  const btnClose = $.querySelector("#btn-close");
  const messageSuccess = $.querySelector("#message-success");
  const messageError = $.querySelector("#message-error");

  btnConnect.addEventListener("click", () => {
    $.body.style.overflowY = "hidden";
    $.querySelector("#modal").style.display = "block";
    $.querySelector("#modal").classList.add("show");
  });

  btnClose.addEventListener("click", () => {
    $.querySelector("#modal").classList.remove("show");
    $.querySelector("#modal").style.display = "none";
    messageSuccess.innerHTML = style.display = "none";
    messageError.innerHTML = style.display = "none";
    $.body.style.overflowY = "initial";
  });

  // Fonction pour vider les champs du formulaire :
  const cleanForm = () => {
    form.reset();
  };

  const removeMessage = () => {
    messageSuccess.style.display = "none";
    messageError.style.display = "none";
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    messageSuccess.style.display = "block";

    setTimeout(removeMessage, 3000);

    const data = {
      firstName: $.querySelector("#first-name").value,
      lastName: $.querySelector("#last-name").value,
      email: $.querySelector("#email").value,
      message: $.querySelector("#message").value,
    };

    console.log(data);
    cleanForm();
    try {
      const response = await axios.post("http://localhost:3000", data);
      console.log(response);
      if (response.status === 200) {
        // alert("Votre formulaire a bien été envoyé");
        messageSuccess.style.display = "block";
        setTimeout(removeMessage, 3000);
        cleanForm();
      }
    } catch (e) {
      if (e.response.data.error === "Missing parameters") {
        alert("Veuillez remplir tous les champs du formulaire");
      } else {
        // alert("Une erreur est survenue");
        messageError.style.display = "block";
        setTimeout(removeMessage, 3000);
        cleanForm();
      }
    }
  });
});

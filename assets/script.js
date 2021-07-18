const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  const form = $.querySelector("#form-contact");
  const btnConnect = $.querySelector("#btn-connect");
  const btnClose = $.querySelector("#btn-close");
  const messageSuccess = $.querySelector("#message-success");
  const messageError = $.querySelector("#message-error");
  const modal = $.querySelector("#modal");
  const formBloc = $.querySelector("#form-bloc");

  btnConnect.addEventListener("click", () => {
    $.body.style.overflowY = "hidden";
    modal.style.display = "block";
    modal.classList.add("show");
    messageSuccess.style.display = "none";
    messageError.style.display = "none";
  });

  formBloc.addEventListener("click", () => {
    $.body.style.overflowY = "initial";
    modal.classList.remove("show");
    modal.style.display = "none";
    messageSuccess.style.display = "none";
    messageError.style.display = "none";
  });

  btnClose.addEventListener("click", () => {
    $.body.style.overflowY = "initial";
    modal.classList.remove("show");
    modal.style.display = "none";
    messageSuccess.style.display = "none";
    messageError.style.display = "none";
  });

  // Fonction pour vider les champs du formulaire :
  const cleanForm = () => {
    form.reset();
  };

  const removeMessage = () => {
    messageSuccess.style.display = "none";
    messageError.style.display = "none";
  };

  // form listener
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    messageSuccess.style.display = "block";
    setTimeout(removeMessage, 3000);
    cleanForm();

    const data = {
      firstName: $.querySelector("#first-name").value,
      lastName: $.querySelector("#last-name").value,
      email: $.querySelector("#email").value,
      message: $.querySelector("#message").value,
    };

    console.log(data);

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

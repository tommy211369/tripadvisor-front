const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  const form = $.querySelector("#form-contact");
  const btnConnect = $.querySelector("#btn-connect");
  const btnClose = $.querySelector("#btn-close");

  btnConnect.addEventListener("click", () => {
    $.body.style.overflowY = "hidden";
    $.querySelector("#modal").style.display = "block";
    $.querySelector("#modal").classList.add("show");
  });

  btnClose.addEventListener("click", () => {
    $.body.style.overflowY = "initial";
    $.querySelector("#modal").style.display = "none";
    $.querySelector("#modal").classList.remove("show");
  });

  // Fonction pour vider les champs du formulaire :
  const cleanForm = () => {
    form.reset();
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

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
        alert("Votre formulaire a bien été envoyé");
        cleanForm();
      }
    } catch (e) {
      if (e.response.data.error === "Missing parameters") {
        alert("Veuillez remplir tous les champs du formulaire");
      } else {
        alert("Une erreur est survenue");
        cleanForm();
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const ctaButtonSaibaMais = document.getElementById("cta-button-saiba-mais");
  const ctaButtonContato = document.getElementById("cta-button-contato");

  function toggleButtonClasses() {
    ctaButtonSaibaMais.classList.toggle("btn-custom-rubro");
    ctaButtonSaibaMais.classList.toggle("btn-custom-gray");
    ctaButtonContato.classList.toggle("btn-custom-rubro");
    ctaButtonContato.classList.toggle("btn-custom-ice");
  }

  document
    .getElementById("toggle-style")
    .addEventListener("click", function () {
      const header = document.querySelector("header");
      const produtosServicos = document.getElementById("produtos-servicos");
      const sobreContato = document.getElementById("sobre-contato");

      header.classList.toggle("gray-ice-header");
      produtosServicos.classList.toggle("bg-gray");
      sobreContato.classList.toggle("bg-ice");

      toggleButtonClasses();

      const toggleButton = document.getElementById("toggle-style");
      if (header.classList.contains("gray-ice-header")) {
        toggleButton.textContent = "Estilo Secundário";
      } else {
        toggleButton.textContent = "Estilo Original";
      }

      const formLabels = document.querySelectorAll("#contact-form label");
      formLabels.forEach((label) => {
        label.classList.toggle("text-dark");
      });
    });

  ctaButtonSaibaMais.addEventListener("click", function () {
    document
      .getElementById("produtos-servicos")
      .scrollIntoView({ behavior: "smooth" });
  });

  ctaButtonContato.addEventListener("click", function () {
    document
      .getElementById("sobre-contato")
      .scrollIntoView({ behavior: "smooth" });
  });

  function saveContact(contact) {
    localStorage.setItem("contact", JSON.stringify(contact));
    toggleContactForm(false);
    renderContact(contact);
  }

  function getContact() {
    return JSON.parse(localStorage.getItem("contact"));
  }

  function updateContact(newContact) {
    localStorage.setItem("contact", JSON.stringify(newContact));
    renderContact(newContact);
  }

  function deleteContact() {
    localStorage.removeItem("contact");
    toggleContactForm(true);
  }

  function renderContact(contact) {
    document.getElementById("edit-nome").value = contact.nome;
    document.getElementById("edit-email").value = contact.email;
  }

  function toggleContactForm(showForm) {
    const form = document.getElementById("contact-form");
    const editDeleteContainer = document.getElementById(
      "edit-delete-container"
    );

    if (showForm) {
      form.classList.remove("d-none");
      editDeleteContainer.classList.add("d-none");
    } else {
      form.classList.add("d-none");
      editDeleteContainer.classList.remove("d-none");
    }
  }

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const contact = { nome, email };

      saveContact(contact);

      alert(
        `Obrigado pela mensagem, ${nome}! Entraremos em contato através do email ${email}.`
      );
      document.getElementById("contact-form").reset();
    });

  document
    .getElementById("update-contact")
    .addEventListener("click", function () {
      const nome = document.getElementById("edit-nome").value;
      const email = document.getElementById("edit-email").value;
      if (nome && email) {
        updateContact({ nome, email });
        alert(`Contato atualizado para: ${nome} (${email})`);
      } else {
        alert("Nome e email são obrigatórios.");
      }
    });

  document
    .getElementById("delete-contact")
    .addEventListener("click", function () {
      deleteContact();
      alert("Contato deletado. Por favor, envie um novo contato.");
    });

  const existingContact = getContact();
  if (existingContact) {
    toggleContactForm(false);
    renderContact(existingContact);
  } else {
    toggleContactForm(true);
  }
});

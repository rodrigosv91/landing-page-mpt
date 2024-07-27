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
        toggleButton.textContent = "Original Style";
      } else {
        toggleButton.textContent = "Toggle Style";
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
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    renderContacts();
  }

  function getContacts() {
    return JSON.parse(localStorage.getItem("contacts")) || [];
  }

  function updateContact(index, newContact) {
    const contacts = getContacts();
    if (contacts[index]) {
      contacts[index] = newContact;
      localStorage.setItem("contacts", JSON.stringify(contacts));
      renderContacts();
    }
  }

  function deleteContact(index) {
    const contacts = getContacts();
    if (contacts[index]) {
      contacts.splice(index, 1);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      renderContacts();
    }
  }

  function renderContacts() {
    const contacts = getContacts();
    const contactsContainer = document.getElementById("contacts-container");
    contactsContainer.innerHTML = "";
    contacts.forEach((contact, index) => {
      const contactCard = document.createElement("div");
      contactCard.className = "contact-card";
      contactCard.innerHTML = `
              <span>${contact.nome} (${contact.email})</span>
              <div>
                  <button class="btn btn-sm btn-primary" onclick="editContact(${index})">Edit</button>
                  <button class="btn btn-sm btn-danger" onclick="deleteContact(${index})">Delete</button>
              </div>
          `;
      contactsContainer.appendChild(contactCard);
    });
  }

  window.editContact = function (index) {
    const contacts = getContacts();
    const contact = contacts[index];
    const newNome = prompt("Enter new name:", contact.nome);
    const newEmail = prompt("Enter new email:", contact.email);
    if (newNome && newEmail) {
      updateContact(index, { nome: newNome, email: newEmail });
    }
  };

  window.deleteContact = deleteContact;

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

  renderContacts();
});

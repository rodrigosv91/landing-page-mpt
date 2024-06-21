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

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;

      alert(
        `Obrigado pela mensagem, ${nome}! Entraremos em contato através do email ${email}.`
      );

      document.getElementById("contact-form").reset();
    });
});

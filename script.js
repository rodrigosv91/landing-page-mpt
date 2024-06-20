// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Função de chamada para ação para "Saiba Mais"
  document
    .getElementById("cta-button-saiba-mais")
    .addEventListener("click", function () {
      document
        .getElementById("produtos-servicos")
        .scrollIntoView({ behavior: "smooth" });
    });

  // Função de chamada para ação para "Contato"
  document
    .getElementById("cta-button-contato")
    .addEventListener("click", function () {
      document
        .getElementById("sobre-contato")
        .scrollIntoView({ behavior: "smooth" });
    });

  // Validação do formulário de contato
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevenir envio padrão

      // Coletar dados do formulário
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const mensagem = document.getElementById("mensagem").value;

      // Simular envio (exemplo: exibir uma mensagem de agradecimento)
      alert(
        `Obrigado pela mensagem, ${nome}! Entraremos em contato através do email ${email}.`
      );

      // Limpar formulário
      document.getElementById("contact-form").reset();
    });

  // Alternar estilo
  document
    .getElementById("toggle-style")
    .addEventListener("click", function () {
      const header = document.querySelector("header");
      const produtosServicos = document.getElementById("produtos-servicos");
      const sobreContato = document.getElementById("sobre-contato");
      const toggleButton = document.getElementById("toggle-style");
      const ctaButtonSaibaMais = document.getElementById(
        "cta-button-saiba-mais"
      );
      const ctaButtonContato = document.getElementById("cta-button-contato");

      header.classList.toggle("gray-ice-header");
      produtosServicos.classList.toggle("bg-gray");
      sobreContato.classList.toggle("bg-ice");

      // Alternar a cor dos botões "Saiba Mais" e "Contato"
      if (header.classList.contains("gray-ice-header")) {
        ctaButtonSaibaMais.classList.remove("btn-success");
        ctaButtonSaibaMais.classList.add("btn-secondary");
        ctaButtonContato.classList.remove("btn-danger");
        ctaButtonContato.classList.add("btn-light");
      } else {
        ctaButtonSaibaMais.classList.remove("btn-secondary");
        ctaButtonSaibaMais.classList.add("btn-success");
        ctaButtonContato.classList.remove("btn-light");
        ctaButtonContato.classList.add("btn-danger");
      }

      // Alternar a cor do botão toggle
      if (header.classList.contains("gray-ice-header")) {
        toggleButton.classList.remove("btn-secondary");
        toggleButton.classList.add("btn-light");
        toggleButton.innerHTML = "Toggle to Original";
      } else {
        toggleButton.classList.remove("btn-light");
        toggleButton.classList.add("btn-secondary");
        toggleButton.innerHTML = "Toggle to Gray/Ice";
      }

      // Alternar a cor do texto na seção 1
      const headerText = header.querySelectorAll("h1, p");
      headerText.forEach((text) => {
        if (header.classList.contains("gray-ice-header")) {
          text.style.color = "#333333"; // Cor do texto no tema cinza com gelo
        } else {
          text.style.color = "white"; // Cor do texto no tema original
        }
      });
    });
});

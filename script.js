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

      if (header.classList.contains("gray-ice-header")) {
        toggleButton.textContent = "Original Style";
      } else {
        toggleButton.textContent = "Toggle Style";
      }

      ctaButtonSaibaMais.classList.toggle("btn-dark");
      ctaButtonContato.classList.toggle("btn-dark");
    });
});

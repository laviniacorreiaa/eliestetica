
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Menu para celular
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Fechar menu ao clicar em um link
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Impedir datas passadas
const dataInput = document.getElementById("data");

const hoje = new Date();

const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, "0");
const dia = String(hoje.getDate()).padStart(2, "0");

dataInput.min = `${ano}-${mes}-${dia}`;

// Formulário de agendamento
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const procedimento = document.getElementById("procedimento").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const observacao = document.getElementById("observacao").value;

    // COLOQUE O NÚMERO DA CLÍNICA AQUI
    const numeroWhatsApp = "5511999999999";

    const mensagem = `
Olá! Gostaria de agendar um procedimento na LUMI Estética.

Nome: ${nome}
Telefone: ${telefone}
Procedimento: ${procedimento}
Data: ${data}
Horário: ${horario}

Observações: ${observacao}

Aguardo confirmação do meu horário!
    `;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

    alert("Seu pedido está pronto! Envie a mensagem pelo WhatsApp para solicitar a confirmação.");

});

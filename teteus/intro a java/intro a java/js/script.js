// Seleciona o botão com o ID "cta-button"
const ctaButton = document.getElementById('cta-button');

// Verifica se o botão existe para evitar erros
if (ctaButton) {
    // Adiciona um evento de clique ao botão
    ctaButton.addEventListener('click', function() {
        // Redireciona para a página de login
        window.location.href = 'login.html';
    });
} else {
    console.error('Botão com ID "cta-button" não encontrado.');
}


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simples validação dos campos
        if (username === '' || password === '') {
            messageDiv.textContent = 'Por favor, preencha todos os campos.';
            messageDiv.style.color = 'red';
        } else {
            // Aqui você pode adicionar a lógica de autenticação, como enviar uma solicitação para um servidor
            messageDiv.textContent = 'Login bem-sucedido!'; // Mensagem de sucesso
            messageDiv.style.color = 'green';

            // Para fins de exemplo, aqui apenas limpamos os campos após o login bem-sucedido
            form.reset();
        }
    });
});

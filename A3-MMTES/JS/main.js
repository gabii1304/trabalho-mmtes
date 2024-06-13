// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.getElementById('loginLink');
    const loginDropdown = document.getElementById('loginDropdown');

    // Exibe a caixa de seleção ao clicar no link de login
    loginLink.addEventListener('click', function() {
        loginDropdown.style.display = 'block';
    });

    // Esconde a caixa de seleção ao clicar em qualquer outro lugar da página
    document.addEventListener('click', function(event) {
        if (event.target !== loginLink && event.target.closest('.login-dropdown') !== loginDropdown) {
            loginDropdown.style.display = 'none';
        }
    });
});

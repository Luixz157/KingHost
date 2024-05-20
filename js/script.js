//Menu

document.addEventListener('DOMContentLoaded', function() {
    var menuLink = document.getElementById('menuLink');
    var menuDiv = document.querySelector('.menuDiv');
    var menuAberto = false; // Variável de estado para acompanhar se o menu está aberto ou fechado

    menuLink.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Alternar a visibilidade da div do menu
        if (!menuAberto) {
            menuDiv.style.display = 'block';
            menuDiv.style.top = '105px'; // Anima a transição para a posição do topo
            menuLink.textContent = 'FECHAR'; // Altera o texto do link para "FECHAR"
            menuAberto = true; // Atualiza o estado para indicar que o menu está aberto
        } else {
            menuDiv.style.top = '-205%'; // Anima a transição para fora da tela
            menuLink.textContent = 'MENU'; // Altera o texto do link para "MENU"
            menuAberto = false; // Atualiza o estado para indicar que o menu está fechado
        }
    });
});
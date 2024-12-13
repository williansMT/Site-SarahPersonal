// Seleciona todos os elementos com a classe 'imgs'
var imagens = document.getElementsByClassName('imgs');

// Função para aumentar o zoom da imagem
function zoomIn(event) {
    // Aplica o zoom na imagem
    event.target.style.transform = "scale(1.1)";
    // Define a posição como absoluta para garantir que a imagem fique acima de outros elementos
    event.target.style.position = "absolute";
    // Aumenta o z-index para garantir que a imagem fique acima de todos os outros elementos
    event.target.style.zIndex = "1000";
    // Move a imagem para 50% da altura da tela
    event.target.style.top = "50%";
    // Move a imagem para 50% da largura da tela
    event.target.style.left = "50%";
    // Centraliza a imagem na tela
    event.target.style.transform += " translate(-50%, -50%)";
}

// Função para reduzir o zoom da imagem
function zoomOut(event) {
    // Remove o zoom da imagem
    event.target.style.transform = "scale(1)";
    // Retorna a posição da imagem para o estado normal
    event.target.style.position = "static";
    // Reseta o z-index da imagem para o valor padrão
    event.target.style.zIndex = "0";
    // Reseta a posição top da imagem
    event.target.style.top = "0";
    // Reseta a posição left da imagem
    event.target.style.left = "0";
}

// Adiciona os event listeners para cada imagem
for (var i = 0; i < imagens.length; i++) {
    // Adiciona o event listener de 'mouseover' para aumentar o zoom
    imagens[i].addEventListener("mouseover", zoomIn);
    // Adiciona o event listener de 'mouseout' para reduzir o zoom
    imagens[i].addEventListener("mouseout", zoomOut);
}

﻿# Site-SarahPersonal
# Sarah Personal Website

Este é o código-fonte para o site de personal trainer da Sarah. O site é desenvolvido com HTML, CSS e JavaScript para criar uma página informativa e interativa.

## Estrutura do Projeto

- `index.html` - O arquivo HTML principal.
- `styles.css` - O arquivo CSS para estilos.
- `script.js` - O arquivo JavaScript para interatividade.

## index.html

Este arquivo contém a estrutura básica do site, incluindo o cabeçalho, seções de biografia e contato, e o rodapé.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <title>Sarah Personal</title>
</head>
<body>
<header>
    <h1>Sarah Personal</h1>
</header>
<section id="bio">
    <div class="imgs">
        <img src="/WhatsApp Image 2024-11-27 at 23.25.57.jpeg" alt="Imagem carol Perosonal" >
        <script src="/script.js"></script>
    </div>
<div class="sobre">
    <h2>Olá! Eu sou a Sarah, sua personal trainer dedicada!</h2><br>
<p>Sou extremamente competente e animada, e meu objetivo é ajudar cada aluno a alcançar seus sonhos e metas de saúde e fitness.</p><br>
<p> Com muita energia e dedicação, busco proporcionar treinos personalizados e um ambiente motivador para que você possa dar o seu melhor e conquistar resultados incríveis.</p><br>
<p>Juntos, vamos traçar um caminho para transformar a sua vida e atingir os seus objetivos de forma eficiente e prazerosa. Venha comigo e vamos nessa jornada rumo ao seu melhor!</p>
</section>
</div>

<section id="contact">
    <h2>Contatos</h2>
    <ul>
        <a href="https://www.instagram.com/_saraholiveirapersonall/?igsh=anFwNmhsdTJuZHJt" target="_blank">
        <li style="--cor1:#fb3997; --cor2: #fecf12;">
            <span class="icon"><i class="bi bi-instagram"></i></span>
            <span class="text">Instagram</span>  
        </li>
    </a>
    </a>
        <a href="https://api.whatsapp.com/send?phone=5511941549764&text=Ol%C3%A1%20Sarah%2C%20adorei%20voc%C3%AA%20e%20queria%20saber%20como%20funciona%20para%20come%C3%A7armos%20a%20treinar%20juntos%3F%3F" target="_blank">
        <li style="--cor1:#075e54; --cor2: #25d366;">
            <span class="icon"><i class="bi bi-whatsapp"></i></span>
            <span class="text">whatsapp</span>  
        </li>
    </a>
    </ul>
</section>
<footer>
    &copy; - Todos os direitos reservados.
</footer>
</body>
</html>

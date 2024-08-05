document.addEventListener('DOMContentLoaded', function () {
  const frase = "Hello World."; // Substitua com a frase desejada
  const fraseElemento = document.getElementById('frase');

  // Define a frase como conteúdo do elemento
  if (fraseElemento) {
    fraseElemento.textContent = frase;

    // Adiciona a classe para iniciar a animação
    fraseElemento.classList.add('animacao');
  }
});

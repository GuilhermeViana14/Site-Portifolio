        // Função para carregar conteúdo de um arquivo HTML externo
        function carregarConteudo() {
            fetch('navbar.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('navbar').innerHTML = data;
                })
                .catch(error => console.error('Erro ao carregar arquivo:', error));
        }

        // Chame a função para carregar o conteúdo ao carregar a página (opcional)
        carregarConteudo();
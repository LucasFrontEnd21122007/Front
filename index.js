document.addEventListener('DOMContentLoaded', () => {
    const fetchDataButton = document.getElementById('fetchData');
    const dataDisplay = document.getElementById('dataDisplay');

    fetchDataButton.addEventListener('click', () => {
        // Substitua a URL da API pelo seu endpoint real
        const apiUrl = 'https://api.example.com/data';

        // Faz uma solicitação GET para a API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Exibe os dados na página
                dataDisplay.innerHTML = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Erro ao buscar dados da API:', error);
                dataDisplay.innerHTML = 'Ocorreu um erro ao buscar os dados da API.';
            });
    });
});

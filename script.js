// Carregar conteúdo da página de acordo com o link selecionado
const changeContent = (url) => {
    fetch(url)
    .then(resp => resp.text())
    .then(data => {
        document.getElementById('page-content').innerHTML = data; })
    .catch(error => console.error(error));
}

// Adicionar evento ao click nos elementos de link
document.querySelector('a[href="about.html"]').addEventListener('click', function (e) {
    e.preventDefault();
    changeContent('about.html');
});

document.querySelector('a[href="experience.html"]').addEventListener('click', function (e) {
    e.preventDefault();
    changeContent('experience.html');
});

document.querySelector('a[href="portfolio.html"]').addEventListener('click', function (e) {
    e.preventDefault();
    changeContent('portfolio.html');
});

document.querySelector('a[href="contact.html"]').addEventListener('click', function (e) {
    e.preventDefault();
    changeContent('contact.html');
});
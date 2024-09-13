let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


const items = document.querySelectorAll('.list .item');
const indicators = document.querySelectorAll('.indicators ul li');
let currentIndex = 0; // Inicia no primeiro item

// Função para alterar o item ativo
function setActiveItem(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        indicators[i].classList.remove('active');
        if (i === index) {
            item.classList.add('active');
            indicators[i].classList.add('active');
        }
    });

    // Atualizar o número do indicador
    const numberDisplay = document.querySelector('.indicators .number');
    numberDisplay.textContent = (index + 1).toString().padStart(2, '0');
}

// Setas de navegação
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    setActiveItem(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    setActiveItem(currentIndex);
});

// Indicadores de navegação
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        setActiveItem(currentIndex);
    });
});



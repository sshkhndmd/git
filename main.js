const header = document.querySelector('h1');
if (header){
    header.textContent = 'Новый текст';
} else {
    console.error('Элемент h1 не найден')
}
const cardIcon = document.querySelectorAll('.card__icon');

if (cardIcon) {
    cardIcon.forEach(element => {
        element.addEventListener('click', e => {
            element.classList.toggle('active');
        })
    })
}
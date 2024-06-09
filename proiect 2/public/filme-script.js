const films = document.querySelectorAll('.film');
const container = document.querySelector('.container2');

container.addEventListener('click', function(event) {
    const description = this.querySelector('.description');
    if (description) {
        // verif dc exista o descriere pentru container
        description.style.display = description.style.display === 'none' ? 'block' : 'none';
    }
});

films.forEach(film => {
    film.addEventListener('click', function(event) {
        event.stopPropagation(); // opresc propagarea evenimentului pentru a împiedica afisarea descrierii la clicul pe parintele elementului
        const description = this.querySelector('.description');
        description.style.display = description.style.display === 'none' ? 'block' : 'none';
    });
});

document.getElementById('reviews-button').addEventListener('click', function() {
    window.location.href = 'recenzii.html'; // asigură-te că această cale este corectă
});

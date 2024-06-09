document.addEventListener('DOMContentLoaded', () => {
    const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    const listaFavorite = document.getElementById('listaFavorite');

    //e utila cand adaugam, stergem, sa actualizeze
    const actualizeazaListaFavorite = () => {
        listaFavorite.innerHTML = '';
        favorite.forEach(nume => {
            const li = document.createElement('li'); // corectat aici
            li.textContent = nume;
            li.classList.add('favorite');
            listaFavorite.appendChild(li);
        });
    };

    //cand apas pe adaugare , imi adauga personajul
    document.getElementById('adaugaPersonaj').addEventListener('click', (event) => {
        const inputNouPersonaj = document.getElementById('nouPersonaj');
        const numePersonajNou = inputNouPersonaj.value.trim();
        if (numePersonajNou && !favorite.includes(numePersonajNou)) {
            favorite.push(numePersonajNou);
            const li = document.createElement('li'); // corectat aici
            li.textContent = numePersonajNou;
            li.classList.add('favorite');
            listaFavorite.appendChild(li);
            inputNouPersonaj.value = '';
        }
    });

    document.getElementById('stergeListaFavorite').addEventListener('click', (event) => {
        favorite.splice(0, favorite.length);
        actualizeazaListaFavorite();
    });

    document.getElementById('salveazaFavorite').addEventListener('click', (event) => {
        localStorage.setItem('favorite', JSON.stringify(favorite));
    });

    document.getElementById('evidentiazaToate').addEventListener('click', (event) => {
        const toateLi = document.getElementsByTagName('li');
        for (let li of toateLi) {
            li.classList.add('highlight');
        }
    });

    listaFavorite.addEventListener('click', (event) => {
        const targetLi = event.target;
        targetLi.classList.toggle('highlight');
    });

    actualizeazaListaFavorite();
});

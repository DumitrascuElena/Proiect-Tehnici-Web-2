document.addEventListener('DOMContentLoaded', function() { //eveniment
                  //'DOMContentLoaded' ca vreau ca raspunsul sa fie declansat imediat cum se incarca si restul pag html
    // preiau nr de rasp corecte din url
    const queryString = window.location.search;//stocam stringul din url ex corecte=5 din quiz2.html?corecte=${nr}
    const urlParams = new URLSearchParams(queryString);//ma ajuta sa accesez mai departe continutul
    const numarCorecte = urlParams.get('corecte');

    // afisez pe pagina quiz2
    const rezultatDiv = document.getElementById('result');
    rezultatDiv.innerHTML = `<p>Ati raspuns corect la ${numarCorecte} întrebari.</p>`;
});

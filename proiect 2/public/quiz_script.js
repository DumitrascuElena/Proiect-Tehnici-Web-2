document.addEventListener('DOMContentLoaded', function() {//eveniment care ne asigura ca documentul e incarcat inainte sa facem alte evenimente
    const form = document.getElementById('quizForm');
    const submitButton = document.getElementById('submit');

    form.addEventListener('submit', function(event) { //cand e apasat butonul se activeaza functia
        event.preventDefault(); // daca nu pun asta, nu ma duce pe alta pagina dupa ce dau submit

        // preia raspunsurile din formular
        const raspunsuri = {};
        const inputs = form.querySelectorAll('input[type="radio"]:checked');
        inputs.forEach(input => {
            raspunsuri[input.name] = input.value;
        });

        // validare nume folosind expresie regulata
        const nameInput = document.getElementById('nameInput');
        if (!validarenume(nameInput.value)) {
            alert('Te rog sa introduci un nume valid (doar litere si spatii).');
            return;
        }

        // validare nr de telefon folosind expresie regulata
        const phoneInput = document.getElementById('phoneInput');
        if (!validaretlf(phoneInput.value)) {
            alert('Te rog sa introduci un numar de telefon valid (10 cifre).');
            return;
        }

        // verificare dc un raspuns este selectat pentru fiecare intrebare
        const intrebari = ['1', '2', '3', '4', '5', '6', '7']; // name intrebari
        for (const intrebare of intrebari) {
            if (!raspunsuri[intrebare]) {
                alert(`Te rog sa selectezi un raspuns pentru intrebarea ${intrebare}.`);
                return;
            }
        }

        const numarCorecte = calculeazaCorecte(raspunsuri);

        // redirectionare catre pagina cu rezultatele corecte
        window.location.href = `quiz2.html?corecte=${numarCorecte}`;
    });

    function validarenume(name) {
        const regex = /^[a-zA-Z ]+$/;
        return regex.test(name); //true daca name se potriveste
    }

    function validaretlf(phone) {
        const regex = /^\d{10}$/;
        return regex.test(phone);
    }
    
    

    function calculeazaCorecte(raspunsuri) {
        const raspunsuriCorecte = {
            "1": "c",
            "2": "d",
            "3": "c",
            "4": "a",
            "5": "c",
            "6": "a",
            "7": "a"
        };

        let numarCorecte = 0;

        for (const [intrebare, rasp] of Object.entries(raspunsuri)) {
            if (raspunsuriCorecte[intrebare] === rasp) {
                numarCorecte++;
            }
        }

        return numarCorecte;
    }
});

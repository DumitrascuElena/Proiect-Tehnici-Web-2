document.addEventListener("DOMContentLoaded", function() {
    afiseazaReclame();

    // eveniment pt buton click inchidere
    var butoaneInchidere = document.querySelectorAll(".inchide-reclama");
    butoaneInchidere.forEach(function(buton) {
        buton.addEventListener("click", function() {
            // ascundem reclama 
            var reclama = buton.parentNode;
            reclama.style.display = "none";

            // mesaj temporar
            var mesajTemporar = document.createElement("div");
            mesajTemporar.textContent = "Multumim pentru vizionare!";
            mesajTemporar.style.position = "fixed";
            mesajTemporar.style.top = "50%";
            mesajTemporar.style.left = "50%";
            mesajTemporar.style.transform = "translate(-50%, -50%)";
            mesajTemporar.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            mesajTemporar.style.padding = "10px";
            document.body.appendChild(mesajTemporar);

            // sterg mesajul temporar dupa 2 secunde cu setTimeout
            setTimeout(function() {
                mesajTemporar.remove();
            }, 2000);
        });
    });
});

function afiseazaReclame() {
    // afisez containerul de reclame
    var reclameContainer = document.querySelector(".reclame");
    reclameContainer.style.display = "block";
}

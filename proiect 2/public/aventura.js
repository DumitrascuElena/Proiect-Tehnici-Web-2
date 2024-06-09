document.getElementById('filterInput').addEventListener('input', function() {
    const valoareFiltru = this.value.toLowerCase();
    const personaje = document.getElementsByClassName('personaj');
  
    for (let i = 0; i < personaje.length; i++) {
      const nume = personaje[i].textContent.toLowerCase();
      if (nume.includes(valoareFiltru)) {
        personaje[i].style.display = 'block';
      } else {
        personaje[i].style.display = 'none';
      }
    }
  });
  
  const personaje = document.getElementsByClassName('personaj');
  for (let i = 0; i < personaje.length; i++) {
    personaje[i].addEventListener('click', function(event) {
      //event.stopPropagation();
      const stilCalculat = window.getComputedStyle(this);
      const culoare = stilCalculat.backgroundColor;
      const numePersonaj = this.textContent;
      const mesajCuloare = document.getElementById('mesajCuloare');
      mesajCuloare.textContent = "Culoarea predominantă a lui " + numePersonaj + " este: " + culoare;
      mesajCuloare.style.display = 'block';
      setTimeout(function() {
        mesajCuloare.style.display = 'none';
      }, 3000); // ascunde mesajul după 3 secunde
      document.body.style.backgroundColor = culoare; // schimba culoarea de fundal a paginii
    });
  }
  
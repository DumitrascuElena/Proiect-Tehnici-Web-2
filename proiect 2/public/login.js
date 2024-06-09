document.getElementById("playButton").addEventListener("click", function() {
    playSound();
});

function playSound() {
    let audio = new Audio('audio/avengers_login.mp3');
    audio.play();
}

document.addEventListener("click", function(event) {
    const container = document.querySelector(".container");
    if (!container.contains(event.target)) {
        showImageAtClick(event);
    }
});

function showImageAtClick(event) {
    let img = document.createElement('img');
    img.src = "poze/avengers_png.png";
    img.style.position = "absolute";
    img.style.left = `${event.pageX}px`;
    img.style.top = `${event.pageY}px`;
    img.style.transform = "translate(-50%, -50%)"; // centrare imagine
    img.style.width = "150px"; 
    img.style.height = "100px"; 
    img.classList.add("bursuc");

    document.body.appendChild(img);

    setTimeout(() => {
        img.remove();
    }, 5000); // elimina imaginea după 5 secunde
}

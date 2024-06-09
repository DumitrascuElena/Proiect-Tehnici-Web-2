document.addEventListener('DOMContentLoaded', function() {
    
    let textColor = 'white';

    // culori initiale(le am sters in css ca se suprascriau)
    document.body.style.color = textColor;
    document.body.style.backgroundColor = 'rgb(64, 85, 131)';

    // evenimentele pentru tastele apasate
    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'w':
                textColor = 'white';
                break;
            case 'b':
                textColor = 'black';
                break;
            case 'p':
                textColor = 'pink';
                break;
            case 'b':
                textColor = 'blue';
                break;
            default:
                return;
        }

        document.body.style.color = textColor;
    });

    //evenimentele de click pentru backgroundcolor
    document.body.addEventListener('click', function() {
        // culoare random
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

        document.body.style.backgroundColor = randomColor;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("avengersCanvas");
    var context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight/5;

    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, 70, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();

    context.font = "20px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("Avengers", canvas.width / 2, canvas.height / 2);
  });
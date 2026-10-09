
const teclas = document.querySelectorAll(".tecla");

teclas.forEach(function(tecla) {
    tecla.addEventListener("click", function() {
        const nomeSom = "som_" + tecla.classList[1];
        const som = document.getElementById(nomeSom);

        document.querySelectorAll("audio").forEach(function(audio) {
            audio.pause();
            audio.currentTime = 0;
        });

        if (som) {
            som.currentTime = 0;
            som.play();
        }
    });
});


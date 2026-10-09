
const teclas = document.querySelectorAll(".tecla");
const imagem = document.querySelector(".imagem_frases");

const listaFrases = [
    "../assets/images/minhaqueridaEllie.jpg",
    "../assets/images/asvantagensdeserinvisível.jpg",
    "../assets/images/clark.jpg",
    "../assets/images/comoperder.jpg",
    "../assets/images/minhaquerida.png",
    "../assets/images/brilho.jpg"
]

teclas.forEach(function(tecla, indice) {
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
            imagem.src = listaFrases[indice]
        }
    });
});
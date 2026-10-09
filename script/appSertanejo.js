
const teclas = document.querySelectorAll(".tecla");
const imagem = document.querySelector(".imagem_sertanejo");

const listaSertanejo = [
    "./assets/images/apaga.jpg",
    "./assets/images/retrovisor.jpg",
    "./assets/images/mausbocados.jpg",
    "./assets/images/5km.jpg",
    "./assets/images/cadeiracativa.jpg",
    "./assets/images/exclusividade.jpg"
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
            imagem.src = listaSertanejo[indice]
        }
    });
});
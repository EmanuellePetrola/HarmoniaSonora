
const teclas = document.querySelectorAll(".tecla");
const imagem = document.querySelector(".imagem_animais");

const listaAnimais = [
    "./assets/images/sweet.jpg",
    "./assets/images/passaro.jpg",
    "./assets/images/sheep.jpg",
    "./assets/images/cow.jpg",
    "./assets/images/dog.jpg",
    "./assets/images/scared.jpg"
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
            imagem.src = listaAnimais[indice]
        }
    });
});


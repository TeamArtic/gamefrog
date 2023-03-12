let elementsContainer, keyboardEvent, gameFrog, frogContainer, mainGrid

class level {

}

class frog extends gridObject {
    constructor(objectGrid, objectScene, id, object) {
        super(objectGrid, objectScene, id, new vector2(0, 0), new vector2(100, 100), object)
    }
}

window.addEventListener('load', () => {
    elementsContainer = document.getElementById('elementsContainer')
    mainScene = new scene()
    keyboardEvent = new KeyboardEvent("keydown")
    frogContainer = document.getElementById('rana')
    mainGrid = new grid(elementsContainer, 6, 6, 100)
    gameFrog = new frog(mainGrid, mainScene, "mainFrog", frogContainer)
    document.onkeydown = moveCharacter;

   
    

    
});
function ranasalta() {
    var isJumping = false;
    var rana = document.getElementById("rana");
    var rana1 = "../img/dona.gif"; // ruta del gif de posición "parado"
    var rana2 = "../img/saltar.gif"; // ruta del gif de posición "salto"
        if (!isJumping) { // si la rana no está saltando actualmente
            isJumping = true; // marcar como saltando
            rana.src = rana2; // cambiar la imagen a la de salto
            rana.classList.add("jump"); // agregar la clase "jump" para iniciar la animación de salto
            setTimeout(function () { // después de 1000 milisegundos
                rana.classList.remove("jump"); // eliminar la clase "jump" para detener la animación de salto
                rana.src = rana1; // cambiar la imagen de vuelta a la de posición "parado"
                isJumping = false; // marcar como no saltando
            }, 1000);
        }
    };

// function moveFrog(){
//     gameFrog.gridMove(new vector2(2, 2))
// }

function moveCharacter(e) {
    switch (e.keyCode) {
        case 87:
            gameFrog.gridMove(new vector2(0, -1))
            break;
        case 65:
            gameFrog.gridMove(new vector2(-1, 0))
            break;
        case 83:
            gameFrog.gridMove(new vector2(0, 1))
            ranasalta()
            break;
        case 68:
            gameFrog.gridMove(new vector2(1, 0))
            break;
    }
}
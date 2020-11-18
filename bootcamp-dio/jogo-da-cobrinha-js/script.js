let canvas = document.getElementById("cobra");
let context = canvas.getContext("2d"); /* contexto em dimensão 2D */
let box = 32;
let cobra = [];
cobra[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let comida = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}


function criarBG() { /* define background */
    context.fillStyle = "lightgreen"; /* fillStyle define a cor que será aplicada */
    context.fillRect(0, 0, 16 * box, 16 * box); /* desenha o ambiente em que o jogo ocorrerá; fillRect trabalha com 4 parâmetros posições de x e y, altura e largura */
}

function criarCobrinha() {
    for(i=0; i < cobra.length; i++){
        context.fillStyle = "green";
        context.fillRect(cobra[i].x, cobra[i].y, box, box);
    }
}

function criarComida() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener("keydown", update);

function update(event) {
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){
    if(cobra[0].x > 15 * box && direction == 'right') cobra[0].x = 0;
    if(cobra[0].x < 0 && direction == 'left') cobra[0].x = 16 * box;
    if(cobra[0].y > 15 * box && direction == 'down') cobra[0].y = 0;
    if(cobra[0].y < 0 && direction == 'up') cobra[0].y = 16 * box;

    for(i = 1; i < cobra.length; i++){
        if(cobra[0].x == cobra[i].x && cobra[0].y == cobra[i].y){
            clearInterval(jogo);
            alert('Game Over :(')
        }
    }

    criarBG();
    criarCobrinha();
    criarComida();

    let cobraX = cobra[0].x;
    let cobraY = cobra[0].y;

    if(direction == 'right') cobraX += box;
    if(direction == 'left') cobraX -= box;
    if(direction == 'down') cobraY += box;
    if(direction == 'up') cobraY -= box;

    if (cobraX != comida.x || cobraY != comida.y) {
        cobra.pop();
    }
    else {
        comida.x = Math.floor(Math.random() * 15 + 1) * box;
        comida.y = Math.floor(Math.random() * 15 + 1) * box;

    }

    let newHead = {
        x: cobraX,
        y: cobraY
    }

    cobra.unshift(newHead);
    
}

let jogo = setInterval(iniciarJogo, 100);

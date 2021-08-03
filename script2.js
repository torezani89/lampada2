// Define variáveis para img, e botões
const lampada = document.getElementById('img-lamp');
console.log(lampada)
const btLigaDesliga = document.getElementById('bt-liga');
// console.log(btLiga)
// const btDesliga = document.getElementById('bt-desliga');
// console.log(btDesliga)

function estaQuebrada() {
    return lampada.getAttribute('src') == "./images/quebrada.jpg";
    // return lampada.src.indexOf ( 'quebrada' ) > -1
}

// Verifica se lampada esta ligada
function estaLigada() {
    return lampada.getAttribute('src') == "./images/ligada.jpg";
}

// Função ligaLampada para mudar atributo src da img quando for chamada
function ligaLampada() {
    if ( !estaQuebrada() ) {
        lampada.src = './images/ligada.jpg';
        // lampada.setAttribute('src', 'outra_imagem.png');

        alteraBotao();
    }

}

function desligaLampada() {
    if ( !estaQuebrada() ) {
        lampada.src = './images/desligada.jpg';

        alteraBotao();
    }

}

function ligaDesliga() {
    if ( !estaLigada() ) {
        ligaLampada();
    }
    else {
        desligaLampada();
    }
}

function alteraBotao() {
    if (btLigaDesliga.innerHTML == "Liga") {
        btLigaDesliga.innerHTML = "Desliga";
    } else {
        btLigaDesliga.innerHTML = "Liga";
    }
    
}

// Funcao para trocar o src da img e colocar a lampada quebrada
function quebraLampada() {
    lampada.src = './images/quebrada.jpg'
}

// Pega botão liga e adiciona evento click para chamar funcao ligaLampada
btLigaDesliga.addEventListener('click', ligaDesliga)

// Evento para ligar a lampada quando o mouse passar sobre a <img>
lampada.addEventListener('mouseover', ligaLampada)

// Evento para desligar a lampada quando o mouse sair de cima de <img>
lampada.addEventListener('mouseleave', desligaLampada)

// Evento duploclique para chamar a funcao que quebra a lampada
lampada.addEventListener('dblclick', quebraLampada)
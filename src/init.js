/*import Escena_A from '/src/escenas/escena_A.js';
import Escena_B from '/src/escenas/escena_B.js';
import Cargar from './cargar.js';
import Jugador from './objetos/jugador.js';*/
var stage = new Escena_A("Stage");

var stage2 = new Escena_B("escenab");

const config = {
    width: $(document).width(),
    height: $(document).height()*0.8,
    parent: "container",
    type: Phaser.AUTO,
    scene: [Cargar, stage, stage2],
    physics: {
        default: "arcade",
        arcade: {gravity: {
            y:2000
        },
        setBounds: {
            x: 0,
            y: 0,
            width: 3200,
            height: 600,
            thickness: 32
        }
        }
    },
    audio: {
        disableWebAudio: true
    }
}
function juego(){
    var game = new Phaser.Game(config);
game.scene.disableVisibilityChange = true;
}




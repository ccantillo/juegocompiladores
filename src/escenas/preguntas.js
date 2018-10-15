class Pregunta {
    constructor(pregunta, respuesta, opciones){
        this.pregunta = pregunta;
        this.respuesta_act = respuesta;
        this.opciones = opciones;
    }
}

var no_pregunta = 0;

var preguntas = [
    new Pregunta('como saludas', 'hola', ['hola', 'chao', 'habla cachon']),
    new Pregunta('como te despides', 'chao', ['hola', 'chao', 'habla cachon']),
    new Pregunta('como saludas', 'habla', ['hola', 'chao', 'habla cachon']),
    new Pregunta('sisa llegaste', 'hola', ['hola', 'chao', 'habla cachon'])
];
$(document).ready(function(){


    /*$('.pregunta').html(preguntas[0].pregunta);
    
    preguntas[0].opciones.forEach(function(element) {
        $( ".sec_preguntas" ).append( "<p>"+element+"</p>" );
    });*/


    //$('.empezar').click(iterar_preguntas);
    //$('.empezar').click(juego);
    /*('.empezar').click(function (){
        Client.aumentar();
        console.log('si click');
    });*/
    $( ".empezar" ).one( "click", function() {
        Client.aumentar();
        console.log('si click');
      });
    //$('.detener').click(detener);

    añadir_resp(preguntas[0].respuesta_act);
    

})

function iterar_preguntas(){
    console.log('iterando preguntas');
    if(no_pregunta < preguntas.length){
        empezar();
    $('.pregunta').html(preguntas[no_pregunta].pregunta);
    
    preguntas[no_pregunta].opciones.forEach(function(element) {
        $( ".sec_preguntas" ).append( "<p>"+element+"</p>" );
    });
    
    añadir_resp(preguntas[no_pregunta].respuesta_act);

    no_pregunta +=1;

    }

}

/*artyom.redirectRecognizedTextOutput(function(text,isFinal){
    var texto = $('#salida');
    var respuesta = $('.respuesta');
    var pregunta = $('.pregunta');
    if(isFinal){
        if(text.toLowerCase() == pregunta.respuesta_act){
            respuesta.html(text);
        }
    }
    pregunta.html(text);
    texto.val(text);
});*/

function empezar(){
    artyom.fatality();// Detener cualquier instancia previa

    setTimeout(function(){// Esperar 250ms para inicializar
         artyom.initialize({
            lang:"es-ES",// Más lenguajes son soportados, lee la documentación
            continuous:true,// Reconoce 1 solo comando y basta de escuchar
            listen:true, // Iniciar !
            debug:true, // Esto hace que se imprima en la consola un informe cambiar a false para no verlo
            speed:1,  //en 1 puedes hablar a una velocidad normal
            mode: 'quick' // el modo quick reconoce mas rapido las palabras cambiar a 'normal' para que sea mas lento
        }).then(function(){
            console.log("Ready to work !");
        });
    },250);

}

function detener(){
    artyom.fatality();// Detener cualquier instancia previa

};


function añadir_resp(correcta){
    artyom.addCommands([
        {
            indexes:[correcta],
            action:function(){
                //detener();
                iterar_preguntas();
            }
        }
    ]);

}




/*  funciones utiles de artyom

artyom.say("aca haces hablar al cachon ese")  obligar a artyom a hablar
artyom.shutUp(); hacer que artyom se calle

*/
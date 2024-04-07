const { clear } = require('console');
var EventEmitter = require('events');
const { clearInterval } = require('timers');

var contador = 0;

function contadorIncremental(){
    var intervalId = setInterval(function(){
        contador++;
        console.log('Contador: '+ contador);
    if(contador == 2){
        clearInterval(intervalId);
        event.emit('multiplicacao', multiplicacao);
    }
        
    },1000  )
};

var event = new EventEmitter();




function multiplicacao(){
    var multiplicacao = Math.floor(Math.random() * 10) * Math.floor(Math.random() * 10);

    console.log(`O resultado da multiplicação é: ${multiplicacao}`);
}
event.once('contador', contadorIncremental);
event.emit('contador', contadorIncremental);
event.on('multiplicacao', multiplicacao);

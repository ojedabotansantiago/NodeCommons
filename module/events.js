const EventEmitter = require('events');

const emitter = new EventEmitter();



class CEventEmitter {
    constructor(){}
    listenEvent(listenEvent){
        console.log(`recibiendo = ${listenEvent}`);
        emitter.on('event', ()=>{            
            console.log('event received');
        });
    }
    publishEvent(event){
        console.log(`emitiendio = ${event}`);
        emitter.emit(event);
    }

    listenEventWithArgument(listenEvent){
        console.log(`listenEventWithArgument  = ${listenEvent}`);
        
        emitter.on('event', (arg)=>{            
            console.log(`los argumentos son ${arg.id} y ${arg.txt}`);
        });
    }

    publishEventWithArgument(event, argument){
        console.log(`publishEventWithArgument = ${event} y ${argument.id} y ${argument.txt}`);
        emitter.emit(event, argument);
    }
}

exports.CEventEmitter = new CEventEmitter();
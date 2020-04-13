const sum = require('./sumar');
const multi = require('./multiplicar');
const os = require('./os');
const emitter = require('./events');
const http = require('./http');

const numA = 9;
const numB = 5;
const event = 'event';
const argument = {
    id: 0,
    txt: 'my Text'
};

console.log(sum.sumNumb(numA,numB));
console.log(multi.multi(numA,numB));

console.log(os.MyOs.getInfoOS());

emitter.CEventEmitter.listenEvent(event);
emitter.CEventEmitter.publishEvent(event);

emitter.CEventEmitter.listenEventWithArgument(event);
emitter.CEventEmitter.publishEventWithArgument(event, argument);

http.httpServer.createConnection();
http.httpServer.listen();


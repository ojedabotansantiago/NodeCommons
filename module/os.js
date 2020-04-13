const os = require('os');


const viewRelease = () =>{
    console.log(os.release());
};
const viewFreeMem = () =>{
    console.log(os.freemem());
};

class MyOs {
    constructor(){
 
    }
    getInfoOS() {
        viewFreeMem();
        viewRelease();
    }
    
}

exports.MyOs = new MyOs();
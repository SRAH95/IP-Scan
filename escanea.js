const evilscan = require('./');

console.clear();

let options = {
    target :'192.168.1.2-255',
    // target  :'192.168.1.1-5',
    // target  :'192.168.1.1-192.168.1.5',
    //port    :'21, 22, 23, 80, 443, 4443, 4444, 5038, 5060-5070, 8080',
    port : "22",
    status  : 'TROU', // Timeout, Refused, Open, Unreachable
    timeout : 3000,
    banner  : true,
    //geo	    : true
};

    console.log('**** Buscando Ordenadores ****');
let scanner = new evilscan(options);

scanner.on('result',function (data) {
    // fired when item is matching options
    if(data.status == 'open') {
        console.log('.............................');
        console.log(data.ip, data.banner);
    }
});

scanner.on('error',function (err) {
	throw new Error(data.toString());
});

scanner.on('done',function () {
	// finished !
});

scanner.run();

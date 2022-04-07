const second = 10;

var promise = new Promise(function (resolve, reject) {
    const success = true;

    setTimeout(function () {
        console.log(`${second} seconds later....`)
        if (success) {
            resolve();
        } else {
            reject();
        }
    }, second * 1000);
});

promise.then(function () {
    console.log(`${second} seconds has passed`);
}).catch(function () {
    console.log('Some error has occurred');
});

console.log('Time passes by');
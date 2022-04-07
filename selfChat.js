// A chat that mimics what you entered
const events = require('events');

const emitter = new events.EventEmitter();

emitter.on("replied", (message, user) => {
    console.log(`${user}: ${message}`);
});

console.log("Say something to yourself");

process.stdin.on("data", data => {
    const input = data.toString().trim();

    if (input === 'bye' || input === 'exit') {
        emitter.emit("replied", "Sad to see you go, but good bye.....", "Alexa");
        process.exit();
    }

    emitter.emit("replied", input, "terminal");
});
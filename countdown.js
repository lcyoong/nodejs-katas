const seconds = 10;
const waitSecond = 1;
let counter = seconds;

console.log(`Counting down to ${seconds} second`);

const countDownFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("Happy April Fool!");
}

const intervalAction = () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${counter}`);
    counter -= waitSecond;
}

const interval = setInterval(intervalAction, waitSecond * 1000);

setTimeout(countDownFinished, (seconds + 1) * 1000);
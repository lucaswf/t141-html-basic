
console.log('Hi there!')

function sleep(milliseconds){
    let startTime = Date.now();
    while(Date.now() < startTime + milliseconds);
}


sleep(2000);

console.log('Hi there after sleep')

for (let i=1; i <= 10; i++) {
    console.log('Hi number' + i)
}
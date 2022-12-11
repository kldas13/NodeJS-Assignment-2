const readLine=require('readline');

const rl=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});


rl.question('Plese enter your name: ' , (myName)=>{
    console.log(`Hello ${myName}`);
    rl.close();
})
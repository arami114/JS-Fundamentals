const args = process.argv.slice(2);

const num = parseInt(args[0]);

if(Number .isNaN(num)){
    console.log("not a number");
} else{
    console.log("My Number : " + num);
}
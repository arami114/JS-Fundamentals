const argvcount =process.argv.length - 2;

if (argvcount === 0){
    console.log("No argument");
} else if (argvcount === 1){
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
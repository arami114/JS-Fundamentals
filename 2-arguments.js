const argvcount =process.argv.length - 2;

if (argvcount === 0){
    console.log("no argument");
} else if (argvcount === 1){
    console.log("argument found");
} else {
    console.log("arguments found");
}
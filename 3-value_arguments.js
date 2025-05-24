const args = process.argv.slice(2);

if (args[0] == undefined) {
    console.log("no Argument");
} else {
    console.log(args[0]);
}
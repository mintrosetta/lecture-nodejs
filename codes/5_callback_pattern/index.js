function greet(name) {
    console.log("Hello " + name);
}

function higherOrderFunction(callback) {
    const name = "Mint Rosetta";
    callback(name);
}

higherOrderFunction(greet);

higherOrderFunction((name) => {
    console.log(name)
});


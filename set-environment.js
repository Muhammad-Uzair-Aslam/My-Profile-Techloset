#!/bin/node
const fs = require('fs');
//Obtain the environment string passed to the node script
//read the content of the json file

try {
    const environment = process.argv[2];
    var data = fs.readFileSync(`${environment}-env.txt`, 'utf8');
    let stringData = data.toString();
    fs.writeFileSync('.env', stringData);

    const envFileContent = require(`./firebase-${environment}.json`);
    fs.writeFileSync('firebase.json', JSON.stringify(envFileContent, undefined, 2));

} catch (e) {
    console.log('Error:', e.stack);
}

//copy the json inside the env.json file

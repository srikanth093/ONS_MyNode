const http = require('http');
const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// const getData = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        // getData('./content/ons.txt').then((data)=>{console.log(`LIIA SSA Data ${data}`)}).catch((err)=>{
        //     console.log(`ONS Error ${err}`)
        // })
        var fetchData = async () => {
            try {
                var first = await readFilePromise('./content/ons.txt');
                var second = await readFilePromise('./content/onn.txt');
                writeFilePromise('./content/liia.txt', `${first} ${second}`, () => {
                    console.log("wrote into file");
                });
            } catch (error) {
                console.log(`OSR Error ${error}`);
            }
        }
        fetchData();
        res.end("ONS Home ONN")
    } else if (req.url === "/about") {
        for (var i = 0; i < 10000; i++) {
            for (var j = 0; j < 1000; j++) {
                console.log(`SSA ${i} ${j}`);
            }
        }
        res.end("AHAA About LIIA");
    } else {
        res.end("SSA ERROR ANLA");
    }
});

server.listen("5000", () => {
    console.log("Server running on 5000");
})
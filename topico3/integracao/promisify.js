const util = require('util');
const fs = require('fs');

// fs.stat('.', (err, stats) => {
//     if (err) throw err;

//     console.log(stats);
// });

const statP = util.promisify(fs.stat);

async function main() {
    const stats = await statP('./a.txt');
    console.log(stats);
}

main().catch(console.error);
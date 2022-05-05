require('dotenv').config();
const app = require('./app');

async function main() {
    await app.listen(app.get('port'));
    console.log('Server en puerto',app.get('port'));
}

main();
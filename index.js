require('dotenv').config();
const fs = require('fs');
const { getToken } = require('sf-jwt-token');
const privateKey = fs.readFileSync('./jwt/server.key').toString('utf8');

async function main() {

    token = await getToken({
        iss: process.env.ISS,
        sub: process.env.SUB,
        aud: process.env.AUD,
        privateKey: privateKey
    });

    console.log("=== token ===");
    console.log(token);

    await fs.writeFileSync("token.txt", token.access_token);

}
 
main();
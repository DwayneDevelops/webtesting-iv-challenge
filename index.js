require('dotenv').config();
const server = require('./api/server.js');

const port = env.process.PORT || 5000;

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
const express = require('express');
const path = require('path');

const HOST = '0.0.0.0';
const PORT = 8080;

const app = express();
// const Keycloak = require('keycloak-connect');
// const session = require('express-session');

// const memoryStore = new session.MemoryStore();
// const keycloak = new Keycloak({ store: memoryStore });

// // session
// app.use(session({
//   secret: 'thisShouldBeLongAndSecret',
//   resave: false,
//   saveUninitialized: true,
//   store: memoryStore
// }));
// app.use(keycloak.middleware());

app.use(express.static(path.join(__dirname, 'client/build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}`, '/client/build/index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// app.listen(process.env.PORT || 8080,
// () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'https://keycloak.192.168.64.2.nip.io/auth/',
  realm: 'CareerPair',
  clientId: 'cp-frontend',
});

export default keycloak;

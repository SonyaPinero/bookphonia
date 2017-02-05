import credentials from './credentials';

export default {
  aws: {
    zone: credentials.aws.zone,
    accessKeyId: credentials.aws.accessKeyId,
    secretAccessKey: credentials.aws.secretAccessKey
  },
  spotify: {
    clientId: credentials.spotify.clientId,
    clientSecret: credentials.spotify.clientSecret,
    token: credentials.spotify.token,
    baseURL: 'https://api.spotify.com'
  }
};

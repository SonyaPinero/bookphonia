import credentials from './credentials';

exports.aws = {
  zone: aws.credentials.zone,
  accessKeyId: aws.credentials.accessKeyId,
  secretAccessKey: aws.credentials.secretAccessKey
};

exports.spotify = {
  clientId: spotify.credentials.clientId,
  clientSecret: spotify.credentials.clientSecret
};

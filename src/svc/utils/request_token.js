import request from 'superagent';
import config from '../../common/config';

function hitSpotify(){
  let creds = new Buffer(`${config.spotify.clientId}:${config.spotify.clientSecret}`).toString('base64');
  return new Promise((resolve, reject)=>{
    request
      .post(`https://accounts.spotify.com/api/token`)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', `Basic ${creds}`)
      .send({
        grant_type: "client_credentials"
      })
      .end((err, res)=> {
        if (err) {
          console.log('err', err)
          return reject(err);
        } else {
          console.log('res', res)
          return resolve(res)
        }
      })
  })
}

hitSpotify();

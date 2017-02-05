import request from 'superagent';
import config from '../../common/config';

function hitSpotify(){
  return new Promise((resolve, reject)=>{
    request
      .get(`${config.spotify.baseURL}/v1/albums/0sNOF9WDwhWunNAHPD3Baj`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${config.spotify.token}`)
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

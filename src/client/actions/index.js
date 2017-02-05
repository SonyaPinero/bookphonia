import request from 'superagent';
import config from '../../common/config';

export const GET_MUSIC = 'GET_MUSIC';

export function getMusic(){
  const data = request
    .get(`${config.spotify.baseURL}/v1/albums/0sNOF9WDwhWunNAHPD3Baj`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${config.spotify.token}`)

    return {
      type: GET_MUSIC,
      payload: data
    };
}

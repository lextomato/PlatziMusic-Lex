import config from './config'

const { apiKey } = config
const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=ee1083bf7c4e7638cdeaddc664526d9d&format=json'

export default function getArtists(country) {
  const url = URL.replace(':country', country)
  return fetch(url)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}

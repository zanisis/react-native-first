
export const fetchSongs = ()=>{
  fetch('https://api.soundcloud.com/tracks?client_id=f4323c6f7c0cd73d2d786a2b1cdae80c&limit=10')
  .then(res => res.json())
  .then(json => json)
  .catch(err => console.log(err))
}
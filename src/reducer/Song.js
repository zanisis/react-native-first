
const fetchSong = (data)=>{
  let newState ={}
  newState['listSong'] = data
  return newState
}

const searchSongs = (data)=>{
  let newState = {}
  newState['listSong'] = data
  return newState
}

const emptySongs = ()=>{
  let newState = {}
  return newState
}

const songList = (state={}, {type, payload})=>{
  console.log(type, 'direducer')
  switch (type) {
    case 'FETCH_SONG': return fetchSong(payload)
    case 'SEARCHING': return searchSongs(payload)
    case 'CLEAR_SONG': return emptySongs()
    default: return state
  }
}

export default songList
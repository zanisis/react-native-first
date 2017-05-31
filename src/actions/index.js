
export const fetchSongs = ()=>{
  console.log('fetch jalan')
  return dispatch =>
  fetch('https://api.soundcloud.com/tracks?client_id=f4323c6f7c0cd73d2d786a2b1cdae80c&limit=10')
  .then(res => res.json())
  .then(json => {
    return dispatch({
      type : 'FETCH_SONG',
      payload: json
    })
    }
  )
  .catch(err => console.log(err))
}

export const searchSong = (keyword)=>{
  console.log('searchReducer', keyword);
  return dispatch => {
    fetch(`https://api.soundcloud.com/tracks?client_id=f4323c6f7c0cd73d2d786a2b1cdae80c&q=${keyword}&limit=10`)
    .then(res => res.json())
    .then(data => {
      dispatch({type:'SEARCHING', payload: data})
    })
    .catch(err => console.log(err))
  }
}

export const emptySongs = ()=>{
  console.log('emptySongs');
  return dispatch =>{
    return dispatch({
      type : 'CLEAR_SONG'
    })
  }
}
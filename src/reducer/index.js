import {combineReducers} from 'redux'

import songList from './Song'

const rootReducer = combineReducers({
  songList : songList
})

export default rootReducer
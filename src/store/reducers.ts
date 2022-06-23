import { combineReducers } from 'redux';

import songReducer from './reducers/songs-reducer'

const reducers = combineReducers({
  songs: songReducer,
})

export default reducers;
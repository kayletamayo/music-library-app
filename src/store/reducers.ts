import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import songReducer from './reducers/songs-reducer'

const songPersistConfig = {
  key: 'songsReducer',
  storage: AsyncStorage,
  whitelist: ['sectionBy'],
};

const reducers = combineReducers({
  songs: persistReducer(songPersistConfig, songReducer),
});

export default reducers;
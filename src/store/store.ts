import { legacy_createStore as createStore } from 'redux';
import { persistStore } from 'redux-persist';
import reducers from './reducers';

import { SongState } from './reducers/songs-reducer';

export interface CustomAction {
  type: string;
  data?: any;
}

export interface ApplicationState {
  songs: SongState,
}

export default () => {
  let store = createStore(reducers);
  let persistor = persistStore(store);

  return { store, persistor }
}
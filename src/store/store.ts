import { legacy_createStore as createStore } from 'redux';
import reducers from './reducers';

import { SongState } from './reducers/songs-reducer';

export interface CustomAction {
  type: string;
  data?: any;
}

export interface ApplicationState {
  songs: SongState,
}

export const store = createStore(reducers);
import { CustomAction } from '../store';
import { Song, SongList } from '../../types/songs';
import { songListDefault } from '../../defaults/songs';
import { SongSections, SONG_SECTIONS } from '../../constants/songs';
import { SONGS_ACTION_TYPES } from '../action-types';

export interface SongState {
  songList: SongList[],
  sectionBy: SongSections;
  songSelected: Song | {},
}

const defaultState: SongState = {
  songList: [songListDefault],
  sectionBy: SONG_SECTIONS.COLLECTION_NAME,
  songSelected: {},
};

export default function songReducer(state = defaultState, action: CustomAction) {
  switch (action.type) {
    case SONGS_ACTION_TYPES.GET_SONG_LIST:
      return {
        ...state,
        songList: action.data,
      };
    case SONGS_ACTION_TYPES.SET_SONG_SECTION:
      return {
        ...state,
        sectionBy: action.data,
      }
    default:
      return state;
  }
}

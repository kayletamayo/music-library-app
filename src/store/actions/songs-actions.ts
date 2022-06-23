import { CustomAction } from '../store';
import { Song, SongList } from '../../types/songs';

import { SONGS_ACTION_TYPES } from '../action-types';
import { SongSections } from '../../constants/songs';

export const actionSetSongList = (songs: SongList): CustomAction => {
  return {
    type: SONGS_ACTION_TYPES.GET_SONG_LIST,
    data: songs
  }
}

export const actionSetSectionBy = (sectionBy: SongSections): CustomAction => {
  return {
    type: SONGS_ACTION_TYPES.SET_SONG_SECTION,
    data: sectionBy,
  }
}

export const actionSetSelectedSong = (song: Song): CustomAction => {
  return {
    type: SONGS_ACTION_TYPES.SET_SONG_SECTION,
    data: song,
  };
};
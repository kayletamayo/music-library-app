export interface Song {
  trackId: string;
  artistName: string;
  trackName: string;
  artworkUrl100: string;
  releaseDate: string;
  collectionName: string;
}

export interface SongList {
  title: string;
  data: Song[] | []
}


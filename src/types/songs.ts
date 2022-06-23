export interface Song {
  // TODO: update
  wrapperType: string;
  king: string;
  trackId: string;
  artistName: string;
  trackName: string;
  trackCensoredName: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  trackRentalPrice: number;
  collectionHdPrice: number;
  trackHdPrice: number;
  trackHdRentalPrice: number;
  releaseDate: string;
}

export interface SongList {
  title: string;
  data: Song[] | []
}


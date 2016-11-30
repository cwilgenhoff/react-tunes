import _ from 'lodash';
import MediaHelper from './Media';

class FavouritesHelper {
  constructor(favouriteStore) {
    this.favouriteStore = favouriteStore;
  }

  isFavouriteSong(trackId) {
    return this.favouriteStore.songs.includes(trackId);
  }

  isFavouriteAlbum(collectionId) {
    return this.favouriteStore.albums.includes(collectionId);
  }

  noFavouriteAlbums() {
    return this.favouriteStore && this.favouriteStore.albums.length === 0;
  }

  noFavouriteSongs() {
    return this.favouriteStore && this.favouriteStore.songs.length === 0;
  }

  noFavourites() {
    return this.noFavouriteAlbums() && this.noFavouriteSongs();
  }

  sort(mediaList = []) {
    if (mediaList.length === 0 || this.noFavourites()) {
      return mediaList;
    }

    const interWithSongs = this.noFavouriteSongs() ? [] :
      _.intersectionWith(mediaList, this.favouriteStore.songs, MediaHelper.isSongEqualById);

    const interWithAlbums = this.noFavouriteAlbums() ? [] :
      _.intersectionWith(mediaList, this.favouriteStore.albums, MediaHelper.isAlbumEqualById);

    const intersections = [...interWithAlbums, ...interWithSongs];
    const rest = _.differenceWith(mediaList, intersections, this.isMatch);
    return [
      ...intersections,
      ...rest,
    ];
  }
}

export default FavouritesHelper;

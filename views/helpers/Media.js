import WRAPPERS from '../constants/Wrappers';

class MediaHelper {
  static isSongEqualById(song, trackId) {
    return song.wrapperType === WRAPPERS.SONG && song.trackId && song.trackId === trackId;
  }

  static isAlbumEqualById(album, collectionId) {
    return album.wrapperType === WRAPPERS.ALBUM && album.collectionId && album.collectionId === collectionId;
  }

  static isSongEqual(songLeft, songRight) {
    return MediaHelper.isSongEqualById(songLeft, songRight.trackId);
  }

  static isAlbumEqual(albumLeft, albumRight) {
    return MediaHelper.isAlbumEqualById(albumLeft, albumRight.collectionId);
  }

  static isMatch(mediaElementLeft, mediaElementRight) {
    switch (mediaElementLeft.wrapperType) {
      case WRAPPERS.ALBUM:
        return MediaHelper.isAlbumEqual(mediaElementLeft, mediaElementRight);
      case WRAPPERS.SONG:
        return MediaHelper.isSongEqual(mediaElementLeft, mediaElementRight);
      default:
        return false;
    }
  }
}

export default MediaHelper;

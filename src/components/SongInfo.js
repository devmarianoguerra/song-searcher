import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

export default function SongInfo(props) {
  const { song, artist, artistImg } = props;

  return (
    <div>
      <SongArtist artist={artist} artistImg={artistImg} />
      <SongLyric song={song} />
    </div>
  );
}

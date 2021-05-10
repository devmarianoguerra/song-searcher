import React, { useState, useEffect } from "react";
import SongForm from "./SongForm";
import SongInfo from "./SongInfo";
import { Spinner } from "react-bootstrap";

export default function SongSearcher() {
  const [search, setSearch] = useState(null);
  const [song, setSong] = useState(null);
  const [artist, setArtist] = useState([]);
  const [artistImg, setArtistImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchSong = (data) => {
    setSearch(data);
  };

  useEffect(() => {
    if (search === null) {
      return;
    }

    setIsLoading(true);

    const fetchData = async () => {
      const { song, artist } = search;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      let artistUrl = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const res = await fetch(songUrl);
      await res.json().then(async (data) => {
        //console.log("LYRICS: ", data);
        let lyrics = data.lyrics;
        setSong(lyrics);
        const response = await fetch(artistUrl);
        const item = await response.json();
        let artistName = item.artists.map((el) => el.strArtist);
        let thumbNailArr = item.artists.map((el_1) => el_1.strArtistThumb);
        thumbNailArr.map((i) => setArtistImg(i));
        //console.log("ITEM: ", item);
        setArtist(artistName);
      });

      setIsLoading(false);
    };

    fetchData();
  }, [search]);

  return (
    <div>
      <h1>Search your song:</h1>
      <SongForm searchSong={searchSong} />
      {isLoading && (
        <Spinner
          animation="border"
          role="status"
          variant="success"
          className="mt-2"
        >
          <span className="sr-only">Searching for your song.</span>
        </Spinner>
      )}
      <SongInfo
        search={search}
        song={song}
        artist={artist}
        artistImg={artistImg}
      />
    </div>
  );
}

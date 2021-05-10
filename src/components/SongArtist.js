import styled from "styled-components";

const Thumbnail = styled.img`
  margin-top: 1em;
  width: 15em;
`;

export default function SongArtist(props) {
  const { artist, artistImg } = props;

  return (
    <div>
      {artist === undefined ? (
        <h1>Artist not found. Please try another name</h1>
      ) : (
        <div>
          <Thumbnail src={artistImg} alt="" />
          <h1>{artist}</h1>
        </div>
      )}
    </div>
  );
}

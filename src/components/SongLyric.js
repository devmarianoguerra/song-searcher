import { Container } from "react-bootstrap";
import styled from "styled-components";

const LyricWrapper = styled.div`
  border-radius: 32px;
  background: #ededed;
  box-shadow: 5px 5px 10px #cacaca, -5px -5px 10px #f6f6f6;
  padding: 2em;
  margin-bottom: 3em;
`;

export default function SongLyric(props) {
  //console.log("SONG PROPS: ", props);
  return (
    <>
      <Container>
        {props.song === undefined ? (
          <h1>Song not found, try another title</h1>
        ) : (
          <LyricWrapper>{props.song}</LyricWrapper>
        )}
      </Container>
    </>
  );
}

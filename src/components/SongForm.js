import React, { useState } from "react";
import { Form, Button, Container, Modal, FormControl } from "react-bootstrap";
import styled from "styled-components";

const initialForm = {
  song: "",
  artist: "",
};

const CustomInput = styled(FormControl)`
  border-radius: 26px;
  background: linear-gradient(315deg, #d5d5d5, #fefefe);
  box-shadow: -7px -7px 14px #ababab, 7px 7px 14px #ffffff;

  &:focus {
    border-radius: 26px;
    background: linear-gradient(315deg, #d5d5d5, #fefefe);
    box-shadow: -5px -5px 6px #7e7e7e, 5px 5px 6px #ffffff;
  }
`;

const CustomBtn = styled(Button)`
  border-color: transparent;
  border-radius: 26px;
  background: linear-gradient(315deg, #fefefe, #d5d5d5);
  box-shadow: -5px -5px 12px #9c9c9c, 5px 5px 12px #ffffff;
  color: #000;

  &:hover {
    font-weight: bold;
    color: #000;
    border-color: transparent;
  }

  &::focus {
    border-color: transparent;
    border-radius: 26px;
    background: linear-gradient(315deg, #d5d5d5, #fefefe);
    box-shadow: -5px -5px 12px #9c9c9c, 5px 5px 12px #ffffff;
  }
`;

export default function SongForm(props) {
  const { searchSong } = props;

  const [form, setForm] = useState(initialForm);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.song || !form.artist) {
      handleShow();
    }

    searchSong(form);
    setForm(initialForm);
  };

  return (
    <div>
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Song title: </Form.Label>
            <CustomInput
              type="text"
              name="song"
              placeholder="Enter the title of the song you want to search"
              onChange={handleChange}
              value={form.song}
            />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Artist</Form.Label>
            <CustomInput
              type="text"
              name="artist"
              placeholder="Enter the name of the artist related to the song"
              onChange={handleChange}
              value={form.artist}
            />
          </Form.Group>
          <CustomBtn
            variant="success"
            type="submit"
            value="send"
            onClick={handleSubmit}
          >
            Search!
          </CustomBtn>
        </Form>

        {/* Error Modal */}
        <Modal show={show}>
          <Modal.Header closeButton>
            <Modal.Title>Ooooops!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You need to type an artist and a song to start searching.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  getCurrentUser,
  updateUserInfo,
} from "../redux/reducers/auth/userAuthActions";
import { authActions } from "../redux/reducers/auth/authSlice";

const MyProfileModal = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.userInfo);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");
  const [area, setArea] = useState("");

  function handleSetProfileData(event) {
    event.preventDefault();
    const editedProfile = {};
    if (name) {
      editedProfile.name = name;
    }
    if (surname) {
      editedProfile.surname = surname;
    }
    if (title) {
      editedProfile.title = title;
    }
    if (bio) {
      editedProfile.bio = bio;
    }
    if (area) {
      editedProfile.area = area;
    }

    if (editedProfile) {
      dispatch(
        updateUserInfo({ userId: currentUser._id, data: editedProfile })
      ).then(() => {
        dispatch(getCurrentUser());
        cleanProfileData();
        dispatch(authActions.hideEditModal());
      });
    } else {
      return null;
    }
  }

  const cleanProfileData = () => {
    setName("");
    setSurname("");
    setTitle("");
    setBio("");
    setArea("");
  };
  return (
    <Modal
      {...props}
      onHide={() => {
        dispatch(authActions.hideEditModal());
        cleanProfileData();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit your profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              defaultValue={currentUser.name ? currentUser.name : name}
              required
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              defaultValue={currentUser.surname ? currentUser.surname : ""}
              required
              name="surname"
              onChange={(e) => {
                setSurname(e.target.value);
              }}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              defaultValue={currentUser.title ? currentUser.title : ""}
              name="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Location</Form.Label>
            <Form.Control
              defaultValue={currentUser.area ? currentUser.area : ""}
              name="area"
              onChange={(e) => {
                setArea(e.target.value);
              }}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>About</Form.Label>
            <Form.Control
              defaultValue={currentUser.bio ? currentUser.bio : ""}
              name="bio"
              onChange={(e) => {
                setBio(e.target.value);
              }}
              type="text"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            cleanProfileData();
            dispatch(authActions.hideEditModal());
          }}
        >
          Close
        </Button>
        <Button variant="primary" onClick={handleSetProfileData}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyProfileModal;

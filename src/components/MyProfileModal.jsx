import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_SHOW_PROFILE_MODAL,
  fetchProfile,
} from "../redux/actions/actions";
import {
  getCurrentUser,
  updateUserInfo,
} from "../redux/reducers/auth/userAuthActions";
import { authActions } from "../redux/reducers/auth/authSlice";

const MyProfileModal = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.userInfo);

  const [profileData, setProfileData] = useState({
    name: "",
    surname: "",
    email: "",
    title: "",
    area: "",
    bio: "",
  });

  function handleChange(event) {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
    return profileData;
  }
  const handleSetProfileData = () => {
    dispatch(updateUserInfo({ userId: currentUser._id, data: profileData }));
    dispatch(getCurrentUser());
  };
  // useEffect(() => {
  //   setaddedMyProfileData(myProfile);
  // }, [myProfile]);

  // const endPoint = "https://striveschool-api.herokuapp.com/api/profile/";
  // const accessToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk3MGQxOGM5NmRmYjAwMTUyMWE1YzkiLCJpYXQiOjE2NzA4NDM2NzIsImV4cCI6MTY3MjA1MzI3Mn0.0dUkULTnbH-D7rmu6VpWb4OqjIwfSynoJ3nmyP2FbL4";
  // const options = {
  //   method: "PUT",
  //   headers: {
  //     Authorization: "Bearer " + accessToken,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(addedMyProfileData),
  // };
  // const id = "";
  // const action = "";
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Edit your profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name*</Form.Label>
            <Form.Control
              value={currentUser.name ? currentUser.name : ""}
              name="name"
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Surname*</Form.Label>
            <Form.Control
              value={currentUser.surname ? currentUser.surname : ""}
              name="surname"
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              value={currentUser.email ? currentUser.email : ""}
              name="email"
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title*</Form.Label>
            <Form.Control
              value={currentUser.title ? currentUser.title : ""}
              name="title"
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Location*</Form.Label>
            <Form.Control
              value={currentUser.area ? currentUser.area : ""}
              name="area"
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>About*</Form.Label>
            <Form.Control
              value={currentUser.bio ? currentUser.bio : ""}
              name="bio"
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
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

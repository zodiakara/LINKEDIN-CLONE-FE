import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../redux/reducers/auth/authSlice";

const AvatarModal = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.userInfo);
  const userAvatar = useSelector((state) => state.auth.userAvatar);
  console.log(userAvatar);

  const handleAddAvatar = (e) => {
    e.preventDefault();
  };

  const handleDeleteAvatar = () => {};

  return (
    <Modal
      {...props}
      onHide={() => {
        dispatch(authActions.hidePictureModal());
        dispatch(authActions.removeAvatar());
      }}
    >
      <Modal.Header closeButton style={{ color: "white", background: "black" }}>
        <Modal.Title>Profile photo</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: "white", background: "black" }}>
        <input
          accept="image/*"
          id="avatar"
          className="file-input"
          single
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];

            dispatch(authActions.addAvatar(file));
          }}
        ></input>
        <label htmlFor="avatar">
          <div className="d-flex justify-content-center">
            <img
              style={{ borderRadius: "50%" }}
              src={
                userAvatar
                  ? URL.createObjectURL(userAvatar)
                  : currentUser.avatar
              }
              alt={currentUser.name}
            />
          </div>
        </label>
      </Modal.Body>
      <Modal.Footer style={{ color: "white", background: "black" }}>
        <Button onClick={handleAddAvatar}>Add Photo</Button>
        <Button onClick={handleDeleteAvatar}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AvatarModal;

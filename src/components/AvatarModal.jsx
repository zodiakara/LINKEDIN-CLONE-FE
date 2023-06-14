import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../redux/reducers/auth/authSlice";
import {
  getCurrentUser,
  uploadUserAvatar,
} from "../redux/reducers/auth/userAuthActions";

const AvatarModal = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.userInfo);
  const userAvatar = useSelector((state) => state.auth.userAvatar);
  const userId = currentUser._id;
  console.log(userAvatar);

  const handleImgUpload = () => {
    if (userAvatar)
      dispatch(uploadUserAvatar({ userId, userAvatar })).then(() => {
        dispatch(getCurrentUser());
      });
  };

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
        <Button onClick={handleImgUpload}>Add Photo</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AvatarModal;

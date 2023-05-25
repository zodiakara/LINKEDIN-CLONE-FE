import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../redux/reducers/auth/authSlice";

const AvatarModal = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.userInfo);

  return (
    <Modal
      {...props}
      onHide={() => {
        dispatch(authActions.hidePictureModal());
      }}
    >
      <Modal.Header closeButton style={{ color: "white", background: "black" }}>
        <Modal.Title>Profile photo</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: "white", background: "black" }}>
        <div className="d-flex justify-content-center">
          <img
            style={{ borderRadius: "50%" }}
            src={currentUser.avatar}
            alt={currentUser.name}
          />
        </div>
      </Modal.Body>
      <Modal.Footer style={{ color: "white", background: "black" }}>
        <Button onClick={() => {}}>Add Photo</Button>
        <Button onClick={() => {}}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AvatarModal;

import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import GreyBorderBtn from "./GreyBorderBtn";
import { SlEmotsmile } from "react-icons/sl";
import { HiOutlinePhoto, HiDocument } from "react-icons/hi2";
import { IoLogoYoutube } from "react-icons/io";
import { BsBriefcaseFill, BsThreeDots } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { RiBarChartFill } from "react-icons/ri";
import { useState } from "react";
import { addNewPost, getAllPosts } from "../redux/reducers/posts.js/posts";
import { postActions } from "../redux/reducers/posts.js/postsSlice";

const PostModal = (props) => {
  const currentUser = useSelector((state) => state.auth.userInfo);
  const postImage = useSelector((state) => state.posts.postImage);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      text: text,
      user: currentUser._id,
    };
    dispatch(addNewPost({ newPost, image: postImage })).then(() => {
      setText("");
      setTimeout(() => {
        dispatch(postActions.hidePostModal());
        dispatch(getAllPosts());
        dispatch(postActions.removePostPicture());
      }, 2000);
    });
  };

  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      data-supported-dps="16x16"
      fill="currentColor"
      class="mercado-match"
      width="16"
      height="16"
      focusable="false"
    >
      <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
    </svg>
  );

  const iconTwo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      data-supported-dps="16x16"
      fill="currentColor"
      class="mercado-match"
      width="16"
      height="16"
      focusable="false"
    >
      <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
    </svg>
  );

  return (
    <Modal
      {...props}
      className="post-model"
      onHide={() => {
        dispatch(postActions.hidePostModal());
        dispatch(postActions.removePostPicture());
        setText("");
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Create a post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex">
          {" "}
          <div>
            <img className="xs-profiles" src={currentUser.avatar} alt="" />
          </div>
          <div className="fw-bold ml-3">
            <div>
              {" "}
              {currentUser.name} {currentUser.surname}
            </div>
            <GreyBorderBtn iconTwo={iconTwo} icon={icon} content="Anyone" />
          </div>
        </div>
        <Form className="mt-3" onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              value={text}
              name="postText"
              as="textarea"
              rows={3}
              placeholder="What do you want to talk about?"
              className="post-text"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
        <button className="experience-buttons">
          <SlEmotsmile className="experience-buttons-icon" />
        </button>
      </Modal.Body>
      <Modal.Footer>
        <input
          className="ugh"
          accept="image/*"
          id="postImage"
          single
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            dispatch(postActions.addPostPicture(file));
          }}
        ></input>
        <label htmlFor="postImage" className="m-0 p-0">
          <HiOutlinePhoto className="experience-buttons-icon" />
        </label>
        <button className="experience-buttons align-items-center"></button>
        <button className="experience-buttons">
          <IoLogoYoutube className="experience-buttons-icon" />
        </button>
        <button className="experience-buttons">
          <HiDocument className="experience-buttons-icon" />
        </button>
        <button className="experience-buttons">
          <BsBriefcaseFill className="experience-buttons-icon" />
        </button>
        <button className="experience-buttons">
          <FaSun className="experience-buttons-icon" />
        </button>
        <button className="experience-buttons">
          <RiBarChartFill className="experience-buttons-icon" />
        </button>
        <button className="experience-buttons">
          <BsThreeDots className="experience-buttons-icon" />
        </button>
        <Button type="submit" onClick={handleSubmit} variant="primary">
          Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PostModal;

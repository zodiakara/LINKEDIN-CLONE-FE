import "./HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_SHOW_POST_MODAL } from "../../redux/actions/actions";
import PostModal from "../PostModal";
import { postActions } from "../../redux/reducers/posts.js/postsSlice";

const WritePost = () => {
  const currentUser = useSelector((state) => state.auth.userInfo);
  const showPostModal = useSelector((state) => state.posts.postModal);
  const dispatch = useDispatch();

  return (
    <div className="mainContainerPost p-1">
      <PostModal
        show={showPostModal}
        onHide={() => {
          dispatch(postActions.hidePostModal());
        }}
      />
      <div className="d-flex align-items-center">
        <img
          className="userPicturePost mt-2 ml-3"
          src={currentUser.avatar}
          alt={currentUser.name}
        />{" "}
        <button
          className="userPostBtn m-2, p-2 w-100 mx-3"
          onClick={() => {
            dispatch(postActions.showPostModal());
          }}
        >
          <span className="justify-content-flex-start ml-2 fs-14">
            Start a post
          </span>
        </button>
      </div>
      <div className="share-box-feed wrapper my-1 fs-14 fw-800">
        <button
          aria-label="Add a photo"
          className="d-flex share-box-btn py-2 px-1 my-1"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#378fe9"
            className="mr-2"
            width={24}
            height={24}
          >
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z" />
          </svg>{" "}
          <span className="share-box-btn-text">Photo</span>
        </button>
        <button
          aria-label="Add a video"
          className="d-flex share-box-btn py-2 px-1 my-1"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#5f9b41"
            className="mr-2"
            width={24}
            height={24}
          >
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z" />
          </svg>
          <span className="share-box-btn-text">Video</span>
        </button>
        <button
          aria-label="Create an event"
          className="d-flex share-box-btn py-2 px-1 my-1"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#c37d16"
            className="mr-2"
            width={24}
            height={24}
          >
            <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z" />
          </svg>
          <span className="share-box-feed-entry-toolbar__item-text">Event</span>
        </button>
        <button
          aria-label="Write an article on LinkedIn"
          className="d-flex share-box-btn py-2 px-1 my-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#e16745"
            className="mr-2"
            width={24}
            height={24}
          >
            <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z" />
          </svg>
          <span className="share-box-feed-entry-toolbar__item-text">
            Write article
          </span>
        </button>
      </div>
    </div>
  );
};

export default WritePost;

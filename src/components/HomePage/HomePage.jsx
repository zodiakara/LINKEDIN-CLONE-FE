import RightSideBar from "../RightSideBar";
import MainPostsContainer from "./MainPostsContainer";
import LeftSidebar from "./LeftSidebar";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "../../redux/reducers/posts.js/posts";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.userInfo);
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <>
      {!currentUser ? (
        navigate("/login")
      ) : (
        <>
          <Container className="d-flex">
            <LeftSidebar />

            <MainPostsContainer />

            <RightSideBar />
          </Container>
        </>
      )}
    </>
  );
};

export default HomePage;

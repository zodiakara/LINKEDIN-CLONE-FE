import RightSideBar from "../RightSideBar";
import MainPostsContainer from "./MainPostsContainer";
import LeftSidebar from "./LeftSidebar";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "../../redux/reducers/posts.js/posts";
import { Container } from "react-bootstrap";

const HomePage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.userInfo);
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [posts.length]);

  return (
    <>
      {currentUser && (
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

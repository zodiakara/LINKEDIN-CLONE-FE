import RightSideBar from "../RightSideBar";
import MainPostsContainer from "./MainPostsContainer";
import LeftSidebar from "./LeftSidebar";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "../../redux/reducers/posts.js/posts";

const HomePage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.userInfo);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <>
      {currentUser && (
        <>
          <LeftSidebar />

          <MainPostsContainer />

          <RightSideBar />
        </>
      )}
    </>
  );
};

export default HomePage;

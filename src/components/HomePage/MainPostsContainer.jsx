import WritePost from "./WritePost";
import PostsDisplay from "./PostsDisplay";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const MainPostsContainer = () => {
  const posts = useSelector((state) => state.posts.posts.posts);
  console.log(posts);

  return (
    <>
      <Col sm={12} md={9} lg={7}>
        <WritePost />
        <div className="d-flex align-items-center justify-content-between fs-14">
          <hr className="w-75"></hr>
          <span className="mx-2">
            Sort by: <span className="fw-800">Top</span>
          </span>
        </div>
        {posts &&
          posts.map((post) => <PostsDisplay post={post} key={post._id} />)}
      </Col>
    </>
  );
};

export default MainPostsContainer;

import React, { useEffect, useState } from "react";
import HomePosts from "../components/HomePosts";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = ({setIsLoggedIn}) => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`https://blog-api-uupp.onrender.com/api/posts/`);
      setPosts(res.data);
      res.data.length > 0 ? setHasMore(true) : setHasMore(false);
      setIsLoggedIn(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchPosts}
      hasMore={hasMore}
    >
      <div>
        <div className="flex flex-wrap justify-center items-center text-white text-5x mt-4 mb-3">
          {posts.map((post) => (
            <HomePosts key={post._id} post={post} />
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default Home;

import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import LayOutApp from "../components/LayOutApp";
import styles from "../styles/post.module.css";
import { setPost } from "../store/actions";
import { GlobalStateType } from "../store/reducers";
import { Post } from "../components/Post";

function AllPosts({ posts }) {
  const dispatch = useDispatch();
  const stateComponent = useSelector((state: GlobalStateType) => state.allPost.allPosts);
  let allPosts = posts ?? stateComponent;
  if (!allPosts.length) {
    dispatch(setPost());
  }
  useEffect(() => {
    if (!posts) {
      dispatch(setPost());
    }
  }, [dispatch])
  return (
    <LayOutApp>
      {
        allPosts.map((el) => {
          return <Post key={el.id}
            id={el.id}
            title={!el.title ? 'net title' : el.title}
            body={!el.body ? 'net body' : el.body} />
        })
      }
    </LayOutApp>
  );
}

AllPosts.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return { posts: null }
  }
  let resons = await axios.get("https://simple-blog-api.crew.red/posts/");
  return { posts: resons.data.reverse() }
}

export default AllPosts;

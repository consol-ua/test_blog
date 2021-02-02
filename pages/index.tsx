import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import LayOutApp from "../components/LayOutApp";
import styles from "../styles/post.module.css";
import { setPost } from "../store/actions";

function AllPosts({ posts }) {
  const state = useSelector((state) => state.creactePost);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setPost());
  // });
  // console.log(state);
  console.log(state);
  let allPosts = posts ? posts : state;
  return (
    <LayOutApp>
      <h1>test{JSON.stringify(allPosts)}</h1>
    </LayOutApp>
  );
}

export async function getStaticProps(ctx) {
  let resons = await axios.get("https://simple-blog-api.crew.red/posts/");
  return { props: { posts: resons.data } };
}
export default AllPosts;

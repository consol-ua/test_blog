import Head from "next/head";
import { useEffect, useSelector, useDispatch } from "react";
import LayOutApp from "../components/LayOutApp";
import styles from "../styles/post.module.css";
import setPost from "../store/actions";

export default function Post() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPost());
  });
  console.log(state);
  return (
    <LayOutApp>
      <h1>Hello world</h1>
    </LayOutApp>
  );
}

// Post.getInitialProps = async (ctx) => {
//   if (typeof window === "undefined") {
//     setPost();
//   }
//   return { lastPostId:  };
// };

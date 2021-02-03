import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import LayOutApp from "../components/LayOutApp";
import s from "../styles/post.module.css";
import { setPost } from "../store/actions";
import { GlobalStateType } from "../store/reducers";
import { Post } from "../components/Post";
import Preloader from "../components/preloder/Preloader";

function AllPosts({ posts }) {
  const dispatch = useDispatch();
  const stateComponent = useSelector((state: GlobalStateType) => state.allPost);
  let allPosts = posts ?? stateComponent.allPosts;
  if (!allPosts.length && !stateComponent.isLoaded) {
    dispatch(setPost());
  }
  useEffect(() => {
    if (!posts && !stateComponent.isLoaded) {
      dispatch(setPost());
    }
  }, [dispatch])
  if (stateComponent.isLoaded) {
    return <LayOutApp><Preloader /></LayOutApp>
  }
  return (
    <LayOutApp>
      <div className={s.container}>
        {
          allPosts.map((el) => {
            return <Post key={el.id}
              id={el.id}
              title={!el.title ? 'net title' : el.title}
              body={!el.body ? 'net body' : el.body} />
          })
        }
      </div>
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

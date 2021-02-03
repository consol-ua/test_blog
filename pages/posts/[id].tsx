import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LayOutApp from "../../components/LayOutApp";
import Preloader from "../../components/preloder/Preloader";
import { getPost, addBodyComment, sendComment } from "../../store/actions";
import { GlobalStateType } from "../../store/reducers";
import s from '../../styles/onePost.module.css'


export default function OnePost() {
  let router = useRouter();
  const state = useSelector((state: GlobalStateType) => state.post);
  const dispatch = useDispatch();
  let onClickBack = () => {
    router.push("/");
  };
  let id = router.query.id
  useEffect(() => {
    // if (!posts && !stateComponent.isLoaded) {
    dispatch(getPost(id));
    // }
  }, [dispatch])
  let onChangeBody = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let value = event.target.value;
    dispatch(addBodyComment(value));
  };
  let onClickSend = () => {
    dispatch(sendComment(+id, state.newBodyComment))
  }

  return (
    <LayOutApp>
      {state.isGetPost && <Preloader />}
      <div className={s.mainPost}>
        <div className={s.img}>
          <Image
            src="/blog.webp"
            alt="Default photo"
            width={600}
            height={300}
          />
        </div>
        <div className={s.post}>
          <h2 className={s.title}>{state.title}</h2>
          <p className={s.body}>{state.body}</p>
        </div>
        <div className={s.commentsContainer}>
          <span>Comments</span>
          {state.comments.length ? state.comments.map((el) => {
            return (
              <div key={el.id} className={s.comment}>
                {el.body}
              </div>
            )
          }) : 'NO COMMENTS'}
          <div className={s.newComment}>
            <span>New Comment</span>
            <textarea
              cols={10}
              rows={5}
              onChange={(e) => onChangeBody(e)}
              value={state.newBodyComment ?? ""}
            />
            <div className={s.buttonContainer}>
              <button onClick={() => onClickSend()}>Send Comment</button>
              <button onClick={() => onClickBack()}>Back</button>
            </div>
          </div>
        </div>
      </div>
    </LayOutApp>
  );
}

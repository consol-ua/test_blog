import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import LayOutApp from "../../../components/LayOutApp";
import { addTitlePost, addBodyPost, sendPost, redirected } from "../../../store/actions";
import { GlobalStateType } from "../../../store/reducers";
import Preloader from "../../../components/preloder/Preloader";
import s from '../../../styles/newpost.module.css'

export default function NewPost() {
  let router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state: GlobalStateType) => state.createPost);
  let onChangeTitle = (event) => {
    let value = event.target.value;
    dispatch(addTitlePost(value));
  };
  let onChangeBody = (event) => {
    let value = event.target.value;
    dispatch(addBodyPost(value));
  };
  if (state.redirect) {
    router.push("/");
    dispatch(redirected(false))
  }
  let onClickSend = () => {
    dispatch(sendPost(state.title, state.body));
  };
  let onClickBack = () => {
    router.push("/");
  };
  return (
    <LayOutApp>
      {state.isPosted && <Preloader />}
      <div className={s.container}>
        <div className={s.title}>
          <h3>Title</h3>
          <textarea
            cols={30}
            rows={1}
            onChange={(e) => onChangeTitle(e)}
            value={state.title ?? ""}
          />
        </div>
        <div className={s.body}>
          <h3>Body</h3>
          <textarea
            cols={30}
            rows={10}
            onChange={(e) => onChangeBody(e)}
            value={state.body ?? ""}
          />
        </div>
        {state.isPosted ? <button disabled onClick={() => onClickSend()}>Send post</button> :
          <button onClick={() => onClickSend()}>Send post</button>}
        <button onClick={() => onClickBack()}>Back</button>
      </div>
    </LayOutApp>
  );
}

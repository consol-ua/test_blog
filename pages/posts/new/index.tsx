import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import LayOutApp from "../../../components/LayOutApp";
import { addTitlePost, addBodyPost, sendPost } from "../../../store/actions";
import { GlobalStateType } from "../../../store/reducers";

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
  let onClickSend = () => {
    dispatch(sendPost(state.title, state.body));
    router.push("/");
  };
  return (
    <LayOutApp>
      <div className="container">
        <div className="title">
          <h3>Title</h3>
          <textarea
            cols={30}
            rows={1}
            onChange={(e) => onChangeTitle(e)}
            value={state.title ?? ""}
          />
        </div>
        <div className="Body">
          <h3>Body</h3>
          <textarea
            cols={30}
            rows={10}
            onChange={(e) => onChangeBody(e)}
            value={state.body ?? ""}
          />
        </div>
        <button onClick={() => onClickSend()}>Send post</button>
      </div>
      <style jsx>{`
        .container {
          margin: 20px;
        }
        h3 {
          margin-bottom: 0;
        }
        button {
          padding: 20px;
        }
        textarea {
          width: 100%;
          resize: none;
        }
      `}</style>
    </LayOutApp>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import LayOutApp from "../../../components/LayOutApp";
import { addTitlePost, addBodyPost, sendPost } from "../../../store/actions";

export default function NewPost() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.createPost);
  let onChangeTitle = (event) => {
    let value = event.target.value;
    dispatch(addTitlePost(value));
  };
  let onChangeBody = (event) => {
    let value = event.target.value;
    dispatch(addBodyPost(value));
  };
  let onClickSend = () => {
    dispatch(sendPost());
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

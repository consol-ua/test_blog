import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import styles from "../styles/Lastpost.module.css";
import LayOutApp from "../../../components/LayOutApp";
import { addBodyComment } from "../../../store/actions";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.createPost);
  let onChangeTitle = (event) => {
    let value = event.target.value;
    dispatch(addBodyComment(value));
    console.log(state);
  };
  return (
    <LayOutApp>
      <div>
        <div className="title">
          <h3>Title</h3>
          <textarea
            cols={30}
            rows={1}
            onChange={(e) => onChangeTitle(e)}
            value="test"
          />
        </div>
        <div className="Bodi">
          <h4>Body</h4>
          <textarea
            cols={30}
            rows={10}
            onChange={(e) => console.log(e.target.value)}
          ></textarea>
        </div>
        <button>Send post</button>
      </div>
    </LayOutApp>
  );
}

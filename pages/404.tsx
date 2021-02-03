import Head from "next/head";
import styles from "../styles/Lastpost.module.css";
import LayOutApp from "../components/LayOutApp";
import { useRouter } from "next/router";

export default function Error() {
  let router = useRouter();
  let onClickBack = () => {
    router.push("/");
  };
  return (
    <LayOutApp>
      <h1>Oops... Something went wrong. Please go back</h1>
      <button onClick={() => onClickBack()}>Back</button>
    </LayOutApp>
  );
}

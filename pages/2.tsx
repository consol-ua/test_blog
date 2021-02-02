import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
import LayOutApp from "../components/LayOutApp";
import styles from "../styles/Lastpost.module.css";

const codeStyle = {
  background: "#ebebeb",
  width: 400,
  padding: 10,
  border: "1px solid grey",
  marginBottom: 10
};
export default function Home() {
  // return (
  //   <>
  //     <NavMenu />
  //     <h1>Test link 2</h1>
  //   </>
  // );
  const state = useSelector((state) => state);

  return (
    <LayOutApp>
      <pre style={codeStyle}>
        <code>{JSON.stringify(state, null, 4)}</code>
      </pre>
      <Link href="/">
        <a>Go Back Home</a>
      </Link>
    </LayOutApp>
  );
}

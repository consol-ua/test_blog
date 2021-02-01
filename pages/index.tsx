import Head from "next/head";
import NavMenu from "../components/NavMenu";
import styles from "../styles/Lastpost.module.css";
import { useRouter } from 'next/router'


export default function Home() {

  return (
    <>
      <NavMenu />
      <h1>Hello world</h1>
    </>
  );
}

import Link from "next/link";
import s from "../styles/layoutapp.module.css";

function LayOutApp({ children }) {
  return (
    <div className={s.container}>
      <div className={s.navigation}>
        <Link href={"/posts"}>
          <a className={s.active}>Last Post</a>
        </Link>
        <Link href={"/"}>
          <a>All Post</a>
        </Link>
        <Link href={"/posts/new"}>
          <a>Create Post</a>
        </Link>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default LayOutApp;

import Link from "next/link";
import React from "react";
import s from "../styles/layoutapp.module.css";

type LayOutApp = {
  children: React.ReactNode
}
function LayOutApp({ children }: LayOutApp) {
  return (
    <div className={s.container}>
      <div className={s.navigation}>
        <Link href={"/posts/new"}>
          <a>Create Post</a>
        </Link>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default LayOutApp;

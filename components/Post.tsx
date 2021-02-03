import { useRouter } from "next/router"
import { useDispatch } from "react-redux";
import Image from 'next/image'
import s from './post.module.css'
import { delPost } from "../store/actions"


export function Post({ title, body, id }) {
  let router = useRouter()
  let dispatch = useDispatch()
  function onClickPost() {
    router.push(`/posts/${id}`)
  }
  return (
    <div className={s.container}>
      <div className={s.postItem}>
        <div className={s.img} onClick={onClickPost}>
          <Image
            src="/blog.webp"
            alt="Default photo"
            width={600}
            height={300}
          />
        </div>
        <div className={s.post}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.body}>{body}</p>
        </div>
      </div>
      <button onClick={() => dispatch(delPost(id))} className={s.deletPost}>X</button>
    </div>
  )
}
import { useRouter } from "next/router"
import { useDispatch } from "react-redux";
import Image from 'next/image'
import s from './post.module.css'
import { delPost } from "../store/actions"

type PostComponentType = {
  title: string
  body: string
  id: number
}
export function Post({ title, body, id }: PostComponentType) {
  let router = useRouter()
  let dispatch = useDispatch()
  function onClickPost() {
    router.push(`/posts/${id}`)
  }
  function onClickDel() {
    dispatch(delPost(id))
    router.push(`/`)
  }
  return (
    <div className={s.container}>
      <div className={s.postItem} onClick={onClickPost}>
        <div className={s.img}>
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
      <button onClick={onClickDel} className={s.deletPost}>X</button>
    </div>
  )
}
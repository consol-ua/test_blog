import { useRouter } from "next/router"
import Image from 'next/image'
import s from './post.module.css'


export function Post({ title, body, id }) {
  let router = useRouter()
  function onClickPost() {
    router.push(`/posts/${id}`)
  }
  return (
    <div className={s.container} onClick={onClickPost}>
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
  )
}
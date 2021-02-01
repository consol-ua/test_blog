import Link from 'next/link'
import s from '../styles/navmenu.module.css'


function NavMenu() {

  return (
    <div className={s.navigation}>
      <Link href={'/'}><a className={s.active}>Last Post</a></Link>
      <Link href={'/1'}><a>All Post</a></Link>
      <Link href={'/2'}><a>Create Post</a></Link>
    </div>
  )
}

export default NavMenu
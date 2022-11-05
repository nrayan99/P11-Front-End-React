import { Link } from 'react-router-dom'
import style from './NotFound.module.scss'

function NotFound() {
  return (
    <div className={style.NotFound}>
        <h1>404</h1>
        <h4>Oups! La page que vous demandez n'existe pas.</h4>
        <Link to={'/'}>Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default NotFound
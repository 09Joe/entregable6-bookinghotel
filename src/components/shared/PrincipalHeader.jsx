import { Link } from "react-router-dom"
import './style/PrincipalHeader.css'

const PrincipalHeader = () => {

  //maquetar el header 
  
  return (
    <header className="Header-book">
        <h1 className="Title__App"><Link to='/'>Hotels-App</Link></h1>
        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__item"><Link className="header__link" to='/reservations'>Reservations</Link></li>
                <li className="header__item"><Link className="header__link" to='/register'>Register</Link></li>
                <li className="header__item"><Link className="header__link" to='/login'>Login</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default PrincipalHeader
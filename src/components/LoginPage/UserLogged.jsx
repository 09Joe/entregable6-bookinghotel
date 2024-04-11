import './style/UserLogged.css'

const UserLogged = ({setUser, user}) => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser();
    }

// dar clase a  la pagina de usuario logeado 
  return (
    <div>
        <article className='card_logged_user'>
            <header>
                <img className="logged_image" src={
                    user.gender === 'female'
                    ? '/user-female-icon.svg'
                    : '/user-male-icon.svg'
                } alt="" />
            </header>
            <h2 className="logged_user">
                {user.firstName} {user.lastName}
            </h2>
            <button className="logout_btn" onClick={handleLogout}>Logout</button>
        </article>
    </div>
  )
}

export default UserLogged
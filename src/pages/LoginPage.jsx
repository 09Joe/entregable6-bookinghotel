import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import UserLogged from "../components/LoginPage/UserLogged"
import { useState } from "react"
import './style/LoginPage.css'

const LoginPage = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const { register, handleSubmit, reset } = useForm()

  const { loginUser } = useAuth()

  const Submit = data => {
    loginUser(data)
    reset({
      email: '',
      password: ''
    })
  }

  if(localStorage.getItem('token')) {
    return <UserLogged setUser={setUser} user={user}/>;
  }



  return (
    <div>
      <form className="login__form" onSubmit={handleSubmit(Submit)}>
        <label className="form_seccion">
          <span>Email</span>
          <input {...register('email')} type="email" />
        </label>
        <label className="form_seccion">
          <span>Password</span>
          <input {...register('password')} type="password" />
        </label>
        <button className="login__form__button">Submit</button>
      </form>
    </div>
  )
}

export default LoginPage
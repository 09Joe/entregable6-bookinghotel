import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import './style/RegisterPage.css'

const RegisterPage = () => {

  const { register, handleSubmit, reset } = useForm()

  const { registerUser } = useAuth()

  const submit = data => {
   registerUser(data)
   reset({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: 'unknown'
  })
  }

// dar clases a la pagina del registro

  return (
    <div>
      <form className="form__register" onSubmit={handleSubmit(submit)}>
        <h2>Register</h2>
        <label className="form__register__label">
          <span className="form__info">First Name</span>
          <input {...register('firstName')} type="text" />
        </label>
        <label className="form__register__label">
          <span>Last Name</span>
          <input {...register('lastName')} type="text" />
        </label>
        <label className="form__register__label">
          <span>Email</span>
          <input {...register('email')} type="email" />
        </label>
        <label className="form__register__label">
          <span>Password</span>
          <input {...register('password')} type="password" />
        </label>
        <label className="form__register__label">
          <span>Gender</span>
          <select {...register('gender')}>
            <option value='unknown'>Unknown</option>
            <option value='male'>male</option>
            <option value='female'>female</option>
            <option value='other'>Prefer not to say</option>
          </select>
        </label>
        <button className="register__button">Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage
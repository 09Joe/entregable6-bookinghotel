import axios from "axios"
import { useNavigate } from "react-router-dom"

const useAuth = () => {

    const navigate = useNavigate()

    //register

    const registerUser = (data) => {
        const url = 'https://hotels-api.academlo.tech/users'
        axios.post(url, data)
         .then(res => {
            console.log(res.data)
            navigate('/login')
        })
         .catch(err => console.log(err))

    }


    //login

    const loginUser = (data) => {
        const url = 'https://hotels-api.academlo.tech/users/login'
        axios.post(url, data)
         .then(res => {
          console.log(res.data)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('user', JSON.stringify(res.data.user))
          navigate('/')
        })
         .catch(err => {
          console.log(err)
          localStorage.removeItem('token')
          localStorage.removeItem('user')
        })

    }

    return { registerUser, loginUser }
  
}

export default useAuth
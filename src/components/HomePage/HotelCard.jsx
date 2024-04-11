import { useNavigate } from "react-router-dom"
import './styles/HotelCard.css'

const HotelCard = ( { hotel } ) => {

   const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/hotels/${hotel.id}`)
    }
// NO OLVIDAR ponerle clases para el css 
  return (
    <article className="card">
        <header>
            <img className="card_img" src={hotel.images[0].url} alt="" />
        </header>
        <section className="card_section">
            <h3>{hotel.name}</h3>
            <p>{hotel.rating}</p>
            <span>{hotel.city.name}, {hotel.city.country}</span>
            <div>{hotel.price}</div>
        </section>
        <footer>
            <button className="card__btn" onClick={handleClick}>See more...</button>
        </footer>
    </article>
  )
}

export default HotelCard
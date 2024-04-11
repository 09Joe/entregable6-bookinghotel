import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"
import './Style/FormReview.css'

const FormReviews = ({ reserveSelected, setReserveSelect }) => {

    console.log(reserveSelected)

   const { handleSubmit, reset, register } = useForm()
    const [,, createReview] = useCrud()

   const submit = data => {
    const url = 'https://hotels-api.academlo.tech/reviews'
    data.hotelId = reserveSelected?.hotel.id
    data.rating = +data.rating
    createReview(url, data)
    setReserveSelect()
   }

// crear el modal aqui

  return (
    <article className="form_reserve">
      <h3 className="reserve_title">Reserve</h3>
      <section className="reserve_card_info">
        <header>
          <img className="reserve_img" src={reserveSelected?.hotel.images[0].url} alt="" />
        </header>
        <h4>{reserveSelected?.hotel.name}</h4>
        <p>
          {reserveSelected?.hotel.city.name},{" "}
          {reserveSelected?.hotel.city.country}
        </p>
        <ul>
          <li>
            <span>Reservation Days: </span>
            <span>{reserveSelected?.reservationsDays}</span>
          </li>
          <li>
            <span>subtotal Price: </span>
            <span>{reserveSelected?.subtotal}USD</span>
          </li>
        </ul>
      </section>
      <form className="form_review" onSubmit={handleSubmit(submit)}>
        <label>
          <span>Rating</span>
          <select {...register('rating')}>
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
            <option value="3">⭐️⭐️⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="1">⭐️</option>
          </select>
        </label>
        <label>
          <span>Comments</span>
          <textarea className="review_coments" {...register('comment')} />
        </label>
        <button className="review_btn">Submit</button>
      </form>
    </article>
  )
}

export default FormReviews
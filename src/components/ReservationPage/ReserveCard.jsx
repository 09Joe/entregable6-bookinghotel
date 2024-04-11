import './Style/ReserveCard.css'

const ReserveCard = ({ reserve, setReserveSelected, deleteBooking }) => {

  const checkIn = new Date(reserve.checkIn)
  const checkOut = new Date(reserve.checkOut)
  const reservationsDays = (checkOut - checkIn)/(1000 * 60 * 60 * 24)

  const handleReview = () => {
    const obj = {
      ...reserve,
      reservationsDays,
      subtotal: reserve.hotel.price * reservationsDays
    }
    setReserveSelected(obj)
  }


  const handleDeleteBooking = () => {
    const url = `https://hotels-api.academlo.tech/bookings/${reserve.id}`
    deleteBooking(url, reserve.id)
  }


  return (
    <article className='reserve_card'>
      <header>
        <img className='reserve_card_img' src={reserve.hotel.images[0].url} alt="" />
      </header>
      <section className='reserve_card_section'>
        <h3>{reserve.hotel.name}</h3>
        <div>{reserve.hotel.city.name}, {reserve.hotel.city.country}
        </div>
        <div className='rate_btn' onClick={handleReview} >Rate and comment this visit...</div>
      </section>
      <section >
        <ul>
          <li><span>Reservation Days: </span>
          <span>{reservationsDays}</span>
          </li>
          <li><span>subtotal Price: </span>
          <span>{reserve.hotel.price * reservationsDays} USD</span>
          </li>
        </ul>
      </section>
      <footer>
        <button onClick={handleDeleteBooking}>
          <i className='bx bx-trash'></i>
        </button>
      </footer>
    </article>
  )
}

export default ReserveCard
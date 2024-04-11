import { useEffect, useState } from "react"
import useCrud from "../hooks/useCrud"
import ReserveCard from "../components/ReservationPage/ReserveCard"
import FormReviews from "../components/ReservationPage/FormReviews"

const Reservations = () => {

  const [reserveSelect, setReserveSelect] = useState()

  const [ bookings, getBookings,,deleteBooking ] = useCrud()

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/bookings'
    getBookings(url)
  }, [])

  console.log(bookings)

  return (
    <section>
      <FormReviews
      reserveSelected={reserveSelect}
      setReserveSelect={setReserveSelect} 
      />
      <h2>Reservations</h2>
      <div>
         {
          bookings?.map(reserve => (
            <ReserveCard 
              key={reserve.id}
              reserve={reserve}
              setReserveSelected={setReserveSelect}
              deleteBooking={deleteBooking}
            />
          ))
         }
      </div>
    </section>
  )
}

export default Reservations
import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";
import './style/FormReserve.css'

const FormReserve = ({ hotelId }) => {

   const { handleSubmit, register, reset } = useForm()

   const [,,createBooking] = useCrud()

   const submit = data => {
    const url = 'https://hotels-api.academlo.tech/bookings'
    data.hotelId = Number(hotelId)
    createBooking(url, data)
   }


  return (
    <section onSubmit={handleSubmit(submit)}>
      <h3>Do you want to reserve this hotel?</h3>
      <form className="form__reserve">
        <label>
          <span>Check-in</span>
          <input className="reserve_check" {...register('checkIn')} type="date" />
        </label>
        <label>
          <span>Check-out</span>
          <input className="reserve_check" {...register('checkOut')} type="date" />
        </label>
        <button className="submit_reserve_btn">Submit</button>
      </form>
    </section>
  );
};

export default FormReserve;

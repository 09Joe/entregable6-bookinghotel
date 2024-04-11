import { useForm } from "react-hook-form";
import './styles/PriceFilter.css'

const PriceFilter = ({ setFromTo }) => {

    const { handleSubmit, register, reset } = useForm()

    const Submit = data => {
        const from = +data.from
        const to = data.to
        setFromTo({
            from: from === '' ? 0 : +from,
            to: to === '' ? Infinity : Number(to)
        })
    }


  return (
    <section>
      <h3>Price</h3>
      <form onSubmit={handleSubmit(Submit)}>
        <label>
          <span>From</span>
          <input className="filter__form__input" {...register('from')} type="number" />
        </label>
        <label>
          <span>To</span>
          <input className="filter__form__input" {...register('to')} type="number" />
        </label>
        <button className="filter__btn">Apply</button>
      </form>
    </section>
  );
};

export default PriceFilter;

import { useSelector } from "react-redux"
import HotelCard from "../components/HomePage/HotelCard"
import { useRef, useState } from "react";
import CategoryFilter from "../components/HomePage/CategoryFilter";
import PriceFilter from "../components/HomePage/PriceFilter";
import './style/HomePage.css'

const HomePage = () => {

  const [inputName, setInputName] = useState("");

  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

    const hotels = useSelector((states) => states.hotels );

    const inputValue = useRef()

    const HandleChange = () => {
      setInputName(inputValue.current.value);
    };

    const cbfilter = (hotelInfo) => {
      //filtro por nombre 
      const filterName = hotelInfo.name
       .toLowerCase()
       .includes(inputName.toLowerCase().trim());
      //filtro por precio - recordar que es un 'string' y deves volverlo numeros
      const price = Number(hotelInfo.price)
      const filterPrice = price >= fromTo.from && price <= fromTo.to

      return filterName && filterPrice;
    };


  return (
    <div>
      <div className="homepage__text"> You can also search by city:
        <input className="homepage__filter__city" onChange={HandleChange} value={inputName} ref={inputValue} type="text" />
      </div>
      <div>
        <aside className="filter_fields_aside">
          <h3>Filter by</h3>
          <PriceFilter 
          setFromTo={setFromTo}
          />
          <CategoryFilter />
        </aside>
      </div>
        <div className="container-card">
            {
              hotels?.filter(cbfilter).map(hotelInfo => (
                <HotelCard 
                 key={hotelInfo.id}
                 hotel={hotelInfo}
                />
              ))
            }
        </div>
    </div>
  )
}

export default HomePage
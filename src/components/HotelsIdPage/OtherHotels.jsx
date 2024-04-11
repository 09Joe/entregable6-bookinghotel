import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import HotelCard from "../HomePage/HotelCard"
import './style/OtherHotels.css'

const OtherHotels = ({ hotel }) => {

   const url = `https://hotels-api.academlo.tech/hotels?cityId=${hotel?.cityId}`
   const [ hotelsInCity, getHotelsInCity ] = useFetch(url)

   useEffect(() => {
    if(hotel) {
    getHotelsInCity()
    }
   }, [hotel])

   
// añadir fromreserve

  return (
    <section className="other_h_section">
        <h3>Other hotels in <span>{hotel?.city.name}</span></h3>
        <div>
             {
                hotelsInCity?.filter(hotelInfo => hotelInfo.id !== hotel.id).map( hotelInfo => (
                    <HotelCard 
                     key={hotelInfo.id}
                     hotel={hotelInfo}
                    />
                ))
             }
        </div>
    </section>
  )
}

export default OtherHotels
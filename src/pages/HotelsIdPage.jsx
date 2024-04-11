import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import { Map, Marker } from "pigeon-maps"
import OtherHotels from "../components/HotelsIdPage/OtherHotels"
import FormReserve from "../components/HotelsIdPage/FormReserve"
import './style/HotelsIdPage.css'

const HotelsIdPage = () => {

  const { id } = useParams()

   
  const url = `https://hotels-api.academlo.tech/hotels/${id}`

  const [ hotel, getHotel ] = useFetch(url)

  useEffect(() => {
    getHotel()
  }, [id])


  return (
    <div className="other_form">
      <h2 className="other_form_title">{hotel?.name}</h2>
      <h3 className="other_form_title">Rating - {hotel?.rating}</h3>
      <div className="other_card">
        <img className="other_card_img" src={hotel?.images[0].url} alt="" />
        {
          hotel &&
         <Map height={200} defaultCenter={[+hotel?.lat, +hotel?.lon]} zoom={15} maxZoom={16} minZoom={10}>
          <Marker anchor={[+hotel.lat, +hotel.lon]} color="blueviolet" width={40}/>
         </Map>
        }
      </div>
      <section className="other_section_info">
        <h3>{hotel?.city.name}, {hotel?.city.country}</h3>
        <p>
        <i className='bx bx-map'></i>
        <span>{hotel?.address}</span>
        </p>
        <p>
          {hotel?.description}
        </p>
      </section>
      {
        localStorage.getItem('token')
        ? <FormReserve  hotelId={hotel?.id} />
        : <h4> If you want make a reservation, please <Link to='/login'>Login</Link></h4>
      }

      <OtherHotels 
        hotel={hotel}
      />
    </div>
  )
}

export default HotelsIdPage
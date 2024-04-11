/*import './styles/SliderImgs.css'

const SliderImgs = ({ hotel }) => {

    console.log(hotel)

    const objStyle = {
        width: `${hotel?.images.length * 100}%`,
        transform: `translateX(calc(-${imgSelected}/${hotel?.images.length} * 100%));`
    }

  return (
    <div className="slider">
        <button className='slider__btn'>&lt;</button>
      <div style={objStyle} className="slider__movable">
        {
          hotel?.images.map(imgInfo => (
            <div className="slider__img-container">
              <img className="slider__img" src={imgInfo.url} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SliderImgs

*/
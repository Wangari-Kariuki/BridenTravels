import React from 'react'
import './destinations.css'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import firstImage from "../../Assets/Image 3.jpg";
const Destinations = () => {
  return (
<section className='popular section container'>
  <div className="secContainer">
    <div className='secHeader flex'>
      <div className='textDiv'>
        <h2 className='secTitle'>
          Popular destinations
        </h2>
        <p>
          From Historical cities to natural speculations, we take you to the best parts of the world!
        </p>
      </div>

      <div className='iconDiv flex'>
      <FaArrowLeft className='icon lefticon'/>
      <FaArrowRight className='icon righticon'/>
      </div>
    </div>
    <div className="mainContent grid">
      <div className="singleDetination">
        <div className="destImage">
          <img src={firstImage} alt='Image Title'/>
          <div className="overlayInfo">
            <h3> Some Text</h3>
            <p> Explore the beauty of the gulf. </p>

            <FaArrowRight className='icon '/>
          </div>
        </div>
           <div className="destfooter">
            <div className="number"> 
              01
            </div>
            <div className="destText flex">
              <h6>
                Dubai
              </h6>
              <span className='flex'>
                <span className='dot'>
                <BsDot className='icon'/>
                </span>
                Briden
              </span>

            </div>
           </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Destinations
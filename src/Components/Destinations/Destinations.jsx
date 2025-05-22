import React from 'react'
import './destinations.css'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import img1 from "../../Assets/Image 3.jpg";
import img2 from "../../Assets/Image 4.jpg";
import img3 from "../../Assets/Image 5.jpg";




//now we are going to use high order array to display all the 
//destinations using maps to do so we need to display all the destinations in one array "data"
//we shall call each destination using index/id 

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Taj Mahal",
    location: "Dubai",
    grade: "Explore the beauty of the gulf.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Tuscany",
    location: "Italy",
    grade: "Explore the beauty of the gulf.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "The French Riviera",
    location: "France",
    grade: "Explore the beauty of the gulf.",
  },
  
]


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
      {
      Data.map(({id,imgSrc,destTitle,location,grade })=> {
        return(<div className="singleDetination">
          <div className="destImage">
            <img src={imgSrc} alt='Image Title'/>
            <div className="overlayInfo">
              <h3> {destTitle}</h3>
              <p>{location} </p>
  
              <FaArrowRight className='icon '/>
            </div>
          </div>
             <div className="destfooter">
              <div className="number"> 
                01
              </div>
              <div className="destText flex">
                <h6>
                  {location}
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
        )
      })
      }
    </div>
  </div>
</section>

  )
}

export default Destinations
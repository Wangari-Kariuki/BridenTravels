import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section className='home'>
      <div className='secContainer container'> 
        <div className='homeText'>

          <h1 className='title'>
          Plan your trip with  Briden 
          </h1>
          
          <p className="subtitle">
            Travel to your favourite destination
          </p>

          <button className='btn'>
            <a href='#'>Explore now</a></button>
        </div>

        <div className='homeCard grid '>

          <div className="locationDiv">
             <label htmlFor="location">Location</label>
             <input type ="text" placeholder = "Dream Destination" ></input>
          </div>  

          <div className="distDiv">
             <label htmlFor="distance">Distance</label>
             <input type ="text" placeholder = "l1/Meters" ></input>
          </div>  

          <div className="priceDiv">
             <label htmlFor="location">Price</label>
             <input type ="text" placeholder = "$140-$500" ></input>
          </div>  

          <button className ="btn">Search</button>


        </div>
      </div>

    </section>
  )
}

export default Home
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
      </div>

    </section>
  )
}

export default Home
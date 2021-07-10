import React from 'react'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>
                Our Initiatives
            </h1>
            <div className="cards__container">
  <div class="row">
    <div class="col m4">
      <div class="card">
        <div class="card-image">
          <img src="images/yycaid1.jpg"/>
          <span class="card-title">Bottle Drive 2020</span>
        </div>
        <div class="card-content">
          <p>In 2020, within the span of two weeks, we managed to raise over 3100 dollars 
            through bottle donations
          </p>
        </div>
      </div>
    </div>
    <div class="col m4">
      <div class="card">
        <div class="card-image">
          <img src="images/Rayhan2.jpg"/>
          <span class="card-title">Water Donations 2021</span>
        </div>
        <div class="card-content">
          <p>With the recent Alberta Heat Waves, we delivered
            over 180 bottles of water to the Mustard Seed Homeless Shelter
          </p>
          </div>
      </div>
    </div>
    <div class="col m4">
      <div class="card">
        <div class="card-image">
          <img src="images/HomeLess.png"/>
          <span class="card-title">Food and Letter Donations 2020</span>
        </div>
        <div class="card-content">
          <p>Our first achievement was hand writing letters of support the homeless along with providing Snacks 
          </p>
          </div>
      </div>
    </div>
  </div>
            </div>
        </div>
    )
}

export default Cards

import React from 'react'
import Header from '../Header'
import "./home.css"
import Footer from '../Footer'

export default function Home() {
  return (
    <div>
        <Header/>
      <div className='container-fluid homebg'>
        <div className='row h-100'>
          <div className='col-md-8 text-center d-flex align-items-center justify-content-center' >
            <div>
            <h1>You are in the Right Place at the Right Time</h1><br />
            <p>Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself.
            Sufficient for the day is its own trouble.</p>
            </div>
          </div>
        </div>
      </div>
      <br/><br/>
      <div className='container'>
        <h2 className='text-center'>Our Key <span className='text-danger'>Features</span></h2>
        <br/>
        <div className='row '>
          <div className='col-md-4 text-center '>
            <div className="card bg-light select text-white shadow" >
              <div className='card-body text-dark'>
            <h3 className='card-title'>Newest Technoligies</h3><hr/>
            <p className='card-text'>Lorem ipsum dolor sit amet consectetur ducimus qui inventore ipsum neque possimus harum dolor. Aspernatur maxime alias quisquam accusantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo iste impedit perferendis quidem odio ullam sint sapiente fugit debitis</p>
            </div>
            </div>
          </div>
          <div className='col-md-4  text-center'>
          <div className="card bg-light select text-white shadow" >
              <div className='card-body text-dark'>
          <h3 className='card-title'>Experianced Doctors</h3><hr/>
            <p className='card-text'>Lorem ipsum dolor sit amet consectetur ducimus qui inventore ipsum neque possimus harum dolor. Aspernatur maxime alias quisquam accusantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo iste impedit perferendis quidem odio ullam sint sapiente fugit debitis</p>
            </div>
            </div>
          </div>
          <div className='col-md-4  text-center'>
          <div className="card bg-light select text-white shadow" >
              <div className='card-body text-dark'>
          <h3 className='card-title'>Customer Satisfaction</h3><hr/>
            <p className='card-text'>Lorem ipsum dolor sit amet consectetur ducimus qui inventore ipsum neque possimus harum dolor. Aspernatur maxime alias quisquam accusantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo iste impedit perferendis quidem odio ullam sint sapiente fugit debitis</p>
            </div>
            </div>
          </div>
        </div>
        <br/>
        <br/>

        <div className='row '>
          <div className='col-md-4  text-center'>
          <div className="card bg-light select text-white shadow" >
              <div className='card-body text-dark'>
            <h3 className='card-title'>Pharma Pipeline</h3><hr/>
            <p className='card-text'>Lorem ipsum dolor sit amet consectetur ducimus qui inventore ipsum neque possimus harum dolor. Aspernatur maxime alias quisquam accusantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo iste impedit perferendis quidem odio ullam sint sapiente fugit debitis</p>
            </div>
            </div>
          </div>
          <div className='col-md-4  text-center'>
          <div className="card bg-light select text-white shadow" >
              <div className='card-body text-dark'>
          <h3 className='card-title'>Pharma Team</h3><hr/>
            <p className='card-text'>Lorem ipsum dolor sit amet consectetur ducimus qui inventore ipsum neque possimus harum dolor. Aspernatur maxime alias quisquam accusantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo iste impedit perferendis quidem odio ullam sint sapiente fugit debitis</p>
            </div>
            </div>
          </div>
          <div className='col-md-4  text-center'>
          <div className="card bg-light select text-white shadow" >
              <div className='card-body text-dark'>
          <h3 className='card-title'>High Quality treatments</h3><hr/>
            <p className='card-text'>Lorem ipsum dolor sit amet consectetur ducimus qui inventore ipsum neque possimus harum dolor. Aspernatur maxime alias quisquam accusantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo iste impedit perferendis quidem odio ullam sint sapiente fugit debitis</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <div className='container-fluid ud'>
        <div className='row'>
          <div className='col-md-6 float-left '>
            <img 
            className='float-left'
            src="/Images/home_docter.jpg"
            alt="Card image"
            width="100%"/>
          </div>
          <div className='col-md-6 float-right '>
            <h1>Why choose Health Care with<br/><span className='text-primary'>Medical Hospital</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque libero, pulvinar et elementum quis, facilisis eu ante. Mauris non placerat sapien. Pellentesque tempor arcu non odio scelerisque ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.</p>
            <p>Ut ultricies lacus a rutrum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta dolor quis felis pulvinar dignissim. Etiam nisl ligula, ullamcorper non metus vitae, maximus efficitur mi. Vivamus ut ex ullamcorper, scelerisque lacus nec, commodo dui. Proin massa urna, volutpat vel augue eget, iaculis tristique dui.</p>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <div className='container'>
        <h1 className='text-center'>Our <span className='text-danger'>Team</span></h1><br/>
        <div className='row'>
          <div className='col-md-3'>
            <div className='card shadow'>
              <img className='card-img-top'
              src='/Images/home_docter2.jpg'
              height="200"
              />
              <div className='card-body cb text-white'>
                <h4 className='card-title text-decoration-underline'>Vinayak Tariyal</h4>
                <p className='card-text'>Head Specialist</p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card shadow'>
              <img className='card-img-top'
              src='/Images/home_docter1.jpg'
              height="200"
              />
              <div className='card-body cb text-white'>
                <h4 className='card-title text-decoration-underline'>Shaurya Pal</h4>
                <p className='card-text'>Bone Specialist</p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card shadow'>
              <img className='card-img-top'
              src='/Images/home_docter3.jpg'
              height="200"

              />
              <div className='card-body cb text-white'>
                <h4 className='card-title text-decoration-underline'>Shristi Chaurasiya</h4>
                <p className='card-text'>Heart Specialist</p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card shadow'>
              <img className='card-img-top'
              src='/Images/home_docter4.jpg'
              height="200"
              />
              <div className='card-body cb text-white'>
                <h4 className='card-title text-decoration-underline'>Kritika Singh</h4>
                <p className='card-text'>Cancer Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <Footer/>
    </div>
  )
}

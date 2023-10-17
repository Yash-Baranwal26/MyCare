import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'

export default function Features() {
  return (
    <div>
      <Header/><br/>
      <h1 className='text-center'>Our <span className='text-danger'>Features</span></h1><br/>

      <div className='container-fluid ud'>
        <div className='row'>
          <div className='col-md-6 float-left '>
            <img 
            className='float-left'
            src="/Images/hospital_bed.jpg"
            alt="Card image"
            width="100%"/>
          </div>
          <div className='col-md-6 float-right '>
            <h1>Well Furnished Bed<br/><span className='text-primary'>Medical Hospital</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque libero, pulvinar et elementum quis, facilisis eu ante. Mauris non placerat sapien. Pellentesque tempor arcu non odio scelerisque ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.</p>
            <p>Ut ultricies lacus a rutrum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta dolor quis felis pulvinar dignissim. Etiam nisl ligula, ullamcorper non metus vitae, maximus efficitur mi. Vivamus ut ex ullamcorper, scelerisque lacus nec, commodo dui. Proin massa urna, volutpat vel augue eget, iaculis tristique dui.</p>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <div className='container-fluid ud'>
        <div className='row'>
          <div className='col-md-6 float-left '>
          <h1>High Quality Machines<br/><span className='text-primary'>Medical Hospital</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque libero, pulvinar et elementum quis, facilisis eu ante. Mauris non placerat sapien. Pellentesque tempor arcu non odio scelerisque ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.</p>
            <p>Ut ultricies lacus a rutrum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta dolor quis felis pulvinar dignissim. Etiam nisl ligula, ullamcorper non metus vitae, maximus efficitur mi. Vivamus ut ex ullamcorper, scelerisque lacus nec, commodo dui. Proin massa urna, volutpat vel augue eget, iaculis tristique dui.</p>
          </div>
          <div className='col-md-6 float-right '>
            <img 
            className='float-left'
            src="/Images/hospital_machine.jpg"
            alt="Card image"
            width="100%"/>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <div className='container-fluid ud'>
        <div className='container pt-5'>
            <h2 className='text-center'>Latest Blog</h2>
            <p className='text-center'>We can talk for a long time about advantages of our Dental clinic before other medical treatment facilities. But you can read
            <br/>the following facts in order to make sure of all pluses of our clinic:</p>
            
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card shadow'>
            <div className='row'>
            <div className='col-md-5 '>
                <img 
            className='float-left'
            src="/Images/stethoscope.jpg"
            alt="Card image"
            width="100%"
            height="195"/>
            </div>
            <div className='col-md-7  '>
                <h3 className='mt-2'>Why Primary treatment is important ?</h3><br/>
                <p>Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same keyboard shortcut is the</p>
                </div>
            </div>
            </div>
            </div>

            <div className='col-md-6'>
                <div className='card shadow'>
            <div className='row'>
            <div className='col-md-5 '>
                <img 
            className='float-left'
            src="/Images/stethoscope2.jpg"
            alt="Card image"
            width="100%"
            height="100%"/>
            </div>
            <div className='col-md-7  '>
                <h3 className='mt-2'>Why Primary treatment is important ?</h3><br/>
                <p>Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same keyboard shortcut is the</p>
                </div>
            </div>
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

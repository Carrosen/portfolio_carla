import React, { Component } from 'react'
import { Container, Divider } from 'semantic-ui-react'

class Contact extends Component {
  
  render() {
    return (
      <>
        <Container>
          <div className='text'>
            <h1>Contact</h1>

            <br></br>
            <Divider></Divider>
            <br></br>

            <p className='contact-text'>If you would like to get in touch with me, please contact me here: carla1.rosen@gmail.com</p>
          </div>
        </Container>
      </>
    )
  }
}

export default Contact
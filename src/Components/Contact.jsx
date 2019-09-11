import React, { Component } from 'react'
import { Container, Divider } from 'semantic-ui-react'

class Contact extends Component {

  render() {
    return (
      <>
        <div className='background-color-contact'>
          <Container>
            <div>
              <h1 className='component-text'>Contact</h1>
                <Divider></Divider>
                <p className='contact-text'>If you would like to get in touch with me, please email me here: </p>
                <p className='contact-text'>carla1.rosen@gmail.com</p>
            </div>
          </Container>
        </div>
      </>
    )
  }
}

export default Contact
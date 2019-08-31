import React, { Component } from 'react'
import { Container, Divider, Icon, Item } from 'semantic-ui-react'

class Contact extends Component {

  render() {
    return (
      <>
        <Container>
          <div>
            <h1 className='component-text'>Contact</h1>

            <br></br>
            <Divider></Divider>
            <br></br>

            <p className='contact-text'>If you would like to get in touch with me, please contact me here: </p>
            <br></br>
            <p className='contact-text'>carla1.rosen@gmail.com</p>
            <br></br>

            <p className='contact-text'>Learn more about me:</p>

            <Item
              href="https://www.linkedin.com/in/carla-ros%C3%A9n-9a4903189/"
              id='icon-linkedin'
            >
              <Icon
                name="linkedin square"
                size="huge"
              />
            </Item>

            <Item
              href="https://github.com/Carrosen"
              id='icon-github'
            >
              <Icon
                name="github square"
                size="huge"
              />
            </Item>
          </div>
        </Container>
      </>
    )
  }
}

export default Contact
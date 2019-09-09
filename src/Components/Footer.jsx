import React, { Component } from 'react'
import { Container, Icon, Item } from 'semantic-ui-react'

class Footer extends Component {

render() {
  return (
      <>
        <div className='footer'>
          <Container>
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
          </Container>
        </div>
      </>
    )
  }
}

export default Footer
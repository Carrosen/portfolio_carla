import React, { Component } from 'react'
import { Container, Icon, Item, Image } from 'semantic-ui-react'
import cr from '../cr.png'

class LandingPage extends Component {
  
  render() {
    return (
      <>
        <Container>
          <div className='portfolio-text'>
              <p>CARLA ROSÉN</p>
              <Image src={cr} wrapped ui={false} />
          </div>

            <Item
              href="https://www.linkedin.com/in/carla-ros%C3%A9n-9a4903189/"
              id='icon-linkedin'
            >
              <Icon
                name="linkedin square"
                size="big"
              />
            </Item>

            <Item
              href="https://github.com/Carrosen"
              id='icon-github'
            >
              <Icon
                name="github square"
                size="big"
              />
            </Item>
        </Container>
      </>
    )
  }
}

export default LandingPage
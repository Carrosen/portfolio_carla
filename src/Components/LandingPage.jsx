import React, { Component } from 'react'
import { Container, Icon, Item } from 'semantic-ui-react'

class LandingPage extends Component {
  
  render() {
    return (
      <>
        <Container>
            <h1 className='text-top'>Carla Rosén // portfolio</h1>

          <div className='portfolio-text'>
              <p>Hi, I'm Carla</p>
              <p>web developer</p>
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
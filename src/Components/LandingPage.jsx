import React, { Component } from 'react'
import { Container, Icon, Item } from 'semantic-ui-react'

class LandingPage extends Component {
  
  render() {
    return (
      <>
        <Container>
          <h1 className='text-top'>Carla Rosén // portfolio</h1>
            <p>Carla Rosén</p>
            <p>web developer</p>

            <Item
              href="https://linkedin.com"
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
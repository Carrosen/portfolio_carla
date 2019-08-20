import React, { Component } from 'react'
import { Container, Icon, Item, Image, Grid } from 'semantic-ui-react'
import cr from '../cr.png'

class LandingPage extends Component {

  render() {
    return (
      <>
        <Container id='landing-page'>
          <Grid columns={2}>
            <Grid.Column width={10}>
              <div className='portfolio-text'>
                <p>Hi, I'm Carla</p>
                <p>Jr. Full Stack Developer</p>
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
            </Grid.Column>

            <Grid.Column width={6}>
              <br></br>
              <div id='profile-image'>
                <Image src={cr} wrapped ui={false} />
              </div>
            </Grid.Column>
          </Grid>



        </Container>
        <div id='color-block'>
          <p>hi</p>
        </div>
      </>
    )
  }
}

export default LandingPage
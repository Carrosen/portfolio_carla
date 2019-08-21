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
                <p>Jr. Web Developer</p>
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

          <div className='text'>
            <h1>About me</h1>
            <Icon name='circle' size='small' />
            <br></br>
            <br></br>

            <p className='about-text'>I recently joined a bootcamp to start my journey as a Full Stack Software Developer, I chose to study this way since I'm a visual learner and believe in learning by doing. Because in theory everything is possible - And I'm all in for discovering what I can achieve.</p>
          </div>
        </Container>
      </>
    )
  }
}

export default LandingPage
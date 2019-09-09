import React, { Component } from 'react'
import { Container, Icon, Item, Image, Grid, Divider } from 'semantic-ui-react'
import cr from '../cr.png'

class LandingPage extends Component {

  render() {
    return (
      <>
        <div id='background-photo'>
        </div>
        <Container id='landing-page'>
          <div className='portfolio-text'>
            {/* <p>Hi, I'm Carla</p>
            <p>Fullstack Web Developer</p> */}
          </div>

          <div className='text'>
            <h1>About me</h1>
            <Icon name='circle' size='small' />
            <br></br>
            <br></br>
            <Divider></Divider>
          </div>

          <br></br>
          <br></br>

          <Grid columns={2}>
            <Grid.Column width={10}>
              <p className='about-text'>I recently joined a bootcamp to start my journey as a Full Stack Software Developer, I chose to study this way since I'm a visual learner and believe in learning by doing. Because in theory everything is possible - And I'm all in for discovering what I can achieve.</p>
              <br></br>
              <p className='about-text'>I learned and practiced pair programming, test-driven development, design prints, agile methods, version control with Git and more. Web development mainly with ReactJS and Ruby on Rails, as well as HTML, CSS, JavaScript, Ruby and various styling frameworks.</p>
            </Grid.Column>

            <Grid.Column width={6}>
              <div id='profile-image'>
                <Image src={cr} wrapped ui={false} />
              </div>
            </Grid.Column>
          </Grid>
        </Container>
        <br></br>

        <div className='footer'>
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
      </>
    )
  }
}

export default LandingPage
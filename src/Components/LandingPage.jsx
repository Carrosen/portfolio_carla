import React, { Component } from 'react'
import { Container, Icon, Image, Grid, Divider, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import cr from '../cr.png'

class LandingPage extends Component {

  projectsButton() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <>
        <div id='background-photo'>
        </div>
          <Container id='landing-page'>
            <div className='text'>
              <h1>About me</h1>
              <Icon
                id='icon-circle'
                name='circle'
                size='small'
              />
              <Divider></Divider>
            </div>

            <Grid columns={2} id='grid'>
              <Grid.Column width={10}>
                <p className='about-text-landing'>I recently joined a bootcamp to start my journey as a Full Stack Software Developer, I chose to study this way since I'm a visual learner and believe in learning by doing. Because in theory everything is possible - And I'm all in for discovering what I can achieve.</p>
                <br></br>
                <p className='about-text-landing'>I learned and practiced pair programming, agile methods, Test Driven Development, Version control with Git, design prints and more. I mainly worked with ReactJS and Ruby on Rails, as well as HTML, CSS, JavaScript, Ruby and various styling frameworks.</p>
              </Grid.Column>

              <Grid.Column width={6}>
                <div id='profile-image'>
                  <Image src={cr} wrapped ui={false} />
                </div>
              </Grid.Column>
            </Grid>

          <div id='button-div'>
            <Button
              id='portfolio-button'
              as={Link}
              to={{ pathname: '/portfolio' }}
              size='huge'
              onClick={this.projectsButton}
            >
              VIEW PROJECTS ⟶
            </Button>
          </div>
        </Container>
      </>
    )
  }
}

export default LandingPage
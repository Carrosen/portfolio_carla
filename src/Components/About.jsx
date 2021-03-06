import React, { Component } from 'react'
import { Container, Divider } from 'semantic-ui-react'

class About extends Component {

  render() {
    return (
      <>
        <div className='background-color-about'>
          <Container>
            <h1 className='component-text'>About</h1>

            <Divider></Divider>
            
            <div className='about-text'>
              <p>I recently joined a bootcamp to start my journey as a Full Stack Software Developer, I’ve been asked why I chose to study this way. I think it comes from me being a visual learner and learning by doing. Because in theory everything is possible - And I'm all in for discovering what I can achieve.</p>
              <p>My name is Carla, I live on Södermalm in Stockholm, Sweden. When I’m not programming i’m usually in front of a canvas painting. I love art and creating, whether if it’s something that can be expressed in words or not. I enjoy the uniqueness in creating something of your own. I just got a taste of this new art form and that’s why you’re here, reading this - And I’m so excited of what's to come and what my future holds!</p>
            </div>
          </Container>
        </div>
      </>
    )
  }
}

export default About
import React, { Component } from 'react'
import { Container, Card, Image, Divider } from 'semantic-ui-react'
import cooper from '../cooper.png'
import beingSthlm from '../beingsthlm.png'
import glocalNews from '../glocalnews.png'
import rps from '../rps.png'

class Portfolio extends Component {

  render() {
    return (
      <>
        <Container>

          <div className='portfolio-text'>
            <h1>A selection of my projects</h1>
            <p>Click to be redirected to an application</p>
          </div>

          <br></br>
          <Divider></Divider>
          <br></br>

          <Card.Group itemsPerRow={2}>
          <Card href="https://cooper-calculator.netlify.com/">
            <Image src={cooper} wrapped ui={false} />
            <Card.Content>
              <Card.Description>
                COOPER - 1 week challenge
                <br></br>
                Built with ReactJS, Ruby on Rails
                <br></br>
                Tested with RSpec, Cypress, Enzyme
              </Card.Description>
            </Card.Content>
          </Card>

          <Card href="https://glocal-news.netlify.com/">
            <Image src={glocalNews} wrapped ui={false} />
            <Card.Content>
              <Card.Description>
                GLOCAL NEWS - 3 week challenge
                <br></br>
                Built with ReactJS, Ruby on Rails
                <br></br>
                Tested with RSpec, Cypress, Enzyme
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Image src={beingSthlm} wrapped ui={false} />
            <Card.Content>
              <Card.Description>
                BEING STOCKHOLM - Final project over 3 weeks
                <br></br>
                Built with ReactJS, Ruby on Rails
                <br></br>
                Tested with RSpec, Cypress
              </Card.Description>
            </Card.Content>
          </Card>

          <Card href="https://rock-paper-scissors-carrosen.netlify.com/">
            <Image src={rps} wrapped ui={false} />
            <Card.Content>
              <Card.Description>
                ROCK PAPER SCISSORS - Side-project over the course of 2 weeks
                <br></br>
                Built with HTML, CSS, Javascript
                <br></br>
                Tested with npm, End-To-End Testing Training Wheels
              </Card.Description>
            </Card.Content>
          </Card>
          </Card.Group>

        </Container>
      </>
    )
  }
}

export default Portfolio
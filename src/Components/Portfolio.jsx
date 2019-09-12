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
        <div className='background-color-portfolio'>
          <Container>
            <div>
              <h1 className='component-text'>A selection of my projects</h1>
              <p className='about-text'>Click to be redirected to an application</p>
            </div>

            <Divider></Divider>

            <Card.Group itemsPerRow={2} id='card-group'>


              <Card onClick={()=> window.open("https://being-stockholm.netlify.com/", "_blank")}>
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

              <Card onClick={()=> window.open("https://glocal-news.netlify.com/", "_blank")}>
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

              <Card onClick={()=> window.open("https://cooper-calculator.netlify.com/", "_blank")}>
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

              <Card onClick={()=> window.open("https://rock-paper-scissors-carrosen.netlify.com/", "_blank")}>
                <Image src={rps} wrapped ui={false} />
                <Card.Content>
                  <Card.Description>
                    ROCK PAPER SCISSORS - Side-project over the course of 2 weeks
                    <br></br>
                    Built with HTML, CSS, Javascript
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        </div>
      </>
    )
  }
}

export default Portfolio
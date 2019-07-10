import React, { Component } from 'react'
import { Container, Card, Image } from 'semantic-ui-react'
import myImage from '../cooper.png'

class Portfolio extends Component {

  render() {
    return (
      <>
        <Container>
          <h1>portfolio</h1>
          <p>Click on the cards to go to the application</p>

          <Card>
            <Image src={myImage} wrapped ui={false} />
            <Card.Content>
              <Card.Description>
                Cooper
              </Card.Description>
            </Card.Content>
          </Card>


        </Container>
      </>
    )
  }
}

export default Portfolio
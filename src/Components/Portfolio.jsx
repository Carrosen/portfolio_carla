import React, { Component } from 'react'
import { Container, Card, Image } from 'semantic-ui-react'
import cooper from '../cooper.png'
import beingSthlm from '../beingsthlm.png'
import glocalNews from '../glocalnews.png'
import rps from '../rps.png'

class Portfolio extends Component {

  render() {
    return (
      <>
        <Container>
          <h1>portfolio</h1>
          <p>Click on the cards to go to the application</p>

          <Card>
            <Image src={cooper} wrapped ui={false} />
            <Card.Content>
              <Card.Description>
                Cooper
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Image src={beingSthlm} wrapped ui={false} />
            <Card.Content>
              <Card.Description>
                Being Stockholm
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Image src={glocalNews} wrapped ui={false} />
            <Card.Content>
              <Card.Description>
                Glocal news
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Image src={rps} wrapped ui={false} />
            <Card.Content>
              <Card.Description>
                Rock paper scissors
              </Card.Description>
            </Card.Content>
          </Card>

        </Container>
      </>
    )
  }
}

export default Portfolio
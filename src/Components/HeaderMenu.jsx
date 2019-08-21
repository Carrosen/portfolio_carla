import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container } from 'semantic-ui-react'

class HeaderMenu extends Component {

  render() {
    return (
      <>
        <Container>
          <Menu secondary>
            <Menu.Item
              as={Link}
              to='/'
            >
              CARLA ROSÉN
          </Menu.Item>

            <Menu.Menu position='right' className='container'>
              <Menu.Item
                name='portfolio'
                as={Link}
                to='/portfolio'
              >
                PORTFOLIO
              </Menu.Item>

              <Menu.Item
                name='ABOUT'
                as={Link}
                to='/about'
              />

              <Menu.Item
                name='CONTACT'
                as={Link}
                to='/contact'
              />
            </Menu.Menu>
          </Menu>
        </Container>
      </>
    )
  }
}

export default HeaderMenu
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class HeaderMenu extends Component {
  
  render() {
    return (
      <>
        <Menu secondary>
          <Menu.Item
            as={Link}
            to='/'
          >Carla Rosén</Menu.Item>

            <Menu.Menu position='right'>
              <Menu.Item
                name='portfolio'
                as={Link}
                to='/portfolio'
              >portfolio</Menu.Item>

              <Menu.Item
                name='About'
                as={Link}
                to='/about'
              />

              <Menu.Item
                name='Contact'
                as={Link}
                to='/contact'
              />
            </Menu.Menu>
        </Menu>
      </>
    )
  }
}

export default HeaderMenu
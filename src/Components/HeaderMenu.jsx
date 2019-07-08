import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Header } from 'semantic-ui-react'

class HeaderMenu extends Component {
  
  render() {
    return (
      <>
        <Menu secondary>
          <Menu.Item
            name='Carla Rosén'
            as={Link}
            to='/'
          />

          <Menu.Item
            name='portfolio'
            as={Link}
            to='/portfolio'
          />

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
        </Menu>
      </>
    )
  }
}

export default HeaderMenu
import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'
import Utility from './Utility'

const Styled = {}

Styled.header = styled.header``

const Header = ({ user, logout }) => {
  const [open, setOpen] = useState(false)

  const onOpen = (event) => {
    event.preventDefault()

    // console.log('components → common → header → [Header.js] → open: ', open)
    // console.log('components → common → header → [Header.js] → !open: ', !open)

    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="inner_global">
        <h1 className="title_brand">
          <Link to="/beluga" className="link_brand">
            Beluga
          </Link>
        </h1>

        <Utility user={user} logout={logout} onOpen={onOpen} />

        {/* <Hamburger user={user} onOpen={onOpen} open={open} /> */}
      </div>
    </header>
  )
}

export default Header

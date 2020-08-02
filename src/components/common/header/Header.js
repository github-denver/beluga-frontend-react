import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    // console.log('components → common → header → [Header.js] → open: ', open)
  }, [open])

  return (
    <header className="header">
      <h1 className="title_beluga">
        <Link to="/" className="link_beluga">
          Beluga
        </Link>
      </h1>

      <Utility user={user} logout={logout} onOpen={onOpen} />

      <Hamburger user={user} onOpen={onOpen} open={open} />
    </header>
  )
}

export default Header

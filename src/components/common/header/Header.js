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

    console.log('const onOpen = () => { .. } → open: ', open)
    console.log('const onOpen = () => { .. } → !open: ', !open)

    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  useEffect(() => {
    console.log('useEffect(() => { .. } → open: ', open)
  }, [open])

  return (
    <header className="header">
      <h1 className="title_beluga">
        <Link to="/" className="link_beluga">
          Beluga
        </Link>
      </h1>

      <Utility onOpen={onOpen} />

      <Hamburger open={open} />
    </header>
  )
}

export default Header

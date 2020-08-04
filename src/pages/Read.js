import React from 'react'
import Header from '../containers/common/header/Header'
import Lodge from '../containers/Lodge'
import Room from '../containers/Room'
import Footer from '../components/common/Footer'

const Index = ({ location }) => {
  const category = location.pathname.split('/').splice(1)[0] !== '' ? location.pathname.split('/').splice(1)[0] : 1
  // console.log('pages → [Read.js] → category: ', category)

  return (
    <>
      <Header />

      <section className="container">
        <h2 className="invisible">벨루가 (Beluga) 본문 영역</h2>

        <Lodge category={category} />

        <Room category={category} />
      </section>

      <Footer />
    </>
  )
}

export default Index

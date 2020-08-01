import React from 'react'
import Header from '../components/common/header/Header'
import Lodge from '../containers/Lodge'
import Room from '../containers/Room'
import Footer from '../components/common/Footer'

const Index = () => {
  return (
    <>
      <Header />

      <section className="container">
        <h2 className="invisible">벨루가 (Beluga) 본문 영역</h2>

        <Lodge category="lodge" />

        <Room category="room" />
      </section>

      <Footer />
    </>
  )
}

export default Index

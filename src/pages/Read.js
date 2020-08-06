import React from 'react'
import Header from '../containers/common/header/Header'
import Lodge from '../containers/Lodge'
import Room from '../containers/Room'
import Footer from '../components/common/Footer'

const Read = ({ location }) => {
  const category = location.pathname.split('/').splice(1)[1] !== '' ? location.pathname.split('/').splice(1)[1] : null
  // console.log('pages → [Read.js] → category: ', category)

  return (
    <>
      <div className="inner_global">
        <Header />

        <section className="container">
          <h2 className="invisible">벨루가 (Beluga) 본문 영역</h2>

          <Lodge category={category} />

          <Room category={category} />
        </section>
      </div>

      <Footer />
    </>
  )
}

export default Read

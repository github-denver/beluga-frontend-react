import React from 'react'
import Header from '../containers/common/header/Header'
import Hero from '../containers/slick/Hero'
import Contents from '../components/common/Contents'
import Slick from '../containers/slick/Slick'
import Footer from '../components/common/Footer'

const Index = () => {
  return (
    <>
      <Header />

      <section className="container">
        <h2 className="invisible">벨루가 (Beluga) 본문 영역</h2>

        <Hero attribute={{ category: 'hero' }} />

        <Contents attribute={{ title: '패키지', category: 'benefit' }}>
          <Slick attribute={{ design: 'middle', category: 'benefit', invisible: true }} />
        </Contents>

        <Contents attribute={{ title: '이벤트', category: 'event' }}>
          <Slick attribute={{ design: 'gallery', category: 'event', invisible: true }} />
        </Contents>

        <Contents attribute={{ title: '호텔', category: 'lodge' }}>
          <Slick attribute={{ design: 'information', category: 'lodge', invisible: true }} />
        </Contents>
      </section>

      <Footer />
    </>
  )
}

export default Index

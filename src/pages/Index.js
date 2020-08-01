import React from 'react'
import Header from '../components/common/header/Header'
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

        {/* <Contents title="이벤트">
          <Slick attribute={{ design: 'middle', category: 'lodge' }} />
        </Contents> */}

        <Contents title="우리도 호캉스 갈까?">
          <Slick attribute={{ design: 'information', category: 'lodge' }} />
        </Contents>

        {/* <Contents title="매거진">
          <Slick attribute={{ design: 'gallery', category: 'lodge' }} />
        </Contents> */}
      </section>

      <Footer />
    </>
  )
}

export default Index

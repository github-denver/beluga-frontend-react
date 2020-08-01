import React from 'react'
import Header from '../components/common/header/Header'
import Contents from '../components/common/Contents'
import Slick from '../containers/slick/Slick'
import Footer from '../components/common/Footer'

const List = () => {
  return (
    <>
      <Header />

      <section className="container">
        <h2 className="invisible">벨루가 (Beluga) 본문 영역</h2>

        <Contents title="우리도 호캉스 갈까?">
          <Slick attribute={{ design: 'information', category: 'lodge' }} />
        </Contents>
      </section>

      <Footer />
    </>
  )
}

export default List

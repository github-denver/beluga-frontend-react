import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../containers/common/header/Header'
import Contents from '../components/common/Contents'
import Register from '../containers/Register'
import Footer from '../components/common/Footer'

const List = () => {
  return (
    <>
      <Header />

      <section className="container">
        <h2 className="invisible">벨루가 (Beluga) 본문 영역</h2>

        <Contents attribute={{ className: 'welcome' }}>
          <h3 className="title_contents">
            <Link to="#" className="link_contents">
              얼마 안 남았어요!
            </Link>
          </h3>
          <p className="text_contents">나머지 정보를 입력해 주세요!</p>

          <Register />
        </Contents>
      </section>

      <Footer />
    </>
  )
}

export default List

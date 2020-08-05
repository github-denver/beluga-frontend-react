import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../containers/common/header/Header'
import Contents from '../components/common/Contents'
import Login from '../containers/Login'
import Footer from '../components/common/Footer'

const Login1 = () => {
  return (
    <>
      <Header />

      <section className="container">
        <h2 className="invisible">벨루가 (Beluga) 본문 영역</h2>

        <Contents attribute={{ className: 'welcome' }}>
          <h3 className="title_contents">
            <Link to="#" className="link_contents">
              로그인
            </Link>
          </h3>
          <p className="text_contents">로그인해 주세요!</p>

          <Login />
        </Contents>
      </section>

      <Footer />
    </>
  )
}

export default Login1

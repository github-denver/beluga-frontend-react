import React from 'react'
import Header from '../components/common/header/Header'
import Contents from '../components/common/Contents'
import Slick from '../containers/slick/Slick'
import Footer from '../components/common/Footer'

const List = (props) => {
  // const { location } = props
  // console.log('pages → [List.js] → props: ', props)

  // const title = location.query.title
  // console.log('pages → [List.js] → title: ', title)

  return (
    <>
      <Header />

      <section className="container">
        <h2 className="invisible">벨루가 (Beluga) 본문 영역</h2>

        <Contents attribute={{ title: 'TEST' }}>
          <Slick attribute={{ design: 'information', category: 'lodge' }} />
        </Contents>
      </section>

      <Footer />
    </>
  )
}

export default List

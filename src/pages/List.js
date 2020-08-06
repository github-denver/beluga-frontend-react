import React from 'react'
import Header from '../containers/common/header/Header'
import Contents from '../components/common/Contents'
import Slick from '../containers/slick/Slick'
import Footer from '../components/common/Footer'

const List = (props) => {
  // console.log('pages → [List.js] → props: ', props)

  const { location } = props

  const category = location.pathname.split('/').splice(1)[0] !== '' ? location.pathname.split('/').splice(1)[0] : 1
  // console.log('pages → [List.js] → category: ', category)

  const navigation = {
    benefit: '패키지',
    event: '이벤트',
    lodge: '호텔'
  }

  return (
    <>
      <div className="inner_global">
        <Header />

        <section className="container">
          <h2 className="invisible">벨루가 (Beluga) 본문 영역</h2>

          <Contents attribute={{ title: navigation[category], category: category }}>
            <Slick attribute={{ design: 'information', category: category, invisible: true }} />
          </Contents>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default List

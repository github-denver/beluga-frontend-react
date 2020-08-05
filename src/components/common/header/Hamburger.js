import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

const Styled = {}

Styled.hamburger = styled.section``

const Hamburger = ({ user, onOpen, open }) => {
  // console.log('components → common → header → [Hamburger.js] → user: ', user)
  // console.log('components → common → header → [Hamburger.js] → onOpen: ', onOpen)
  // console.log('components → common → header → [Hamburger.js] → open: ', open)
  // console.log('')

  if (!user || !user.picture) {
    // console.group('components → common → header → [Hamburger.js]')
    // console.log('읽어들이는 중이거나 아직 포스트 데이터가 존재하지 않을 때')
    // console.groupEnd()

    return null
  }

  return (
    <section className={open ? 'area_hamburger active' : 'area_hamburger'}>
      <h2 className="invisible">벨루가 (Beluga) 주메뉴 영역</h2>
      {user ? (
        <div className="group_profile">
          <Link to="/login" className="link_profile">
            <div className="group_picture">
              <img src={`/images/common/${user.picture}`} alt="" className="image_picture" />
            </div>

            <span className="text_profile">{user.name}</span>
          </Link>
        </div>
      ) : (
        <div className="group_profile">
          <Link to="/login" className="link_profile">
            <div className="group_picture">
              <img src="/images/common/default_picture.png" alt="" className="image_picture" />
            </div>

            <span className="text_profile">로그인해 주세요.</span>
          </Link>
        </div>
      )}

      <Navigation />

      <div className="group_search">
        <form>
          <fieldset>
            <legend className="invisible">검색</legend>

            <div className="group_select">
              <label htmlFor="search" className="label_common">
                <span className="text_common">제목</span>
                <span className="icon_global"></span>
              </label>

              <select name="search" className="select_common">
                <option value="subject">제목</option>
                <option value="content">내용</option>
              </select>
            </div>

            <span className="group_field">
              <label htmlFor="keyword" className="invisible">
                검색어
              </label>

              <span className="box_field">
                <input type="search" name="keyword" id="keyword" className="textfield_common" />
              </span>
            </span>

            <Link
              to="#"
              className="link_common1"
              onClick={() => {
                alert('개발 진행 중입니다.')
              }}>
              검색하기
            </Link>
          </fieldset>
        </form>
      </div>

      <button type="button" className="button_global button_hamburger button_close" onClick={onOpen}>
        <span className="icon_global">주메뉴 닫기</span>
      </button>
    </section>
  )
}

export default Hamburger

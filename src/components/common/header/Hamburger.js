import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.hamburger = styled.section``

const Hamburger = ({ open }) => {
  console.log('const Hamburger = () => { .. } → open: ', open)

  return (
    <section className={open ? 'area_hamburger active' : 'area_hamburger'}>
      <h2 className="invisible">벨루가 (Beluga) 주메뉴 영역</h2>

      <div className="group_profile">
        <Link to="#" className="link_profile">
          <div className="group_picture">{/* <img src="../images/common/default_picture.png" alt="" className="image_picture" /> */}</div>

          <span className="text_profile">로그인해주세요.</span>
        </Link>
      </div>

      <strong className="invisible">주메뉴 목록</strong>
      <ul className="list_navigation">
        <li>
          <Link to="#" className="link_navigation">
            홈으로
          </Link>
        </li>
        <li>
          <Link to="#" className="link_navigation">
            숙소 목록
          </Link>
        </li>
      </ul>

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

            <Link to="#" className="link_common">
              검색하기
            </Link>
          </fieldset>
        </form>
      </div>

      <button type="button" className="button_global">
        <span className="icon_global">주메뉴 닫기</span>
      </button>
    </section>
  )
}

export default Hamburger

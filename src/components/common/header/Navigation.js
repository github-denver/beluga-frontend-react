import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.navigation = styled.div``

const Navigation = (props) => {
  // console.log('components → common → header → [Navigation.js] → props: ', props)

  return (
    <>
      <div className="group_navigation">
        <strong className="invisible">주메뉴 목록</strong>

        <Link to="#" className="link_local">
          {/* <span className="icon_global"></span> */}
          <span className="text_local">홈으로 </span>
        </Link>

        <ul className="list_navigation">
          <li>
            <strong className="title_navigation">
              <span className="text_local">숙소 유형</span>
              {/* <span className="icon_global"></span> */}
            </strong>

            <ul className="list_category">
              <li>
                <Link to="#" className="link_category">
                  게스트하우스
                </Link>
              </li>
              <li>
                <Link to="#" className="link_category">
                  렌탈하우스
                </Link>
              </li>
              <li>
                <Link to="#" className="link_category">
                  디자인 펜션
                </Link>
              </li>
              <li>
                <Link to="#" className="link_category">
                  부티크 호텔
                </Link>
              </li>
              <li>
                <Link to="#" className="link_category">
                  캠핑/글램핑/카라반
                </Link>
              </li>
              <li>
                <Link to="#" className="link_category">
                  디자인 호스텔
                </Link>
              </li>
              <li>
                <Link to="#" className="link_category">
                  한옥스테이
                </Link>
              </li>
              <li>
                <Link to="#" className="link_category">
                  돌집 스테이
                </Link>
              </li>
              <li>
                <Link to="#" className="link_category">
                  풀빌라
                </Link>
              </li>
              <li>
                <Link to="#" className="link_category">
                  북스데이
                </Link>
              </li>
              <li>
                <Link to="#" className="link_category">
                  고택 스테이
                </Link>
              </li>
              <li>
                <Link to="#" className="link_category">
                  캡슐호텔
                </Link>
              </li>
              <li>
                <Link to="#" className="link_category">
                  선박 호텔
                </Link>
              </li>
              <li>
                <Link to="#" className="link_category">
                  리조트
                </Link>
              </li>
              <li>
                <Link to="#" className="link_category">
                  적산가옥
                </Link>
              </li>
              <li>
                <Link to="#" className="link_navigation1">
                  양식 가옥
                </Link>
              </li>
              <li>
                <Link to="#" className="link_navigation1">
                  민박
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navigation

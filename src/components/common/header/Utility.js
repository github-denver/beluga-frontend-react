import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.utility = styled.div``

const Utility = ({ user, logout, onOpen }) => {
  // console.log('components → common → header → [Utility.js] → onOpen: ', onOpen)

  return (
    <div className="area_utility">
      {user ? (
        <>
          <button type="button" className="button_global button_utility button_logout" onClick={logout}>
            <span className="icon_global">로그아웃</span>
          </button>

          <Link
            to="#"
            className="button_global button_utility button_profile"
            onClick={() => {
              alert('개발 진행 중입니다.')
            }}>
            <span className="icon_global">마이페이지</span>
          </Link>
        </>
      ) : (
        <>
          <Link to="/beluga/member/login" className="button_global button_utility button_login">
            <span className="icon_global">로그인</span>
          </Link>

          <Link to="/beluga/member/register" className="button_global button_utility button_register">
            <span className="icon_global">회원가입</span>
          </Link>
        </>
      )}

      <button type="button" className="button_global button_utility button_hamburger" onClick={onOpen}>
        <span className="icon_global">주메뉴 영역 열기</span>
      </button>
    </div>
  )
}

export default Utility

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
          <button type="button" className="button_global button_utility" onClick={logout}>
            <span className="icon_global">로그아웃</span>
          </button>

          <Link to="/register" className="button_global button_utility">
            <span className="icon_global">마이페이지</span>
          </Link>
        </>
      ) : (
        <>
          <Link to="/login" className="button_global button_utility button_login">
            <span className="icon_global">로그인</span>
          </Link>

          <Link to="/register" className="button_global button_utility button_register">
            <span className="icon_global">회원가입</span>
          </Link>
        </>
      )}

      <button type="button" className="button_global button_utility button_navigation" onClick={onOpen}>
        <span className="icon_global">주메뉴 영역 열기</span>
      </button>
    </div>
  )
}

export default Utility

import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.utility = styled.div``

const Utility = ({ onOpen }) => {
  // console.log('const Hamburger = () => { .. } → onOpen: ', onOpen)

  return (
    <div className="area_utility">
      <button type="button" className="button_global button_utility button_search">
        <span className="icon_global">검색 영역 열기</span>
      </button>
      <button type="button" className="button_global button_utility button_hamburger" onClick={onOpen}>
        <span className="icon_global">주메뉴 영역 열기</span>
      </button>
    </div>
  )
}

export default Utility

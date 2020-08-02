import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.footer = styled.section``

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <h2 className="invisible">벨루가 (Beluga) 서비스 이용정보 및 사업자 정보</h2>

        <strong className="invisible">서비스 이용정보</strong>
        <ul className="list_utility">
          <li>
            <Link to="#" className="link_utility">
              개인 정보처리 방침
            </Link>
          </li>
          <li>
            <Link to="#" className="link_utility">
              이용약관
            </Link>
          </li>
        </ul>

        <strong className="invisible">사업자 정보</strong>
        <dl className="description_policy">
          <dt>상호</dt>
          <dd>벨루가</dd>
          <dt>대표</dt>
          <dd>전준호</dd>
          <dt>사업장 소재지</dt>
          <dd>대한민국, 서울</dd>
          <dt>통신판매업 신고번호</dt>
          <dd>대한민국, 서울</dd>
          <dt>관광사업자 등록번호</dt>
          <dd>대한민국, 서울</dd>
          <dt>개인 정보관리</dt>
          <dd>전준호</dd>
          <dt>고객센터</dt>
          <dd>82-2-0000-0000</dd>
          <dt>팩스</dt>
          <dd>82-2-0000-0000</dd>
          <dt>문의</dt>
          <dd>administer</dd>
        </dl>

        <p className="text_copyright">ⓒ Beluga Corp.</p>
      </footer>
    </>
  )
}

export default Footer

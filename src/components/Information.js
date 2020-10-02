import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.information = styled.dl``

const Information = (props) => {
  // console.log('components → [Information.js] → props: ', props)
  // console.log('')

  const { attribute } = props

  return (
    <>
      {!!attribute.half ? (
        <>
          {attribute.information && attribute.category !== 'lodge' && attribute.category !== 'room' && attribute.category !== 'benefit' ? (
            <dl className={`description_${attribute.design} ${attribute.category}`}>
              <dt className="invisible">기타</dt>
              <dd className="full">
                <span className={`text_${attribute.design}`} dangerouslySetInnerHTML={{ __html: attribute.information.content }}></span>
              </dd>
            </dl>
          ) : (
            <div className="group_half">
              <div className="inner_half">
                <dl className={`description_${attribute.design} ${attribute.category}`}>
                  <dt className="invisible">숙소 위치</dt>
                  <dd>
                    <span className={`text_${attribute.design}`}>{attribute.information.place}</span>
                  </dd>
                </dl>
              </div>

              <div className="inner_half">
                <dl className={`description_${attribute.design} ${attribute.category}`}>
                  <dt className="invisible">작성일</dt>
                  <dd>
                    <span className={`text_${attribute.design}`}>{attribute.information.regdate}</span>
                  </dd>
                </dl>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {attribute.information && attribute.invisible ? (
            <>
              {(attribute.category === 'lodge' || attribute.category === 'room') && (
                <>
                  <dl className={`description_${attribute.design} ${attribute.category}`}>
                    <dt className="invisible">숙소 위치</dt>
                    <dd className="full">
                      <span className="icon_global"></span>
                      <span className={`text_${attribute.design}`}>{attribute.information.place}</span>
                    </dd>
                    <dt className="invisible">숙소 유형</dt>
                    <dd>
                      <span className="icon_global"></span>
                      <span className={`text_${attribute.design}`}>{attribute.information.filter}</span>
                    </dd>
                    <dt className="invisible">테마</dt>
                    <dd>
                      <span className="icon_global"></span>
                      <span className={`text_${attribute.design}`}>{attribute.information.theme}</span>
                    </dd>
                  </dl>
                </>
              )}

              {attribute.category === 'event' && (
                <>
                  <dl className={`description_${attribute.design} ${attribute.category}`}>
                    <dt className="invisible">기타</dt>
                    <dd className="full">
                      <span className="icon_global"></span>
                      <span className={`text_${attribute.design}`} dangerouslySetInnerHTML={{ __html: attribute.information.content }}></span>
                    </dd>
                  </dl>
                </>
              )}
            </>
          ) : (
            <>
              {attribute.information && attribute.category === 'lodge' && (
                <>
                  <dl className={`description_${attribute.design} ${attribute.category}`}>
                    <dt className="invisible">숙소 위치</dt>
                    <dd className="full">
                      <span className="icon_global"></span>
                      <span className={`text_${attribute.design}`}>{attribute.information.place}</span>
                    </dd>
                    <dt className="invisible">숙소 유형</dt>
                    <dd>
                      <span className="icon_global"></span>
                      <span className={`text_${attribute.design}`}>{attribute.information.filter}</span>
                    </dd>
                    {!attribute.invisible && (
                      <>
                        <dt className="invisible">객실 종류</dt>
                        <dd className="full">
                          <span className="icon_global"></span>
                          <span className={`text_${attribute.design}`} dangerouslySetInnerHTML={{ __html: attribute.information.rooms }}></span>
                        </dd>
                        <dt className="invisible">기타</dt>
                        <dd className="full">
                          <span className="icon_global"></span>
                          <span className={`text_${attribute.design}`} dangerouslySetInnerHTML={{ __html: attribute.information.etc }}></span>
                        </dd>
                      </>
                    )}
                  </dl>
                </>
              )}
              {attribute.information && attribute.category === 'room' && (
                <>
                  <dl className={`description_${attribute.design} ${attribute.category}`}>
                    <dt className="invisible">숙소 위치</dt>
                    <dd>
                      <span className="icon_global"></span>
                      <span className={`text_${attribute.design}`}>{attribute.information.place}</span>
                    </dd>
                    <dt className="invisible">전망</dt>
                    <dd>
                      <span className="icon_global"></span>
                      <span className={`text_${attribute.design}`}>{attribute.information.theme}</span>
                    </dd>
                    <dt className="invisible">침대</dt>
                    <dd>
                      <span className="icon_global"></span>
                      <span className={`text_${attribute.design}`}>{attribute.information.bed}</span>
                    </dd>
                    <dt className="invisible">크기</dt>
                    <dd>
                      <span className="icon_global"></span>
                      <span className={`text_${attribute.design}`}>36㎡</span>
                    </dd>
                    <dt className="invisible">구성</dt>
                    <dd>
                      <span className="icon_global"></span>
                      <span className={`text_${attribute.design}`}>{attribute.information.rooms}</span>
                    </dd>
                    <dt className="invisible">객실 에메니티</dt>
                    <dd className="full">
                      <span className="icon_global"></span>
                      <span className={`text_${attribute.design}`} dangerouslySetInnerHTML={{ __html: attribute.information.amenity }}></span>
                    </dd>
                    <dt className="invisible">인터넷</dt>
                    <dd className="full">
                      <span className="icon_global"></span>
                      <span className={`text_${attribute.design}`} dangerouslySetInnerHTML={{ __html: attribute.information.internet }}></span>
                    </dd>
                    <dt className="invisible">객실 이용안내</dt>
                    <dd className="full">
                      <span className="icon_global"></span>
                      <span className={`text_${attribute.design}`} dangerouslySetInnerHTML={{ __html: attribute.information.guide }}></span>
                    </dd>
                    <dt className="invisible">시설 이용안내</dt>
                    <dd className="full">
                      <span className="icon_global"></span>
                      <span className={`text_${attribute.design}`} dangerouslySetInnerHTML={{ __html: attribute.information.etc }}></span>
                    </dd>
                    <dt className="invisible">룸 서비스 이용안내</dt>
                    <dd className="full">
                      <span className="icon_global"></span>
                      <span className={`text_${attribute.design}`} dangerouslySetInnerHTML={{ __html: attribute.information.service }}></span>
                    </dd>
                  </dl>
                </>
              )}
              {attribute.information && attribute.information.etc && attribute.category === 'benefit' && (
                <>
                  <dl className={`description_${attribute.design} ${attribute.category}`}>
                    {attribute.information.period && (
                      <>
                        <dt className="invisible">기간</dt>
                        <dd className="full">
                          <span className="icon_global"></span>
                          <span className={`text_${attribute.design}`} dangerouslySetInnerHTML={{ __html: attribute.information.period }}></span>
                        </dd>
                      </>
                    )}
                    {attribute.information.filter && (
                      <>
                        <dt className="invisible">유형</dt>
                        <dd className="full">
                          <span className="icon_global"></span>
                          <span className={`text_${attribute.design}`} dangerouslySetInnerHTML={{ __html: attribute.information.filter }}></span>
                        </dd>
                      </>
                    )}
                    {attribute.information.theme && (
                      <>
                        <dt className="invisible">테마</dt>
                        <dd className="full">
                          <span className="icon_global"></span>
                          <span className={`text_${attribute.design}`} dangerouslySetInnerHTML={{ __html: attribute.information.theme }}></span>
                        </dd>
                      </>
                    )}
                    {attribute.information.etc && (
                      <>
                        <dt className="invisible">기타</dt>
                        <dd className="full">
                          <span className="icon_global"></span>
                          <span className={`text_${attribute.design}`} dangerouslySetInnerHTML={{ __html: attribute.information.etc }}></span>
                        </dd>
                      </>
                    )}
                  </dl>
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  )
}

export default Information

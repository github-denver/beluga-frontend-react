import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Caption from '../Caption'
import Information from '../Information'
import Loading from '../common/Loading'

const Styled = {}

Styled.slick = styled.section``

const Slick = (props) => {
  // console.log('components → [Slick.js] → props: ', props)
  // console.log('')

  const { attribute, error, loading } = props

  if (error === null) {
    if (error) {
      if (error.response && error.response.status === 404) {
        // console.group('components → slick → [Slick.js]')
        // console.log('존재하지 않는 포스트입니다.')
        // console.groupEnd()

        return <p>존재하지 않는 포스트입니다.</p>
      }

      // console.group('components → slick → [Slick.js]')
      // console.log('에러가 발생했어요!')
      // console.groupEnd()

      return <p>에러가 발생했어요!</p>
    }

    if (attribute.category === 'lodge' || attribute.category === 'benefit') {
      if (loading || !attribute.description || !attribute.information) {
        // console.group('components → slick → [Slick.js]')
        // console.log('읽어들이는 중이거나 아직 포스트 데이터가 존재하지 않을 때')
        // console.groupEnd()

        return <Loading />
      }
    } else {
      if (loading || !attribute.description) {
        // console.group('components → slick → [Slick.js]')
        // console.log('읽어들이는 중이거나 아직 포스트 데이터가 존재하지 않을 때')
        // console.groupEnd()

        return <Loading />
      }
    }

    if (attribute.category === 'lodge' || attribute.category === 'benefit') {
      if (!attribute.description || !attribute.information) {
        // console.group('components → slick → [Slick.js]')
        // console.log('포스트 목록이 존재하지 않을 때')
        // console.groupEnd()

        return <p>목록이 존재하지 않습니다.</p>
      }
    } else {
      if (!attribute.description) {
        // console.group('components → slick → [Slick.js]')
        // console.log('포스트 목록이 존재하지 않을 때')
        // console.groupEnd()

        return <p>목록이 존재하지 않습니다.</p>
      }
    }
  }

  return (
    <>
      {attribute.design === 'middle' && (
        <div className="area_common slick">
          {/* 패키지 */}
          {attribute.description.map((currentValue, index) => {
            return (
              <div className="box_common" key={index}>
                <Link to={`/${attribute.category}/read/${currentValue.number}`} className="link_common">
                  <figure className="thumbnail_common">
                    <div className="image_common" style={{ backgroundImage: `url(/uploads/shilla/${currentValue.thumbnail})` }}></div>
                    <Caption
                      attribute={{
                        design: 'middle',
                        information: attribute.information && attribute.information[index],
                        category: attribute.category
                      }}
                    />
                  </figure>
                </Link>
              </div>
            )
          })}
        </div>
      )}

      {attribute.design === 'information' && (
        <div className="area_common slick">
          {/* 호텔 */}
          {attribute.description.map((currentValue, index) => {
            return (
              <div className="box_common" key={index}>
                <Link to={`/${attribute.category}/read/${currentValue.number}`} className="link_common">
                  <figure className="thumbnail_common">
                    <div className="image_common" style={{ backgroundImage: `url(/uploads/shilla/${currentValue.thumbnail})` }}></div>

                    <Caption
                      attribute={{
                        design: 'information',
                        information: attribute.information && attribute.information[index],
                        category: attribute.category,
                        invisible: attribute.invisible
                      }}>
                      {attribute.invisible && (
                        <>
                          <Information
                            attribute={{
                              design: 'information',
                              information: attribute.information && attribute.information[index],
                              category: attribute.category,
                              invisible: attribute.invisible
                            }}
                          />
                        </>
                      )}
                    </Caption>
                  </figure>
                </Link>
              </div>
            )
          })}
        </div>
      )}

      {attribute.design === 'gallery' && (
        <div className="area_common slick">
          {/* 이벤트 */}
          {attribute.description.map((currentValue, index) => {
            return (
              <div className="box_common" key={index}>
                <Link to={`/${attribute.category}/read/${currentValue.number}`} className="link_common">
                  <figure className="thumbnail_common">
                    <div className="image_common" style={{ backgroundImage: `url(/uploads/shilla/${currentValue.thumbnail})` }}></div>

                    <Caption
                      attribute={{
                        design: 'information',
                        information: attribute.information && attribute.information[index],
                        category: attribute.category,
                        invisible: attribute.invisible
                      }}>
                      {attribute.invisible && (
                        <>
                          <Information
                            attribute={{
                              design: 'information',
                              information: attribute.information && attribute.information[index],
                              category: attribute.category,
                              invisible: attribute.invisible,
                              half: true
                            }}
                          />
                        </>
                      )}
                    </Caption>
                  </figure>
                </Link>
              </div>
            )
          })}
        </div>
      )}

      {attribute.design === 'slider' && (
        <div className="slick">
          <div className="box_common">
            <Link to="#" className="link_common">
              <div className="image_common" style={{ backgroundImage: `url(/uploads/shilla/${attribute.information.thumbnail})` }}></div>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Slick

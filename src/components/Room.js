import React, { useEffect } from 'react'
import styled from 'styled-components'
import Contents from './common/Contents'
import Slick from '../components/slick/Slick'
import Caption from './Caption'
import Information from './Information'

const Styled = {}

Styled.room = styled.section``

const Room = (props) => {
  const { description, error, loading, information, category } = props

  useEffect(() => {})

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.group('components → [Room.js]')
      // console.log('존재하지 않는 포스트입니다.')
      // console.groupEnd()

      return <p>존재하지 않는 포스트입니다.</p>
    }

    // console.group('components → [Room.js]')
    // console.log('에러가 발생했어요!')
    // console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !description || !information) {
    // console.group('components → [Room.js]')
    // console.log('읽어들이는 중이거나 아직 포스트 데이터가 존재하지 않을 때')
    // console.groupEnd()

    return null
  }

  if (!description || !information) {
    // console.group('components → [Room.js]')
    // console.log('포스트 목록이 존재하지 않을 때')
    // console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <>
      <Contents>
        <div className="area_common">
          <strong className="title_common">객실 상세정보</strong>

          {description.map((currentValue, index) => {
            return (
              <figure className="thumbnail_common" key={index}>
                <Slick attribute={{ design: 'slider', information: currentValue }} />

                <Caption
                  attribute={{
                    design: 'information',
                    information: {
                      name: currentValue.name,
                      description: currentValue.description,
                      latest: '새 글',
                      contents: currentValue.contents
                    }
                  }}>
                  <Information
                    attribute={{
                      design: 'information',
                      information: information[index],
                      category: category
                    }}
                  />
                </Caption>
              </figure>
            )
          })}
        </div>
      </Contents>
    </>
  )
}

export default Room

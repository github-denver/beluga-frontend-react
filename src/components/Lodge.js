import React from 'react'
import styled from 'styled-components'
import Contents from './common/Contents'
import Slick from '../components/slick/Slick'
import Caption from './Caption'
import Information from './Information'

const Styled = {}

Styled.read = styled.section``

const Lodge = (props) => {
  // console.log('components → [Lodge.js] → props: ', props)
  // console.log('')

  const { description, information, error, loading, category } = props

  const navigation = {
    benefit: '패키지',
    event: '이벤트',
    lodge: '호텔'
  }

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.group('components → [Lodge.js]')
      // console.log('존재하지 않는 포스트입니다.')
      // console.groupEnd()

      return <p>존재하지 않는 포스트입니다.</p>
    }

    // console.group('components → [Lodge.js]')
    // console.log('에러가 발생했어요!')
    // console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !description || !information) {
    // console.group('components → [Lodge.js]')
    // console.log('읽어들이는 중이거나 아직 포스트 데이터가 존재하지 않을 때')
    // console.groupEnd()

    return null
  }

  if (!description || !information) {
    // console.group('components → [Lodge.js]')
    // console.log('포스트 목록이 존재하지 않을 때')
    // console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <>
      <Contents
        attribute={{ title: category === 'lodge' ? `${description[0].name} (${description[0].description})` : navigation[category], category: category }}>
        <figure className="thumbnail_common">
          <Slick attribute={{ design: 'slider', information: description[0] }} />

          {category === 'event' ? (
            <>
              {/* 이벤트 information */}
              <Caption
                attribute={{
                  design: 'information',
                  category: category,
                  information: information[0],
                  invisible: false
                }}>
                <Information
                  attribute={{
                    design: 'information',
                    information: information[0],
                    category: category
                  }}
                />
              </Caption>
            </>
          ) : (
            <>
              {/* 나머지 information */}
              <Caption
                attribute={{
                  design: 'information',
                  category: category,
                  information: {
                    name: description[0].name,
                    description: description[0].description,
                    // latest: '새 글',
                    contents: description[0].contents
                  }
                }}>
                <Information
                  attribute={{
                    design: 'information',
                    information: information[0],
                    category: category
                  }}
                />
              </Caption>
            </>
          )}
        </figure>
      </Contents>
    </>
  )
}

export default Lodge

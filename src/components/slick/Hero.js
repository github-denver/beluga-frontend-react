import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const $ = window.$

const Styled = {}

Styled.hero = styled.section``

const Hero = (props) => {
  const { hero, error, loading } = props

  useEffect(() => {
    if (!loading && !!hero) {
      $('.slick').not('.slick-initialized').slick()

      return () => {
        if (!loading && !!hero) {
          // $('.slick').slick('unslick')
        }
      }
    }
  })

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.group('components → slick → [Hero.js]')
      // console.log('존재하지 않는 포스트입니다.')
      // console.groupEnd()

      return <p>존재하지 않는 포스트입니다.</p>
    }

    // console.group('components → slick → [Hero.js]')
    // console.log('에러가 발생했어요!')
    // console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !hero) {
    // console.group('components → slick → [Hero.js]')
    // console.log('읽어들이는 중이거나 아직 포스트 데이터가 존재하지 않을 때')
    // console.groupEnd()

    return null
  }

  if (!hero) {
    // console.group('components → slick → [Hero.js]')
    // console.log('포스트 목록이 존재하지 않을 때')
    // console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <section className="thumbnail_common">
      <div className="slick">
        {!!hero &&
          hero.map((currentValue, index) => {
            return (
              <Link to="#" key={index}>
                <div className="image_common" style={{ backgroundImage: `url(/uploads/shilla/seoul/common/${currentValue.thumbnail})` }}>
                  <div className="group_dimmed">
                    <strong className="subject_dimmed">{currentValue.subject}</strong>
                    <span className="text_dimmed">{currentValue.description}</span>
                    <p className="text_dimmed">{currentValue.contents}</p>
                  </div>
                </div>
              </Link>
            )
          })}
      </div>
    </section>
  )
}

export default Hero

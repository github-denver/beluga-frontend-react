import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.caption = styled.figcaption``

const Caption = (props) => {
  // console.log('components → [Caption.js] → props: ', props)
  // console.log('')

  const { attribute } = props

  return (
    <figcaption className={`caption_${attribute.design}`}>
      {attribute.design === 'middle' ? (
        <>
          {/* 패키지 information */}
          <div className="untitled_common">
            <strong className={`subject_${attribute.design}`}>{attribute.information.name}</strong>
            <span className={`text_${attribute.design}`}>{attribute.information.description}</span>
          </div>
        </>
      ) : (
        <>
          {attribute.information && attribute.category !== 'lodge' && attribute.category !== 'room' && attribute.category !== 'benefit' ? (
            <>
              {attribute.category !== 'event' ? (
                <>
                  {/* ? */}
                  <div className="untitled_common">
                    <strong className={`subject_${attribute.design}`}>{attribute.information.subject}</strong>
                    <em className="icon_global">{attribute.information.latest}</em>
                  </div>
                </>
              ) : (
                <>
                  {/* 이벤트 information */}
                  <div className="untitled_common">
                    <strong className={`subject_${attribute.design}`}>{attribute.information.subject}</strong>
                    <em className="icon_global">{attribute.information.latest}</em>
                  </div>
                  {!attribute.invisible && attribute.information.content && (
                    <p className="text_information" dangerouslySetInnerHTML={{ __html: attribute.information.content }}></p>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              {/* 호텔 information */}
              <div className="untitled_common">
                <strong className={`subject_${attribute.design}`}>{attribute.information.name}</strong>
                <span className={`text_${attribute.design}`}>{attribute.information.description}</span>
                <em className="icon_global">{attribute.information.latest}</em>
              </div>
              {!attribute.invisible && attribute.information.contents && (
                <p className="text_information" dangerouslySetInnerHTML={{ __html: attribute.information.contents }}></p>
              )}
            </>
          )}
        </>
      )}

      {props.children}
    </figcaption>
  )
}

export default Caption

import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.caption = styled.figcaption``

const Caption = (props) => {
  const { attribute } = props

  return (
    <figcaption className={`caption_${attribute.design}`}>
      {attribute.design === 'middle' ? (
        <div className="outer_cell">
          <div className="inner_cell">
            <div className="untitled_common">
              <span className={`text_${attribute.design}`}>{attribute.information.description}</span>
              <strong className={`subject_${attribute.design}`}>{attribute.information.name}</strong>
              <p className={`description_${attribute.design}`}>{attribute.information.place}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="untitled_common">
            <strong className={`subject_${attribute.design}`}>{attribute.information.name}</strong>
            <span className={`text_${attribute.design}`}>{attribute.information.description}</span>
            <em className="icon_global">{attribute.information.latest}</em>
          </div>

          {attribute.category !== 'main' && attribute.information.contents && (
            <p className="text_information" dangerouslySetInnerHTML={{ __html: attribute.information.contents }}></p>
          )}
        </>
      )}

      {props.children}
    </figcaption>
  )
}

export default Caption

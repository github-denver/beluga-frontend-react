import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.contents = styled.section``

const Contents = (props) => {
  const { title } = props

  return (
    <>
      <section className="contents">
        {title && (
          <h3 className="title_contents">
            <Link to={`/talk/list`} className="link_contents">
              {title}
            </Link>
          </h3>
        )}

        {props.children}
      </section>
    </>
  )
}

export default Contents

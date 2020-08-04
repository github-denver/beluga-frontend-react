import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.loading = styled.section``

const Loading = () => {
  return (
    <>
      <div className="group_loading">
        <div className="thumbnail_loading"></div>
        <div className="caption_loading">
          <span className="subject_loading"></span>
          <span className="text_loading"></span>
        </div>
      </div>
    </>
  )
}

export default Loading

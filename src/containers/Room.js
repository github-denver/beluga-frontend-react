import React, { useEffect } from 'react'
import Room from '../components/Room'
import Room2 from '../components/Room2'
import { useSelector, useDispatch } from 'react-redux'
import { roomReadContents, roomReadInformation } from '../modules/room/read'
import { benefitReadContents, benefitReadInformation } from '../modules/benefit/read'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  // console.log('containers → [Room.js] → props: ', props)

  const { location, category, design } = props

  const room = useSelector(({ roomRead, loading }) => {
    const data = {}

    if (roomRead.contents !== null) {
      data.contents = roomRead.contents.result
    }

    if (roomRead.information !== null) {
      data.information = roomRead.information.result
    }

    return {
      contents: data.contents,
      information: data.information,
      error: roomRead.error,
      loading: loading['roomRead/LODGE_READ_CONTENTS']
    }
  })

  // console.log('containers → [Room.js] → room: ', room)

  const benefit = useSelector(({ benefitRead, loading }) => {
    const data = {}

    if (benefitRead.contents !== null) {
      data.contents = benefitRead.contents.result
    }

    if (benefitRead.information !== null) {
      data.information = benefitRead.information.result
    }

    return {
      contents: data.contents,
      information: data.information,
      error: benefitRead.error,
      loading: loading['benefitRead/DESCRIPTION_READ_BENEFIT']
    }
  })

  const dispatch = useDispatch()

  useEffect(() => {
    const number = location.pathname.split('/').splice(-1)[0] === '' ? 1 : location.pathname.split('/').splice(-1)[0]

    if (category === 'lodge') {
      dispatch(roomReadContents({ category: 'room', number }))
      dispatch(roomReadInformation({ category: 'room', number }))
    }

    if (category === 'benefit') {
      dispatch(benefitReadContents({ category, number }))
      dispatch(benefitReadInformation({ category, number }))
    }
  }, [dispatch, location.pathname, category])

  return (
    <>
      {category === 'lodge' && (
        <Room error={room.error} loading={room.loading} design={design} category={category} description={room.contents} information={room.information} />
      )}
      {category === 'benefit' && (
        <Room2
          error={benefit.error}
          loading={benefit.loading}
          design={design}
          category={category}
          description={benefit.contents}
          information={benefit.information}
        />
      )}
    </>
  )
}

export default withRouter(Result)

import React, { useEffect } from 'react'
import Room from '../components/Room'
import { useSelector, useDispatch } from 'react-redux'
import { readRoomDescription, readRoomInformation } from '../modules/room/read'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { location, category, design } = props

  const { description, information, error, loading } = useSelector(({ readRoom, loading }) => {
    const data = {}

    if (readRoom.description !== null) {
      data.description = readRoom.description.result
    }

    if (readRoom.information !== null) {
      data.information = readRoom.information.result
    }

    return {
      description: data.description,
      information: data.information,
      error: readRoom.error,
      loading: loading['readRoom/DESCRIPTION_READ_LODGE']
    }
  })

  const dispatch = useDispatch()

  useEffect(() => {
    const number = location.pathname.split('/').splice(-1)[0] === '' ? 1 : location.pathname.split('/').splice(-1)[0]

    dispatch(readRoomDescription({ category, number }))
    dispatch(readRoomInformation({ category, number }))
  }, [dispatch, location.pathname, category])

  return <Room description={description} information={information} error={error} loading={loading} design={design} category={category} />
}

export default withRouter(Result)

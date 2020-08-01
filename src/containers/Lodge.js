import React, { useEffect } from 'react'
import Lodge from '../components/Lodge'
import { useSelector, useDispatch } from 'react-redux'
import { readLodgeDescription, readLodgeInformation } from '../modules/lodge/read'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { location, category } = props

  const { description, information, error, loading } = useSelector(({ readLodge, loading }) => {
    const data = {}

    if (readLodge.description !== null) {
      data.description = readLodge.description.result
    }

    if (readLodge.information !== null) {
      data.information = readLodge.information.result
    }

    return {
      description: data.description,
      information: data.information,
      error: readLodge.error,
      loading: loading['readLodge/DESCRIPTION_READ_LODGE']
    }
  })

  const dispatch = useDispatch()

  useEffect(() => {
    const number = location.pathname.split('/').splice(-1)[0] === '' ? 1 : location.pathname.split('/').splice(-1)[0]

    dispatch(readLodgeDescription({ category, number }))
    dispatch(readLodgeInformation({ category, number }))
  }, [dispatch, location.pathname, category])

  return <Lodge description={description} information={information} error={error} loading={loading} category={category} />
}

export default withRouter(Result)

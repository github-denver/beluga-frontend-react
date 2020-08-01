import React, { useEffect } from 'react'
import Slick from '../../components/slick/Slick'
import { useSelector, useDispatch } from 'react-redux'
import { listLodgeDescription, listLodgeInformation } from '../../modules/lodge/list'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { location, attribute } = props

  const { description, information, error, loading } = useSelector(({ listLodge, loading }) => {
    const data = {}

    if (listLodge.description !== null) {
      data.description = listLodge.description.list
    }

    if (listLodge.information !== null) {
      data.information = listLodge.information.list
    }

    return {
      description: data.description,
      information: data.information,
      error: listLodge.error,
      loading: loading['listLodge/DESCRIPTION_LIST_LODGE']
    }
  })

  const dispatch = useDispatch()

  useEffect(() => {
    const number = location.pathname.split('/').splice(-1)[0] !== '' ? location.pathname.split('/').splice(-1)[0] : 1

    dispatch(listLodgeDescription({ category: attribute.category, number }))
    dispatch(listLodgeInformation({ category: attribute.category, number }))
  }, [dispatch, location.pathname, attribute.category])

  return <Slick error={error} loading={loading} attribute={{ design: attribute.design, description: description, information: information }} />
}

export default withRouter(Result)

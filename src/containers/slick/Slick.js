import React, { useEffect, useRef } from 'react'
import Slick from '../../components/slick/Slick'
import { useSelector, useDispatch } from 'react-redux'
import { lodgeListContents, lodgeListInformation } from '../../modules/lodge/list'
import { benefitListContents, benefitListInformation } from '../../modules/benefit/list'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { location, attribute } = props

  const sensor = useRef(false)

  const lodge = useSelector(({ lodgeList, loading }) => {
    const data = {}

    if (lodgeList.contents !== null) {
      data.contents = lodgeList.contents.list
    }

    if (lodgeList.information !== null) {
      data.information = lodgeList.information.list
    }

    return {
      contents: data.contents,
      information: data.information,
      error: lodgeList.error,
      loading: loading['lodgeList/LODGE_LIST_CONTENTS']
    }
  })

  const benefit = useSelector(({ benefitList, loading }) => {
    const data = {}

    if (benefitList.contents !== null) {
      data.contents = benefitList.contents.list
    }

    if (benefitList.information !== null) {
      data.information = benefitList.information.list
    }

    return {
      contents: data.contents,
      information: data.information,
      error: benefitList.error,
      loading: loading['benefitList/BENEFIT_LIST_CONTENTS']
    }
  })

  const dispatch = useDispatch()

  useEffect(() => {
    const result = (!lodge.contents || !lodge.information) && (!benefit.contents || !benefit.information)

    if (result) return

    sensor.current = true
  }, [lodge, benefit])

  useEffect(() => {
    const number = location.pathname.split('/').splice(-1)[0] !== '' ? location.pathname.split('/').splice(-1)[0] : 1

    if (sensor.current) {
      sensor.current = true

      return
    }

    if (attribute.category === 'lodge') {
      dispatch(lodgeListContents({ category: attribute.category, number }))
      dispatch(lodgeListInformation({ category: attribute.category, number }))
    }

    if (attribute.category === 'benefit') {
      dispatch(benefitListContents({ category: attribute.category, number }))
      dispatch(benefitListInformation({ category: attribute.category, number }))
    }
  }, [dispatch, location.pathname, attribute.category])

  return (
    <>
      {attribute.category === 'lodge' && (
        <Slick
          error={lodge.error}
          loading={lodge.loading}
          attribute={{ design: attribute.design, description: lodge.contents, information: lodge.information }}
        />
      )}

      {attribute.category === 'benefit' && (
        <Slick
          error={benefit.error}
          loading={benefit.loading}
          attribute={{ design: attribute.design, description: benefit.contents, information: benefit.information }}
        />
      )}
    </>
  )
}

export default withRouter(Result)

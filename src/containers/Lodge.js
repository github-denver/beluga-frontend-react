import React, { useEffect } from 'react'
import Lodge from '../components/Lodge'
import { useSelector, useDispatch } from 'react-redux'
import { lodgeReadContents, lodgeReadInformation } from '../modules/lodge/read'
import { benefitReadContents, benefitReadInformation } from '../modules/benefit/read'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  // console.log('containers → [Lodge.js] → props: ', props)

  const { location, category } = props

  const lodge = useSelector(({ lodgeRead, loading }) => {
    const data = {}

    if (lodgeRead.contents !== null) {
      data.contents = lodgeRead.contents.result
    }

    if (lodgeRead.information !== null) {
      data.information = lodgeRead.information.result
    }

    return {
      contents: data.contents,
      information: data.information,
      error: lodgeRead.error,
      loading: loading['lodgeRead/LODGE_READ_CONTENTS']
    }
  })

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
      loading: loading['benefitRead/BENEFIT_READ_CONTENTS']
    }
  })

  const dispatch = useDispatch()

  useEffect(() => {
    const number = location.pathname.split('/').splice(-1)[0] === '' ? 1 : location.pathname.split('/').splice(-1)[0]

    if (category === 'lodge') {
      dispatch(lodgeReadContents({ category, number }))
      dispatch(lodgeReadInformation({ category, number }))
    }

    if (category === 'benefit') {
      dispatch(benefitReadContents({ category: category, number }))
      dispatch(benefitReadInformation({ category: category, number }))
    }
  }, [dispatch, location.pathname, category])

  return (
    <>
      {category === 'lodge' && (
        <Lodge error={lodge.error} loading={lodge.loading} category={category} description={lodge.contents} information={lodge.information} />
      )}
      {category === 'benefit' && (
        <Lodge error={benefit.error} loading={benefit.loading} category={category} description={benefit.contents} information={benefit.information} />
      )}
    </>
  )
}

export default withRouter(Result)

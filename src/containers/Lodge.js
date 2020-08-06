import React, { useEffect } from 'react'
import Lodge from '../components/Lodge'
import { useSelector, useDispatch } from 'react-redux'
import { commonReadContents } from '../modules/common/read'
import { lodgeReadContents, lodgeReadInformation } from '../modules/lodge/read'
import { benefitReadContents, benefitReadInformation } from '../modules/benefit/read'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  // console.log('containers → [Lodge.js] → props: ', props)
  // console.log('')

  const { location, category } = props

  const common = useSelector(({ commonRead, loading }) => {
    // console.log('commonRead: ', commonRead)

    const data = {}

    if (commonRead.contents !== null) {
      data.contents = commonRead.contents.result
    }

    /* if (commonRead.information !== null) {
      data.information = commonRead.information.result
    } */

    return {
      contents: data.contents,
      information: data.contents,
      error: commonRead.error,
      loading: loading['commonRead/EVENT_READ_CONTENTS']
    }
  })

  // console.log('common: ', common)

  const lodge = useSelector(({ lodgeRead, loading }) => {
    // console.log('lodgeRead: ', lodgeRead)

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

  // console.log('lodge: ', lodge)
  // console.log('')

  const benefit = useSelector(({ benefitRead, loading }) => {
    // console.log('benefitRead: ', benefitRead)

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

  // console.log('benefit: ', benefit)
  // console.log('')

  const dispatch = useDispatch()

  useEffect(() => {
    const number = location.pathname.split('/').splice(-1)[0] === '' ? 1 : location.pathname.split('/').splice(-1)[0]
    // console.log('containers → [Lodge.js] → number: ', number)

    if (category === 'lodge') {
      dispatch(lodgeReadContents({ category, number }))
      dispatch(lodgeReadInformation({ category, number }))

      return
    }

    if (category === 'benefit') {
      dispatch(benefitReadContents({ category: category, number }))
      dispatch(benefitReadInformation({ category: category, number }))

      return
    }

    dispatch(commonReadContents({ category: category, number }))
    // dispatch(commonReadInformation({ category: category, number }))
  }, [dispatch, location.pathname, category])

  return (
    <>
      {category !== 'lodge' && category !== 'room' && category !== 'benefit' && (
        <>
          <Lodge error={common.error} loading={common.loading} category={category} description={common.contents} information={common.information} />
        </>
      )}

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

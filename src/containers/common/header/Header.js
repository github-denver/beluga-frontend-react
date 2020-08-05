import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../../components/common/header/Header'
import { logout2 } from '../../../modules/authorization'
import { logout } from '../../../modules/user'

const Result = () => {
  const { user } = useSelector(({ user }) => {
    // console.log('containers → common → header → [Header.js] → user: ', user)
    // console.log('containers → common → header → [Header.js] → user.user : ', user.user)
    // console.log('containers → common → header → [Header.js] → typeof user.user : ', typeof user.user)
    // console.log('')

    let data = {}

    if (user.user !== null) {
      // console.log('containers → common → header → [Header.js] → user.user : ', user.user)
      // console.log('containers → common → header → [Header.js] → user.user.user2 : ', user.user.user2)
      // console.log('containers → common → header → [Header.js] → typeof user.user.user2 : ', typeof user.user.user2)
      // console.log('')

      const result = typeof user.user === 'string' ? JSON.parse(user.user) : user.user
      // console.log('containers → common → header → [Header.js] → result : ', result)
      // console.log('containers → common → header → [Header.js] → result.user2 : ', result.user2)
      // console.log('')

      // result = user.user.user2
      data.user = result.user2
    }

    // console.log('containers → common → header → [Header.js] → data.user: ', data.user)
    // console.log('')

    return { user: data.user }
  })

  // console.log('containers → common → header → [Header.js] → user: ', user)

  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout2('login'))
    dispatch(logout())
  }

  return <Header user={user} logout={onLogout} />
}

export default Result

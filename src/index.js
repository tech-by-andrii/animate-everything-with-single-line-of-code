import React, { useEffect } from 'react'

import { enableAnimation } from './helpers'
import HomeScreen from './screens/HomeScreen'

export default function () {
  useEffect(
    () => {
      enableAnimation()
    },
    [false]
  )

  return (
    <>
      <HomeScreen />
    </>
  )
}

import React, { useEffect } from 'react'
import { UIManager } from 'react-native'

import HomeScreen from './screens/HomeScreen'

export default function () {
  useEffect(() => {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
  })

  return (
    <>
      <HomeScreen />
    </>
  )
}

import React, { useState, useCallback } from 'react'
import { View } from 'react-native'

import { animate } from '../../helpers'
import Button from '../common/Button'

import styles from './styles'

function getRandomIntInclusive () {
  const min = 1
  const max = 300

  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function () {
  const [position, setPosition] = useState({ top: 50, left: 50 })

  const handlePress = useCallback(
    () => {
      const top = getRandomIntInclusive()
      const left = getRandomIntInclusive()

      console.log('top', top)
      console.log('left', left)
      animate()
      setPosition({ top, left })
    },
    [position.top, position.left]
  )

  return (
    <>
      <View style={styles.buttonContainer}>
        <Button text="Toggle appearance" onPress={handlePress} />
      </View>

      <View style={[styles.movableBlock, position]} />
    </>
  )
}

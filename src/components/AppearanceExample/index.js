import React, { useState, useCallback } from 'react'
import { View, Text } from 'react-native'

import { animate } from '../../helpers'

import Button from '../common/Button'

import styles from './styles'

export default function () {
  const [isVisible, setIsVisible] = useState(false)

  const handlePress = useCallback(
    () => {
      animate()
      setIsVisible(!isVisible)
    },
    [isVisible]
  )

  return (
    <>
      <View style={styles.buttonContainer}>
        <Button text="Toggle appearance" onPress={handlePress} />
      </View>

      {isVisible && (
        <View style={styles.container}>
          {Array(3).fill().map((_, index) => (
            <View key={index} style={styles.textContainer}>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
            </View>
          ))}
        </View>
      )}
    </>
  )
}

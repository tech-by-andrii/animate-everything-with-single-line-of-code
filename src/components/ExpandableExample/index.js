import React, { useState, useCallback } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { animate } from '../../helpers'

import styles from './styles'

export default function () {
  const [selectedItem, setSelectedItem] = useState(-1)

  const handlePress = useCallback(
    (index) => {
      animate()
      setSelectedItem(selectedItem === index ? -1 : index)
    },
    [selectedItem]
  )

  return (
    <View style={styles.container}>
      {Array(3).fill().map((_, index) => (
        <View key={index}>
          <TouchableOpacity style={styles.touchableZone} onPress={() => handlePress(index)}>
            <Text>Lorem Ipsum {index}</Text>
          </TouchableOpacity>

          {index === selectedItem && (
            <View style={styles.textContainer}>
              <Text>
                Lorem Ipsum is simply dummy text.
              </Text>
            </View>
          )}
        </View>
      ))}
    </View>
  )
}

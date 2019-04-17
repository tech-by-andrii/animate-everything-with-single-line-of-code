import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

export default function ({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text styles={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

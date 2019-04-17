import { StyleSheet } from 'react-native'

import { DEVICE } from '../../../constants'
import { COLORS } from '../../../styles'

export default StyleSheet.create({
  hr: {
    width: DEVICE.width,
    borderTopWidth: 1,
    borderTopColor: COLORS.BLACK,
    marginBottom: 10
  }
})

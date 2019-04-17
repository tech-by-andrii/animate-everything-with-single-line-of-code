import { StyleSheet } from 'react-native'

import { DEVICE } from '../../constants'

export default StyleSheet.create({
  controlContainer: {
    height: DEVICE.height / 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    height: DEVICE.height / 2
  }
})

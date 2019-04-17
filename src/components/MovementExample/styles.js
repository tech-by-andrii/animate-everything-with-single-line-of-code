import { StyleSheet } from 'react-native'

import { COLORS } from '../../styles'
import { DEVICE } from '../../constants'

export default StyleSheet.create({
  buttonContainer: {
    height: DEVICE.height / 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  movableBlock: {
    position: 'absolute',
    backgroundColor: COLORS.PRIMARY,
    width: 50,
    height: 50,

    top: 10,
    left: 10
  }
})

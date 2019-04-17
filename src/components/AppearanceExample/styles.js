import { StyleSheet } from 'react-native'

import { DEVICE } from '../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    height: DEVICE.height / 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    paddingHorizontal: 15,
    marginTop: 15
  }
})

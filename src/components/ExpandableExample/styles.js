import { StyleSheet } from 'react-native'

import { COLORS } from '../../styles'

export default StyleSheet.create({
  container: {
    padding: 10,
    flex: 1
  },
  textContainer: {
    paddingHorizontal: 15,
    marginTop: 15
  },
  touchableZone: {
    paddingVertical: 10,
    backgroundColor: COLORS.WHITE
  }
})

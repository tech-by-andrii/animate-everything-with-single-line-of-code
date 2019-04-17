import { StyleSheet } from 'react-native'
import { COLORS } from '../../../styles'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,

    backgroundColor: COLORS.PRIMARY,

    borderRadius: 3
  },
  text: {
    textAlign: 'center',
    color: COLORS.WHITE
  }
})

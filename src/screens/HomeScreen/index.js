import React, { useState, useCallback } from 'react'
import { SafeAreaView, View } from 'react-native'

import { EXAMPLE_TYPES } from '../../constants'
import { animate } from '../../helpers'

import AppearanceExample from '../../components/AppearanceExample'
import ExpandableExample from '../../components/ExpandableExample'
import MovementExample from '../../components/MovementExample'

import Button from '../../components/common/Button'
import Hr from '../../components/common/Hr'

import styles from './styles'

const EXAMPLES = Object.values(EXAMPLE_TYPES)

export default function () {
  const [example, setExample] = useState(EXAMPLE_TYPES.APPEARANCE)

  const handlePress = useCallback(
    (item) => {
      animate()
      setExample(item)
    },
    [false]
  )

  return (
    <SafeAreaView>
      <View style={styles.controlContainer}>
        {EXAMPLES.map(item => (
          <Button key={item} text={item} onPress={() => handlePress(item)}/>
        ))}
      </View>

      <Hr />

      <View style={styles.contentContainer}>
        {example === EXAMPLE_TYPES.APPEARANCE && <AppearanceExample />}
        {example === EXAMPLE_TYPES.EXPAND && <ExpandableExample />}
        {example === EXAMPLE_TYPES.MOVEMENT && <MovementExample />}
      </View>
    </SafeAreaView>
  )
}

import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native'

const DebugApp4 = () => {
  const [randomBackgroundColor, setRandomBackgroundColor] = useState('#ffffff')

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomBackgroundColor(color)
  }

  return (
    <>
      <StatusBar 
  backgroundColor={randomBackgroundColor}
  barStyle="light-content"
  translucent={false}
/>
      <View style={[styles.container, { backgroundColor: randomBackgroundColor }]}>
        <TouchableOpacity style={styles.actionBtn} onPress={generateColor}>
          <Text style={styles.actionBtnTxt}>press me</Text>
        </TouchableOpacity>
      </View>
       
    </>
  )
}

export default DebugApp4

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  actionBtnTxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
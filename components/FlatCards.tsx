import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'


export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>

      <ScrollView>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
          <Text>red</Text>
        </View>
         <View style={[styles.card,styles.cardTwo]}>
          <Text>Blue</Text>
        </View>
         <View style={[styles.card,styles.cardThree]}>
          <Text>Green</Text>
        </View>
         <View style={[styles.card,styles.cardThree]}>
          <Text>Green</Text>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
   paddingHorizontal: 10,
  },
container :{
  flexDirection:'row',
  flex:1,
  padding:8,
},
card:{
 flex:1,
  width:100,
  height:100,
  borderRadius:4,
  justifyContent:'center',
  alignItems:'center',
  margin:8,
},
cardOne:{
  backgroundColor:'#EF5354',
},
cardTwo:{
  backgroundColor:'#2196F3',
},
cardThree:{
  backgroundColor:'rgb(56, 184, 24)  ',
},
})
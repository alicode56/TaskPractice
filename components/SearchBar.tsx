// import {
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Image,
//   Animated,
// } from 'react-native';
// import React from 'react';
// import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

// const SearchBar = () => {
//   const animation = useSharedValue(0);
//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       width: animation.value,
//     };
//   });

//   return (
//     <Animated.View style={[styles.container, animatedStyle]}>
//       <View style={styles.searchBox}>
//         <TextInput style={styles.inputTxt} placeholder="Search..." />
//         <TouchableOpacity style={styles.btn} onPress={() => {
//             animation.value = withTiming(animation.value === 0 ? 300 : 0, { duration: 500 });
//         }}>
//           <Image
//             source={require('../../Images/search.png')}
//             style={styles.icon}
//           />
//         </TouchableOpacity>
//       </View>
//     </Animated.View>
//   );
// };

// export default SearchBar;

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   searchBox: {
//     width: 300,
//     height: 40,
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   inputTxt: {
//     width: '86%',
//   },
//   btn: {
//     width: '14%',
//     height: '100%',
//   },
//   icon: {
//     width: 20,
//     height: 20,
//   },
// });

import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Image } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.inputTxt}
          placeholder="Search..."
        />

        <TouchableOpacity style={styles.btn}>
          <Image
            source={require('../Images/search.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    flex:1,
  },
  searchBox: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inputTxt: {
    flex: 1,
  },
  btn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
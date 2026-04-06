import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DropDown = () => {
  const [selected, setSelected] = useState('Select Item');
  const [open, setOpen] = useState(false);

  const items = ['Apple', 'Banana', 'Mango', 'Orange'];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => setOpen(!open)}
      >
        <Text>{selected}</Text>
      </TouchableOpacity>

      {open &&
        items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => {
              setSelected(item);
              setOpen(false);
            }}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
      justifyContent: 'center',
  },
  box: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
  item: {
    padding: 10,
    borderBottomWidth: 0.3,
  },
});
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const data = ['Apple', 'Banana', 'Mango', 'Orange'];
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={() => setOpen((prev) => !prev)}>
        <Text>
          {selectedItems.length > 0 ? selectedItems.join(', ') : 'Select Items'}
        </Text>
      </TouchableOpacity>

      {open && (
        <View style={styles.dropdown}>
          <TextInput
            placeholder="Search..."
            value={search}
            onChangeText={setSearch}
            style={styles.search}
          />

          <FlatList
            data={filteredData}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              const isSelected = selectedItems.includes(item);
              return (
                <TouchableOpacity
                  style={[styles.item, isSelected && styles.selectedItem]}
                  onPress={() => toggleSelect(item)}
                >
                  <Text>{isSelected ? '✔ ' : ''}{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
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
  dropdown: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 8,
    maxHeight: 200,
  },
  search: {
    borderBottomWidth: 1,
    padding: 8,
  },
  item: {
    padding: 10,
    borderBottomWidth: 0.3,
  },
  selectedItem: {
    backgroundColor: '#e0e0e0',
  },
});
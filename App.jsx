import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Addtodolist from './src/components/Addtodolist';
import Cardtodolist from './src/components/Cardtodolist';
const App = () => {
  const DB = 'todoDB';
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const dataHandler = newData => {
    setData(prevData => [...prevData, newData]);
  };
  const deleteHandler = id => {
    setData(prevData => prevData.filter(item => item.id !== id));
  };
  const editItemHandler = item => {
    console.log('item', item);
    // setData(item)
    setEditingItem(item);
  };
  const saveEditItemHandler = editData => {
    console.warn(editData);
    setData(prevData =>
      prevData.map(item => (item.id == editData.id ? editData : item)),
    );
  };
  console.log('Data=>>', data);
  return (
    <View style={styles.container}>
      <Addtodolist
        carryData={dataHandler}
        saveEdit={saveEditItemHandler}
        editingItem={editingItem}
      />
      <Cardtodolist
        data={data}
        deleteData={deleteHandler}
        onEdit={editItemHandler}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});

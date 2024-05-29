import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Addtodolist from './src/components/Addtodolist';
import Cardtodolist from './src/components/Cardtodolist';
const App = () => {
  const DB = 'todoDB';
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const dataHandler = newData => {
    console.log('NewData=>>>>>', newData);
    fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        todo: newData.name,
        completed: false,
        userId: newData.id,
      }),
    })
      .then(res => res.json())
      .then(resJson => {
        console.log('response json==>', resJson);
        setData(prevData => [
          ...prevData,
          {...resJson, id: resJson.userId || new Date().getTime().toString()},
        ]);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/todos/users');
        const responseJson = await response.json();
        if (Array.isArray(responseJson)) {
          setData(responseJson);
        } else {
          console.error('Expected an array but received:', responseJson);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  const deleteHandler = id => {
    fetch(`https://dummyjson.com/todos/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(console.log);
    setData(prevData => prevData.filter(item => item.id !== id));
  };
  const editItemHandler = item => {
    console.log('Edit===>item', item);
    setEditingItem(item);
  };
  const saveEditItemHandler = editData => {
    console.log('KKKK=>>>>dfat', editData);
    fetch(`https://dummyjson.com/todos/${editData.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({completed: false}),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Update successful:', data);
        setData(prevData =>
          prevData.map(item => (item.userId === editData.id ? editData : item)),
        );
        setEditingItem(null);
      })
      .catch(error => {
        console.error('Error updating item:', error);
      });
  };
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

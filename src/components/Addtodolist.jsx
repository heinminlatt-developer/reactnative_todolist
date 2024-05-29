import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
const Addtodolist = ({carryData, saveEdit, editingItem}) => {
  console.warn('Edit Item=>', editingItem);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const sendDataHandler = () => {
    const data = {id: id, name: name};
    const savedata={id:id,todo:name};
    if (id != '' || name != '') {
      if (editingItem) {
        saveEdit(savedata);
      } else {
        carryData(data);
      }
      setId(''), setName('');
    }
  };
  useEffect(() => {
    if (editingItem) {
      setId(editingItem.id);
      setName(editingItem.name);
    } else {
      setId('');
      setName('');
    }
  }, [editingItem]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List Application</Text>
      <View style={styles.inputContainer}>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="ID>>>>>"
            onChangeText={setId}
            value={id}
          />
        </View>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Name>>"
            onChangeText={setName}
            value={name}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={sendDataHandler}>
        <Text style={styles.addText}>{editingItem ? 'save' : 'add'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Addtodolist;
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'steelblue',
  },
  wrapperInput: {
    flex: 1,
    width: '40%',
    marginTop: 20,
  },
  inputContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderRadius: 5,
    marginHorizontal: 20,
    height: 50,
    borderColor: '#7a42f4',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 40,
  },
  addButton: {
    width: '20%',
    backgroundColor: 'white',
    paddinghO: 10,
    margin: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  addText: {
    color: 'steelblue',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

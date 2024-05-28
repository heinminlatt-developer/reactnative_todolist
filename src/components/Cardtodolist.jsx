import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Fallback from './Fallback';
const Cardtodolist = ({data, deleteData, onEdit}) => {
  const renderItem = ({item}) => {
    const deleteChoiceHandler = () => {
      deleteData(item.id);
    };
    const editChoiceHandler = () => {
      let editData = {id: item.id, name: item.name};
      onEdit(editData);
    };
    return (
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <Text>id: {item.id}</Text>
          <Text>Name:{item.name}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={editChoiceHandler}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={deleteChoiceHandler}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.flatContainer}>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <Fallback />
      )}
    </View>
  );
};
export default Cardtodolist;
const styles = StyleSheet.create({
  flatContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    marginTop: 5,
    borderRadius: 5,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'white',
    width: 300,
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dataContainer: {
    width: '60%',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
  },
  editText: {
    backgroundColor: 'steelblue',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 3,
  },
  deleteText: {
    backgroundColor: 'red',
    padding: 2,
    borderRadius: 3,
    fontWeight: 'bold',
    color: 'white',
  },
});

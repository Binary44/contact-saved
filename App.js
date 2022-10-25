import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ICON from "react-native-vector-icons/MaterialIcons";
const COLORS = { primary: "#1f145c", white: "#ffff" };

export default function App() {


  const [todos, SetTodos] = React.useState([
    {id:1, task: 'frist todo', completed: false},
    {id:2, task: 'second todo', completed: true}]);

    const ListItem = ({todo})=> {
      return <View style={styles.listItem}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: COLORS.primary, textDecorationLine: todo?.completed ? 'line-through' : 'none',}}>
            {todo?.task}
          </Text>
        </View>
        <TouchableOpacity style={[styles.actionIcon]}></TouchableOpacity>
      </View>
    };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Text
          style={{ fontWeight: "bold", fontSize: 20, color: COLORS.primary }}
        >
          TODO APP
        </Text>
        <ICON name="delete" size={25} color="red" />
      </View>

      <FlatList
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{padding:20, paddingBottom: 100,}}
       data={todos} renderItem={
        ({item})=><ListItem todo={item} />} />

      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Add Todo" />
        </View>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <ICON name="add" color={COLORS.white} size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginLeft: 5,
  },

  listItem: {
    padding: 20,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },

  header: {
    padding: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    color: COLORS.white,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: COLORS.white,
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    elevation: 40,
    justifyContent: "center",
    alignItems: 'center',
  },
});

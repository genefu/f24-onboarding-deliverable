import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      width: 200,
      borderWidth: 1,
      padding: 10
    },
    list: {
      alignSelf: 'stretch',
    },
    item: {
      backgroundColor: '#6DB6DD',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
    },
    itemText: {
      color: '#fff',
    },
    itemTextCompleted: {
      color: '#fff',
      textDecorationLine: 'line-through'
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    addTodoView: {
        borderRadius: '8%',
        backgroundColor: '#fff',
        alignSelf: 'auto',
        display: 'flex',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 4,
        shadowOpacity: 0.25,
        elevation: 5,
    }
  });
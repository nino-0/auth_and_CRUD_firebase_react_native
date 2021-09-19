
import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  friend:{
    width:"100%",
    flexDirection:"row",
    marginTop:5,
    justifyContent: "space-between",
  },
  descriptionTask:{
     width:"85%",
     alignContent:'flex-start',
     backgroundColor:"#f5f5f5",
     padding:12,
     paddingHorizontal:30,
     borderRadius:50,
     marginBottom:5,
    marginRight:5,
    color:"#282b2db5",
  },
  DeleteFriend:{
    justifyContent:"center",
    paddingRight:15,

  },
  buttonNewFriend:{
    position:'absolute',
    width: 60,
    height: 60,
    bottom: 30,
    left:20,
    backgroundColor: "#F92e6a",
    borderRadius: 50,
    justifyContent:'center',
    alignItems:'center',
  },
  
  listContainer:{
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,

  },
  buttonLogout:{
    width:60,
    height:60,
    position:'absolute',
    bottom: 30,
    right:20,
    backgroundColor: "#F92e6a",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
  },
  iconButton:{
    fontSize:40,
    fontWeight:'bold',
    color:"#ffffff"
  },
  saveButton:{
    fontSize:20,
    fontWeight:'bold',
    color:"#ffffff"
  },
    text_button:{
      marginTop: 10,
      fontSize: 15,
      fontWeight: 'bold',
    },
    dis_botton: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      width: 300,
      height: 42,
      backgroundColor: '#bdbdbd',
      fontSize: 15,
      borderRadius: 8,
    },
    botton: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      width: 300,
      height: 42,
      backgroundColor: '#3498db',
      fontSize: 15,
      borderRadius: 8,
    },
    buttonText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#fff',
    },
    input: {
      padding: 10,
      marginTop: 10,
      width: 300,
      backgroundColor: '#C0C0C0',
      fontSize: 15,
      borderRadius: 8,
      fontWeight: 'bold',
  
    },
    container_01: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 150,
      height: 150,
    },
  
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });


export default styles
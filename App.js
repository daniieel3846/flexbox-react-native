import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerA}><Text style={styles.text}>A</Text></View>
      <View style={styles.containerB}><Text style={styles.text}>B</Text></View>
      <View style={styles.container2}>
        <View style={styles.containersRow}><Text style={styles.text}>C</Text></View>
        <View style={styles.containersRow}><Text style={styles.text}>D</Text></View>
        <View style={styles.containersRow}><Text style={styles.text}>E</Text></View>
      </View>
      <View style={styles.containerF}><Text style={styles.text}>F</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.98,
    alignItems: 'center',
    marginLeft:7,
    
  },
  containerA:{
    width: '90%',
    height: 150,
    backgroundColor: 'coral',
    marginTop:20,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
  },
  containerB:{
    width: '90%',
    height: 390,
    marginTop:30,
    borderRadius:15,
    backgroundColor: 'coral',
    justifyContent:'center',
    alignItems:'center'
  },
  container2:{
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containersRow:{
    width: 85,
    height: 85,
    marginTop:30,
    borderRadius:15,
    backgroundColor: 'coral',
    justifyContent:'center',
    alignItems:'center'
  },
  containerF:{
    width: '90%',
    height: 150,
    backgroundColor: 'coral',
    marginTop:30,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    fontSize: 18
  },
});

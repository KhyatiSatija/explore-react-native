import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileCard } from '@/components/profile/profile';
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, this is my first app</Text>

      {/* <View style={styles.row}>
        <View  style={styles.box}>
            <Text style={styles.textStyles}>Column-1</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.textStyles}>Column-2</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.textStyles}>Column-3</Text>
        </View>
      </View> */}
      <ProfileCard/>
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // padding: 10,
  },
  box: {
    marginTop: 10,
    padding: 10,
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'solid',
    height: 100,
  },
  textStyles: {
    color: "blue",
    fontWeight: "bold",
  }

});

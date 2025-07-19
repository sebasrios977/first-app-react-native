import { StyleSheet, View } from "react-native"

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]}></View>
      <View style={[styles.box, styles.orangeBox]}></View>
      <View style={[styles.box, styles.blueBox]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
    },
    blueBox: {
        backgroundColor: '#28C4D9',
        width: null,
        height: 100,
    }
});


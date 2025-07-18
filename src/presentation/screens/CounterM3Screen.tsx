import { useState } from 'react';
import { Text, View } from 'react-native'
import { Button, FAB } from 'react-native-paper';
import { globalStyles } from '../theme/global.styles';
import Icon from 'react-native-vector-icons/Ionicons';

export const CounteM3Srcreen = () => {

    const [counter, setCounter] = useState(10);


  return (
    <View style={globalStyles.centerContainer}>
        <Text style={globalStyles.title}>{counter}</Text>
        
        {/* <PrimaryButton 
            label="Increment"
            onPress={ () => setCounter(counter + 1) } 
            onLongPress={ () => setCounter(0) } 
        /> */}

        {/* <Icon name="accessibility-outline" size={35} /> */}

        <FAB 
            onPress={ () => setCounter(counter + 1) } 
            onLongPress={ () => setCounter(0) } 
            style={ globalStyles.fab }
            icon="add-outline"
        />
    </View>
  )
}



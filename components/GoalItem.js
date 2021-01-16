import React from 'react' ; 
import {View , Text , StyleSheet ,TouchableNativeFeedback , Button } from 'react-native'
const GoalItem = props => {
    return (<TouchableNativeFeedback  onPress= {props.onDelete.bind(this , props.id )}>
        <View style={styles.ListItems} >
        <Text>{props.title}</Text>
        
      </View>
      </TouchableNativeFeedback>
      );
};

const styles = StyleSheet.create({ 
  
    ListItems : {
      padding : 10 ,
      margin :5,
      backgroundColor :'#ccc' ,
      borderColor : 'black',
      borderWidth : 1,
      
    },
  
  
  });
 
  
export default GoalItem ; 


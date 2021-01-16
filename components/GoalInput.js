import React , {useState} from 'react';
import { StyleSheet, Text, View ,TextInput , Button , Modal  } from 'react-native';

const GoalInput = props => {
    const [enteredGoal , setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
      };

      const AddGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal(' ');
        
      };

    return (
        <Modal visible = {props.visible} animationType ="fade">
        <View style={styles.view}> 
        <TextInput 
        placeholder="Add Goal Here" 
        style={styles.inputContainer}
        onChangeText={goalInputHandler}
        value= {enteredGoal}
        />
        <View flexDirection = 'row'  justifyContent = 'space-between' >
        <Button width='40%' title='Cancel' color="red" onPress={props.onCancel} />
        <Button width='40%' title="Add" onPress= {AddGoalHandler} />
        </View>
        </View>
       </Modal>
       )
}


const styles = StyleSheet.create({ 
  
    screen : {
      padding : 50 ,
    },
  
    inputContainer : {
      borderColor : 'black' ,
         borderWidth : 1 ,
          padding : 10 ,
           width:200,
           marginBottom :10 ,
    },
  
    view : { flex : 1,flexDirection : 'column' , justifyContent : 'center' , alignItems : 'center'  },
    
    ListItems : {
      padding : 10 ,
      margin :5,
      backgroundColor :'#ccc' ,
      borderColor : 'black',
      borderWidth : 1,
      
    },
  
  
  });

export default GoalInput ; 
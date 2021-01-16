import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View ,TextInput , Button , ScrollView ,FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
export default function App() {

  const [CourseGoals , setCourseGoals] = useState([]);
  const [isAddMode , setIsAddMode ] = useState(false);

  const AddGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals ,  
      {id : Math.random().toString() , value: goalTitle }
      ]);
      setIsAddMode(false);
  };
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals =>{
      return currentGoals.filter((goal) => goal.id !==goalId );
    });
  }
  
  const CanselGoal = () => {
    setIsAddMode(false);
  }
  return (
    <View style={styles.screen} >
    <Button title="Add New Goal" onPress={() => setIsAddMode(true) } />
     <GoalInput visible={isAddMode} onAddGoal={AddGoalHandler} onCancel={CanselGoal} />
      <FlatList
         keyExtractor={(item , index) => item.id}
         data={CourseGoals} 
         renderItem={itemData => <GoalItem id={itemData.item.id} onDelete= {removeGoalHandler} title ={itemData.item.value} />} 
           />  
      
      <StatusBar style="auto" />
    </View>
  );
      }     

const styles = StyleSheet.create({ 
  
  screen : {
    padding : 50 ,
  },

  inputContainer : {
    borderColor : 'black' ,
       borderWidth : 1 ,
        padding : 10 ,
         width:200
  },

  view : {flexDirection : 'row' , justifyContent : 'space-between' , alignItems : 'center'  },
  
  ListItems : {
    padding : 10 ,
    margin :5,
    backgroundColor :'#ccc' ,
    borderColor : 'black',
    borderWidth : 1,
    
  },


});

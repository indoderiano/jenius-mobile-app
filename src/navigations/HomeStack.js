import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import Cover from '../screens/Cover'
import MainTab from './MainTab'
import AddContact from '../screens/AddContact'
import EditContact from '../screens/EditContact'
// import StackTwo from '../screens/StackTwo'


const Stack=createStackNavigator()

const HomeStack=()=>{

    return (
        <Stack.Navigator>
            <Stack.Screen name='Cover' component={Cover} options={{headerShown:false}}/>
            <Stack.Screen name='MainTab' component={MainTab} options={{headerShown:false}}/>
            <Stack.Screen name='Add Contact' component={AddContact}/>
            <Stack.Screen name='Edit Contact' component={EditContact}/>
        </Stack.Navigator>
    )
}

export default HomeStack;
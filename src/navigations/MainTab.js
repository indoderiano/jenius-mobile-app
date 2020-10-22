import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import Home from '../screens/Home'
import HomeStack from './HomeStack'
import Cover from '../screens/Cover'
import Thank from '../screens/Thank'
import Home from '../screens/Home'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import {primaryColor,stylesCall} from '../supports/Styles'

const Tab=createBottomTabNavigator()

const MainTab=()=>{

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'HomeStack') {
                    iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                    return <MCIcon name={iconName} size={size} color={color}/>;
                }else if(route.name==='Thank'){
                    iconName = focused
                    ? 'user-circle'
                    : 'user-circle-o';
                    return <FAIcon name={iconName} size={size} color={color}/>;
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}
            tabBarOptions={{
                activeTintColor: primaryColor,
                inactiveTintColor: 'gray',
                style:{padding:5,height:60},
                labelStyle:[{marginBottom:5,fontSize:12},stylesCall.ubuntuMedium],
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Letter" component={Thank} />
        </Tab.Navigator>
    )
}

export default MainTab;
import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {stylesCall,primaryColor} from '../supports/Styles'
import {Button} from 'react-native-material-ui'


const Cover = ({navigation}) => {

    return (
        <View style={stylesCall.center}>
            
            <Text style={[stylesCall.ubuntu,{fontSize:36, color:'rgba(0,0,0,.8)', textAlign:'center',paddingHorizontal:40, marginBottom:30}]}>
                Hi, Thank you for considering me
            </Text>
        
        </View>
    )
}

export default Cover;
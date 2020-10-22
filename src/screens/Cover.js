import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {stylesCall,primaryColor} from '../supports/Styles'
import {Button} from 'react-native-material-ui'


const Cover = ({navigation}) => {

    return (
        <View style={stylesCall.center}>
            <Text style={[stylesCall.ubuntuMedium,{fontSize:36, color:'rgba(0,0,0,.8)', textAlign:'center',paddingHorizontal:20, marginBottom:60}]}>
                Recruitment Test
            </Text>
            <Text style={[stylesCall.ubuntu,{fontSize:18, color:'rgba(0,0,0,.8)', textAlign:'center',paddingHorizontal:20}]}>
                Candidate
            </Text>
            <Text style={[stylesCall.ubuntu,{fontSize:36, color:'rgba(0,0,0,.8)', textAlign:'center',paddingHorizontal:20, marginBottom:30}]}>
                Indo Halim
            </Text>
            <Text style={[stylesCall.ubuntuMedium,{fontSize:50,color:primaryColor,textAlign:'center',paddingHorizontal:20}]}>
                Contacts App
            </Text>
            <Text style={[stylesCall.ubuntu,{fontSize:18, color:'rgba(0,0,0,.8)', textAlign:'center',paddingHorizontal:20, marginTop:60}]}>
                Click Here To See The Result
            </Text>

            <TouchableOpacity style={{marginTop:10,paddingVertical:5}}>
                <Button 
                    primary 
                    raised 
                    text='Proceed' 
                    style={{
                        container:{height:50},
                        text:{fontWeight:'900',letterSpacing:1}
                    }}
                    onPress={()=>{navigation.navigate('MainTab')}}
                    // disabled={props.User.loading}
                    // disabled
                />
            </TouchableOpacity>
        
        </View>
    )
}

export default Cover;
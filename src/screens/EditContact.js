import React, { useState } from 'react'
import {View,Text,TouchableOpacity,StyleSheet,TextInput,ProgressBarAndroid} from 'react-native'
import {stylesCall,primaryColor} from '../supports/Styles'
import {Button} from 'react-native-material-ui'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {GetContacts} from '../redux/actions'
import { connect } from 'react-redux'
import Axios from 'axios'
// import {TextField} from 'react-native-material-textfield'
// import {MyTextField} from '../components/material-ui'


const EditContact = ({route,navigation,GetContacts}) => {
    
    const {person} = route.params

    const [firstName,setFirstName] = useState(person.firstName)
    const [lastName,setLastName] = useState(person.lastName)
    const [age,setAge] = useState(person.age.toString())
    const [photo,setPhoto] = useState(person.photo)

    const [loading,setloading] = useState(false)
    const [errormessage,seterrormessage] = useState('')


    const onSubmit=()=>{
        seterrormessage('')
        
        if(!photo || !firstName || !lastName || !age){
            seterrormessage('All Column Must Be Filled')
        }else{
            setloading(true)

            var contact={
                firstName,
                lastName,
                age,
                photo
            }
            
            Axios.put(`https://simple-contact-crud.herokuapp.com/contact/${person.id}`,contact)
            .then((res)=>{
                console.log(res.data.message)
                setloading(false)
                GetContacts()
                navigation.navigate('Home')
            }).catch((err)=>{
                console.log(err)
                setloading(false)
                seterrormessage('Upload Data Error')
            })
        }
    }

    return (
        <View style={stylesCall.center}>


            <View style={styles.inputbox}>
                {/* <Icon name='account-circle' size={35} style={styles.inputicon}/> */}
                <TextInput
                    style={[stylesCall.ubuntu,{ height: 60, width: '70%', paddingHorizontal: 10, fontSize:20, borderColor: 'gray', borderWidth: 1 }]}
                    onChangeText={(text) => {setFirstName(text)}}
                    value={firstName}
                    placeholder='First Name'
                />
            </View>

            <View style={styles.inputbox}>
                {/* <Icon name='account-circle' size={35} style={styles.inputicon}/> */}
                <TextInput
                    style={[stylesCall.ubuntu,{ height: 60, width: '70%', paddingHorizontal: 10, fontSize:20, borderColor: 'gray', borderWidth: 1 }]}
                    onChangeText={(text) => setLastName(text)}
                    value={lastName}
                    placeholder='Last Name'
                />
            </View>

            <View style={styles.inputbox}>
                {/* <Icon name='account-circle' size={35} style={styles.inputicon}/> */}
                <TextInput
                    style={[stylesCall.ubuntu,{ height: 60, width: '70%', paddingHorizontal: 10, fontSize:20, borderColor: 'gray', borderWidth: 1 }]}
                    onChangeText={(text) => setAge(text)}
                    value={age}
                    placeholder='Age'
                />
            </View>

            <View style={styles.inputbox}>
                {/* <Icon name='account-circle' size={35} style={styles.inputicon}/> */}
                <TextInput
                    style={[stylesCall.ubuntu,{ height: 60, width: '70%', paddingHorizontal: 10, fontSize:20, borderColor: 'gray', borderWidth: 1 }]}
                    onChangeText={(text) => setPhoto(text)}
                    value={photo}
                    placeholder='Photo Url'
                />
            </View>
            

            <TouchableOpacity style={{marginTop:30,paddingVertical:5,width:'100%',alignItems:'center'}}>
                {
                    loading?
                    <View>
                        <ProgressBarAndroid/>
                    </View>
                    :
                    <Button 
                        primary 
                        raised 
                        text='Save' 
                        style={{
                            container:{height:50,width:'70%'},
                            text:{fontWeight:'900',letterSpacing:1}
                        }}
                        onPress={onSubmit}
                        // disabled={props.User.loading}
                        // disabled
                    />
                }

            </TouchableOpacity>

            {
                errormessage?
                <View style={{marginTop:20}}>
                    <Text style={{color:'red'}}>{errormessage}</Text>    
                </View>
                : null
            }
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'flex-start',
      alignItems:'center',
      marginTop:50,
      paddingHorizontal:20,
      // fontFamily:'serif'
    },
    title: {
      fontSize:35,
      color:'rgba(0,0,0,.75)',
      marginRight:'auto',
      letterSpacing: 1,
      // fontFamily:'ubuntu'
      // marginLeft:20
    },
    inputbox:{
      flexDirection:'row',
      // paddingHorizontal:20,
      marginBottom:25
    },
    inputicon: {
      marginTop:'auto',
      marginBottom:10,
      paddingRight:15,
      color:'rgba(0,0,0,.75)',
    },
    endinputicon: {
      position:'absolute',
      bottom:18,
      right:0,
      fontSize:20,
      // color: 'rgba(0,0,0,.75)'
    },
    
  });

export default connect(null,{GetContacts}) (EditContact);
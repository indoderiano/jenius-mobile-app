import React, { useEffect, useState } from 'react'
import {View,Text,Image,TouchableOpacity,ProgressBarAndroid} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Button} from 'react-native-material-ui'
import { connect } from 'react-redux'
import {stylesCall,primaryColor} from '../supports/Styles'
import Axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'
import { GetContacts } from '../redux/actions'
import {COLOR} from 'react-native-material-ui'
import { ColorAndroid } from 'react-native/Libraries/StyleSheet/PlatformColorValueTypesAndroid'


const Home=({Contacts,navigation,GetContacts})=>{

    const [deleteid,setdeleteid] = useState('')

    const [isDeleting,setIsDeleting] = useState(false)
    const [errordelete,seterrordelete] = useState('')
    
    useEffect(()=>{

        GetContacts()

    },[])


    const deleteContact=()=>{
        setIsDeleting(true)
        Axios.delete(`https://simple-contact-crud.herokuapp.com/contact/${deleteid}`)
        .then((res)=>{
            // setIsDeleting(false)
            GetContacts()
        }).catch((err)=>{
            console.log(err)
            seterrordelete('Fail To Delete Data')
        }).finally(()=>{
            setIsDeleting(false)
        })
    }



    const renderContacts=()=>{
        if(!Contacts.contacts.length){
            return (
                <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:100}}>
                    <Text style={[stylesCall.ubuntuMedium,{fontSize:20}]}>Loading...</Text>
                </View>
            )
        }


        return Contacts.contacts.map((person,index)=>{
            return (
                <TouchableOpacity 
                    key={index}
                    activeOpacity={.5}
                    style={{width:'100%'}} 
                    // onPress={()=>{navigation.navigate('Detail',{data:person})}}
                >
                    <View style={{
                        width: '100%',
                        padding:5,
                        paddingBottom:5,
                        // height: 200,
                        // borderColor:'red',
                        // borderWidth:1,
                    }}>
                        <View style={{
                            width:'100%',
                            display:'flex',
                            // flexDirection: 'row',
                            borderRadius: 8,
                            overflow: 'hidden',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.44,
                            shadowRadius: 10.32,

                            elevation: 6,    
                            paddingTop: 20,
                            paddingHorizontal: 15
                        }}>
                                <Image
                                    style={{
                                        flex: 1,
                                        aspectRatio: 4/4,
                                        resizeMode: 'contain'
                                    }}
                                    source={{
                                    uri: person.photo=='N/A'?'https://ritelnews.com/amrimall/oc-content/themes/vrisko/images/no_user.png':person.photo
                                    }}
                                    // resizeMethod='resize'
                                />
                                {/* <View style={styles.overlay}/> */}
                                
                                {/* <TextUbuntu style={{
                                    position: 'absolute',
                                    top: 5,
                                    left: 5,
                                    color: 'white',
                                    fontSize: 15,
                                    letterSpacing: 4
                                }}>
                                    {store.storename}
                                </TextUbuntu> */}

                                
                                <View style={{paddingHorizontal:20,paddingTop:20}}>
                                    <Text
                                        style={[stylesCall.ubuntu,{fontSize:30}]}
                                    >
                                        {person.firstName} {person.lastName}
                                    </Text>
                                </View>
                                <View style={{paddingHorizontal:20,paddingBottom:20}}>
                                    <Text
                                        style={[stylesCall.ubuntu,{fontSize:18,color:'rgba(0,0,0,.6)'}]}
                                    >
                                        Age {person.age} Years Old
                                    </Text>
                                </View>
                                {
                                    deleteid==person.id?
                                    <View
                                        style={{
                                            display:'flex',
                                            flexDirection:'row',
                                            justifyContent:'flex-end'
                                        }}
                                    >
                                        <TouchableOpacity>
                                            {
                                                isDeleting?
                                                <View style={{marginRight:30}}>
                                                    <ProgressBarAndroid/>
                                                </View>
                                                :
                                                <Button 
                                                    // primary 
                                                    raised 
                                                    text='Confirm' 
                                                    style={{
                                                        container:{height:50,marginLeft:10,marginBottom:15},
                                                        text:{fontWeight:'900',letterSpacing:1,color:'red'}
                                                    }}
                                                    onPress={deleteContact}
                                                    // disabled={props.User.loading}
                                                    // disabled
                                                />
                                            }
                                        </TouchableOpacity>
                                        <Button 
                                            // primary 
                                            color='rgb(255,99,71)'
                                            raised 
                                            text='Cancel' 
                                            style={{
                                                container:{height:50,marginLeft:10, marginBottom:15},
                                                text:{fontWeight:'900',letterSpacing:1},
                                            }}
                                            onPress={()=>{
                                                setdeleteid('')
                                                seterrordelete('')
                                            }}
                                            // disabled={props.User.loading}
                                            // disabled
                                        />
                                        
                                    </View>
                                    :
                                    <View
                                        style={{
                                            display:'flex',
                                            flexDirection:'row',
                                            justifyContent:'flex-end'
                                        }}
                                    >
                                        <Button 
                                            // primary 
                                            raised 
                                            text='Edit' 
                                            style={{
                                                container:{height:50,marginLeft:10,marginBottom:15},
                                                text:{fontWeight:'900',letterSpacing:1}
                                            }}
                                            onPress={()=>{navigation.navigate('Edit Contact',{person})}}
                                            // disabled={props.User.loading}
                                            // disabled
                                        />
                                        <Button 
                                            // primary 
                                            color='rgb(255,99,71)'
                                            raised 
                                            text='Delete' 
                                            style={{
                                                container:{height:50,marginLeft:10, marginBottom:15},
                                                text:{fontWeight:'900',letterSpacing:1,color:'red'},
                                            }}
                                            onPress={()=>{
                                                setdeleteid(person.id)
                                                seterrordelete('')
                                            }}
                                            // disabled={props.User.loading}
                                            // disabled
                                        />
                                    </View>
                                }
                                {
                                    errordelete&&deleteid==person.id?
                                    <View style={{marginVertical:20}}>
                                        <Text style={{color:'red',textAlign:'center'}}>{errordelete}</Text>    
                                    </View>
                                    : null
                                }
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
    }


    return (
        <View>
            <ScrollView>
                <View style={{flex:1, paddingHorizontal:15}}>
                    <Text style={[stylesCall.ubuntuBold,{fontSize:45,paddingVertical:30}]}>
                        Contacts
                    </Text>
                </View>
                <View style={{flexDirection:'row',flexWrap: 'wrap', paddingHorizontal:10}}>
                    

                    {renderContacts()}
                    

                    
                </View>

                <TouchableOpacity 
                    activeOpacity={.5}
                    style={{marginVertical:20, marginHorizontal:20}} 
                    // onPress={()=>{navigation.navigate('Detail',{data:person})}}
                    onPress={()=>{navigation.navigate('Add Contact')}}
                >
                    <Button 
                        primary 
                        raised 
                        text='Add Contacts' 
                        style={{
                            container:{height:50},
                            text:{fontWeight:'900',letterSpacing:1}
                        }}
                        onPress={()=>{navigation.navigate('Add Contact')}}
                        // disabled={props.User.loading}
                        // disabled
                        />
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

const MapstatetoProps=(state)=>{
    return {
        Contacts: state.Contacts
    }
}

export default connect(MapstatetoProps,{GetContacts}) (Home);
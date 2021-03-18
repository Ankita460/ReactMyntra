import React, {Component} from "react"
import {View, Text, StyleSheet, Button,TouchableOpacity} from "react-native"
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import ImageModal from '../../Component/ImageModal';

export default class Profile extends Component{
    render(){
        return(
            <View>
            <Text style={styles.profile}>Profile</Text>
          </View>
        )
    }
}

const styles=StyleSheet.create({
    
    profile:{
        color: 'gray',

    },
    buttonf:{
        width: 40,
        height: 30,
        backgroundColor:"green"
    }
})